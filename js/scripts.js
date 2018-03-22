$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#tri-eq").hide();
    $("#tri-iso").hide();
    $("#tri-scal").hide();
    $("#tri-not").hide();

    var inputSide1 = parseInt($("#side1").val());
    var inputSide2 = parseInt($("#side2").val());
    var inputSide3 = parseInt($("#side3").val());

    if (inputSide1 === inputSide2 && inputSide2 === inputSide3) {
      $("#tri-eq").fadeIn("slow");
    } else if (inputSide1 === inputSide2 || inputSide1 === inputSide3 || inputSide2 === inputSide3) {
      $("#tri-iso").fadeIn("slow");
    } else if (inputSide1 + inputSide2 <= inputSide3 || inputSide1 + inputSide3 <= inputSide2 || inputSide2 + inputSide3 <= inputSide1) {
      $("#tri-not").fadeIn("slow");
    } else {
      $("#tri-scal").fadeIn("slow");
    }

  });
});
