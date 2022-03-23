
export default class Toggle {

	constructor(node, selectorBtn, selectorTarget, wrapper, className) {
		this.node = node;
		this.selectorBtn = selectorBtn;
		this.selectorTarget = selectorTarget;
		this.wrapper = wrapper;
		this.className = className;
		this.init();
		this.addListener();
	}

	init() {
		this.selectorBtn = this.selectorBtn.substring(1, this.selectorBtn.length -1);
		this.selectorTarget = this.selectorTarget.substring(1, this.selectorTarget.length -1);
		this.target = this.wrapper.querySelector(
			`[${this.selectorTarget}=${this.node.getAttribute(this.selectorBtn)}]`
		);
		this.hasAria = this.node.getAttribute('aria-expanded');
	}

	addListener() {
		this.node.addEventListener('click', this.onClick.bind(this));
	}

	onClick() {
		const isActive = this.target.classList.contains(this.className);
		if(isActive) {
			this.removeClassName();
		} else {
			this.addClassName();
		}
	}

	addClassName() {
		this.resetAll();
		this.target.classList.add(this.className);
		if(this.hasAria)
			this.node.toggleAttribute('aria-expanded');
	}

	removeClassName() {
		this.target.classList.remove(this.className);
		if(this.hasAria)
			this.node.removeAttribute('aria-expanded');
	}

	resetAll() {
		const items = this.wrapper.querySelectorAll(`[${this.selectorTarget}]`);
		items.forEach(item => {
			item.classList.remove(this.className);
			if(this.hasAria)
				item.removeAttribute('aria-expanded');
		})
	}

	static init(selectorBtn, selectorTarget, wrapper, className) {
        Toggle.items = Array.from(wrapper.querySelectorAll(selectorBtn)).map((node) => 
			new Toggle(node, selectorBtn, selectorTarget, wrapper, className)
		);
		return Toggle.items;
    }
}