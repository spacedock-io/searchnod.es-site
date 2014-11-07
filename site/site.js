steal(
	'can',
	'./home/home.js',
	'./snippet-list/snippet-list.js',
	'./fixtures.js',
	function(can, home, snippetList) {

		var snippets = new can.Map({
			snippets: [],
			performSearch: function(a) {
				snippets.attr('snippets', new snippetList.List({}));
				return false;
			}
		});

		var view = can.view.mustache('<home-app></home-app>')(snippets);
		can.$('#app').html(view);

		// setTimeout(function() {
		// 	console.log(snippets);
		// 	snippets.attr('snippets', new snippetList.List({}));
		// }, 1000);
	}
);
