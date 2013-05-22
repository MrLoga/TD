// function Rect() {
//   this.x = Math.floor(Math.random() * (1024 - 2));;
//   this.y = Math.floor(Math.random() * (768 - 2));;
//   this.velocity = Math.random() > 0.5 ? -1 : 1;
// };

// Rect.prototype.draw = function(context, interpolation) {
//   context.fillRect(this.x, this.y + this.velocity * interpolation, 2, 2);
//   //context.fillStyle = 'red';
// };

// Rect.prototype.update = function() {
//   if (this.y < 0) {
//     this.velocity = 1;
//   } else if (this.y > 760) {
//     this.velocity = -1;
//   }
  
//   this.y += this.velocity;
// };
function ImageObj() {
  this.x = Math.floor(Math.random() * (window.innerWidth - 225));;
  this.y = Math.floor(Math.random() * (768 - 225));;
  this.velocity = Math.random() > 0.5 ? -5 : 2;
  
};

ImageObj.prototype.draw = function(context, interpolation) {
  context.drawImage(this.pic, this.x, this.y + this.velocity * interpolation);
};

ImageObj.prototype.update = function() {
  if (this.y < 0) {
    this.velocity = Math.random() * 3;
  } else if (this.y > 760 - 125) {
    this.velocity = Math.random() * (-3);
  }
  
  this.y += this.velocity;
};