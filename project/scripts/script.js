const games = [
    {
        id: 1,
        title: "Blades of Fire",
        description: "Dark-fantasy action-adventure where a warrior fights a cursed queen. Platforms: PS5, Windows, Xbox Series X/S.",
        img: "images/blades_of_fire.webp"
    },
    {
        id: 2,
        title: "Sword of the Sea",
        description: "Adventure game where players explore desolate lands using a hoversword to restore life. Platforms: PS5, Windows.",
        img: "images/sword_of_the_sea.webp"
    },
    {
        id: 3,
        title: "Marvel Cosmic Invasion",
        description: "Side-scrolling beat ’em up with Marvel superheroes fighting a cosmic invasion. Platforms: PC, PS5, Xbox Series X/S, Switch.",
        img: "images/marvel_cosmic_invasion.webp"
    },
    {
        id: 4,
        title: "Senua's Saga: Hellblade II",
        description: "Dark action-adventure with Norse mythology themes, cinematic visuals, and deep storytelling. Platforms: Windows, Xbox Series X/S, PS5.",
        img: "images/senuas_saga.webp"
    },
    {
        id: 5,
        title: "The Elder Scrolls IV: Oblivion Remastered",
        description: "Remastered classic RPG with improved graphics, updated menus, and all DLCs included. Platforms: PC, PS5, Xbox Series X/S.",
        img: "images/oblivion_remastered.webp"
    }
];

// Functions for Home Page
function loadGames() {
    const container = document.getElementById('gameList');
    if (!container) return;

    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-item');
        gameDiv.innerHTML = `
            <h3>${game.title}</h3>
            <img 
                data-src="${game.img}" 
                alt="${game.title}" 
                class="lazy"
                width="300" 
                height="200"
            >
            <p>${game.description}</p>
            <button onclick="viewGame(${game.id})">See Details</button>`;
        container.appendChild(gameDiv);
    });

    lazyLoad();
}

// Lazy load images
function lazyLoad() {
    const lazyImages = document.querySelectorAll('.lazy');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
}

// Redirect to game page and store selected game
function viewGame(id) {
    const selected = games.find(g => g.id === id);
    localStorage.setItem('selectedGame', JSON.stringify(selected));
    window.location.href = 'game.html';
}

// Functions for Game Page
function loadGameDetails() {
    const gameDetailsContainer = document.getElementById('gameDetails');
    if (!gameDetailsContainer) return;

    const game = JSON.parse(localStorage.getItem('selectedGame'));

    if (game) {
        gameDetailsContainer.innerHTML = `
            <div class="game-item">
                <h2>${game.title}</h2>
                <img src="${game.img}" alt="${game.title}" width="500" height="300"/>
                <p>${game.description}</p>
                <p><strong>Release Year:</strong> 2025</p>
                <p><strong>Rating:</strong> ★★★★☆</p>
                <p><strong>Features:</strong> Open world, multiplayer, high graphics</p>
                <button id="backButton">Back to Home</button>
            </div>
        `;

        document.getElementById('backButton').addEventListener('click', () => {
            window.location.href = 'index.html';
        });

    } else {
        gameDetailsContainer.innerHTML = `
            <p>No game selected. <a href="index.html">Go back to Home</a></p>
        `;
    }
}

// Functions for Contact Form
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                localStorage.setItem('contactMessage', JSON.stringify({ name, email, message }));
                document.getElementById('confirmation').textContent = "Message sent successfully!";
                contactForm.reset();
            }
        });
    }
}

// Code for the footer section
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadGames();          
    loadGameDetails();    
    handleContactForm();  
});