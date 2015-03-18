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

