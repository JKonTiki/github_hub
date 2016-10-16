

$(document).ready(function(){

  $(".launch").click(function(event){
    event.preventDefault();
    var battle1 = document.getElementById("battle1");
    var a_contratiempo = document.getElementById("a-contratiempo");
    $(".intro").hide();
    $(".favicon").remove();
    $("head").prepend("<link rel='icon' href='public/images/italy.png' class='favicon'>");
    battle1.play();
    setTimeout(function(){
      a_contratiempo.play();
    }, 2500);
    setTimeout(function(){
      $("body").addClass("lucha-1");
      $(".risorgimento").show();
      $(".stage-1").show();
      // $("#song1").show();
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
    $(".skip-button").hide();
    event.preventDefault();
    var a_contratiempo = document.getElementById("a-contratiempo");
    a_contratiempo.pause();
    $("#song1").hide();
    var battle2 = document.getElementById("battle2");
    var bella_ciao = document.getElementById("bella-ciao");
    $(".intro").hide();
    $(".risorgimento").hide();
    $(".favicon").remove();
    $("head").append("<link rel='icon' href='public/images/spain.png' class='favicon'>");
    $("body").removeClass("lucha-1");
    $("body").addClass("interim-1-2");
    setTimeout(function(){
      battle2.play();
    }, 300);
    setTimeout(function(){
      bella_ciao.play();
    }, 6500);
    setTimeout(function(){
      // $("#song2").show();
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
    }, 9500);
  });

  $("#orwell-continue").click(function(event){
    event.preventDefault();
    $("#orwell-continue").hide();
    $("#stage-2-6").fadeIn(1000);
    setTimeout(function(){
      $("#stage-2-7").fadeIn(1000);
    }, 7000);
  });

  $(".play-again").click(function(event){
    event.preventDefault();
    $(".skip-button").hide();
    var hasta_siempre = document.getElementById("hasta-siempre");
    hasta_siempre.pause();
    var vortex = document.getElementById("vortex");
    vortex.play();
    $("body").removeClass("interim-2-3");
    $("body").removeClass("lucha-3");
    $(".stage-3").hide();
    $("body").addClass("vortex");
    setTimeout(function(){
      location.reload();
    }, 4000);
  });

  // $(".end-stage-2").click(function(event){
  // });
});
