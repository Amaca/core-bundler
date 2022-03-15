import { getModules} from './module.config.js';

export default class ModuleLoader {

	constructor(node, wrapper) {
		this.node = node;
		this.wrapper = wrapper;
		this.module = module;
		
		this.name = node.getAttribute('data-module');
		this.options = node.getAttribute('data-module-options');
		
		this.loaded = false;
		this.numSteps = 20;

		this.createObserver();
	}

	createObserver() {
		this.observer;
	
		let options = {
			root: null,
			rootMargin: '0px',
			threshold:  this.buildThresholdList()
		};
	
		this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
		this.observer.observe(this.node);
	}

	buildThresholdList() {
		let thresholds = [];
	
		for (let i = 1.0; i <= this.numSteps; i++) {
			let ratio = i / this.numSteps;
			thresholds.push(ratio);
		}
	
		thresholds.push(0);
		return thresholds;
	}
	
	handleIntersect(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting && !this.loaded) {
				this.loadModule()
				this.loaded = true;
			} 
		});
	}

	loadModule() {
		getModules[this.name]().then(({createInstance}) => {
			this.instance = createInstance();
			this.instance.bind(this.node, this.name, this.options)
		});
	}
}
