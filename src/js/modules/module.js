
export default class Module {

	bind(node, name, options) {
		this.node = node;
		this.name = name;
		this.options = options !== null ? options : {selectors: '', settings: ''};
		
		this.setOptions();
		this.init();
	}

	setOptions() {}

	init() {}

	loaded() {
		console.log(`Module ${this.name} loaded`);
		this.node.classList.add('_loaded');
	}
}
