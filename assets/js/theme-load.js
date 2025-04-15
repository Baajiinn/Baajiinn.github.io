document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".theme__toggle");
    const root = document.documentElement;

    function toggleTheme() {
<<<<<<< HEAD
        // Vérifie quel thème est actif
        let isDarkMode = root.classList.contains("theme__dark");
        
        // Supprime uniquement la classe theme__dark si elle est active
        if (isDarkMode) {
            root.classList.remove("theme__dark");
        } else {
            root.classList.add("theme__dark");
        }

        // Stocke la valeur actuelle du thème
        localStorage.setItem("theme", isDarkMode ? "theme__light" : "theme__dark");
=======
        // Applique la nouvelle classe et stocke la valeur
        root.classList.remove("theme__dark", "theme__light");
>>>>>>> 8a7cbe5cc77555406374d62c5662b5d15fa0b9d8
    }
    // Appliquer le changement de thème au clic sur le bouton
    toggleButton.addEventListener("click", toggleTheme);
});
