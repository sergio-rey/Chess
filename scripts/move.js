let pickedPiece,
  pieceM = 0,
  lastSite;

let turn = false;

function mouseDragged() {
  if (pieceM === 0) {
    pickedPiece = undefined;
    if (turn) {
      for (const piece of BlackPieces) {
        if (piece.pick(mouseX, mouseY)) {
          pickedPiece = piece;
          lastSite = piece.getPosition();
          pieceM = 1;
          break;
        }
      }
    } else {
      for (const piece of WhitePieces) {
        if (piece.pick(mouseX, mouseY)) {
          pickedPiece = piece;
          lastSite = piece.getPosition();
          pieceM = 1;
          break;
        }
      }
    }
  }
  if (pickedPiece) {
    pickedPiece.setPositionM([mouseX, mouseY]);
  }
}

function mouseReleased() {
  if (pickedPiece.validate(lastSite)) {
    if (!turn) {
      console.log("black");
      for (const piece of BlackPieces) {
        if (
          piece.getPosition()[0] === pickedPiece.getPosition()[0] &&
          piece.getPosition()[1] === pickedPiece.getPosition()[1]
        ) {
          piece.setState();
          break;
        }
      }
    } else {
      for (const piece of WhitePieces) {
        if (
          piece.getPosition()[0] === pickedPiece.getPosition()[0] &&
          piece.getPosition()[1] === pickedPiece.getPosition()[1]
        ) {
          piece.setState();
          break;
        }
      }
    }
    pickedPiece = undefined;
    turn ? (turn = false) : (turn = true);
    pieceM = 0;
  } else {
    pickedPiece.setPosition(lastSite);
    pickedPiece = undefined;
    pieceM = 0;
  }
}
