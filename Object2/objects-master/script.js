/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, bottom, right, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.bottom = bottom
  this.right = right
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left +'px;bottom:'+this.bottom+'xp;right:'+this.right+ 'px;position:absolute;" />';
  };

  this.moveRight = function () {
    this.left += 100;
    // console.log('ok: ' + this.left);
  };

  this.moveLeft = function () {
    this.right += 100;
    // console.log('ok: ' + this.left);
  };

  this.moveBottom = function () {
    this.top += 100;
    // console.log('ok: ' + this.left);
  };

  this.moveTop = function () {
    this.bottom += 100;
    // console.log('ok: ' + this.left);
  };




}


var hero = new Hero('pikachu.png', 20, 30,20,30, 200);
// console.log(top)

function start() {
  let top = hero.top
  if (hero.left < window.innerWidth - hero.size && top == top) {
    hero.moveRight();
    console.log('move right', hero.right);
  } else if (hero.left > window.innerWidth - hero.size && window.innerHeight - hero.size > hero.top) {
    hero.moveBottom()
    console.log('move bot');
  } else if (hero.right < window.innerWidth - hero.size && hero.bottom == hero.bottom) {
    hero.moveLeft()
    console.log('move left');
  } else if (hero.left === 30) {
    hero.moveTop()
    console.log('move top');
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50)
}

start();
// function Hero(image, top, left, size, speed) {
//   this.image = image;
//   this.top = top;
//   this.left = left;
//   this.size = size;
//   this.speed = speed;
//   this.getHeroElement = function () {
//       return '<img width="' + this.size + '"' +
//           ' height="' + this.size + '"' +
//           ' src="' + this.image + '"' +
//           ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
//   };
//   this.moveRight = function () {
//       this.left += 30;
//       console.log('ok: ' + this.left);
//   };
//   this.moveDown = function () {
//       this.top += 30;
//       console.log('ok: ' + this.top);
//   };
//   this.moveLeft = function () {
//       this.left -= 30;
//       console.log('ok: ' + this.left);
//   }
//   this.moveUp = function () {
//       this.top -= 30;
//       console.log('ok: ' + this.top);
//   }
// }
// var hero = new Hero('suppermen.jpg', 20, 30, 100);
// function start() {
//   if (hero.left < window.innerWidth - hero.size && hero.top == 20) {
//       hero.moveRight();
//   } else if (hero.left > window.innerWidth - hero.size && window.innerHeight - hero.size > hero.top) {
//       hero.moveDown();
//   } else if (window.innerHeight - hero.size < hero.top) {
//       hero.moveLeft();
//   }
//   if (hero.left === 0) {
//       hero.moveUp();
//   }
//   document.getElementById('game').innerHTML = hero.getHeroElement();
//   setTimeout(start, 50)
// }
// start();
