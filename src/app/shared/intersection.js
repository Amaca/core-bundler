
export default class Intersection {

	constructor(node) {
		this.node = node;
		this.intersected = false;
	}

	setup(options) {
		const defaultOptions = {
			root: null,
			rootMargin: window.innerHeight + 'px',
			threshold:  0
		};
		this.options = options !== undefined ? Object.assign(defaultOptions, options) : defaultOptions;
	}

	createObserver(options) {
		this.setup(options)
		this.observer = new IntersectionObserver(
			this.handleIntersect.bind(this), 
			this.options
		);
		if (this.node)
			this.observer.observe(this.node);
	}
	
	handleIntersect(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting && !this.intersected) {
				this.intersected = true;
				observer.unobserve(entry.target); 
				this.onIntersect();
			} 
		});
	}

	onIntersect() {}
}