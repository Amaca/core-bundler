const DEBUG = true;

export default class Logs {

	static debug(...args) {
		if (DEBUG) {
			console.log(...args);
		}
	}

	static log(...args) {
		console.log(...args);
	}

	static error(...args) {
		console.error(...args);
	}
}