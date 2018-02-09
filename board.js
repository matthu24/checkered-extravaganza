console.log("hello")
//asdf
class Board {
  constructor(){
    this.grid = Board.makeGrid();
  }

  makeGrid(){
    let grid = [];
    for(let row = 0;row < 8;row++){
      grid.push([]);
      for(let col = 0;col < 8;col++){
        grid[row].push(null);
      }
    }
    return grid;
  }


}
