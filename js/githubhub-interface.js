

$(document).ready(function(){

  $(".launch").click(function(event){
    event.preventDefault();
    var audio = document.getElementById("myAudio");
    // audio.play();
    $(".intro").hide();
    $("body").addClass("lucha");
    $(".risorgimento").show();
    $(".stage-1").show();
    $("#garibaldi").fadeIn(6000);
    setTimeout(function(){
      $("#stage-1-1").fadeIn(1000);
    }, 6000);

    setTimeout(function(){
      $("#stage-1-2").fadeIn(1000);
    }, 8000);
  });

  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $("#repositories").text(username);
  });
});
