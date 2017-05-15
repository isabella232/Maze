var solvable = true;
var available = {};
var currentIdx = 0;
var counter = 0;
var previous = null;

while (solvable && counter < 20000 && currentIdx < maze.height * maze.width - 1) {
  available = maze.getAvailableDirections();

  if (available.r && !isMoveToPrevious("r")) {
    maze.moveRight();
  } else if (available.d && !isMoveToPrevious("d")) {
    maze.moveDown();
  } else if (available.u && !isMoveToPrevious("u")) {
    maze.moveUp();
  } else if (available.l && self.currentIdx !== 0 && !isMoveToPrevious("l")) {
    maze.moveLeft();
  } else {
    solvable = false;
    stop(solvable);
  }

  previous = self.currentIdx;
  self.currentIdx = maze.currentIdx();
  counter++;
}

function isMoveToPrevious(direction) {
  if (previous === null) {
    return false;
  } else {
    return maze.idxForMove(direction) === previous;
  }
}

maze.stop(solvable);
