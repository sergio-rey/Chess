class Piece {
  constructor(image, position, state = true, piece = "P") {
    this._image = image;
    this.setPosition(position);
    this._state = state;
    this._piece = piece;
  }

  display = () => {
    image(
      this._image,
      this.getPositionData()[0] * sizeQ,
      this.getPositionData()[1] * sizeQ,
      sizeQ,
      sizeQ
    );
  };

  pick = (x, y) => {
    if (
      x >= this.getPositionData()[0] * sizeQ &&
      x <= this.getPositionData()[0] * sizeQ + sizeQ &&
      y >= this.getPositionData()[1] * sizeQ &&
      y <= this.getPositionData()[1] * sizeQ + sizeQ
    ) {
      return true;
    }
  };

  setPosition = (position) => {
    this._position = position;
  };

  setPositionM = (position) => {
    if (position[0] < 0) {
      position[0] = 0;
    } else if (position[0] > size) {
      position[0] = size;
    }

    if (position[1] < 0) {
      position[1] = 0;
    } else if (position[1] > size) {
      position[1] = size;
    }

    let init, final;
    init = 0;
    final = sizeQ;
    for (let index = 0; index < 8; index++) {
      if (position[0] <= final && position[0] >= init) {
        position[0] = index;
        break;
      }
      init = init + sizeQ;
      final = final + sizeQ;
    }

    init = 0;
    final = sizeQ;
    for (let index = 0; index < 8; index++) {
      if (position[1] <= final && position[1] >= init) {
        position[1] = index;
        break;
      }
      init = init + sizeQ;
      final = final + sizeQ;
    }

    this._position = position;
  };

  validate = (lastPosition) => {
    const positionC = [0, 0],
      positionI = [0, 0];
    switch (this._position[0]) {
      case 0:
        positionC[0] = "a";
        break;
      case 1:
        positionC[0] = "b";
        break;
      case 2:
        positionC[0] = "c";
        break;
      case 3:
        positionC[0] = "d";
        break;
      case 4:
        positionC[0] = "e";
        break;
      case 5:
        positionC[0] = "f";
        break;
      case 6:
        positionC[0] = "g";
        break;
      case 7:
        positionC[0] = "h";
        break;
      default:
        break;
    }

    switch (this._position[1]) {
      case 0:
        positionC[1] = "8";
        break;
      case 1:
        positionC[1] = "7";
        break;
      case 2:
        positionC[1] = "6";
        break;
      case 3:
        positionC[1] = "5";
        break;
      case 4:
        positionC[1] = "4";
        break;
      case 5:
        positionC[1] = "3";
        break;
      case 6:
        positionC[1] = "2";
        break;
      case 7:
        positionC[1] = "1";
        break;
      default:
        break;
    }

    switch (lastPosition[0]) {
      case 0:
        positionI[0] = "a";
        break;
      case 1:
        positionI[0] = "b";
        break;
      case 2:
        positionI[0] = "c";
        break;
      case 3:
        positionI[0] = "d";
        break;
      case 4:
        positionI[0] = "e";
        break;
      case 5:
        positionI[0] = "f";
        break;
      case 6:
        positionI[0] = "g";
        break;
      case 7:
        positionI[0] = "h";
        break;
      default:
        break;
    }

    switch (lastPosition[1]) {
      case 0:
        positionI[1] = "8";
        break;
      case 1:
        positionI[1] = "7";
        break;
      case 2:
        positionI[1] = "6";
        break;
      case 3:
        positionI[1] = "5";
        break;
      case 4:
        positionI[1] = "4";
        break;
      case 5:
        positionI[1] = "3";
        break;
      case 6:
        positionI[1] = "2";
        break;
      case 7:
        positionI[1] = "1";
        break;
      default:
        break;
    }

    if (stateGame) {
      const tof = positionC[0] + positionC[1],
        fromI = positionI[0] + positionI[1];
      if (chess.move({ from: fromI, to: tof }) === null) {
        return false;
      } else {
        const ul = document.getElementById("move");
        const li = document.createElement("li");
        li.appendChild(
          document.createTextNode(
            `${fromI} -> ${tof} :${turn ? "Black" : "White"}`
          )
        );
        ul.appendChild(li);
        return true;
      }
    } else {
      return false;
    }
  };

  setState = () => {
    PieceDie = PieceDie - 1;
    this.setPosition([1000, 1000]);
  };

  getPosition = () => {
    return this._position;
  };

  getImage = () => {
    return this._image;
  };
  getPositionData = () => {
    return [this._position[0], this._position[1]];
  };
  getState = () => {
    return this._state;
  };
}
