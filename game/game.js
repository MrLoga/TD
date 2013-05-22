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
var body = document.body;
var clickEventType = ((document.ontouchstart!==null) ? 'click': 'tap');
var startEventType = ((document.ontouchstart!==null) ? 'mousedown': 'touchstart');
var moveEventType = ((document.ontouchmove!==null) ? 'mousemove': 'touchmove');
var endEventType = ((document.ontouchend!==null) ? 'mouseup': 'touchend');

var canvas, ctx;

var Field = {};
Field.step = 50;
Field.width = 10;
Field.height = 8;
Field.gridColor = '#aaaaaa';
var foe = {};
foe.X = 25;
foe.Y = 75;

Field.coords = function(ctx){
  
  var canvas = $('#game')
  canvas.on(moveEventType, function(e) {
  var body = document.body;
  var x = e.clientX + (window.pageXOffset || body.scrollLeft || 0) - canvas.offset().left;
  var y = e.clientY + (window.pageYOffset || body.scrollTop || 0) - canvas.offset().top;
  // $('#xx').val(x);
  // $('#yy').val(y);
  // var fieldItem = '';
  // var fix = Math.ceil(x/50);
  // var fiy = Math.ceil(y/50);
  // var qw = 'x' + fix + '_y' + fiy;
  // $('#qw').val(qw);
  
  });
}

function init() {
  
  canvas = document.getElementById('game');
  canvas.width = Field.step * Field.width;
  canvas.height = Field.step * Field.height;
  ctx = canvas.getContext('2d');
  ctx.translate(0.5, 0.5);
  Field.coords(ctx);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  drawGrid();
  if(foe.Y > Field.step * Field.height){
    foe.Y--;  
  }else{
    foe.Y++;
  }
  if(foe.X > Field.step * Field.width){
    foe.X--;  
  }else{
    foe.X++;
  }
  
  draw();

  $('#xx').val(foe.X);
  $('#yy').val(foe.Y);
  var fieldItem = '';
  var fix = Math.ceil(foe.X/50);
  var fiy = Math.ceil(foe.Y/50);
  var qw = 'x' + fix + '_y' + fiy;
  $('#qw').val(qw);
}

function drawGrid() {
    
    ctx.strokeStyle = Field.gridColor;
    ctx.lineWidth = 0.5;
    for (i = 0; i < Field.width; i++){
       ctx.beginPath();
       ctx.moveTo(i * Field.step, 0);
       ctx.lineTo(i * Field.step, Field.step * Field.height);
       ctx.stroke();
       ctx.closePath();
    }
    for (i = 0; i < Field.height; i++){
       ctx.beginPath();
       ctx.moveTo(0, i * Field.step);
       ctx.lineTo(Field.width * Field.step, i * Field.step);
       ctx.stroke();
       ctx.closePath();
    }
}
  
function draw() {
  ctx.beginPath();
  ctx.arc(foe.X, foe.Y, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.stroke();
}
