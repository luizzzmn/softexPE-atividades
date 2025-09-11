// --- DADOS MOCKADOS (SIMULANDO UM BANCO DE DADOS) ---
const gamesData = [
    {
        id: 1,
        name: "Counter-Strike 2",
        price: "Gratuito",
        players: 1_250_489,
        peak: 1_818_773,
        image: "images/cs2.jpg",
        description: "Por mais de duas décadas, Counter-Strike ofereceu uma experiência competitiva de elite, moldada por milhões de jogadores de todo o mundo. E agora o próximo capítulo da história do CS está prestes a começar. Este é o Counter-Strike 2."
    },
    {
        id: 2,
        name: "Baldur's Gate 3",
        price: "R$ 199,99",
        players: 380_123,
        peak: 875_343,
        image: "images/baldursgate.jpg",
        description: "Junte seu grupo e retorne aos Reinos Esquecidos em um conto de companheirismo e traição, sacrifício e sobrevivência, e a atração pelo poder absoluto. Habilidades misteriosas estão despertando dentro de você, extraídas de um parasita Mind Flayer plantado em seu cérebro."
    },
    {
        id: 3,
        name: "Elden Ring",
        price: "R$ 249,90",
        players: 150_876,
        peak: 953_426,
        image: "images/eldenring.jpg",
        description: "Levante-se, Maculado, e seja guiado pela graça para brandir o poder do Anel Elden e se tornar um Lorde Elden nas Terras Intermédias. Um vasto mundo onde campos abertos com uma variedade de situações e enormes masmorras com designs complexos e tridimensionais são perfeitamente conectados."
    },
    {
        id: 4,
        name: "Stardew Valley",
        price: "R$ 24,99",
        players: 85_432,
        peak: 120_541,
        image: "images/stardewvalley.jpg",
        description: "Você herdou a antiga fazenda do seu avô em Stardew Valley. Armado com ferramentas de segunda mão e algumas moedas, você parte para começar sua nova vida. Você consegue aprender a viver da terra e transformar esses campos cobertos de mato em um lar próspero?"
    },
     {
        id: 5,
        name: "Phasmophobia",
        price: "R$ 27,89",
        players: 60_211,
        peak: 112_854,
        image: "images/phasmophobia.jpg",
        description: "Phasmophobia é um horror psicológico cooperativo online para 4 jogadores, onde você e sua equipe de investigadores paranormais entrarão em locais assombrados cheios de atividade paranormal e reunirão o máximo de evidências que puderem."
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active');
        }
         
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageId = link.getAttribute('href').substring(1); 
            showPage(pageId);
            history.pushState(null, '', `#${pageId}`);
        });
    });

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
   
    const initialPage = window.location.hash.substring(1) || 'home';
    showPage(initialPage);

    populateGamesTable();

    setupContactForm();

    setupModal();

    feather.replace();
});



function populateGamesTable() {
    const tableBody = document.getElementById('games-table-body');
    if (!tableBody) return; 
    tableBody.innerHTML = ''; 

    gamesData.forEach((game, index) => {
        const row = document.createElement('tr');
        row.className = 'border-b steam-border hover:bg-gray-700 cursor-pointer transition duration-200';
        row.setAttribute('data-game-id', game.id);

        row.innerHTML = `
            <td class="p-4 font-bold">${index + 1}</td>
            <td class="p-4 flex items-center">
                <img src="${game.image.replace('600x400', '40x25')}" alt="${game.name}" class="w-16 h-10 object-cover rounded-md mr-4" onerror="this.onerror=null;this.src='https://placehold.co/40x25/1b2838/c7d5e0?text=Img';">
                <span class="font-semibold">${game.name}</span>
            </td>
            <td class="p-4 text-right">${game.price}</td>
            <td class="p-4 text-right">${game.players.toLocaleString('pt-BR')}</td>
            <td class="p-4 text-right text-green-400">${game.peak.toLocaleString('pt-BR')}</td>
        `;
        tableBody.appendChild(row);
    });
}


function setupModal() {
    const modal = document.getElementById('game-modal');
    const modalBackdrop = document.getElementById('game-modal-backdrop');
    const modalContent = document.getElementById('game-modal-content');
    const closeModalButton = document.getElementById('close-modal-button');
    const gamesTableBody = document.getElementById('games-table-body');
    
    if (!modal || !gamesTableBody) return; 

    function openModal(game) {
        modalContent.innerHTML = `
             <button id="close-modal-button-inner" class="absolute top-4 right-4 text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <img src="${game.image}" alt="${game.name}" class="w-full h-64 object-cover rounded-t-lg mb-6" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1b2838/c7d5e0?text=Imagem+Nao+Encontrada';">
            <h2 class="text-3xl font-bold mb-4 steam-text-accent">${game.name}</h2>
            <p class="mb-6">${game.description}</p>
            <div class="grid grid-cols-2 gap-4 text-lg">
                <div class="steam-bg-dark p-4 rounded-md"><strong>Preço:</strong> ${game.price}</div>
                <div class="steam-bg-dark p-4 rounded-md"><strong>Jogadores Atuais:</strong> ${game.players.toLocaleString('pt-BR')}</div>
                <div class="steam-bg-dark p-4 rounded-md"><strong>Pico de Hoje:</strong> <span class="text-green-400">${game.peak.toLocaleString('pt-BR')}</span></div>
            </div>
        `;
         
        modalContent.querySelector('#close-modal-button-inner').addEventListener('click', closeModal);

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    
    
    gamesTableBody.addEventListener('click', (event) => {
        const row = event.target.closest('tr');
        if (row) {
            const gameId = parseInt(row.getAttribute('data-game-id'));
            const game = gamesData.find(g => g.id === gameId);
            if (game) {
                openModal(game);
            }
        }
    });

    closeModalButton.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
}


function setupContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success-message');

    if (!form) return; 

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        
        successMessage.classList.remove('hidden');
        form.reset(); // Limpa o formulário

        
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 4000);
    });
}
