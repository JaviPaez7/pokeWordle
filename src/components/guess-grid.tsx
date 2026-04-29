"use client";

import type { ValidatePokemonGuessOutput } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Shield, ShieldPlus, Ruler, Scale, Mountain, Shell, ArrowUp, ArrowDown, Image as ImageIcon, Loader } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { formatValue } from "@/lib/translations";

interface GuessGridProps {
  guesses: string[];
  feedback: (ValidatePokemonGuessOutput | null)[];
}

const feedbackColorMap = {
  green: "bg-green-500",
  yellow: "bg-yellow-400",
  red: "bg-red-500",
};

const headers = [
    { label: "", icon: ImageIcon },
    { label: "Pokémon", icon: null },
    { label: "Tipo 1", icon: Shield },
    { label: "Tipo 2", icon: ShieldPlus },
    { label: "Hábitat", icon: Mountain },
    { label: "Etapa", icon: Shell },
    { label: "Altura", icon: Ruler },
    { label: "Peso", icon: Scale },
];

const feedbackKeys: (keyof Omit<ValidatePokemonGuessOutput, 'guessedPokemon' | 'heightDirection' | 'weightDirection'>)[] = [
    'typeFeedback',
    'secondaryTypeFeedback',
    'habitatFeedback',
    'evolutionStageFeedback',
    'heightFeedback',
    'weightFeedback'
];

const statKeys: (keyof Omit<ValidatePokemonGuessOutput['guessedPokemon'], 'name' | 'photoUrl'>)[] = ['type', 'secondaryType', 'habitat', 'evolutionStage', 'height', 'weight'];

export function GuessGrid({ guesses, feedback }: GuessGridProps) {
  const showEmptyState = guesses.length === 0;

  return (
    <div className="w-full">
      <div className="p-1 overflow-x-auto">
        <div id="guess-grid-capture" className="min-w-[700px] bg-transparent rounded-md">
          <div className="grid grid-cols-[auto_1.5fr_repeat(6,_1fr)] gap-2 px-2 pb-3 border-b border-white/10">
            {headers.map((header, i) => (
              <div key={i} className={`flex items-center justify-center gap-2 font-headline text-[11px] uppercase tracking-wider font-bold text-white/50`}>
                {header.icon && <header.icon className="h-3.5 w-3.5" />}
                <span>{header.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-3">
            {guesses.map((guess, index) => {
              const currentFeedback = feedback[index];
              const guessedPokemonStats = currentFeedback?.guessedPokemon;
              const isLoading = !currentFeedback;

              return (
                <div key={index} className="grid grid-cols-[auto_1.5fr_repeat(6,_1fr)] gap-2 animate-in fade-in-50 px-2">
                  <div className="flex items-center justify-center h-14 rounded-xl bg-white/[0.05] border border-white/10 shadow-inner p-1">
                    {guessedPokemonStats?.photoUrl ? (
                      <Image src={guessedPokemonStats.photoUrl} alt={guess} width={48} height={48} className="shrink-0 drop-shadow-md" />
                    ) : (
                       <ImageIcon className="h-6 w-6 text-white/20" />
                    )}
                  </div>
                  <div className="flex items-center justify-center h-14 rounded-xl bg-white/[0.05] border border-white/10 shadow-inner font-semibold text-white text-center p-1 text-sm tracking-wide">
                      {guess}
                  </div>
                  {isLoading ? (
                    Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-14 w-full rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shadow-inner">
                            <Loader className="h-5 w-5 animate-spin text-white/30" />
                        </div>
                    ))
                  ) : (
                    statKeys.map((key, i) => {
                      const feedbackKey = feedbackKeys[i];
                      const status = currentFeedback ? currentFeedback[feedbackKey] : "empty";
                      
                      let colorClass = "bg-white/[0.02] border border-white/5 text-white/50"; // default/empty
                      if (status === "green") colorClass = "bg-gradient-to-br from-emerald-400 to-emerald-600 border-none text-white shadow-[0_0_15px_rgba(52,211,153,0.3)]";
                      else if (status === "yellow") colorClass = "bg-gradient-to-br from-amber-400 to-amber-600 border-none text-white shadow-[0_0_15px_rgba(251,191,36,0.3)]";
                      else if (status === "red") colorClass = "bg-gradient-to-br from-rose-500 to-rose-700 border-none text-white/90 shadow-[0_0_15px_rgba(225,29,72,0.3)]";

                      const delay = i * 150;

                      return (
                        <div
                          key={i}
                          className={cn(
                            "h-14 w-full rounded-xl flex flex-col items-center justify-center text-center p-1 text-xs sm:text-sm font-semibold animate-flip-in shadow-inner",
                            colorClass
                          )}
                          style={{ animationDelay: `${delay}ms` }}
                        >
                          {guessedPokemonStats && (
                            <div className="flex items-center gap-1">
                              <span className="capitalize">{formatValue(key, guessedPokemonStats[key])}</span>
                              {feedbackKey === 'heightFeedback' && currentFeedback.heightDirection === 'up' && <ArrowUp className="h-4 w-4 drop-shadow-sm" />}
                              {feedbackKey === 'heightFeedback' && currentFeedback.heightDirection === 'down' && <ArrowDown className="h-4 w-4 drop-shadow-sm" />}
                              {feedbackKey === 'weightFeedback' && currentFeedback.weightDirection === 'up' && <ArrowUp className="h-4 w-4 drop-shadow-sm" />}
                              {feedbackKey === 'weightFeedback' && currentFeedback.weightDirection === 'down' && <ArrowDown className="h-4 w-4 drop-shadow-sm" />}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )
            })}

            {showEmptyState && (
              <div className="grid grid-cols-[auto_1.5fr_repeat(6,_1fr)] gap-2 px-2 opacity-50">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="h-14 w-full rounded-xl border-2 border-dashed border-white/10 bg-transparent" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
