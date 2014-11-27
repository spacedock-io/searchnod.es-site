steal(
  'can',
  './page_buttons.mustache!',
  function(can, pbTemplate) {
    var pages = new can.List([]);

    can.Component.extend({
      tag: 'page-buttons',
      template: pbTemplate,
      scope: {
        pages: pages,
        searchTerm: function(){
          return can.route.attr('searchTerm');
        }
      }
    });

    return pages;
  }
);
