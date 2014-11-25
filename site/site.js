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
			doSearch: function(){
				can.route.attr('searchTerm', $('.search-input').val());
			},
			performSearch: function(a) {
				$('.no-results').addClass('hidden');
				snippetBox.attr('snippets', []);
				$('.spinner').removeClass('hidden');
				var searchInput = $('.search-input');
				searchInput.blur();
				var searchTerm = searchInput.val();

				can.route.attr({ searchTerm: searchTerm });
				var page = parseInt(can.route.attr('page'), 10) - 1 || 0;
				
				snippetList.findAll({
					searchTerm: searchTerm,
					from: page*resultsPerPage || 0,
					size: resultsPerPage
				}).then(
					function(data) {
						// XXX: this is very stupid but it's 6AM and after 20th beer
						// everything that works as expected is good enough
						// mmalecki is sleeping already hue hue hue.
						pageButtons.splice(0, pageButtons.length);
						var pages = [];
						for (var i= 0, l = ~~(data.total/resultsPerPage)+1; i<l; i++) {
							pages.push(i+1);
						}
						pageButtons.attr(pages);
						snippetBox.attr('snippets', data);
					},
					function() {
						pageButtons.splice(0, pageButtons.length);
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
			$('.search-input').val(data.searchTerm);
			snippetBox.attr('performSearch')();
		});

		$().ready(function(){
			var view = can.view.mustache('<home-app></home-app>')(snippetBox);
			can.$('#app').html(view);
			can.route.ready();
		});
	}
);
