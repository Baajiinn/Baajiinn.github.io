$(document).ready(function() {

    let pageHeight = $("html").height();
    console.log("Hauteur totale du site : " + pageHeight + " px");

    $('#photo').on('click', function(event) {
        event.stopPropagation(); 
        $(this).toggleClass("zoomed");
        $('.photoHolder').toggleClass("photoHolderZoomed");
    });


    $(document).on('keydown', function(event) {
        if (event.key === "Escape" && $('#photo').hasClass("zoomed")) {
            $('#photo').removeClass("zoomed");
            $('.photoHolder').removeClass("photoHolderZoomed");
        }
    });
 
    $(document).on('click', function() {
        if ($('#photo').hasClass("zoomed")) {
            $('#photo').removeClass("zoomed");
            $('.photoHolder').removeClass("photoHolderZoomed");
        }
    });
});