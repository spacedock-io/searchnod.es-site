steal(
	'can',
	'./home/home.js',
	'./snippet-list/page_buttons.js',
	'./snippet-list/snippet-list.js',
	'./hilitor.js',
	'./router.js',
	function(can, home, pageButtons, snippetList, Hilitor) {
		var resultsPerPage = steal.config('resultsPerPage');

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
				var page = can.route.attr('page');

				snippetList.findAll({
					searchTerm: searchTerm,
					from: page || 0	,
					size: resultsPerPage
				}).then(
					function(data) {
						var pages = [];
						for (var i= 0, l = ~~(data.total/resultsPerPage)+1; i<l; i++) {
							pages.push(i+1);
						}
						pageButtons.attr(pages);
						snippetBox.attr('snippets', data);
					},
					function() {
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

		snippetBox.bind('change', function() {
			if (snippetBox.snippets.length > 0) {
				Rainbow.color(document, function() {
					var hilitor = new Hilitor('code');
					hilitor.setMatchType('open');
					hilitor.apply($('.search-input').val());
					$('.spinner').addClass('hidden');
				});
			}
		});

		$(document).on('perform-search', function(ev, data) {
			if ($('.search-input').val() !== data.searchTerm) {
				$('.search-input').val(data.searchTerm);
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
