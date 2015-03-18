function button(title, onclick) {
	var buttonGroup = $('.file-actions .button-group'),
		className = title.replace(' ', '-') + '-btn';
	buttonGroup.append('<button id="' + className + '" class="minibutton">' + title + '</button>');
	$('#' + className).click(onclick);
}