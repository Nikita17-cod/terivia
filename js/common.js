$(function() {
 
	// Mask phone
	$('input[name="Lead[phone]"]').mask('+38(999) 999-99-99');
	var mql = window.matchMedia('(min-width: 377px) and (max-width: 992px)');
	// Menu in scroll mobile
	$(window).scroll(function() {
		
		if($(this).scrollTop()>10){
	 

		if (mql.matches) 
		{
			$(".header__list-of-cities").addClass('header__list-of-cities-scroll-max');
		}
		else{
			$(".header__list-of-cities").removeClass('header__list-of-cities-scroll-max');
		}
			$(".header__wrap").addClass('header__wrap_scroll');
			$(".header__block_logo").addClass('header__block_logo_scroll');
			$(".header__toggle").addClass('header__toggle-scroll');
			$(".header__list-of-cities").addClass('header__list-of-cities-scroll');
		}
		else if ($(this).scrollTop()<10){
		 
	 
			$(".header__list-of-cities").removeClass('header__list-of-cities-scroll-max');
			$(".header__wrap").removeClass('header__wrap_scroll');
			$(".header__block_logo").removeClass('header__block_logo_scroll');
			$(".header__toggle").removeClass('header__toggle-scroll');
			$(".header__list-of-cities").removeClass('header__list-of-cities-scroll');
		}
	});
	//Style list of cities
	$(window).click(function(event) 
		{
			let headerButton = $(".header__list-main-button");
			let target2 = event.target;

			if(target2 != headerButton[0])
				{
					$(".list-of-cities-body").removeClass('list-of-cities-body-active'); 
				}
		});

	$(".header__list-main-button").on("click", function (event) 
		{
			$(".list-of-cities-body").toggleClass('list-of-cities-body-active'); 	  
		});

	function showPhonList()
		{
			$(".header__phons-list").css( { 'opacity': '1','visibility': 'visible'} );
			$(".caret-input").addClass('caret-input-active');
		};
	function hidePhonList()
		{
			$(".header__phons-list").css( { 'opacity': '0','visibility': 'hidden'} );
			$(".caret-input").removeClass('caret-input-active');
		};
	 
	if (window.matchMedia('(min-width: 980px)').matches) 
		{
		    $(".header__list-main-button")
				.mouseleave(function() 
				{
					$(".list-of-cities-body").removeClass('list-of-cities-body-active');
				}) 
				.mouseenter(function() 
				{
					$(".list-of-cities-body").addClass('list-of-cities-body-active'); 
				});

			$(".caret-input")
				.mouseleave(function() 
				{
					hidePhonList();
				}) 
				.mouseenter(function() 
				{
					showPhonList();
				});

			$(".header__phons-list")
				.mouseleave(function() 
				{
					hidePhonList();
				}) 
				.mouseenter(function() 
				{
					showPhonList();
				});

			$(".header__phons")
				.mouseleave(function() 
				{
					hidePhonList();
				}) 
				.mouseenter(function() 
				{
					showPhonList();
				});
		};    
	//Style list of cities

	// Smooth scroll for anchor link
	$(".menu__item").on("click", function (event) {

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top + -90}, 1000);
		$(".toggle-mnu").toggleClass("toggle-mnu_open");
		$(".header__mobile").slideToggle();
		return false;
	});

	// Section modal
  $(".show__order").click(function(evt){
		$(".modal__order").removeClass("hidden");
		$(".overlay").removeClass("hidden");
		evt.preventDefault();
	});

	$(".overlay, .modal__close").click(function(){
			$(".modal__order").addClass("hidden");
			$(".overlay").addClass("hidden");
	});

	$(".show__call").click(function(evt){
			$(".modal__call").removeClass("hidden");
			$(".overlay").removeClass("hidden");
			evt.preventDefault();
	});

	$(".overlay, .modal__close").click(function(){
			$(".modal__call").addClass("hidden");
			$(".overlay").addClass("hidden");
	});

	// Toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("toggle-mnu_open");
		$(".header__mobile").slideToggle();
		return false;
	});

	// WOW
	var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       130,
			mobile:       false,
			live:         true,
			callback:     function(box) {

			},
			scrollContainer: null 
		}
	);
	wow.init();
	
	// Animate.css
	$('.title-text').addClass('animated zoomIn');
	$('.services__item').addClass('animated fadeInUp');
	$('.clinic-list__item').addClass('animated fadeInLeft');
	$('.btn-flash').addClass('animated flash');
	$('.reasons__image').addClass('animated zoomIn');

});

var swiper_masters = new Swiper('.swiper-masters', {
	speed: 1000,
	spaceBetween: 0,
	centeredSlides: true,
	slidesPerView: 1,
	breakpointsInverse: false,
	touchRatio: 1,
	loop: 1,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});

var swiper_masters = new Swiper('.swiper-promo', {
	speed: 500,
	spaceBetween: 0,
	centeredSlides: true,
	slidesPerView: 1,
	breakpointsInverse: false,
	touchRatio: 1,
	loop: 1,
	effect: 'fade',

	fadeEffect: {
    crossFade: true
	},
	
	autoplay: {
		delay: 7000
	},
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});