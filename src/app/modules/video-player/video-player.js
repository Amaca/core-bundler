import Module from '../module.js';
import LazyEmbed from '../../shared/LazyEmbed.js';
import './video-player.scss';

export class VideoPlayerModule extends Module {

	constructor(el) {
		super(el);
	}

	init() {
		this.lazyEmbed = new LazyEmbed(this.node.querySelector('[data-embed]'));
		this.ready()
	}
}

export function createInstance() {
	const instance = new VideoPlayerModule();
	return instance;
}
