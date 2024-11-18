document.getElementById('themeToggle').addEventListener('click', function(e) {
    e.preventDefault(); // Previene il click
    
    // Manteniamo il log per debug
    console.log('Modalità corrente: notturna (fissa)');
});

// Impostiamo forzatamente il tema scuro (modalità notturna) all'avvio
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    
    // Impostiamo l'icona corretta
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = 'bi bi-moon-fill';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    
    // Set initial language
    const languageSelector = document.getElementById('languageSelector');
    translatePage(languageSelector.value);

    // Handle language change
    languageSelector.addEventListener('change', (e) => {
        console.log('Language changed to:', e.target.value);
        translatePage(e.target.value);
    });

    // Handle theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Carousel functionality
    const carousel = document.querySelector('.skills-carousel');
    const cards = carousel.querySelectorAll('.skill-card');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    
    // Clona tutte le card necessarie per riempire il carosello
    const totalCards = cards.length;
    const visibleCards = 5;
    const minimumCards = totalCards * 3; // Triplichiamo le card per garantire scorrimento continuo
    
    // Clona le card originali più volte
    for (let i = 0; i < 2; i++) { // Aggiungiamo 2 set completi di card
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            carousel.appendChild(clone);
        });
    }

    let currentIndex = totalCards; // Inizia dal secondo set di card
    const cardWidth = cards[0].offsetWidth + 16; // card width + gap
    let isTransitioning = false;

    function updateCarousel(smooth = true) {
        carousel.style.transition = smooth ? 'transform 0.3s ease' : 'none';
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function slideNext() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        updateCarousel();
    }

    function slidePrev() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        updateCarousel();
    }

    // Gestione dello scorrimento infinito
    carousel.addEventListener('transitionend', () => {
        isTransitioning = false;
        // Se siamo arrivati alla fine del terzo set
        if (currentIndex >= totalCards * 2) {
            currentIndex = totalCards; // Torna al secondo set
            updateCarousel(false);
        }
        // Se siamo all'inizio del primo set
        else if (currentIndex <= totalCards - visibleCards) {
            currentIndex = totalCards * 2 - visibleCards; // Vai alla fine del secondo set
            updateCarousel(false);
        }
    });

    // Event listeners per i controlli
    prevBtn.addEventListener('click', slidePrev);
    nextBtn.addEventListener('click', slideNext);

    // Auto scroll
    let autoScrollInterval = setInterval(slideNext, 3000);

    // Pausa auto scroll su hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(slideNext, 3000);
    });

    // Setup iniziale
    updateCarousel(false);

    // Gestione resize della finestra
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newCardWidth = cards[0].offsetWidth + 16;
            currentIndex = totalCards; // Reset alla posizione iniziale
            updateCarousel(false);
        }, 250);
    });

    // Soft Skills Carousel
    const softCarousel = document.querySelector('.soft-skills-carousel');
    const softCards = softCarousel.querySelectorAll('.soft-skill-card');
    const softPrevBtn = document.querySelector('#soft-skills .prev');
    const softNextBtn = document.querySelector('#soft-skills .next');
    
    // Clone cards for infinite scroll
    const totalSoftCards = softCards.length;
    const visibleSoftCards = 3;
    
    // Clone all cards twice
    for (let i = 0; i < 2; i++) {
        softCards.forEach(card => {
            const clone = card.cloneNode(true);
            softCarousel.appendChild(clone);
        });
    }

    let softCurrentIndex = totalSoftCards; // Start from second set
    const softCardWidth = softCards[0].offsetWidth + 32; // card width + gap
    let isSoftTransitioning = false;

    function updateSoftCarousel(smooth = true) {
        softCarousel.style.transition = smooth ? 'transform 0.3s ease' : 'none';
        softCarousel.style.transform = `translateX(-${softCurrentIndex * softCardWidth}px)`;
    }

    function slideNextSoft() {
        if (isSoftTransitioning) return;
        isSoftTransitioning = true;
        softCurrentIndex++;
        updateSoftCarousel();
    }

    function slidePrevSoft() {
        if (isSoftTransitioning) return;
        isSoftTransitioning = true;
        softCurrentIndex--;
        updateSoftCarousel();
    }

    // Handle infinite scroll
    softCarousel.addEventListener('transitionend', () => {
        isSoftTransitioning = false;
        if (softCurrentIndex >= totalSoftCards * 2) {
            softCurrentIndex = totalSoftCards;
            updateSoftCarousel(false);
        } else if (softCurrentIndex <= totalSoftCards - visibleSoftCards) {
            softCurrentIndex = totalSoftCards * 2 - visibleSoftCards;
            updateSoftCarousel(false);
        }
    });

    // Event listeners
    softPrevBtn.addEventListener('click', slidePrevSoft);
    softNextBtn.addEventListener('click', slideNextSoft);

    // Auto scroll
    let softAutoScrollInterval = setInterval(slideNextSoft, 4000);

    // Pause on hover
    softCarousel.addEventListener('mouseenter', () => {
        clearInterval(softAutoScrollInterval);
    });

    softCarousel.addEventListener('mouseleave', () => {
        softAutoScrollInterval = setInterval(slideNextSoft, 4000);
    });

    // Initial setup
    updateSoftCarousel(false);

    // Handle resize
    let softResizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(softResizeTimeout);
        softResizeTimeout = setTimeout(() => {
            const newSoftCardWidth = softCards[0].offsetWidth + 32;
            softCurrentIndex = totalSoftCards;
            updateSoftCarousel(false);
        }, 250);
    });
});

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}); 