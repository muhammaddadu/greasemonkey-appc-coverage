// Loads all scripts
function Runner() {
	request(function(err, data) {
		console.log(err, data);
	});
}

// Start script
Runner();