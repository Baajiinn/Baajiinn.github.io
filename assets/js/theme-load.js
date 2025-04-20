document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".theme__toggle");
    const root = document.documentElement;

    function toggleTheme() {
        root.classList.remove("theme__dark", "theme__light");
    }

    toggleButton.addEventListener("click", toggleTheme);
});


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


