import Page from './shared/page.js';
import ModuleLoader from './modules/module.loader.js';

import '../scss/main.scss';
export default class App extends Page {

	constructor(el) {
		super(el);
		this.init();
		this.moduleLoader();

		this.scrollToExample();
	}

	moduleLoader() {
		const modules = document.querySelectorAll('[data-module]');
		this.modules = Array.from(modules).map((node) => new ModuleLoader(node, this.body));	
	}

	scrollToExample() {
		//scrollto example
		const btngoto = document.querySelector('.btn-goto');
		const section = document.querySelector('#video-player')
		
		btngoto.addEventListener('click', () => {
			let modulesToLoad = this.modules.filter(x => !x.intersected);
			modulesToLoad = this.modules.map(x => {
				x.intersected = true;
				return x.loadModule();
			});
			Promise.all(modulesToLoad).then(data => {
				window.scrollTo(0, section.offsetTop - this.header.clientHeight);
			})
		})
	}
}

window.onload = () => {
	const app = new App();
};
