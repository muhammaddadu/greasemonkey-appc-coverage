// ==UserScript==
// @name          	greasemonkey-appc-coverage
// @namespace     	https://github.com/
// @description   	GitHub Code Coverage Heat Map (using Greasemonkey)
// @include       	https://github.com/*
// @grant			GM_xmlhttpRequest
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js
// ==/UserScript==

// Make sure jQuery is in the scope
if (typeof $ == 'undefined') {
	this.$ = this.jQuery = jQuery.noConflict(true);
}

// Don't run on frames or iframes
if (window.top != window.self) {
    return;
}

/**
 * Gets the page information and sends a request to coverage.appcelerator.com
 */
function request(callback) {
	var page = {
		organization: null,
		repo: null,
		path: null
	};
	var ogtitle = $('meta[property="og:title"]').attr('content'),
			splitogtitle = ogtitle.split('/');
	
	if (splitogtitle.length !== 2) {
		return;
	}
	page.path = $('input[name="path"]').attr('value');
	page.organization = splitogtitle[0];
	page.repo = splitogtitle[1];
	
	var path = 'https://coverage.appcelerator.com/' + page.organization + '/' + page.repo + '.view?json=true';
	
	requestJsonData(path, function(data) {
		var current = data.current;
		if (current) {
			page.coverage = current.coverage;
			return callback(null, page);
		}
		return;
	});
}

/**
 * Sends a request and returns json data
 * @param [string] loc - request URL
 * @param [callback] callback(data) - JSON data returned from the request
 */
function requestJsonData(loc, callback) {
	GM_xmlhttpRequest({
		method: "GET",
		url: loc,
		onload: function(xhr) {
			var data = eval("(" + xhr.responseText + ")");
	        try {
	            callback(JSON.parse(data));
	        } catch (e) {
	            callback(data);
	        }
		}
	});
}

// Loads all scripts
function Runner() {
	request(function(err, data) {
		console.log(err, data);
	});
}

// When the page has loaded
$(document).ready(function() {
	// Start script
	Runner();
});

