//Business logic*********************************************************

var roundTotal = [];

var roll = function () {
  var randomRoll = Math.floor(Math.random() * 6) + 1;
  var total = 0;
  total += randomRoll;
  roundTotal.push(total);
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
