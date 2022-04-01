import Module from '../module.js';
import './lateral-form.scss';

export class LateralFormModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.loaded();
	}
}

export function createInstance() {
	const instance = new LateralFormModule();
	return instance;
}
