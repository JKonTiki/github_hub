

$(document).ready(function(){

  $(".launch").click(function(event){
    event.preventDefault();
    var audio = document.getElementById("myAudio");
    audio.play();
    $(".intro").hide();
    setTimeout(function(){
      $("body").addClass("lucha");

      $(".risorgimento").show();
      $("#stage-1").show();
      setTimeout(function(){
        $("#garibaldi").fadeIn(5000);
      }, 1000);
      setTimeout(function(){
        $("#stage-1-text").fadeIn(1000);
        $("#stage-1-1").fadeIn(1000);
      }, 6200);
      setTimeout(function(){
        $("#stage-1-2").fadeIn(1000);
      }, 8300);
    }, 2000);
  });

  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $("#repositories").text(username);
  });
});
