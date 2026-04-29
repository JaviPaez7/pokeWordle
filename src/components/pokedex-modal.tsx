"use client";

import { useState } from "react";
import { usePokedex } from "@/hooks/use-pokedex";
import { POKEMON_LIST_ALL } from "@/lib/pokemon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function PokedexModal() {
  const { capturedIds } = usePokedex();
  const [filter, setFilter] = useState<"all" | "captured" | "missing">("all");

  const filtered = POKEMON_LIST_ALL.filter(p => {
    if (filter === "captured") return capturedIds.includes(p.id);
    if (filter === "missing") return !capturedIds.includes(p.id);
    return true;
  });

  const percentage = Math.round((capturedIds.length / POKEMON_LIST_ALL.length) * 100);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Ver Pokédex"
          className="text-white hover:bg-white/10"
        >
          <BookOpen className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-900/95 backdrop-blur-2xl border-white/10 text-white max-w-2xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-white flex items-center gap-2">
            📖 Mi Pokédex
          </DialogTitle>
        </DialogHeader>

        {/* Stats Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-white/60">
            <span>{capturedIds.length} capturados de {POKEMON_LIST_ALL.length}</span>
            <span>{percentage}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          {(["all", "captured", "missing"] as const).map(f => (
            <Button
              key={f}
              variant="ghost"
              onClick={() => setFilter(f)}
              className={cn(
                "flex-1 text-xs rounded-full transition-all",
                filter === f
                  ? "bg-white/20 text-white font-bold"
                  : "text-white/50 hover:text-white hover:bg-white/10"
              )}
            >
              {f === "all" ? "Todos" : f === "captured" ? "✅ Capturados" : "⬛ Sin capturar"}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="overflow-y-auto flex-1 pr-1">
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
            {filtered.map(p => {
              const captured = capturedIds.includes(p.id);
              return (
                <div
                  key={p.id}
                  title={captured ? p.name : "???"}
                  className={cn(
                    "aspect-square rounded-xl flex items-center justify-center transition-all duration-300",
                    captured
                      ? "bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:scale-110"
                      : "bg-white/[0.02] border border-white/5 opacity-40"
                  )}
                >
                  <Image
                    src={p.spriteUrl}
                    alt={captured ? p.name : "???"}
                    width={40}
                    height={40}
                    className={cn("w-full h-full object-contain p-1", !captured && "brightness-0")}
                  />
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-white/40 py-12 text-sm">
              {filter === "captured" ? "Aún no has capturado ningún Pokémon. ¡Sigue jugando!" : "¡Los has capturado todos!"}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
