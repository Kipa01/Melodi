$('.intro-slider').slick({
    nextArrow: '<button type="button" class="slick-next"><img src="../../images/icons/arrow-right-solid.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="../../images/icons/arrow-left-solid.svg" alt=""></button>',
    responsive: [
	    {
	      breakpoint: 601,
	      settings: {
	        arrows: false
	      }
	    },
	]
});

$('.portfolio__slider').slick({
    slidesToShow: 4,
    arrows: false,
    swipeToSlide: true,
    responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	  ]
});