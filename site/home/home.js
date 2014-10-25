steal(
  'can',
  function(can) {
    console.log("QWEQWEQWEQWEa");
    return can.Component.extend({
      tag: 'home-app',
      template: can.view('./site/home/home.mustache'),
      events: {
        inserted: function(){
          console.log('eldoka?');
        },
        'form submit': function(el, ev) {
          // Don't submit the form
          console.log('elo!');
          ev.preventDefault();
          return false;
        }
      }
    });
  }
);
