$(document).ready(function(){
	$('.projects__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1000,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	  });
  });

  $(document).ready(function() {  // кнопка наверх
	var button = $('#button-up');	
	$(window).scroll (function () {
	  if ($(this).scrollTop () > 300) {
		button.fadeIn();
	  } else {
		button.fadeOut();
	  }
  });	 
  button.on('click', function(){ 
  	$('body, html').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  	});		 
  });

  $(document).ready(function(){ // анимация плавного переключения 
  
	$("nav").on("click","a", function (event) {
		  event.preventDefault();
		  var id  = $(this).attr('href'),
		  top = $(id).offset().top;
		  $('body,html').animate({scrollTop: top}, 1000, );
	 });
  });



  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile'),
    menuItem = document.querySelectorAll('.mobile__item'),
    hamburger = document.querySelector('.header__hamburger');


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('mobile_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('mobile_active');
        })
    })
})




