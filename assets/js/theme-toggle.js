document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".theme__toggle");
  const body = document.body;
  const images = document.querySelectorAll(".competences img");

  function updateImages(theme) {
    images.forEach((img) => {
      const src = img.getAttribute("src");
      if (theme === "light") {
        img.setAttribute("src", src.replace(".png", "1.png"));
      } else {
        img.setAttribute("src", src.replace("1.png", ".png"));
      }
    });
  }

  // Vérifie si un thème est déjà stocké
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("theme__dark");
    updateImages("dark");
  } else {
    body.classList.add("theme__light");
    updateImages("light");
  }

  toggleButton.addEventListener("click", function () {
    if (body.classList.contains("theme__light")) {
      body.classList.remove("theme__light");
      body.classList.add("theme__dark");
      localStorage.setItem("theme", "dark");
      updateImages("dark");
    } else {
      body.classList.remove("theme__dark");
      body.classList.add("theme__light");
      localStorage.setItem("theme", "light");
      updateImages("light");
    }
  });
});
