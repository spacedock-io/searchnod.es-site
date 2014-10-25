steal(
  'can',
  function(can) {
    var ViewModel = can.Map.extend({
      elo: function() {
        console.log("EDJKSNA");
      }
    });

    return can.Component.extend({
      tag: 'home-app',
      template: can.view('./site/home/home.mustache'),
      scope: ViewModel,
      inserted: function() {
        console.log('ins');
      }
    });
  }
);
