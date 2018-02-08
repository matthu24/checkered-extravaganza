import Board from './board';

function setupBoard(){
  let board = document.getElementById('board');
  let square;
  for (var i = 0; i < 64; i++) {
    square = document.createElement('li');
    // square.innerHTML = '';
    board.append(square);
    //add a dark square every other, but we need to switch every row too
    if (i % 2 == 0 && Math.floor(i/8) % 2 === 1) {
      square.classList.add('dark-square')
    }
    if(i % 2 == 1 && Math.floor(i/8) % 2 === 0){
      square.classList.add('dark-square')
    }
  }
}

setupBoard();

//
// 0-7   Math.floor(i/8) % 2 == 0
// 8-15
// 16-23
// 24-31
// 32-39
// 40-47