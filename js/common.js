$(document).ready(function () {
	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	})


	// Выпадающий список у десктопного меню
	let item_has_children = document.querySelector('.item_has_children');
	let sub_menu = document.querySelector('.sub_menu');
	
	if (item_has_children) {
	  item_has_children.addEventListener('click', function(event) {
		sub_menu.classList.toggle('dn');
		event.stopPropagation(); // Остановка всплытия события
	  });
	}
	
	sub_menu.addEventListener('click', function(event) {
	  event.stopPropagation(); // Остановка всплытия события
	});


	// Меню бургер
	let menu_mob = document.querySelector('.header_bottom_line_mobile_menu')
	let header_menu_open = document.querySelector('.header_menu_open')
	let header_menu_close = document.querySelector('.header_menu_close')


	header_menu_open.addEventListener('click', function(){
		header_menu_close.classList.toggle('dn')
		header_menu_open.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
	})

	header_menu_close.addEventListener('click', function(){
		header_menu_open.classList.toggle('dn')
		header_menu_close.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
		sub_menu_mobile.classList.toggle('dn'); 
	})


	// Выпадающий список у мобильного меню
	let li_mob_has_childrens = document.querySelector('.li_mob_has_childrens');
	let sub_menu_mobile = document.querySelector('.sub_menu_mobile');
	
	if (li_mob_has_childrens) {
		li_mob_has_childrens.addEventListener('click', function(event) {
		sub_menu_mobile.classList.toggle('dn');
		event.stopPropagation(); // Остановка всплытия события
	  });
	}


	$('.block_1_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
	});

	$('.block_4_slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
				breakpoint: 576,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			}
		  ]
	})

});