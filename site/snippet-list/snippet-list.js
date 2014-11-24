steal(
  'can',
  './snippet-list.mustache!',
  function(can, snTemplate) {
    var Snippets = can.Model.extend({
      parseModels: function(response) {
        //this.attr('total', response.data.total);
        return response.data.hits;
      },
      findAll: "POST " + steal.config('apiLocation') + "/search?q={searchTerm}&from={from}&size={size}"
    }, {});

    can.Component.extend({
      tag: 'snippet-list',
      template: snTemplate,
      scope: new Snippets.List({})
    });

    return Snippets;
  }
);
