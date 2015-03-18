// ==UserScript==

// @name          	greasemonkey-appc-coverage

// @namespace     	https://github.com/

// @description   	GitHub Code Coverage Heat Map (using Greasemonkey)

// @include       	https://github.com/*

// @grant			none

// ==/UserScript==

/**
 * Gets the page information and sends a request to coverage.appcelerator.com
 */
function request(callback) {
	var page = {
		organization: null,
		repo: null,
		file: null
	};
	return callback(null);
}

// Loads all scripts
function Runner() {
	request(function(err, data) {
		console.log(err, data);
	});
}

// Start script
Runner();