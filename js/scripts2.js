//Business logic*********************************************************
var pointTotal = 0;
var roundTotal = 0;

var roll = function () {
  var randomRoll = Math.floor(Math.random() * 6) + 1;

  if (randomRoll === 1) {
    roundTotal = 0;
  }
  else {
  roundTotal += randomRoll;
  return randomRoll;
  }
};

var show = function () {

  return roundTotal;
};





//User interface logic*****************************************************

$(document).ready(function() {
  $("#roll").click(function(event) {
    $("#currentRollDisplay").text(roll());
    $("#round-total1").text(show());
  });
});
