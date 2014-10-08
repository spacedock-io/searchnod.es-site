steal(
	'can',
	'./home/home.js',
	'./snippet-list/snippet-list.js',
	'./fixtures.js',
	function(can, home, snippetList) {
		can.$('#app').html(can.view('./site/home/home.mustache', {
			snippets: new snippetList.List({})
		}));
	}
);
