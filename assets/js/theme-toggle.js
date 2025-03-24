document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".theme__toggle");
    const body = document.body;
    
    // Vérifie si un thème est déjà stocké
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("theme__dark");
    } else {
        body.classList.add("theme__light");
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("theme__light")) {
            body.classList.remove("theme__light");
            body.classList.add("theme__dark");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("theme__dark");
            body.classList.add("theme__light");
            localStorage.setItem("theme", "light");
        }
    });
});