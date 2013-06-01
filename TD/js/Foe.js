var Foe = {};
Foe.canvas = document.getElementById("Foe");
Foe.ctx = Foe.canvas.getContext("2d");
Foe.stock = [];
Foe.vars = {};
Foe.vars.Timeout = 50;
Foe.vars.TimeoutI = 0;
Foe.vars.wave = 0;


Foe.ctx.canvas.width = Common.cell.size * Common.cell.x;
Foe.ctx.canvas.height = Common.cell.size * Common.cell.y;


Foe.animate = function (){
  this.draw();
  this.vars.TimeoutI++;
  if(this.vars.TimeoutI == this.vars.Timeout && this.vars.wave < Level.scene1.wave){
    this.vars.wave++;
    this.vars.TimeoutI = 0;
    this.add();
  }
}

Foe.add = function(){
  var foe = new FoeObj();
  this.stock.push(foe);
}

function FoeObj(name, img) {
  this.name = name;
  var pic = new Image();
  pic.src = 'img/1.png';
  this.img = pic;
  this.speed = 0.6;
  this.x = 51;
  this.y = 1;
  this.Xshift = 0;
  this.Yshift = 1;
}

FoeObj.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, this.x, this.y);
};

FoeObj.prototype.update = function() {
  this.x += this.Xshift * this.speed;
  this.y += this.Yshift * this.speed;
  var FoeXCell = Math.ceil((this.x + 24) / Common.cell.size) - 1;
  var FoeYCell = Math.ceil((this.y + 24) / Common.cell.size) - 1;
  var map = Level.scene1.map;

  if (map[FoeYCell + 1][FoeXCell]){
    console.log(true);
    this.Xshift = 0;
    this.Yshift = 1;
  }else if(map[FoeYCell][FoeXCell + 1]){
    console.log(true);
    this.Xshift = 1;
    this.Yshift = 0;
  }else if(map[FoeYCell][FoeXCell - 1]){
    console.log(true);
    this.Xshift = -1;
    this.Yshift = 0;
  }else{
    console.log(true);
    this.Xshift = 0;
    this.Yshift = -1;
  }
};

Foe.draw = function(){
  this.ctx.clearRect(0, 0, Common.cell.x * Common.cell.size, Common.cell.y * Common.cell.size);
  for (var i = 0; i < this.stock.length; i++) {
    this.stock[i].update();
    this.stock[i].draw(this.ctx);
  }
};


