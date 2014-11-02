steal(
  'can',
  function(can) {
    var Snippets = can.Model.extend({
      findAll: "POST http://localhost:8009/search?q={searchTerm}"
    }, {});

    can.Component.extend({
      tag: 'snippet-list',
      template: can.view('./site/snippet-list/snippet-list.mustache'),
      scope: new Snippets.List({})
    });

    return Snippets;
  }
);
