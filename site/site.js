steal(
	'can',
	'./home/home.js',
	function(can, home) {
		jQuery('#app').html(can.view.mustache('<home-app></home-app>'));
	}
);
