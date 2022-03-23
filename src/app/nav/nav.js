import Toggle from "../shared/toggle";
import ToggleOver from "../shared/toggle-over";
export default class Nav {

	constructor(node) {
		this.node = node;

		this.selectors = {
			mainWrapper: 'body',
			mobileToggle: '[data-nav-toggle]',
			buttonsAttribute: '[data-toggle-btn]',
			buttonsTarget: '[data-toggle-target]',
			subButtonsAttribute: '[data-toggle-sub-btn]',
			subButtonsTarget: '[data-toggle-sub-target]',
			backButtons: '[data-nav-back]',
			subBackButtons: '[data-subnav-back]'
		}

		this.settings = {
			activeClass: 'active',
			wrapperClass: 'no-scroll'
		}

		this.init();
		this.addListener();
	}

	init() {

		//buttons for mobile and desktop
		this.buttons = ToggleOver.init(
			this.selectors.buttonsAttribute, 
			this.selectors.buttonsTarget, 
			this.node, 
			this.settings.activeClass
		);

		// sub buttons on mobile
		this.subButtons = Toggle.init(
			this.selectors.subButtonsAttribute, 
			this.selectors.subButtonsTarget,
			this.node, 
			this.settings.activeClass
		);

		// back buttons on mobile
		this.backButtons = Toggle.init(
			this.selectors.backButtons,
			this.selectors.buttonsTarget,
			this.node,
			this.settings.activeClass
		);

		// back sub buttons on mobile
		this.backSubButtons = Toggle.init(
			this.selectors.subBackButtons,
			this.selectors.subButtonsTarget,
			this.node,
			this.settings.activeClass
		);

		//various
		this.mobileToggle = document.querySelector(this.selectors.mobileToggle);
		this.mainWrapper = document.querySelector(this.selectors.mainWrapper);
	}

	addListener() {
		//mobile toggle button
		this.mobileToggle.addEventListener('click', this.onToggle.bind(this));
	}

	onToggle() {
		//toggle various classes to open/close mobile nav
		this.mobileToggle.classList.toggle(this.settings.activeClass);
		this.node.classList.toggle(this.settings.activeClass);
		this.mainWrapper.classList.toggle(this.settings.wrapperClass);

		//reset all buttons
		this.resetAll(this.buttons);
		this.resetAll(this.subButtons);
	}

	resetAll(items) {
		items.forEach(item => {
			item.target.classList.remove(this.settings.activeClass);
			item.target.removeAttribute('aria-expanded');
		});
	}
}