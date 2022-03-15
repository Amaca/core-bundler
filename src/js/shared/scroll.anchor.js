export default class ScrollAnchor {

	constructor(node, index) {
		this.node = node;
		this.index = index;
		this.setup();
		this.addListeners();
	}

	setup() {
		this.anchorId = this.node.getAttribute('data-anchor');
		this.offset = this.node.getAttribute('data-anchor-offset');
		this.content = document.querySelector('[data-anchor-content=' + this.anchorId + ']')
	}

	addListeners() {
		this.node.addEventListener('click', this.onClick.bind(this));
	}

	onClick(e) {
		window.scrollTo(0, this.cleanOffset);
		e.preventDefault();
	}

	get cleanOffset() {
		return this.content.offsetTop - this.offset;
	}

	static init() {
        ScrollAnchor.items = Array.from(document.querySelectorAll('[data-anchor]')).map((node, index) => new ScrollAnchor(node, index));
    }
}