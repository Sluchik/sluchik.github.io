var hour = document.querySelector('.hour');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
var milisec = document.querySelector('.milisec');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');
var hourCounter = 0;
var minCounter =  0;
var secCounter =  0;
var miliSecCounter =  0;
var startT;
var n;

var app = {

  timer: function(){
  miliSecCounter++;
    if(miliSecCounter >= 100){
      miliSecCounter = 0;
      secCounter++
    }

    if(secCounter >= 60){
       secCounter = 0;
       minCounter++
}
    if(minCounter >= 60){
      minCounter = 0;
      hourCounter++
}
     if(hourCounter >= 24){
     hourCounter = 0;
}
milisec.innerHTML = '<p>'+('0'+ miliSecCounter+'0').slice(-3) +'</p>';
sec.innerHTML = '<p>'+('0'+ secCounter).slice(-2) +'</p>';
min.innerHTML = '<p>'+('0'+ minCounter).slice(-2) +'</p>';
hour.innerHTML = '<p>'+('0'+ hourCounter).slice(-2) +'</p>';
},
startTimer: function(){
    startT =  setInterval(app.timer, 10);
    start.disabled = true;
    stop.disabled = false;
},
clearTimer: function(){
  miliSecCounter = '00';
  secCounter = 0;
  minCounter = 0;
  hourCounter = 0;
  milisec.innerHTML = '<p>'+('0'+ miliSecCounter).slice(-2) +'</p>';
  sec.innerHTML = '<p>'+('0'+ secCounter).slice(-2) +'</p>';
  min.innerHTML = '<p>'+('0'+ minCounter).slice(-2) +'</p>';
  hour.innerHTML = '<p>'+('0'+ hourCounter).slice(-2) +'</p>';
}
};

// start button
start.onclick = app.startTimer;
//stop button
stop.onclick = function() {
    clearTimeout(startT);
    start.disabled = false;
    stop.disabled = true;
}

clear.onclick = app.clearTimer;
