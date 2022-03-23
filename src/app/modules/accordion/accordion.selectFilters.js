
export default class AccordionSelectFilters {

	constructor(node, selectAttribute, categoriesAttribute) {
		this.node = node;
		this.selectAttribute = selectAttribute;
		this.categoriesAttribute = categoriesAttribute;
		this.select = this.node.querySelector(`[${this.selectAttribute}]`)
		this.categories = Array.from(this.node.querySelectorAll(`[${this.categoriesAttribute}]`));

		this.data = this.getData();
		

		if (this.select != undefined) {
			this.addListener();
		}
	}

	addListener() {
		this.select.addEventListener('change', (e) => {
			this.onChange(e.currentTarget)
		});
	}

	getData() {
		let filteredArray = [];
		this.categories.forEach(category => {
			filteredArray.push({
				node: category,
				categories: category.getAttribute(this.categoriesAttribute).replace(/\s/g, '').split(',')
			})
		})
		return filteredArray;
	}

	onChange(node) {
		this.currentSelection = node.options[node.selectedIndex].value;
		if (this.currentSelection !== '0') {
			this.filterCategory();
		} else {
			this.reset();
		}
	}

	filterCategory() {
		let selectedElements = [];
		this.data.forEach(item => {
			item.node.style.display = 'none';
			const findCat = item.categories.find(x => {
				return x === this.currentSelection;
			})
			if(findCat !== undefined) {
				selectedElements.push(item)
			}
		})
		selectedElements.forEach(item => item.node.style.display = 'block');
	}

	reset() {
		this.data.forEach(item => item.node.style.display = 'block');
	}
}
