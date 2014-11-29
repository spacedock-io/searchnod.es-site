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

  fixtures: false,

  ///////////////////////
  // APP Configuration //
  ///////////////////////
  apiLocation: "http://localhost:8009",
  resultsPerPage: 10,
  exampleSearches: [
    'crypto.randomBytes',
    'lodash OR underscore',
    'package:request crypto'
  ],
  taglines: [
    'Dissecting code on npm, one search at the time',
    'Code search for npm'
  ]
});

if(steal.config('fixtures')) {
  console.log("FIXTURES USED");
  System.meta['site/site'] = {
    deps: ['site/fixtures']
  };
}

System.buildConfig = {map: {"can/util/util" : "can/util/domless/domless"}};
