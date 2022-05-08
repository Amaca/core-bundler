import Module from '../module.js';
import AccordionSelectFilters from "./accordion.selectFilters.js";

import './accordion.scss';

export default class AccordionModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.setup();
		if (typeof(this.settings.defaultElementId) === 'number' && this.settings.defaultElementId <= this.buttons.length) {
			this.contentHeight = this.getHeight(this.contents[this.settings.defaultElementId]);
			this.open(this.buttons[this.settings.defaultElementId], this.contents[this.settings.defaultElementId]);
		}
		if(this.settings.filtersSelect) {
			this.filtersSelect = new AccordionSelectFilters(
				this.node,
				this.selectors.filtersSelect.select,
				this.selectors.filtersSelect.category
			);
		}
	}

	setup() {
		//default selectors
		this.selectors = {
			buttonAttribute: 'accordion-button',
			contentAttribute: 'accordion-content',
			filtersSelect: {
				select: 'data-accordion-select',
				category: 'data-accordion-cat'
			},
			activeClass: 'active',
		};

		//default settings
		this.settings = {
			closeOthers: false,
			toggleCurrent: false,
			defaultElementId: 0,
			filtersSelect: false,
			animations: false //import gsap
		}

		if (this.options.selectors) { // assign custom selectors
			this.selectors = Object.assign(this.selectors, this.options.selectors);
		}

		if(this.options.settings) { // assign custom settings
			this.settings = Object.assign(this.settings, this.options.settings);
		}

		//import gsap 3.0 for animations: https://greensock.com/docs/v3/GSAP and uncomment lines:
		//if (this.settings.animations) {
			//this.gsap = gsap; 
			//this.onCompleteAnim;
		//}

		this.buttons = Array.from(this.node.querySelectorAll(`[${this.selectors.buttonAttribute}]`));
		this.contents = Array.from(this.node.querySelectorAll(`[${this.selectors.contentAttribute}]`));
		
		this.addListeners();
		this.ready();
	}

	addListeners() {
		this.buttons.forEach(button => {
			button.addEventListener('click', this.onClick.bind(this));
		});
		window.addEventListener('resize', this.onResize.bind(this));
	}

	onClick(e) {
		const button = e.currentTarget;
		if(!button) {
			return
		}
		this.currentId = button.getAttribute(this.selectors.buttonAttribute);
		
		//set active button or close the current active button
		if (!button.classList.contains(this.selectors.activeClass)) {
			this.reset();
			this.setActive(button);
		} else if (!this.settings.toggleCurrent) {
			this.close(button, this.contents[this.currentId]);
		}
	}

	setActive(button) {
		this.contents.forEach(content => {
			const contentId = content.getAttribute(this.selectors.contentAttribute);
			const isCurrent = contentId === this.currentId;
			const hasActive = button.classList.contains(this.selectors.activeClass);
			if (!(isCurrent && !hasActive)) {
				return
			}
			this.contentHeight = this.getHeight(content);
			this.open(button, content);
		})
	}

	reset() {
		this.buttons.forEach((button, i) => {
			const isOpen = button.getAttribute(this.selectors.buttonAttribute) !== this.currentId;
			const hasActive = button.classList.contains(this.selectors.activeClass);
			if (!(hasActive && isOpen)) {
				return
			} 
			this.contentHeight = this.getHeight(this.contents[i]);
			
			//close other panels on click
			if (this.settings.closeOthers) { 
				this.close(button, this.contents[i]);
			};
		});
	}

	getHeight(elem) {
		if(elem !== null){
			elem.style.height = 'auto';
			elem.style.display = 'block';
			return elem.offsetHeight !== 0 ? elem.offsetHeight : this.contentHeight;
		} else return
	}

	open(button, content) {
		this.onOpen(content);
		//console.log('open ', this.selectors.activeClass);
		button.classList.add(this.selectors.activeClass);
		content.classList.add(this.selectors.activeClass);
	}

	close(button, content) {
		this.onClose(content);
		//console.log('close ', this.selectors.activeClass);
		button.classList.remove(this.selectors.activeClass);
		content.classList.remove(this.selectors.activeClass);
	}

	onOpen(elem) {
		if (!this.settings.animations) {
			elem.style.height = this.contentHeight;
			return;
		}
		//gsap animation
		this.onCompleteAnim = false;
		this.gsap.set(elem, { height: 0 });
		this.gsap.to(elem, 0.4, {
			height: this.contentHeight,
			ease: Power2.easeOut,
			onComplete: () => {
				this.onCompleteAnim = true;
			}
		});	
	}

	onClose(elem) {
		if (!this.settings.animations) {
			elem.style.height = 0;
			return;
		}
		//gsap animation
		this.onCompleteAnim = false;
		this.gsap.to(elem, 0.4, {
			height: 0,
			ease: Power2.easeOut,
			onComplete: () => {
				this.onCompleteAnim = true;
			}
		});
	}

	onResize() {
		const content = this.node.querySelector(`[${this.selectors.contentAttribute}="${this.currentId}"]`);
		if (!content) {
			return;
		}
	    this.contentHeight = this.getHeight(content);
		content.style.height = this.contentHeight;
	}
}

export function createInstance() {
	const instance = new AccordionModule();
	return instance;
}