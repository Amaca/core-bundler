import Toggle from "./toggle";

export default class ToggleOver extends Toggle  {

	constructor(node, selectorBtn, selectorTarget, wrapper, className) {
		super(node, selectorBtn, selectorTarget, wrapper, className);
	}

	addListener() {
		this.timeout;
		this.isOver = false;
		this.buttonOver = false;
		this.mouseOutArea = this.target.querySelector('.subnav');

		if(document.querySelector('body').classList.contains('mobile')) {
			this.node.addEventListener('click', this.onClick.bind(this));
		} else {
			this.node.addEventListener('mouseover', this.onOver.bind(this));
			this.node.addEventListener('mouseleave', this.onOut.bind(this));

			this.mouseOutArea.addEventListener('mouseover', this.onEnter.bind(this));
			this.mouseOutArea.addEventListener('mouseleave', this.onLeave.bind(this));
		}
	}

	onOver() {
		this.addClassName();
	}

	onOut() {
		if(this.timeout !== 0) {
			clearTimeout(this.timeout)
		}
		this.timeout = setTimeout(() => {
			if (!this.isOver) {
				this.removeClassName();
			}
		}, 100)
	}

	onEnter() {
		this.isOver = true;
	}

	onLeave() {
		this.isOver = false;
		this.removeClassName();
	}

	static init(selectorBtn, selectorTarget, wrapper, className) {
		if(!wrapper) {
			console.error('Dom wrapper is null: ' + this);
		}
        ToggleOver.items = Array.from(wrapper.querySelectorAll(selectorBtn)).map((node) => 
			new ToggleOver(node, selectorBtn, selectorTarget, wrapper, className)
		);
		return ToggleOver.items;
    }
}