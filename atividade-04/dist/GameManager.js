class GameManager {
    constructor() {
        this.games = [];
        this.nextGameId = 1; // Contador para IDs únicos
    }
    // Adiciona um novo jogo à lista    
    addGame(title, genre, platform, releaseYear) {
        const newGame = {
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
    getGames() {
        return this.games;
    }
    toggleGameCompletion(gameId) {
        const game = this.games.find(g => g.id === gameId);
        if (game) {
            game.completed = !game.completed;
        }
    }
    // Remove um jogo pelo id. Retorna true se removido, false caso não encontre.
    removeGame(gameId) {
        const idx = this.games.findIndex(g => g.id === gameId);
        if (idx === -1)
            return false;
        this.games.splice(idx, 1);
        return true;
    }
}
export const gameManager = new GameManager();
