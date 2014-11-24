steal(
  'can',
  './example_searches.mustache!',
  function(can, exTemplate) {
    var seExamples = new can.List(
      [
        'crypto.randomBytes',
        'lodash OR underscore',
        'package:request crypto'
      ]
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
