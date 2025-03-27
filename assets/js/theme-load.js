document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".theme__toggle");
    const root = document.documentElement;

    function toggleTheme() {
        
        // Applique la nouvelle classe et stocke la valeur
        root.classList.remove("theme__dark", "theme__light");
        root.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    // Appliquer le changement de thème au clic sur le bouton
    toggleButton.addEventListener("click", toggleTheme);
});
