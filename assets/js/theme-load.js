document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".theme__toggle");
    const root = document.documentElement;

    function toggleTheme() {
        // Réinitialisation propre de la classe thème (non utilisé ici mais potentiellement utile)
        root.classList.remove("theme__dark", "theme__light");
    }

    toggleButton.addEventListener("click", toggleTheme);
});

// Gestion du dark mode temporaire à l'impression
document.querySelector('.print-button').addEventListener('click', () => {
    const wasDark = document.body.classList.contains('theme__dark');

    if (!wasDark) {
        document.body.classList.add('theme__dark');
        window.print();
        setTimeout(() => {
            document.body.classList.remove('theme__dark');
        }, 1000);
    } else {
        window.print();
    }
});


