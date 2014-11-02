steal(
	'can',
	'./home/home.js',
	'./snippet-list/snippet-list.js',
	//'./fixtures.js',
	function(can, home, snippetList) {

		var snippetBox = new can.Map({
			snippets: [],
			performSearch: function(a) {
				$('.no-results').addClass('hidden');
				snippetBox.attr('snippets', []);
				$('.spinner').removeClass('hidden');
				var searchInput = $('.search-input');
				searchInput.blur();
				var searchTerm = $('.search-input').val();
				setTimeout(function() {
					snippetList.findAll({ searchTerm: searchTerm }).then(
						function(data) {
							snippetBox.attr('snippets', data);
						},
						function() {
							noResults();
						}
					);
				}, 1000);
				return false;
			}
		});

		var noResults = function(){
			$('.no-results').removeClass('hidden');
			$('.spinner').addClass('hidden');
		};

		var colorTimeout;
		snippetBox.bind('change', function() {
			if (snippetBox.snippets.length > 0) {
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

		var view = can.view.mustache('<home-app></home-app>')(snippetBox);
		can.$('#app').html(view);

	}
);
