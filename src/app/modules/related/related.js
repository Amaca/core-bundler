import Module from '../module.js';
import './related.scss';

export class RelatedModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.ready();
	}
}

export function createInstance() {
	const instance = new RelatedModule();
	return instance;
}
