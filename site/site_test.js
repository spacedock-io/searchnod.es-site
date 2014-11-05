steal(
	'funcunit',
	function (S) {

	// this tests the assembly 
	module("site", {
		setup : function () {
			S.open("//../site/index.html");
		}
	});

	test("welcome test", function () {
		equals(S("h1").text(), "Welcome to JavaScriptMVC!", "welcome text");
	});

});
