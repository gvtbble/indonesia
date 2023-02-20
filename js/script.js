
let ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {

	//MENU
		let iconMenu=document.querySelector(".icon-menu");
		let body=document.querySelector("body");
		let menuBody=document.querySelector(".menu__body");
	iconMenu.addEventListener("click", (e) => {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});

	//SLIDER
	if($('.slider__body').length>0){
		$('.slider__body').slick({
			autoplay: true,
			infinite: false,
			dots: true,
			arrows: false,
			accessibility:false,
			slidesToShow:1,
			autoplaySpeed: 3000,
			adaptiveHeight:true,
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]
		});
	}

		let slider=document.querySelectorAll(".slider");
		slider.forEach(el => {
			let sliderItem = new Glide(el, {
				type: 'carousel',
				perView: 1,
			});
		sliderItem.mount();
	});

	//IBG
	document.querySelectorAll(".ibg").forEach(el => {
		if(el.querySelector('img')){
			el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
			el.querySelector('img').style.display = 'none';
		}
	});
});


/*

		let element = document.createElement("div");
	element.classList.add("content", "active");
	element.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
	document.querySelector(".mainblock").append(element);

	if(iconMenu.classList.contains('active')){
		
	}
	document.querySelectorAll(".box")
		.forEach(el => {
			el.style.display = "none"
		});
*/