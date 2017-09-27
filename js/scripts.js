//Business logic*********************************************************



function Player (name, pointTotal) {
  this.name = name;
  this.pointTotal = [];
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

Game.prototype.changePlayer = function () {
  if (this.currentPlayer.name === "playerOne")
    return
}

// Player.prototype.displayTotal = function() {
//   for (i = 1; i <= ; i++)
//   return this.displayDetails();
// }
var randomRoll = Math.floor(Math.random() * 6) + 1;

function Roll () {
  return Math.random();

  // for (i = 1; i <= randomRoll; i++) {
  // } if (i === 1) {
  //   randomRoll + 0
  // } else if (i + )
var currentTurn = new Turn();
//User interface logic*****************************************************
$(document).ready(function() {
  $("#roll").click(function(event) {
    var playerOneTurn = Roll();

    event.preventDefault();

    $("output#roll-total").append(randomRoll);
  });

  // $("#hold").submit(function(event) {
  // });

});
