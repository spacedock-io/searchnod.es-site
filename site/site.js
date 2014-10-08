steal(
	'can',
	'./home/home.js',
	'./snippet-list/snippet-list.js',
	'./fixtures/fixtures.js',
	function(can, home, snippetList) {
		can.$('#app').html(can.view('./site/snippet-list/snippet-list.mustache', {
			snippets: new snippetList.List({})
		}));
	}
);
