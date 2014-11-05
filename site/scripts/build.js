//js ../site/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('../site/scripts/build.html',{to: '../site'});
});
