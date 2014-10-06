steal('can',
function (can) {

  can.view.attr('app-navigate', function(el) {
    var $el = $(el);
    var direction = $el.attr('app-navigate') === 'forward' ? 1 : -1;

    $el.bind('click', function () {
      window.history.go(direction);
    });
  });
});