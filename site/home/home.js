steal(
  'can',
  './home.mustache!',
  './example_searches.js',
  function(can, hTemplate) {
    return can.Component.extend({
      tag: 'home-app',
      template: hTemplate,
      scope: {
      },
      events: {
        'form submit': function(el, ev) {
          // Don't submit the form
          ev.preventDefault();
          return false;
        }
      }
    });
  }
);
