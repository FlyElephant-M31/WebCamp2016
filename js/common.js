$(document).ready(function() {

	// HEADER
	var $socialInHead=$(".js-soc");
	var $menu=$('.js-menu-open');
	var $head=$('.js-header');
	$head.removeClass("is-fixed");
		$(window).scroll(function(){
			if ($(this).scrollTop() > 0 && $(this).width() > 940) {
				$socialInHead.addClass("is-visible")
				$menu.addClass("is-mini")
				$head.addClass("is-fixed");
			} else {
				$socialInHead.removeClass("is-visible")
				$menu.removeClass("is-mini")
				$head.removeClass("is-fixed");
			};
	});

	// ANCHOR
	$('a[href="#theme"]').on('click', function(){
		var id=$(this).attr('href');
		var top=$(id).offset().top;
		if ($(window).width() > 940) {
			$('body, html').animate({scrollTop: top-55}, 800);
			return false;
		} else {
			$('body, html').animate({scrollTop: top}, 800);
			return false;
		}
		
	});

	// LINK PROGRAM
	$('.js-program').on('click', function(){
		$(this).toggleClass('is-active');
		$('.js-lang').toggleClass('is-open')
	})

	// MENU
	$('.js-menu-open').on('click', function(){
		$(this).closest('.header__head').addClass('is-open')
	})
	$('.js-menu-close').on('click', function(){
		$(this).closest('.header__head').removeClass('is-open')
	})

	// PROGRAM
	$('.js-open').on('click', function(){
		$(this).parent('.speaker').addClass('is-open')
	})
	$('.js-close').on('click', function(){
		$(this).closest('.speaker').removeClass('is-open');
		return false
	})

});