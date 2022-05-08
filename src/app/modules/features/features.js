import Module from '../module.js';
import './features.scss';

export class FeaturesModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.ready();
	}
}

export function createInstance() {
	const instance = new FeaturesModule();
	return instance;
}
