steal(
	'can',
	'./home/home.js',
	'./snippet-list/snippet-list.js',
	'./hilitor.js',
	'./router.js',
	//'./fixtures.js',
	function(can, home, snippetList, Hilitor) {
		var $ = can.$;
		var snippetBox = new can.Map({
			snippets: [],
			performSearch: function(a) {
				$('.no-results').addClass('hidden');
				snippetBox.attr('snippets', []);
				$('.spinner').removeClass('hidden');
				var searchInput = $('.search-input');
				searchInput.blur();
				var searchTerm = searchInput.val();

				can.route.attr({ searchTerm: searchTerm });
				snippetList.findAll({
					searchTerm: searchTerm,
					from: 0,
					size: 10
				}).then(
					function(data) {
						snippetBox.attr('snippets', data);
					},
					function(data) {
						noResults();
					}
				);
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

				Rainbow.color(document, function() {
					var hilitor = new Hilitor('code');
					hilitor.setMatchType('open');
					hilitor.apply($('.search-input').val());
					$('.spinner').addClass('hidden');
				});
			}
		});

		$(document).on('perform-search', function(ev, data) {
			if ($('.search-input').val() !== data) {
				$('.search-input').val(data);
				snippetBox.attr('performSearch')();
			}
		});

		$().ready(function(){
			var view = can.view.mustache('<home-app></home-app>')(snippetBox);
			can.$('#app').html(view);
			can.route.ready();
		});
	}
);
