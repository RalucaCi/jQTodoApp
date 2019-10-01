// Check off todos by clicking on them
$('ul').on('click', 'li', function() {
	$(this).toggleClass('done');
});

// Click on x to delete todo
$('ul').on('click', 'span', function(event) {
	event.stopPropagation();
	// first fadeout then remove:
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

// Create a new entry in Todo list
$("input[type='text']").keypress(function(event) {
	// this will listen for the ENTER key - nr 13:
	if (event.which === 13) {
		// grab new todo text from input
		var todoText = $(this).val();
		// create a new li and add to ul
		$('ul').append('<li><span><i class="fas fa-trash"></i></span> ' + todoText + '</li>');
		// clear text input area
		$(this).val('');
	}
});

// Toggle the input area using the edit icon
$('span').click(function() {
	$("input[type='text']").fadeToggle();
});
