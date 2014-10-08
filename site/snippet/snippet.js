steal(
  'can',
  function(can) {

    var SnippetModel = can.Model.extend({
      findAll: "POST /search?q={searchTerm}"
    }, {});

    return can.Component.extend({
      tag: 'snippet',
      template: can.view('./site/snippet/snippet.mustache'),
      scope: new SnippetModel
    });
  }
);
