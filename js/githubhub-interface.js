

$(document).ready(function(){

  $(".launch").click(function(event){
    $("body").addClass("lucha");
    $(".risorgimento").show();
    $(".intro").hide();
    var audio = document.getElementById("myAudio");
    // audio.play();
  });

  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $("#repositories").text(username);
  });
});
