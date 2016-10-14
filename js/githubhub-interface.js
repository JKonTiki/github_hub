

$(document).ready(function(){

  $(".launch").click(function(event){
    $(".intro").hide();
    $("body").addClass("lucha");
    $(".risorgimento").show();
    $(".stage-1").show();
    var audio = document.getElementById("myAudio");
    audio.play();
  });

  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $("#repositories").text(username);
  });
});
