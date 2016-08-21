$(document).ready(function() {

	$('.mobile-trigger').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active');

        $('.header-nav').slideToggle();

    });


	// wow.js - для анимаций появления

	var wow = new WOW({
		mobile: false,
		callback: function(box) {

			if ($(box).hasClass('pros-cons')) {

				$(box).find('.balance').addClass('animated-custom');

				var $pros = $(box).find('.pros-item');
				var $cons = $(box).find('.cons-item');

				var delay = 1;
				var delaySecond = 1.4;

				$pros.addClass('visible').each(function() {

					$(this).css({
						'animation-name': 'fadeInLeft',
						'animation-delay': delay + 's'
					});

					delay += 1.3;
				});
				

				$cons.addClass('visible').each(function() {

					$(this).css({
						'animation-name': 'fadeInRight',
						'animation-delay': delaySecond + 's'
					});

					delaySecond += 1.3;
				});

			}
			
		}
	}).init();


	    // слайдер товаров недели
    $('.results-slider .wrapper').slick({
        dots: false,
        prevArrow: $('.results-slider .arrow-left'),
        nextArrow: $('.results-slider .arrow-right'),
        mobileFirst: true,
        arrows: false,
        slidesToShow: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        }]
    });


    // nav links scrollTo

    $('body').on('click', '[data-anchor]', function(e) {
    	e.preventDefault();

    	var href = $(this).attr('href');

    	var section = $(href);

    	$('body, html').animate({
    		scrollTop: section.offset().top
    	}, 1000)
    });


    $('.js-move-up').on('click', function(e) {
    	e.preventDefault();

    	$('body, html').animate({
    		'scrollTop': 0
    	});
    });

    var $promoSectionHeight = $('.promo').outerHeight();

    var arrowUpIsShown = null;

    $(window).on('scroll', onScroll);

    function onScroll(e) {
    	$promoSectionHeight = $('.promo').outerHeight();
    	if ($(window).scrollTop() > 100 && !arrowUpIsShown) {

    		arrowUpIsShown = true;

    		$('.js-move-up').addClass('visible');
    	} else if ($(window).scrollTop() < 100 && arrowUpIsShown) {

    		arrowUpIsShown = false;

    		$('.js-move-up').removeClass('visible');
    	}
    }

    $('.arrow-down').on('click', function(e) {
    	e.preventDefault();

    	$('body, html').animate({
    		'scrollTop': $('.pros-cons').offset().top
    	});
    });

    $('.fancybox-modal').fancybox({
    	closeBtn: false,
    	fitToView: false,
    	scrolling: 'visible',
    	padding: 0
    });
});