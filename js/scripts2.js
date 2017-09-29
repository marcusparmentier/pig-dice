//Business logic*********************************************************

function Player (name, pointTotal) {
  this.name = name;
  this.pointTotal = 0;
}

Player.prototype.getPointTotal = function() {
  return this.pointTotal;
}

function Turn () {
  this.playerOne = new Player ("playerOne");
  this.computer = new Player ("computer");
  this.currentPlayer = this.playerOne;
  this.roundTotal = 0;
}

Turn.prototype.changePlayer = function () {
  if (this.currentPlayer.name === "playerOne") {
    return this.currentPlayer = this.computer;
  }
  else {
    // $("gameTotalCPU").text(currentTurn.computer.pointTotal);
    return this.currentPlayer = this.playerOne;
  }
}


Turn.prototype.roll = function () {
  var randomRoll = Math.floor(Math.random() * 6) + 1;

  if (randomRoll === 1) {
    this.roundTotal = 0;
    this.changePlayer();
    // if (this.currentPlayer.name === "computer") {
    //   currentTurn.compute();
    // };
  }
  else {
    this.roundTotal += randomRoll;
  }
  return randomRoll;
};

Turn.prototype.compute = function () {
  this.roll();
  $("#round-totalCPU").text(currentTurn.roundTotal);
    if (this.roundTotal >= 9) {
      this.hold();
    }
    else if (this.randomRoll === 1) {
      this.changePlayer();
    }
    else {
      this.compute();
    }
};

Turn.prototype.hold = function() {
  this.currentPlayer.pointTotal += this.roundTotal;
  $("gameTotalCPU").text(currentTurn.computer.pointTotal);
  this.changePlayer();
  this.roundTotal = 0;
}


var currentTurn = new Turn();
//User interface logic*****************************************************
$(document).ready(function() {

  $("#roll").click(function(event) {
    debugger;
    $("#currentRollDisplay").text(currentTurn.roll());
    $("#round-total1").text(currentTurn.roundTotal);
    if (currentTurn.currentPlayer.name === "computer") {
      currentTurn.compute();
    }

  });

  $("#hold").click(function(event) {
    currentTurn.hold();
    $("#gameTotal1").text(currentTurn.playerOne.pointTotal);
    $("#gameTotalCPU").text(currentTurn.computer.pointTotal);
    if (currentTurn.currentPlayer.name === "computer") {
      currentTurn.compute();
    };
  });


    document.getElementById("home").onclick = function () {
      location.href = "index.html";
    };

});

















// //Business logic*********************************************************
// var pointTotal = 0;
// var roundTotal = 0;
//
// var roll = function () {
//   var randomRoll = Math.floor(Math.random() * 6) + 1;
//
//   if (randomRoll === 1) {
//     roundTotal = 0;
//   }
//   else {
//   roundTotal += randomRoll;
//   return randomRoll;
//   }
// };
//
// var show = function () {
//
//   return roundTotal;
// };
//
// var hold = function () {
//   pointTotal += roundTotal;
//   return pointTotal;
// }
//
//
//
//
// //User interface logic*****************************************************
//
// $(document).ready(function() {
//   $("#roll").click(function(event) {
//     $("#currentRollDisplay").text(roll());
//     $("#round-total1").text(show());
//   });
//
//   $("hold").click(function(event) {
//     .hold();
//     $("#gameTotal1")
//   })
// });
