(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "d9a29e808efb14754136533c4667fedd7c48190a";

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;

function User(_username) {
  this.username = _username;
  this.repositories = [];
}

User.prototype.getRepos = function(_username){
  $.get('https://api.github.com/users/'+this.username+'/repos?access_token=' + apiKey+'&type=all&sort=updated').then(function(response){
    var that = this;
    var temp = [];
    for (var i = 0; i < response.length; i++) {
      temp.push(response[i].name);
    }
    this.repositories = temp;
  for (var j = 0; j < this.repositories.length; j++) {
    $(".repository-list").append("<li><a target='_blank' href=https://github.com/" + _username + "/" + this.repositories[j] + " >" + this.repositories[j] + "</a></li>");
  }
  console.log(this.username);
  console.log(this.repositories);
  }).fail(function(error){
    $.get('https://api.github.com/users/JKonTiki/repos?access_token=' + apiKey+'&type=all&sort=updated').then(function(response){
      var temp = [];
      for (var i = 0; i < response.length; i++) {
        temp.push(response[i].name);
      }
      this.username = "JKonTiki";
      this.repositories = temp;
      for (var k = 0; k < this.repositories.length; k++) {
        $(".repository-list").append("<li><a target='_blank' href=https://github.com/JKonTiki/" + this.repositories[k] + " >" + this.repositories[k] + "</a></li>");
      }
      console.log(this.username);
      console.log(this.repositories);
    }).fail(function(error){
      var cities = ["Havana","Santiago","Camaguey", "Holguin", "Santa Clara", "Guantanamo", "Bayamo", "Las Tunas"];
      for (var l = 0; l < cities.length; l++) {
        $(".repository-list").append(cities[l]);
      }
    });
  });
};


$(document).ready(function(){

  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    var user = new User(username);
    user.getRepos(username);


    // UNRELATED FRONT END ACTIVITY

    $("#skip1").hide();
    $("#skip2").hide();
    event.preventDefault();
    var bella_ciao = document.getElementById("bella-ciao");
    bella_ciao.pause();
    $("#song2").hide();
    var battle3 = document.getElementById("battle3");
    var hasta_siempre = document.getElementById("hasta-siempre");
    $(".intro").hide();
    $(".risorgimento").hide();
    $("#guerra-civil").hide();
    // $(".favicon").remove();
    $("head").append("<span class='favicon'><link rel='icon' href='public/images/cuba-flag.png'></span>");
    $("body").removeClass("lucha-2");
    $("body").addClass("interim-2-3");
    battle3.play();
    setTimeout(function(){
      hasta_siempre.play();
    }, 9500);
    setTimeout(function(){
      $("#song3").show();
      $("body").addClass("lucha-3");
      $(".stage-3").show();
      setTimeout(function(){
        $("#che").fadeIn(4000);
        setTimeout(function(){
          $("#stage-3-text").fadeIn(1000);
          $("#stage-3-1").fadeIn(1000);
          setTimeout(function(){
            $("#stage-3-2").fadeIn(1000);
            setTimeout(function(){
              $("#stage-3-3").fadeIn(1000);
              setTimeout(function(){
                $("#stage-3-4").fadeIn(1000);
                setTimeout(function(){
                  $("#stage-3-5").fadeIn(1000);
                  setTimeout(function(){
                    $("#stage-3-6").fadeIn(1000);
                  }, 6500);
                }, 5500);
              }, 6500);
            }, 4500);
          }, 4500);
        }, 7500);
      }, 1000);
    }, 10800);
  });
});

// exports.userModule = User;



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

},{"./../.env":1}]},{},[2]);
