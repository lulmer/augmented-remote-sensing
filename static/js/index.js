window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

function showFullScreen(img) {
	img.style.width = "100vw";
	img.style.height = "100vh";
	img.style.position = "fixed";
	img.style.top = "0";
	img.style.left = "0";
	img.style.zIndex = "9999";
	img.style.cursor = "zoom-out";
  }