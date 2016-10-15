

$(document).ready(function(){

  $(".launch").click(function(event){
    event.preventDefault();
    var battle = document.getElementById("battle");
    var a_contratiempo = document.getElementById("a-contratiempo");
    $(".intro").hide();
    $(".favicon").hide();
    $("head").append("<span class='favicon'><link rel='icon' href='public/images/italy.png'></span>");
    battle.play();
    setTimeout(function(){
      a_contratiempo.play();
    }, 4000);
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
      }, 8600);
    }, 6000);
  });

  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $("#repositories").text(username);
  });
});
