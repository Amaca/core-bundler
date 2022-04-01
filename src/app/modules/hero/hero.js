import Module from '../module.js';
import './hero.scss';

export class HeroModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.loaded();
	}
}

export function createInstance() {
	const instance = new HeroModule();
	return instance;
}
