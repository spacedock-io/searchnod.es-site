steal.config({
  map: {
    "jquery/jquery": "jquery"
  },
  paths: {
    "steal/*" : "../*.js",
    "@traceur": "traceur/traceur.js",
    "can/*": "site/components/CanJS/*.js",
    "jquery": "site/components/jquery/dist/jquery.js"
  },
  meta: {
    jquery: {
      exports: "jQuery",
      format: "global"
    }
  },

  ext: {
    "mustache": "can/view/mustache/system"  
  },
  apiLocation: "http://localhost:8009",
  fixtures: false
});

if(steal.config('fixtures')) {
  System.meta['site/site'] = {
    deps: ['site/fixtures']
  };
}
