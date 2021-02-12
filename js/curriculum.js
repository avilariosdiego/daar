//Funciones
(function ($) {
    "use strict"; 
    
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
            ) {
            var target = $(this.hash);
        target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html, body").animate(
            {
                scrollTop: target.offset().top,
            },
            1000,
            "easeInOutExpo"
            );
            return false;
        }
    }
});

    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery);

//Slide Animation
$(document).ready(function() {
    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})