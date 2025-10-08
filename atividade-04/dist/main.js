import { gameManager } from './GameManager.js';
// Elementos do DOM (IDs esperados no HTML)
const titleInput = document.getElementById('game-title-input');
const genreInput = document.getElementById('game-genre-input');
const platformInput = document.getElementById('game-platform-input');
const releaseInput = document.getElementById('game-release-year-input');
const addGameBtn = document.getElementById('add-game-btn');
const gameList = document.getElementById('game-list');
// Renderiza a lista de jogos
function renderGames() {
    if (!gameList)
        return;
    gameList.innerHTML = '';
    const games = gameManager.getGames();
    games.forEach(game => {
        const item = document.createElement('li');
        item.className = 'game-item';
        // estrutura com informações e botão de remover
        item.innerHTML = `
            <div class="game-left">
                <div class="game-title">${game.title}</div>
                <div class="meta">${game.genre} • ${game.platform} • ${game.releaseYear}</div>
            </div>
            <button class="delete-btn" title="Remover jogo">Remover</button>
        `;
        if (game.completed) {
            item.classList.add('completed');
        }
        // Clicar no item (exceto no botão remover) alterna o estado de conclusão
        item.addEventListener('click', () => {
            gameManager.toggleGameCompletion(game.id);
            renderGames();
        });
        // Botão remover: impede propagação para não alternar completion
        const delBtn = item.querySelector('.delete-btn');
        delBtn === null || delBtn === void 0 ? void 0 : delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            gameManager.removeGame(game.id);
            renderGames();
        });
        gameList.appendChild(item);
    });
}
// Adiciona novo jogo
function addNewGame() {
    if (!titleInput || !genreInput || !platformInput || !releaseInput)
        return;
    const title = titleInput.value.trim();
    const genre = genreInput.value.trim();
    const platform = platformInput.value.trim();
    const releaseYear = parseInt(releaseInput.value, 10) || new Date().getFullYear();
    if (!title)
        return;
    gameManager.addGame(title, genre, platform, releaseYear);
    // Limpa inputs e re-renderiza
    titleInput.value = '';
    genreInput.value = '';
    platformInput.value = '';
    releaseInput.value = '';
    renderGames();
}
// Eventos
addGameBtn === null || addGameBtn === void 0 ? void 0 : addGameBtn.addEventListener('click', addNewGame);
[titleInput, releaseInput].forEach(el => el === null || el === void 0 ? void 0 : el.addEventListener('keypress', (e) => {
    if (e.key === 'Enter')
        addNewGame();
}));
renderGames();
