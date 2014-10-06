steal(
  'can',
  function(can) {
    var ViewModel = can.Map.extend({});

    console.log('elo');
    return can.Component.extend({
      tag: 'home-app',
      template: can.view('./site/home/home.mustache'),
      scope: ViewModel
    });
  }
);
