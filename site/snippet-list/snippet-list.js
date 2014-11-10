steal(
  'can',
  function(can) {
    var Snippets = can.Model.extend({
      findAll: "POST " + steal.config('apiLocation') + "/search?q={searchTerm}"
    }, {});

    can.Component.extend({
      tag: 'snippet-list',
      template: can.view('./site/snippet-list/snippet-list.mustache'),
      scope: new Snippets.List({})
    });

    return Snippets;
  }
);
