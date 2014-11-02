steal(
  'can',
  function(can) {
    var Router = can.Control({
      ':searchTerm route': function(data) {
        console.log('sercz', data);
        can.$(document).trigger('perform-search', data.searchTerm);
      }
    });

    new Router(window);
  }
);
