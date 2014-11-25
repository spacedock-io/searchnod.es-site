steal(
  'can/util/fixture',
  function(fixture) {
    var fixObject = {};
    fixObject["POST " + steal.config('apiLocation') + "/search?q={searchTerm}&from={from}&size={size}"] = function(request, response) {
      response({
        "hits": {
          "total": 228,
          "hits": [
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
