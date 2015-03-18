// Loads all scripts
function Runner() {
	request(function(err, data) {
		var status = false,
			hm = new heatmap(data);
		
		if (!hm) {
			return;
		}

		button('Toggle Coverage', function() {
			if (!status) {
				hm.on();
				console.log('Coverage ON');
			} else {
				hm.off();
				console.log('Coverage OFF');
			}
			status = !status;
		});
	});
}

// When the page has loaded
$(document).ready(function() {
	// Start script
	Runner();
});
