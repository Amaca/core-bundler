import Module from '../module.js';

import './editorial.scss';

export class EditorialModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.loaded();
	}
}

export function createInstance() {
	const instance = new EditorialModule();
	return instance;
}
