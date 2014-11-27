steal(
  'can',
  './example_searches.mustache!',
  function(can, exTemplate) {

    // Load search examples from stealconfig
    var examples = steal.config('exampleSearches');
    examples.length = Object.keys(examples).length;

    var seExamples = new can.List(
      Array.prototype.slice.call(examples)
    );

    return can.Component.extend({
      tag: 'example-searches',
      template: exTemplate,
      scope: {
        exampleSearches: seExamples
      }
    });
  }
);
