steal(
	//'../javascriptmvc/can/can.js',
	'../javascriptmvc/can/view/mustache/mustache.js',
	'./home/home.js',
	function(can, home) {
		$('#app').html(can.view.mustache('<home-app></home-app>'));
	}
);
