"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { ValidatePokemonGuessOutput } from "@/lib/types";
import html2canvas from "html2canvas";

interface ResultsModalProps {
  status: "playing" | "won";
  guesses: string[];
  feedback: ValidatePokemonGuessOutput[];
  correctPokemon: string;
  isOpen: boolean;
  onClose: () => void;
}

const emojiMap = {
  green: "🟩",
  yellow: "🟨",
  red: "🟥",
};

export function ResultsModal({ status, guesses, feedback, correctPokemon, isOpen, onClose }: ResultsModalProps) {
  const { toast } = useToast();

  if (status === 'playing' || !isOpen) {
    return null;
  }
  
  const isWin = status === 'won';

  const handleShare = () => {
    const feedbackGrid = feedback
      .map((fb) => {
        if (!fb) return '⬜️'.repeat(6);
        // Destructure to omit properties we don't want in the grid
        const { guessedPokemon, heightDirection, weightDirection, ...feedbackValues } = fb;
        return (Object.keys(feedbackValues) as (keyof typeof feedbackValues)[])
          .map((key) => emojiMap[feedbackValues[key]] || '🟥')
          .join("");
      })
      .join("\n");

    const shareText = isWin 
      ? `¡Adiviné el Pokémon en ${guesses.length} intentos en #Pokewordle! 🏆\n\n${feedbackGrid}\n\n¿Puedes superar mi marca? ¡Juega aquí! https://pokewordle-daily.web.app`
      : `No pude adivinar el Pokémon en #Pokewordle. 😔\n\n${feedbackGrid}\n\n¿Podrás adivinarlo? ¡Juega aquí! https://pokewordle-daily.web.app`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      toast({
        title: "¡Resultado copiado!",
        description: "¡Ahora compártelo con tus amigos!",
      });
    });
  };

  const handleChallenge = () => {
      const encodedPokemon = btoa(correctPokemon);
      const url = `${window.location.origin}/?vs=${encodedPokemon}`;
      navigator.clipboard.writeText(url).then(() => {
          toast({
              title: "¡Enlace copiado!",
              description: "Envía este enlace a un amigo para retarle a adivinar este Pokémon."
          });
      });
  };

  const handleExportImage = async () => {
    const gridElement = document.getElementById('guess-grid-capture');
    if (!gridElement) {
        toast({ title: "Error", description: "No se pudo capturar el tablero.", variant: "destructive" });
        return;
    }
    
    try {
        const canvas = await html2canvas(gridElement, {
            backgroundColor: '#0f172a', // a dark background, matching dark mode
        });
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = image;
        link.download = `pokewordle-resultado-${new Date().toISOString().split('T')[0]}.png`;
        link.click();
        toast({ title: "¡Imagen exportada!", description: "Se ha descargado la imagen de tu tablero." });
    } catch (error) {
        console.error("Error exporting image", error);
        toast({ title: "Error", description: "Hubo un problema al generar la imagen.", variant: "destructive" });
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const title = "¡Felicidades, Maestro Pokémon!";
  const description = `Lo has logrado en ${guesses.length} intentos. El Pokémon era: ${correctPokemon}.`;


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="flex flex-col gap-2 sm:flex-row mt-4">
          <Button onClick={handleChallenge} variant="secondary" className="w-full">Retar a un amigo</Button>
          <Button onClick={handleExportImage} variant="outline" className="w-full">Descargar Imagen</Button>
          <Button onClick={handleShare} className="w-full bg-accent hover:bg-accent/90">Compartir Texto</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
