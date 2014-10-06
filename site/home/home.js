steal(
  '../../javascriptmvc/can/can.js',
  '../../javascriptmvc/can/view/mustache/mustache.js',
  function(can) {
    var ViewModel = can.Map.extend({});

    console.log('elo');
    return Component.extend({
      tag: 'home-app',
      template: can.view.mustache('./home/home.stache'),
      scope: ViewModel,
    });
  }
);
