import { Game } from "./Game";
class GameManager {
    private games: Game[] = [];
    private nextGameId: number = 1; // Contador para IDs únicos

    // Adiciona um novo jogo à lista    
    addGame(title: string, genre: string, platform: string, releaseYear: number): Game {
        const newGame: Game = {
            id: this.nextGameId++,
            title: title,
            genre: genre,
            platform: platform,
            releaseYear: releaseYear,
            completed: false, // Inicialmente não jogado/concluído
        };
        this.games.push(newGame);
        return newGame;
    }  
    
    getGames(): Game[] {
        return this.games;
    }   

    toggleGameCompletion(gameId: number): void {
        const game = this.games.find(g => g.id === gameId);         
        if (game) {
            game.completed = !game.completed;
        }
    }

    // Remove um jogo pelo id. Retorna true se removido, false caso não encontre.
    removeGame(gameId: number): boolean {
        const idx = this.games.findIndex(g => g.id === gameId);
        if (idx === -1) return false;
        this.games.splice(idx, 1);
        return true;
    }
}

export const gameManager = new GameManager();
