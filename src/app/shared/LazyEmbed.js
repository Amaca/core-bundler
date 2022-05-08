import EventEmitter from './EventEmitter.js';
import Logs from './logs.js';
export default class LazyEmbed extends EventEmitter {

	constructor(node) {
		super();
		this.node = node;
		this.data = JSON.parse(node.getAttribute('data-embed'));
		this.loaded();
		this.switchCase();
	}

	switchCase() {
		switch(this.data.type) {
			case 'form':
				this.addScript(this.data.url, this.initForm);
			break;
			case 'video':
				this.addIframe(this.data.url, this.initVideo);
			break;
		}
		
	}

	initForm() {
		const selector = 'id-' + this.data.settings.portalId;
		const settings = Object.assign(this.data.settings, {
			'target': '#' + selector
		});
		this.node.setAttribute('id', selector);
		window.hbspt.forms.create(settings);
		if (document.getElementsByName("url_last_submission")[0]) {
			document.getElementsByName("url_last_submission")[0].value = document.location.href;
		}
		
	}

	initVideo() {
		
	}

	addScript(src, callback) {
		const item = document.createElement('script');
		item.setAttribute( 'charset', 'utf-8' );
		item.setAttribute( 'type', 'text/javascript' );
		item.setAttribute( 'src', src );
		item.onload = callback.bind(this);
		this.node.appendChild(item);
	}

	addIframe(src, callback) {
		const item = document.createElement('iframe');
		const attributes = Object.keys(this.data.settings).map((key) => {
			let value = this.data.settings[key];
			return { 
				'name': key, 
				'value': Array.isArray(value) ? value.join(';') : value
			}
		});
		attributes.forEach(attr => {
			item.setAttribute(attr.name, attr.value);
		})
		item.setAttribute('src', src);
		item.onload = callback.bind(this);
		this.node.appendChild(item);
	}

	loaded() {
		Logs.debug('LazyEmbed', this.data.type + ' loaded');
		this.trigger('lazyEmbedLoaded');
	}
}
