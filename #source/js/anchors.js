$('body').hide().fadeIn(1200); // плавное проявление всего контента на сайте при загрузке

// Пвный скролл

var scrollLink = $('.scroll');
scrollLink.click(function(e) {
	e.preventDefault();
	if ($('.menu-header__menu').hasClass('active')) {
		$('.menu-header__menu').removeClass('active');
		$('.menu-header__burger').removeClass('active');
		$('body').removeClass('lock');
	}
	$('body, html').animate({
		scrollTop: $(this.hash).offset().top - $('.header').height() // Если подключен fullpage, то надо удалить "- $('.header').height()"
	}, 1000);
})

// Изменение цвета при достижении соответсвующего блока

 $(window).scroll(function() {
 	var scrollBarLocation = $(this).scrollTop();
 	console.log(scrollBarLocation);
 	scrollLink.each(function() {
 		var sectionOffset = $(this.hash).offset().top;
 		if (sectionOffset <= (scrollBarLocation + $('.header').height())) {
 			$(this).parent().addClass('active');
 			$(this).parent().siblings().removeClass('active');
 		} else {
 			$(this).parent().removeClass('active');
 		}
 	})
 })