import Module from '../module.js';
import './hero.scss';
import SwiperSlider from '../../swiper/swiper-slider';

export class HeroModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		SwiperSlider.init();
		this.ready();
	}
}

export function createInstance() {
	const instance = new HeroModule();
	return instance;
}
