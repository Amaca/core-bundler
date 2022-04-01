import Module from '../module.js';
import './focus.scss';

export class FocusModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.loaded();
	}
}

export function createInstance() {
	const instance = new FocusModule();
	return instance;
}
