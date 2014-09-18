
(function () {
  "use strict"

  var $box = $('.danmaku')
  var $items = $box.children()
  $items.each(function () {
    var $this = $(this)

    var show = function () {
      if ($this.prop('shown')) {
        return null
      }
      $this.prop('shown', true)
      var distance = $(window).width() + $this.width()
      setTimeout(function () {
        $this.css('transform', 'translate(-'+distance+'px)')
      }, delay)
    }

    var hover = $this.data('hover')
    if (hover) {
      $(hover).mouseenter(show)
    }

    var y = $this.data('y')
    if (y) {
      $this.css('top', y)
    }

    var delay = $this.data('delay') * 1000 || 0
  })

})()
