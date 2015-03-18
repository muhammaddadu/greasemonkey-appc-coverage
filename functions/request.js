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
	page.path = $('input[name="path"]').val();
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

