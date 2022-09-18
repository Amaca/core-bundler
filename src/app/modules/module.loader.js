import { getModules} from './module.config.js';
import Logs from '../shared/logs';
import Intersection from '../shared/intersection.js';
export default class ModuleLoader extends Intersection {

	constructor(node, wrapper) {
		super(node);
		this.node = node;
		this.wrapper = wrapper;
		this.name = node.getAttribute('data-module');
		this.options = node.getAttribute('data-module-options');
		this.console = document.querySelector('[data-console]');
		this.createObserver();
	}

	onIntersect() {
		this.loadModule().catch(error => {
			console.error(`Module "${this.name}" has not been loaded correctly. Check the attribute data-module on html or paths on module.config.js - ${error}`)
		});;
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
					this.console.innerHTML += `
						<p><strong>${this.name}.js</strong> and <strong>${this.name}.css</strong> loaded in ${endingTime - startTime}ms</p>
					`;
					this.console.scrollTop = this.console.scrollHeight;
					this.instance.node.classList.add('_loaded');
					this.instance.off('ready');
					resolve(this.instance)
				})
			});
		});
	}
}