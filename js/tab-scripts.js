// tabbed content
function kill_links(event) {
   event.preventDefault();
}
$('#tabbed nav a').click(kill_links);

// $('#tabbed section').hide();

$('#tabbed section:gt(0)').hide();

function tab_click() {
	$('#tabbed nav a').removeClass('chosen')
	$(this).addClass('chosen');

	var theHref = $(this).attr('href');

	$('#tabbed section').hide();
	$(theHref).show();
}

$('#tabbed nav a').click(tab_click);

