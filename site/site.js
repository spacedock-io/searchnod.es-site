steal(
	'can',
	'./home/home.js',
	'./snippet-list/snippet-list.js',
	//'./fixtures.js',
	function(can, home, snippetList) {

		var snippets = new can.Map({
			snippets: [],
			performSearch: function(a) {
				snippets.attr('snippets', new snippetList.List({}));
				return false;
			}
		});

		var colorTimeout;
		snippets.bind('change', function() {
			if (colorTimeout) {
				clearTimeout(colorTimeout);
				colorTimeout = undefined;
			}
			colorTimeout = setTimeout(Rainbow.color, 500);
		});

		var view = can.view.mustache('<home-app></home-app>')(snippets);
		can.$('#app').html(view);

	}
);
