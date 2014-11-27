steal(
  'can',
  function(can) {
    var routerAction = function(data) {
      can.$(document).trigger(
        'perform-search',
        { searchTerm: data.searchTerm }
      );
    };

    var Router = can.Control({
      ':searchTerm route': routerAction,
      ':searchTerm/:page route': routerAction
    });

    new Router(window);
  }
);
