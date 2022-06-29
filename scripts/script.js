const size = 500;
const sizeQ = size / 8;
let startColor,
  newColor,
  amt,
  img,
  randomB = false;
let stateGame = true;
let PieceDie = 32;

//  Bishops
let bishopW, bishopW1, bishopB, bishopB1;
//  Rooks
let rookW, rookW1, rookB, rookB1;
//  Knight
let knightW, knightW1, knightB, knightB1;
//  Pawn
let pawnW1, pawnW2, pawnW3, pawnW4, pawnW5, pawnW6, pawnW7, pawnW8;
let pawnB1, pawnB2, pawnB3, pawnB4, pawnB5, pawnB6, pawnB7, pawnB8;
//  Queen
let queenW, queenB;
//  King
let kingW, kingB;

let BlackPieces, WhitePieces;

function resetC() {
  chess.reset();
  bishopW.setPosition([2, 7]);
  bishopW1.setPosition([5, 7]);
  bishopB.setPosition([2, 0]);
  bishopB1.setPosition([5, 0]);

  rookW.setPosition([0, 7]);
  rookW1.setPosition([7, 7]);
  rookB.setPosition([0, 0]);
  rookB1.setPosition([7, 0]);

  knightW.setPosition([1, 7]);
  knightW1.setPosition([6, 7]);
  knightB.setPosition([1, 0]);
  knightB1.setPosition([6, 0]);

  queenW.setPosition([3, 7]);
  queenB.setPosition([4, 0]);

  kingW.setPosition([4, 7]);
  kingB.setPosition([3, 0]);

  pawnW1.setPosition([0, 6]);
  pawnW2.setPosition([1, 6]);
  pawnW3.setPosition([2, 6]);
  pawnW4.setPosition([3, 6]);
  pawnW5.setPosition([4, 6]);
  pawnW6.setPosition([5, 6]);
  pawnW7.setPosition([6, 6]);
  pawnW8.setPosition([7, 6]);

  pawnB1.setPosition([0, 1]);
  pawnB2.setPosition([1, 1]);
  pawnB3.setPosition([2, 1]);
  pawnB4.setPosition([3, 1]);
  pawnB5.setPosition([4, 1]);
  pawnB6.setPosition([5, 1]);
  pawnB7.setPosition([6, 1]);
  pawnB8.setPosition([7, 1]);
}

function gameOver() {
  document.getElementById("panelT").style.display = "block";
  document.getElementById("final").style.display = "flex";
  document.getElementById("gameOverText").style.display = "block";
  stateGame = false;
}

function panelGameOver() {
  document.getElementById("panelT").style.display = "none";
  document.getElementById("final").style.display = "none";
  document.getElementById("gameOverText").style.display = "none";
}

function changeBackground() {
  randomB ? (randomB = false) : (randomB = true);
}

function tablaBases() {
  if (PieceDie === 6) {
    window.location.replace(`https://syzygy-tables.info/?fen=${chess.fen()}`);
  }
}

// https://syzygy-tables.info/?fen=1r6/5b2/8/8/3k2n1/R7/2Q5/4K3_w_-_-_0_1

function setup() {
  createCanvas(size, size);

  //  Bishops
  img = loadImage("./assets/arfilBlanco.png");
  bishopW = new Piece(img, [2, 7], true, "B");
  bishopW1 = new Piece(img, [5, 7], true, "B");
  img = loadImage("./assets/arfilNegro.png");
  bishopB = new Piece(img, [2, 0], true, "b");
  bishopB1 = new Piece(img, [5, 0], true, "b");

  //  Rooks
  img = loadImage("./assets/torreBlanco.png");
  rookW = new Piece(img, [0, 7], true, "R");
  rookW1 = new Piece(img, [7, 7], true, "R");
  img = loadImage("./assets/torreNegro.png");
  rookB = new Piece(img, [0, 0], true, "r");
  rookB1 = new Piece(img, [7, 0], true, "r");

  //  Knight
  img = loadImage("./assets/caballoBlanco.png");
  knightW = new Piece(img, [1, 7], true, "N");
  knightW1 = new Piece(img, [6, 7], true, "N");
  img = loadImage("./assets/caballoNegro.png");
  knightB = new Piece(img, [1, 0], true, "n");
  knightB1 = new Piece(img, [6, 0], true, "n");

  //  Queen
  img = loadImage("./assets/reinaBlanco.png");
  queenW = new Piece(img, [3, 7], true, "Q");
  img = loadImage("./assets/reinaNegro.png");
  queenB = new Piece(img, [4, 0], true, "q");

  //  King
  img = loadImage("./assets/reyBlanco.png");
  kingW = new Piece(img, [4, 7], true, "K");
  img = loadImage("./assets/reyNegro.png");
  kingB = new Piece(img, [3, 0], true, "k");

  //  Pawn
  img = loadImage("./assets/peonBlanco.png");
  pawnW1 = new Piece(img, [0, 6], true, "P");
  pawnW2 = new Piece(img, [1, 6], true, "P");
  pawnW3 = new Piece(img, [2, 6], true, "P");
  pawnW4 = new Piece(img, [3, 6], true, "P");
  pawnW5 = new Piece(img, [4, 6], true, "P");
  pawnW6 = new Piece(img, [5, 6], true, "P");
  pawnW7 = new Piece(img, [6, 6], true, "P");
  pawnW8 = new Piece(img, [7, 6], true, "P");

  img = loadImage("./assets/peonNegro.png");
  pawnB1 = new Piece(img, [0, 1], true, "p");
  pawnB2 = new Piece(img, [1, 1], true, "p");
  pawnB3 = new Piece(img, [2, 1], true, "p");
  pawnB4 = new Piece(img, [3, 1], true, "p");
  pawnB5 = new Piece(img, [4, 1], true, "p");
  pawnB6 = new Piece(img, [5, 1], true, "p");
  pawnB7 = new Piece(img, [6, 1], true, "p");
  pawnB8 = new Piece(img, [7, 1], true, "p");

  BlackPieces = [
    bishopB,
    bishopB1,
    rookB,
    rookB1,
    knightB,
    knightB1,
    pawnB1,
    pawnB2,
    pawnB3,
    pawnB4,
    pawnB5,
    pawnB6,
    pawnB7,
    pawnB8,
    queenB,
    kingB,
  ];

  WhitePieces = [
    bishopW,
    bishopW1,
    rookW,
    rookW1,
    knightW,
    knightW1,
    pawnW1,
    pawnW2,
    pawnW3,
    pawnW4,
    pawnW5,
    pawnW6,
    pawnW7,
    pawnW8,
    queenW,
    kingW,
  ];

  newColor = color(random(255) + 55, random(255) + 55, random(255) + 55);
  startColor = color(random(255) + 55, random(255) + 55, random(255) + 55);
  amt = 0;
  background(startColor);
}
function draw() {
  if (randomB) {
    background(lerpColor(startColor, newColor, amt));
  } else {
    background(color("#f0d9b5"));
  }
  let even = true;
  for (let index = 0; index < 8; index++) {
    even ? (even = false) : (even = true);
    for (let indexTwo = 0; indexTwo < 8; indexTwo++) {
      if (even) {
        fill(color("#b58863"));
        square(indexTwo * sizeQ, index * sizeQ, sizeQ);
      }
      even ? (even = false) : (even = true);
    }
  }

  BlackPieces.forEach((piece) => {
    piece.display();
  });

  WhitePieces.forEach((piece) => {
    piece.display();
  });

  if (chess.game_over()) {
    document.getElementById("panelT").style.display = "block";
    document.getElementById("final").style.display = "flex";
    document.getElementById("gameOverText").style.display = "block";
  }

  strokeWeight(0);
  if (randomB) {
    amt += 0.001;
    if (amt >= 1) {
      amt = 0.0;
      startColor = newColor;
      newColor = color(random(200) + 55, random(200) + 55, random(200) + 55);
    }
  }
}
