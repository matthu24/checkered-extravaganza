/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__board__);


setupBoard();
let counter = 0;

function setupBoard() {
  let board = document.getElementById('board');
  let square;
  for (var i = 0; i < 64; i++) {
    square = document.createElement('li');
    if (i % 2 == 0 && Math.floor(i / 8) % 2 === 1) {
      square.className = 'black-square';
    }
    if (i % 2 == 1 && Math.floor(i / 8) % 2 === 0) {
      square.className = 'black-square';
    }
    board.append(square);
  }
}

let start = document.getElementById('start-game');
start.addEventListener('click', function () {
  counter = 0;
  let score = document.getElementById('score');
  score.innerHTML = "Score: " + counter;
  timer();
  var ul = document.getElementById("board");
  //items is a list of sorts
  var items = ul.getElementsByTagName("li");
  for (var i = 0; i < items.length; ++i) {
    // do something with items[i], which is a <li> element
    blink(items[i]);
  }
});

let board = document.getElementById('board');
board.addEventListener('click', function (e) {
  //the LI needs to be in caps otherwise doen't work
  if (e.target && e.target.nodeName == 'LI') {
    if (e.target.className === 'red-square') {
      counter += 2;
    } else {
      counter -= 1;
    }
    e.target.className = 'bold';
    console.log(counter);

    score.innerHTML = "Score: " + counter;
    // console.log("hello")
  }
});

//blinks for 20 seconds
function blink(square) {
  let random;
  let interval = setInterval(function () {
    random = Math.floor(Math.random() * 17);
    // console.log(random)
    if (random > 5) {
      square.className = 'black-square';
    } else if (random === 5) {
      square.className = 'orange-square';
    } else if (random === 4) {
      square.className = 'yellow-square';
    } else if (random === 3) {
      square.className = 'green-square';
    } else if (random === 2) {
      // square.classList.add('dark-square')
      square.className = 'purple-square';
    } else if (random === 1) {
      // square.classList.add('red-square')
      square.className = 'red-square';
    } else if (random === 0) {
      square.className = 'blue-square';
    }
  }, 800);

  setTimeout(function () {
    clearInterval(interval);
    var ul = document.getElementById("board");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < 64; ++i) {
      items[i].className = 'black-square';
    }
  }, 20000);
}

function timer() {
  let remaining = 20;
  let timer = document.getElementById('timer');
  let interval = setInterval(function () {
    remaining -= 1;
    timer.innerHTML = remaining;
  }, 1000);
  setTimeout(function () {
    clearInterval(interval);
  }, 20000);
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

console.log("hello");
//asdf
class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  makeGrid() {
    let grid = [];
    for (let row = 0; row < 8; row++) {
      grid.push([]);
      for (let col = 0; col < 8; col++) {
        grid[row].push(null);
      }
    }
    return grid;
  }

}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map