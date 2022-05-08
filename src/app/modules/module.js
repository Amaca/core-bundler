import EventEmitter from '../shared/EventEmitter.js';
export default class Module extends EventEmitter {

	constructor(el) {
		super(el);
	}

	bind(node, name, options, time) {
		this.node = node;
		this.name = name;
		this.options = options !== null ? options : {selectors: '', settings: ''};
		
		this.setOptions();
		this.init();
	}

	setOptions() {}

	init() {}

	ready() {
		const endingTime = Date.now();
		setTimeout(() => this.trigger('ready', [endingTime]), 0.000001);
	}
}
