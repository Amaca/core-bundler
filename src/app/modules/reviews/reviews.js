import Module from '../module.js';
import SwiperSlider from '../../shared/swiper/swiper-slider.js';

import 'swiper/css';
import './reviews.scss';

export class ReviewsModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		const sliderWrapper = this.node.querySelector('[data-swiper-slider]');
		this.swiperInstance = new SwiperSlider(sliderWrapper);
		this.loaded();
	}
}

export function createInstance() {
	const instance = new ReviewsModule();
	return instance;
}
