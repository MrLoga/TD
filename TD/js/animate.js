var Animate = {};
Animate.log = document.getElementById("Alog");


if ( !window.requestAnimationFrame ) {
  window.requestAnimationFrame = ( function() {
    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
      window.setTimeout( callback, 1000 / 60 );
    };
  })();
}
var i = 0;

function animate() {
  i++;
  Animate.log.value = i;
  Foe.draw();
  requestAnimationFrame(animate);
}
animate();