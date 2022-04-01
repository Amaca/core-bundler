import Module from '../module.js';
import SwiperSlider from '../../swiper/swiper-slider.js';
import './download.scss';

export class DownloadModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.loaded();
		SwiperSlider.init();
	}
}

export function createInstance() {
	const instance = new DownloadModule();
	return instance;
}
