steal(
  'can/util/fixture',
  function(fixture) {
    console.log('FIXTURES LOADED');
    var fixObject = {};
    fixObject["POST " + steal.config('apiLocation') + "/search?q={searchTerm}&from={from}&size={size}"] = function(request, response) {
      response({
        "data": {
          "total": 228,
          "hits": [
            {
              "package": "czarna-elka-w-koleczku-sie-mieni",
              "filename": "hwdp/policji.js",
              "author": "adrian spejson puchacki",
              "score": 1.2665461,
              "content": [
                "!function(a,b){\"object\"==typeof module&&\"object\"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error(\"jQuery requires a window with a document\");return b(a)}:b(a)}(\"undefined\"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString"
              ]
            },
            {
              "package": "npm",
              "filename": "lib/faq.js",
              "author": "othiym23",
              "score": 1.2665461,
              "content": [
                "faq.usage = \"npm faq\"\n\nvar npm = require(\"./npm.js\")\n\nfunction faq (args, cb) { npm.commands.help([\"faq\"], cb) }"
              ]
            },
            {
              "package": "npm",
              "filename": "lib/get.js",
              "author": "othiym23",
              "score": 1.1688331,
              "content": [
                "module.exports = get\n\nget.usage = \"npm get <key> <value> (See `npm config`)\"\n\nvar npm = require(\"./npm.js\")\n\nget.completion = npm.commands.config.completion",
                "get.completion = npm.commands.config.completion\n\nfunction get (args, cb) {\n  npm.commands.config([\"get\"].concat(args), cb)"
              ]
            }
          ]
        }
      });
    };

    return fixture(fixObject);
  }
);
