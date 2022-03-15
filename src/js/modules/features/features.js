import Module from '../module.js';
import './features.scss';

export class FeaturesModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.loaded();
	}
}

export function createInstance() {
	const instance = new FeaturesModule();
	return instance;
}
