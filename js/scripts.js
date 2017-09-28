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
  this.playerTwo = new Player ("playerTwo");
  this.currentPlayer = this.playerOne;
  this.roundTotal = 0;
}

Turn.prototype.changePlayer = function () {
  if (this.currentPlayer.name === "playerOne") {
    return this.currentPlayer = this.playerTwo;
  }
  else {
    return this.currentPlayer = this.playerOne;
  }
}

// Player.prototype.displayTotal = function() {
//   for (i = 1; i <= ; i++)
//   return this.displayDetails();
// }


Turn.prototype.roll = function () {
  var randomRoll = Math.floor(Math.random() * 6) + 1;

  if (randomRoll === 1) {
    this.roundTotal = 0;
    this.changePlayer();
  }
  else {
    this.roundTotal += randomRoll;
  }
  return randomRoll;
};

Turn.prototype.hold = function() {
  this.currentPlayer.pointTotal += this.roundTotal;
  this.changePlayer();
  this.roundTotal = 0;
}

  // for (i = 1; i <= randomRoll; i++) {
  // } if (i === 1) {
  //   randomRoll + 0
  // } else if (i + )

var currentTurn = new Turn();
//User interface logic*****************************************************
$(document).ready(function() {
  $("#roll").click(function(event) {
    $("#currentRollDisplay").text(currentTurn.roll());
    $("#round-total1").text(currentTurn.roundTotal);
    $("#round-total2").text(currentTurn.roundTotal);

  });
    $("#hold").click(function(event) {
      currentTurn.hold();
      $("#gameTotal1").text(currentTurn.playerOne.pointTotal);
      $("#gameTotal2").text(currentTurn.playerTwo.pointTotal);
    });
  });


  //event.preventDefault();
    // if (this.currentPlayer. === "playerOne") {
    //   $("output#roll-total1").text(Turn.prototype.roll());
    // }
    // else if (this.currentPlayer === "playerTwo") {
    //   $("output#roll-total2").text(Turn.prototype.roll());
    // }



//     event.preventDefault();
//     $("#hold").submit(function(event) {
//    });
//  });
// });
