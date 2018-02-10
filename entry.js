import Board from './board';

setupBoard();
let counter = 0;

function setupBoard(){
  let board = document.getElementById('board');
  let square;
  for (var i = 0; i < 64; i++) {
    square = document.createElement('li');
    if (i % 2 == 0 && Math.floor(i/8) % 2 === 1) {
      square.className = 'black-square'
    }
    if(i % 2 == 1 && Math.floor(i/8) % 2 === 0){
      square.className = 'black-square'
    }
    board.append(square);
  }
}


let start = document.getElementById('start-game');
start.addEventListener('click',function(){
  counter = 0;
  let score = document.getElementById('score')
  score.innerHTML = "Score: " + counter;
  timer();
  var ul = document.getElementById("board");
  //items is a list of sorts
  var items = ul.getElementsByTagName("li");
  for (var i = 0; i < items.length; ++i) {
    // do something with items[i], which is a <li> element
    blink(items[i])
  }
});

let board = document.getElementById('board');
board.addEventListener('click', function(e){
  //the LI needs to be in caps otherwise doen't work
  if (e.target && e.target.nodeName=='LI') {
    if (e.target.className === 'red-square') {
      counter+=2
    }else{
      counter-=1
    }
    e.target.className = 'bold'
    console.log(counter)

    score.innerHTML = "Score: " + counter;
  }
});

//blinks for 20 seconds
function blink(square){
  let random;
  let interval = setInterval(function(){
    random = Math.floor(Math.random()*17)
    // console.log(random)
    if(random > 5){
      square.className = 'black-square'
    }
    else if(random === 5){
      square.className = 'orange-square'
    }
    else if(random === 4){
      square.className = 'yellow-square'
    }else if(random === 3){
      square.className = 'green-square'
    }else if (random === 2) {
      // square.classList.add('dark-square')
      square.className = 'purple-square'
    }else if (random === 1){
      // square.classList.add('red-square')
      square.className = 'red-square'
    }else if (random === 0){
      square.className = 'blue-square'
    }
  },800)
  setTimeout(function(){
    clearInterval(interval)
    var ul = document.getElementById("board");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < 64; ++i) {
      items[i].className='black-square';
    }
  },20000)
}



function timer(){
  let remaining = 20;
  let timer = document.getElementById('timer')
  let interval = setInterval(function(){
    remaining-=1;
    timer.innerHTML = remaining;
  },1000)
  setTimeout(function(){
    clearInterval(interval);
  },20000)
}
