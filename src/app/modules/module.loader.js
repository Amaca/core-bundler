import { getModules} from './module.config.js';
import Logs from '../shared/logs';
export default class ModuleLoader  {

	constructor(node, wrapper) {
		this.node = node;
		this.wrapper = wrapper;
		this.module = module;
		
		this.name = node.getAttribute('data-module');
		this.options = node.getAttribute('data-module-options');
		this.intersected = false;

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
			if (entry.isIntersecting && !this.intersected) {
				this.intersected = true;
				this.loadModule();
			} 
		});
	}

	loadModule() {
		// return a promise when module is loaded
		return new Promise((resolve, reject) => {
			const startTime = Date.now();

			//load module, create a new module instance and bind it
			getModules[this.name]().then(({createInstance}) => {
				this.instance = createInstance();
				this.instance.bind(this.node, this.name, this.options);

				//show styled node on module ready and calculate elapsed time
				this.instance.on('ready', (endingTime) => {
					Logs.debug(`Module ${this.name} loaded in ${endingTime - startTime}ms`);
					this.instance.node.classList.add('_loaded');
					this.instance.off('ready');
					resolve(this.instance)
				})
			});
		});
	}
}
