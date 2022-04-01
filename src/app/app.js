import Page from './shared/page.js';
import ModuleLoader from './modules/module.loader.js';
import SwiperSlider from './swiper/swiper-slider';

import '../scss/main.scss';
import 'swiper/css';
export default class App extends Page {

	constructor(el) {
		super(el);
		this.init();
		this.critical();
		this.moduleLoader();
	}

	critical() {
		if (this.body.classList.contains('homepage')) {
			SwiperSlider.init();
		}
	}

	moduleLoader() {
		const modules = document.querySelectorAll('[data-module]');
		this.modules = Array.from(modules).map((node) => new ModuleLoader(node, this.body));	
	}
}

window.onload = () => {
	const app = new App();
};
