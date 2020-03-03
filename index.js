$(document).ready(function () {
  var $animationElementsLeft = [$('.third-section .section-content .image-container')];
  var $animationElementsRight = [$('.third-section .section-content .content-container')];
  var $animationElementsFade = [$('.fourth-section'), $('.fifth-section'), $('.sixth-section'), $('.seventh-section')];
  var $window = $(window);

  function checkIfInView() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElementsLeft, function () {
      var $element = $(this);
      var elementHeight = $element.height();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
        $element.addClass('slide-left');
      }
    });

    $.each($animationElementsRight, function () {
      var $element = $(this);
      var elementHeight = $element.height();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
        $element.addClass('slide-right');
      }
    });

    $.each($animationElementsFade, function () {
      var $element = $(this);
      var elementHeight = $element.height();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
        $element.addClass('fade-in');
      }
    });
  }

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});