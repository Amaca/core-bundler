import Module from '../module.js';
import './usersAPI.scss';

export class UsersAPIModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.loaded();
	}
}

export function createInstance() {
	return new UsersAPIModule();
}