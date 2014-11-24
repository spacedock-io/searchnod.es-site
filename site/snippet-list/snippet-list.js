steal(
  'can',
  './snippet-list.mustache!',
  function(can, snTemplate) {
    var Snippets = can.Model.extend({
      findAll: "POST " + steal.config('apiLocation') + "/search?q={searchTerm}&{searchTerm}&from={from}&size={size}"
    }, {});

    can.Component.extend({
      tag: 'snippet-list',
      template: snTemplate,
      scope: new Snippets.List({})
    });

    return Snippets;
  }
);
