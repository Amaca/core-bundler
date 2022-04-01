import { getModules} from './module.config.js';
export default class ModuleLoader {

	constructor(node, wrapper) {
		this.node = node;
		this.wrapper = wrapper;
		this.module = module;
		
		this.name = node.getAttribute('data-module');
		this.options = node.getAttribute('data-module-options');
		this.loaded = false;

		this.createObserver();
	}

	createObserver() {
		this.observer;
		let options = {
			root: null,
			rootMargin: window.innerHeight + 'px',
			threshold:  0
		};
	
		this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
		this.observer.observe(this.node);
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
