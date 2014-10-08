steal(
	'can',
	'./home/home.js',
	'./snippet-list/snippet-list.js',
	'./fixtures.js',
	'./routes.js',
	function(can, home, snippetList) {

		var snippets = new can.Map({
			snippets: []
		});

		var view = can.view('./site/home/home.mustache', snippets);
		can.$('#app').html(view);

		setTimeout(function() {
			console.log(snippets);
			snippets.attr('snippets', new snippetList.List({}));
		}, 1000);
	}
);
