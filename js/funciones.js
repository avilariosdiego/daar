//Funciones
(function($) {
	"use strict";

	$(".menu-toggle").click(function(e) {
		e.preventDefault();
		$("#sidebar-wrapper").toggleClass("active");
		$(".menu-toggle > .fa-server, .menu-toggle > .fa-window-close").toggleClass("fa-server fa-window-close");
		$(this).toggleClass("active");
	});

	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	$('#sidebar-wrapper .js-scroll-trigger').click(function() {
		$("#sidebar-wrapper").removeClass("active");
		$(".menu-toggle").removeClass("active");
		$(".menu-toggle > .fa-server, .menu-toggle > .fa-window-close").toggleClass("fa-server fa-window-close");
	});

	$(document).scroll(function() {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

})(jQuery);

//Preloader
window.onload = function(){
	var contenedor = document.getElementById('contenedor_loader');
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = '0';
}

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

//Tooltip
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

//Popover
$(document).ready(function () {
	$('[data-toggle="popover"]').popover();
});