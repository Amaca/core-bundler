export default class SwiperSettings {

	static params = {
		hero: {
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'custom',
				renderCustom: function(swiper, current, total) {
					let text = ``;
					let names = [];
					Array.from(swiper.slides).forEach(x => names.push(x.getAttribute('data-swiper-name')));
					for (let i = 1; i <= total; i++) {
						const activeClass = current == i ? 'swiper-pagination-bullet-active' : '';
						text += `<span class='swiper-pagination-bullet ${activeClass}'>${names[i]}</span>`;
					}
					return text;
				}
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			// autoplay: {
			// 	delay: 5000,
			// 	disableOnInteraction: false
			// },
			speed: 1200,
			loop: true,
			watchSlidesProgress: true,
		},
		carousel3col: {
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'bullets',
			},
			speed: 1200,
			breakpoints: {
				300: {
				  slidesPerView: 1,
				  spaceBetween: 40
				},
				640: {
				  slidesPerView: 3,
				  spaceBetween: 40
				}
			  }
		}
	}

	static features = {}

	static getParams(key) {
		return Object.assign({}, this.params[key]);
	}

	static getFeatures(key) {
		return this.features[key];
	}

	static get(key) {
		return {
			params: this.getParams(key),
			features: this.getFeatures(key),
		}
	}
}
