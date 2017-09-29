//Business logic*********************************************************

var roundTotal = 0;

var roll = function () {
  var randomRoll = Math.floor(Math.random() * 6) + 1;
  var total = 0;
  roundTotal += randomRoll;
  return randomRoll;
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
