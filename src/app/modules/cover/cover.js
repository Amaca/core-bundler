import Module from '../module.js';
import './cover.scss';

export class CoverModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.loaded();
	}
}

export function createInstance() {
	const instance = new CoverModule();
	return instance;
}
