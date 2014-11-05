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
  }
});
