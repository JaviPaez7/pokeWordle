import { useStats } from "@/hooks/use-stats";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BarChart2, BookOpen } from "lucide-react";
import Image from "next/image";
import { POKEMON_DATA } from "@/lib/pokemon-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function StatsModal() {
  const { stats } = useStats();

  const winRate = stats.gamesPlayed > 0 
    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) 
    : 0;

  const caughtPokemonData = POKEMON_DATA.filter(p => 
    stats.caughtPokemon.includes(p.name)
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Ver Estadísticas">
          <BarChart2 className="h-6 w-6 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Tus Estadísticas</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            <TabsTrigger value="pokedex">Pokédex ({stats.caughtPokemon.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="stats" className="space-y-4 pt-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">{stats.gamesPlayed}</span>
                <span className="text-xs text-muted-foreground">Jugadas</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">{winRate}%</span>
                <span className="text-xs text-muted-foreground">Victorias</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">{stats.currentStreak}</span>
                <span className="text-xs text-muted-foreground">Racha Actual</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">{stats.maxStreak}</span>
                <span className="text-xs text-muted-foreground">Mejor Racha</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold mb-2">Distribución de Intentos</h3>
              <div className="space-y-2">
                {Object.entries(stats.guessDistribution).map(([guess, count]) => {
                  const maxCount = Math.max(...Object.values(stats.guessDistribution), 1);
                  const percentage = (count / maxCount) * 100;
                  return (
                    <div key={guess} className="flex items-center text-sm">
                      <div className="w-4 font-bold">{guess}</div>
                      <div className="flex-1 ml-2">
                        <div 
                          className="bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold rounded-sm min-w-[20px] text-right"
                          style={{ width: `${Math.max(percentage, 5)}%` }}
                        >
                          {count}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pokedex" className="pt-4">
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-[300px] overflow-y-auto p-2">
              {caughtPokemonData.length > 0 ? (
                caughtPokemonData.map(pokemon => (
                  <div key={pokemon.id} className="flex flex-col items-center p-2 border rounded-md bg-secondary/30 hover:bg-secondary/60 transition-colors">
                    <Image 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                      alt={pokemon.name} 
                      width={48} 
                      height={48} 
                    />
                    <span className="text-[10px] font-semibold truncate w-full text-center capitalize">{pokemon.name}</span>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center text-muted-foreground py-8">
                  <BookOpen className="h-12 w-12 mb-2 opacity-20" />
                  <p>Aún no has registrado ningún Pokémon.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
