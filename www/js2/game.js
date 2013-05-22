var Game = {};

Game.fps = 120;

Game.initialize = function() {
  this.entities = [];

  console.log(this);
  this.context = document.getElementById("viewport").getContext("2d");
  this.context.canvas.width = window.innerWidth - 100;
  console.log(this);
};

Game.draw = function(interpolation) {
  this.context.clearRect(0, 0, window.innerWidth - 100, 768);

  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context, interpolation);
  }

};

Game.update = function() {
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
};

Game.addImage = function() {
  var picObj = new ImageObj();
  var pic = new Image();
  pic.src = 'opera.png';
  picObj.pic = pic;

  Game.entities.push(picObj);
};