$(document).ready(function(){

  $(".launch").click(function(event){
    event.preventDefault();
    var battle1 = document.getElementById("battle1");
    var a_contratiempo = document.getElementById("a-contratiempo");
    $(".intro").hide();
    $(".favicon").remove();
    $("head").prepend("<span class='favicon'><link rel='icon' href='public/images/italy.png'></span>");
    battle1.play();
    setTimeout(function(){
      a_contratiempo.play();
    }, 4000);
    setTimeout(function(){
      $("body").addClass("lucha-1");
      $(".risorgimento").show();
      $(".stage-1").show();
      $("#song1").show();
      setTimeout(function(){
        $("#garibaldi").fadeIn(5000);
        setTimeout(function(){
          $("#stage-1-text").fadeIn(1000);
          $("#stage-1-1").fadeIn(1000);
          setTimeout(function(){
            $("#stage-1-2").fadeIn(1000);
            setTimeout(function(){
              $("#stage-1-3").fadeIn(1000);
              setTimeout(function(){
                $("#stage-1-4").fadeIn(1000);
              }, 6500);
            }, 4500);
          }, 3500);
        }, 5200);
      }, 1000);
    }, 6000);
  });


  $(".end-stage-1").click(function(event){
    $("#skip1").hide();
    event.preventDefault();
    var a_contratiempo = document.getElementById("a-contratiempo");
    a_contratiempo.pause();
    $("#song1").hide();
    var battle2 = document.getElementById("battle2");
    var bella_ciao = document.getElementById("bella-ciao");
    $(".intro").hide();
    $(".risorgimento").hide();
    $(".favicon").remove();
    $("head").append("<span class='favicon'><link rel='icon' href='public/images/spain.png'></span>");
    $("body").removeClass("lucha-1");
    $("body").addClass("interim-1-2");
    setTimeout(function(){
      battle2.play();
    }, 1000);
    setTimeout(function(){
      bella_ciao.play();
    }, 7500);
    setTimeout(function(){
      $("#song2").show();
      $("body").addClass("lucha-2");
      $(".stage-2").show();
      setTimeout(function(){
        $("#orwell").fadeIn(4000);
        setTimeout(function(){
          $("#stage-2-text").fadeIn(1000);
          $("#stage-2-1").fadeIn(1000);
          setTimeout(function(){
            $("#stage-2-2").fadeIn(1000);
            setTimeout(function(){
              $("#stage-2-3").fadeIn(1000);
              setTimeout(function(){
                $("#stage-2-4").fadeIn(1000);
              }, 5500);
            }, 5500);
          }, 2500);
        }, 6500);
      }, 1000);
    }, 8500);
  });

  $("#orwell-continue").click(function(event){
    $("#orwell-continue").hide();
    $("#stage-2-6").fadeIn(1000);
    setTimeout(function(){
      $("#stage-2-7").fadeIn(1000);
    }, 7000);
  });




  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();



  });
});
