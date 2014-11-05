steal(
  'can',
  function(can) {
    return can.Component.extend({
      tag: 'home-app',
      template: can.view('./site/home/home.mustache')
    });
  }
);
