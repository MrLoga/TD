var Foe = {};
Foe.canvas = document.getElementById("Foe");
Foe.ctx = Foe.canvas.getContext("2d");
Foe.stock = [];

Foe.ctx.canvas.width = Common.cell.size * Common.cell.x;
Foe.ctx.canvas.height = Common.cell.size * Common.cell.y;


Foe.add = function(){
  var foe = new FoeObj();
  Foe.stock.push(foe);
}


function FoeObj(name, img) {
  this.name = name;
  var pic = new Image();
  pic.src = 'img/1.png';
  this.img = pic;
  this.speed = 0.5;
  this.x = 75;
  this.y = 25;
  this.Xshift = 0;
  this.Yshift = 1;
}

FoeObj.prototype.draw = function(ctx) {
  this.x = this.x + (this.Xshift * this.speed);
  this.y = this.y + (this.Yshift * this.speed);
  ctx.drawImage(this.img, this.x, this.y);
  console.log();
};

Foe.draw = function(){

  Foe.ctx.clearRect(0, 0, Common.cell.x * Common.cell.size, Common.cell.y * Common.cell.size);
  for (var i = 0; i < this.stock.length; i++) {
    this.stock[i].draw(this.ctx);
  }
};


var curWave = Level.scene1.wave;
while (curWave--) Foe.add();