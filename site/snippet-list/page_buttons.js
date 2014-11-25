steal(
  'can',
  './page_buttons.mustache!',
  function(can, pbTemplate) {
    var pages = new can.List([1]);

    can.Component.extend({
      tag: 'page-buttons',
      template: pbTemplate,
      scope: {
        pages: pages,
        loadPage: function(){
          console.log('no hej');
        }
      }
    });

    return pages;
  }
);
