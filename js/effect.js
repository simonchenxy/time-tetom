

var $poster = $('.poster'),
  w = $(window).width(), //window width
  h = $(window).height(); //window height

$(window).on('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, //cursor position X
    offsetY = 0.5 - e.pageY / h, //cursor position Y
    dy = e.pageY - h / 2, //@h/2 = center of poster
    dx = e.pageX - w / 2, //@w/2 = center of poster
    theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
    angle = theta * 180 / Math.PI - 90, //convert rad in degrees
    offsetPoster = $poster.data('offset'),
    transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg) '; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }

  $poster.css('transform', transformPoster);

  

});

if (w < 768) {
    $(window).off("mousemove")
  }