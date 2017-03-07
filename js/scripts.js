$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  var number = parseInt($("#number").val());
  var total = 1;
  for (var currentNumber = number; currentNumber >=1; currentNumber -= 1) {
    total *= currentNumber;
  }
  $(".number").text(number);
  $(".total").text(total);

  $("#output").show();
  });
});
