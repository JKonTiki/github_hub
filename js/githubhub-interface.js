

$(document).ready(function(){

  $(".launch").click(function(event){
    event.preventDefault();
    var battle1 = document.getElementById("battle1");
    var a_contratiempo = document.getElementById("a-contratiempo");
    $(".intro").hide();
    // $(".favicon").remove();
    $("head").prepend("<span class='favicon'><link rel='icon' href='public/images/italy.png'></span>");
    battle1.play();
    setTimeout(function(){
      a_contratiempo.play();
    }, 2500);
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
    $("#skip2").hide();
    event.preventDefault();
    var a_contratiempo = document.getElementById("a-contratiempo");
    a_contratiempo.pause();
    $("#song1").hide();
    var battle2 = document.getElementById("battle2");
    var bella_ciao = document.getElementById("bella-ciao");
    $(".intro").hide();
    $(".risorgimento").hide();
    // $(".favicon").remove();
    $("head").append("<span class='favicon'><link rel='icon' href='public/images/spain.png'></span>");
    $("body").removeClass("lucha-1");
    $("body").addClass("interim-1-2");
    setTimeout(function(){
      battle2.play();
    }, 300);
    setTimeout(function(){
      bella_ciao.play();
    }, 6500);
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
    }, 9500);
  });

  $("#orwell-continue").click(function(event){
    $("#orwell-continue").hide();
    $("#stage-2-6").fadeIn(1000);
    setTimeout(function(){
      $("#stage-2-7").fadeIn(1000);
    }, 7000);
  });

  // $(".end-stage-2").click(function(event){
  //   $("#skip1").hide();
  //   $("#skip2").hide();
  //   event.preventDefault();
  //   var bella_ciao = document.getElementById("bella-ciao");
  //   bella_ciao.pause();
  //   $("#song2").hide();
  //   var battle3 = document.getElementById("battle3");
  //   var hasta_siempre = document.getElementById("hasta-siempre");
  //   $(".intro").hide();
  //   $(".risorgimento").hide();
  //   $("#guerra-civil").hide();
  //   $(".favicon").remove();
  //   $("head").append("<span class='favicon'><link rel='icon' href='public/images/cuba-flag.png'></span>");
  //   $("body").removeClass("lucha-2");
  //   $("body").addClass("interim-2-3");
  //   battle3.play();
  //   setTimeout(function(){
  //     hasta_siempre.play();
  //   }, 9500);
  //   setTimeout(function(){
  //     $("#song3").show();
  //     $("body").addClass("lucha-3");
  //     $(".stage-3").show();
  //     setTimeout(function(){
  //       $("#che").fadeIn(4000);
  //       setTimeout(function(){
  //         $("#stage-3-text").fadeIn(1000);
  //         $("#stage-3-1").fadeIn(1000);
  //         setTimeout(function(){
  //           $("#stage-3-2").fadeIn(1000);
  //           setTimeout(function(){
  //             $("#stage-3-3").fadeIn(1000);
  //             setTimeout(function(){
  //               $("#stage-3-4").fadeIn(1000);
  //               setTimeout(function(){
  //                 $("#stage-3-5").fadeIn(1000);
  //                 setTimeout(function(){
  //                   $("#stage-3-6").fadeIn(1000);
  //                 }, 6500);
  //               }, 5500);
  //             }, 6500);
  //           }, 4500);
  //         }, 4500);
  //       }, 7500);
  //     }, 1000);
  //   }, 10800);
  // });
});
