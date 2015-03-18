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

