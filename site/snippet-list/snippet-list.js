steal(
  'can',
  function(can) {
    console.log('snippeyqwet');

    var Snippets = can.Model.extend({
      findAll: "POST /search"
    }, {});

    can.Component.extend({
      tag: 'snippet-list',
      template: can.view('./site/snippet-list/snippet-list.mustache'),
      scope: new Snippets.List({})
    });

    return Snippets;
  }
);
