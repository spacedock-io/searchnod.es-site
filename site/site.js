steal(
	'can',
	'./home/home.js',
	'./snippet-list/snippet-list.js',
	//'./fixtures.js',
	function(can, home, snippetList) {

		var snippets = new can.Map({
			snippets: [],
			performSearch: function(a) {
				snippets.attr('snippets', []);
				$('.spinner').removeClass('hidden');
				var searchInput = $('.search-input');
				searchInput.blur();
				var searchTerm = $('.search-input').val();
				setTimeout(function(){
					snippets.attr('snippets', new snippetList.List({ searchTerm: searchTerm }));
				}, 1000);
				return false;
			}
		});

		var colorTimeout;
		snippets.bind('change', function() {
			if (snippets.snippets.length > 0) {
				if (colorTimeout) {
					clearTimeout(colorTimeout);
					colorTimeout = undefined;
				}
				colorTimeout = setTimeout(function() {
					Rainbow.color();
					$('.spinner').addClass('hidden');
				}, 500);
			}
		});

		var view = can.view.mustache('<home-app></home-app>')(snippets);
		can.$('#app').html(view);

	}
);
