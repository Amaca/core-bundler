import Module from '../module.js';
import './highlights.scss';

export class HighlightsModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.loaded();
	}
}

export function createInstance() {
	const instance = new HighlightsModule();
	return instance;
}
