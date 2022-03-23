import Page from './shared/page.js';
import ModuleLoader from './modules/module.loader.js';

import '../scss/main.scss'
//import SwiperSlider from './swiper/swiper-slider';

export default class App extends Page {

	constructor(el) {
		super(el);
		this.init();
		this.moduleLoader();
	}

	moduleLoader() {
		const modules = document.querySelectorAll('[data-module]');
		this.modules = Array.from(modules).map((node) => new ModuleLoader(node, this.body));
	}
}

window.onload = () => {
	const app = new App();
};