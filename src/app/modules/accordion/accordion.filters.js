import AccordionModule from './accordion.js'
import './accordion.scss';

export default class AccordionFiltersModule extends AccordionModule {

	constructor(el) {
		super(el);
	}

	setOptions() {
		this.options.selectors = {
			buttonAttribute: 'accordion-button',
			contentAttribute: 'accordion-content',
			activeClass: 'active'
		};

		this.options.settings = {
			closeOthers: false,
			toggleCurrent: false,
			filtersSelect: true,
			defaultElementId: ''
		}
	}
}

export function createInstance() {
	const instance = new AccordionFiltersModule();
	return instance;
}
