import Dom from './dom';
import Nav from '../nav/nav'

export default class Page {

	constructor() {}

	init() {
		const body = document.querySelector('body');
		const main = document.querySelector('.main');
		const header = document.querySelector('.header');
		const nav = document.querySelector('[data-nav]');

		Dom.detect(body);

		this.body = body;
		this.main = main;
		this.header = header;
		this.isMobile = Dom.mobile;
		if(nav)
			this.nav = new Nav(nav);

		this.addListeners();
	}

	addListeners() {
		window.addEventListener('orientationchange', (e) => {
			this.checkDevice();
		});
		if (this.isMobile) {
			return;
		}
		window.addEventListener('scroll', (e) => {
			if(window.scrollY > 0 ) {
				this.header.classList.add('_sticky')
			} else {
				this.header.classList.remove('_sticky')
			}
		})
	}

	checkDevice(e) {
		if (!this.isMobile) {
			return;
		}
		const html = document.querySelector('html');
		const orientation = window.orientation & 2;
		switch (orientation){
			case 0:
				html.classList.remove('landscape');
				html.classList.add('portrait');
			break;
			case 2:
				html.classList.remove('portrait');
				html.classList.add('landscape');
			break;
		}
	}
}
