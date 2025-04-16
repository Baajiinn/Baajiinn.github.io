$(document).ready(function() {
    console.log("La hauteur totale de mon site web est de : " + document.documentElement.scrollHeight + " pixels");

    $('#photo').on('click', function(event) {
        event.stopPropagation(); // Empêche la propagation du clic pour éviter un conflit avec le clic en dehors
        $(this).toggleClass("zoomed");
        $('.photoHolder').toggleClass("photoHolderZoomed");
    });

    // Dézoom avec la touche Échap
    $(document).on('keydown', function(event) {
        if (event.key === "Escape" && $('#photo').hasClass("zoomed")) {
            $('#photo').removeClass("zoomed");
            $('.photoHolder').removeClass("photoHolderZoomed");
        }
    });

    // Dézoom en cliquant en dehors de l’image
    $(document).on('click', function() {
        if ($('#photo').hasClass("zoomed")) {
            $('#photo').removeClass("zoomed");
            $('.photoHolder').removeClass("photoHolderZoomed");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log('Script CV chargé avec succès');
});
