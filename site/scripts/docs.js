//js ../site/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs", function(DocumentJS){
	DocumentJS('../site/index.html', {
		out: 'site/docs',
		markdown : ['site', 'steal', 'jquerypp', 'can', 'funcunit'],
		parent : 'site'
	});
});