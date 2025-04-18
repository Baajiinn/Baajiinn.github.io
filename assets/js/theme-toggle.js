document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".theme__toggle");
  const body = document.body;
  const images = document.querySelectorAll(".competences img");

  function updateImages(theme) {
    images.forEach((img) => {
      const src = img.getAttribute("src");
      if (theme === "light") {
        img.setAttribute("src", src.replace("1.png", ".png"));
      } else {
        img.setAttribute("src", src.replace(".png", "1.png"));
      }
    });
  }

  // Ensure light mode logos are used for print
  window.addEventListener("beforeprint", () => {
    updateImages("light");
  });

  window.addEventListener("afterprint", () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    updateImages(currentTheme);
  });

  // Always set light mode as default on page load
  body.classList.add("theme__light");
  updateImages("light");
  localStorage.setItem("theme", "light");

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
