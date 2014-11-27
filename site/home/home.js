steal(
  'can',
  './home.mustache!',
  './example_searches.js',
  function(can, hTemplate) {

    // Load taglines from stealconfig
    var taglines = steal.config('taglines');
    taglines.length = Object.keys(taglines).length;
    taglines = Array.prototype.slice.call(taglines);

    return can.Component.extend({
      tag: 'home-app',
      template: hTemplate,
      scope: {
        tagline: function() {
          return taglines.sort(function(){return 0.5 - Math.random()}).pop();
        }
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
