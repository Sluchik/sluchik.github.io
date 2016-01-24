$(function(){

var $navLeft = $('.carousel__nav__left');
var $navRight = $('.carousel__nav__right');
var $caruselBlock = $('.carousel__block');

var offset = 125;
var curentValue = 0;
function moveLeft(){
 curentValue +=150;
 $caruselBlock.animate({left: curentValue + 'px'}, 1000);
}
function moveRight(){
  curentValue -=150;
  $caruselBlock.animate({left: curentValue + 'px'}, 1000);
}

$navLeft.on('click', moveLeft);
$navRight.on('click', moveRight);


})
