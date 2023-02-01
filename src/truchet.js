window.addEventListener("DOMContentLoaded", (event) => {
  var tiles = document.getElementsByClassName("truchet-cell");

  var colors = ["black", "black", "purple"];
  var rotations = [0, 90, 180, 270];

  for (var i = 0; i < tiles.length; i++) {
    var colorI = Math.floor(Math.random() * colors.length);
    var rotationI = Math.floor(Math.random() * rotations.length);

    var tile = tiles[i];
    var colorClass = colors[colorI];

    var rotation = rotations[rotationI];
    var rotationClass = "";
    switch (rotation) {
      case 0:
        break;
      case 90:
        rotationClass = "rotate-90";
        break;
      case 180:
        rotationClass = "rotate-180";
        break;
      case 270:
        rotationClass = "rotate-270";
        break;
      default:
        break;
    }

    // apply the style & rotation
    tile.className = "truchet-cell " + colorClass + " " + rotationClass;
  }
});
