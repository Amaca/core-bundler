import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import SwiperSettings from './swiper-settings';

export default class SwiperSlider {

	constructor(node) {
		this.node = node;
		this.id = this.node.dataset.swiperId;
		this.type = this.node.dataset.swiperSlider;
		this.params = SwiperSettings.getParams(this.type);
		this.features = SwiperSettings.getFeatures(this.type);
		this.init();
	}

	init() {
		Swiper.use([Navigation, Pagination, Autoplay]);
		this.swiper = new Swiper(this.node, this.params);
	}

	static init() {	
		SwiperSlider.item = Array.from(document.querySelectorAll('[data-swiper-slider]')).map((node, index) => new SwiperSlider(node, index));
	}
}