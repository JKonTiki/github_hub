(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "d9a29e808efb14754136533c4667fedd7c48190a";

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;

function User(_username) {
  this.username = _username;
  this.repositories = [];
}

function notFound(){
    $(".repository-list").html("<p>Lo siento compadre, no hay ningunos repositorios. Pe'o oye, verme hablando <a href='https://www.youtube.com/watch?v=CPCuzfDeUpc' target='_blank'>aqui</a> sobre la opresion americano.</p>");
}

User.prototype.getRepos = function(_username){
  $.get('https://api.github.com/users/'+this.username+'/repos?access_token=' + apiKey+'&type=all&sort=updated').then(function(response){
    var that = this;
    var temp = [];
    for (var i = 0; i < response.length; i++) {
      temp.push(response[i].name);
    }
    this.repositories = temp;
    this.username = _username;
  for (var j = 0; j < this.repositories.length; j++) {
    $(".repository-list").append("<li><a target='_blank' href=https://github.com/" + _username + "/" + this.repositories[j] + " >" + this.repositories[j] + "</a></li>");
  }

  $(".username-placeholder").text(this.username);
  if(this.repositories.length === 0){
  notFound();
    }
  }).fail(function(error){

    // here is a nested get request inside of another. If for some reason the first call failed (because user doesn't exist or otherwise), we make a second call with my own github account hardcoded in as a failsafe to deliver the gihub api experience. the idea is also that the second attempt would also add another layer of security

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

      $(".username-placeholder").text(this.username + ", for I believe this is the one you seek");
      if(this.repositories.length === 0){
        notFound();
      }

      //end of NESTED api call

    }).fail(function(error){
      notFound();
    });
  });
};


exports.userModule = User;

},{"./../.env":1}],3:[function(require,module,exports){
var User = require("./../js/user.js").userModule;

$(document).ready(function(){

  //this click launches the first stage of the project (from the intro page)
  $(".launch").click(function(event){
    event.preventDefault();
    var battle1 = document.getElementById("battle1");
    var a_contratiempo = document.getElementById("a-contratiempo");
    $(".intro").hide();
    $(".favicon").remove();
    $("head").prepend("<link rel='icon' href='public/images/italy.png' class='favicon'>");
    // floral_shoppe.pause();
    $("#intro-song").hide();
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

//second stage launch
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
    // setTimeout(function(){
    battle2.play();
    // }, 300);
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


//second part of second stage
  $("#orwell-continue").click(function(event){
    event.preventDefault();
    $("#orwell-continue").hide();
    $("#stage-2-6").fadeIn(1000);
    setTimeout(function(){
      $("#stage-2-7").fadeIn(1000);
    }, 7000);
  });

//form submit launches third stage
  $("#user-form").submit(function(event){
    event.preventDefault();

    // API ACTIVITY HERE
    var username = $("#username").val();
    var user = new User(username);
    user.getRepos(username);
    // END OF API ACTIVITY

    $(".skip-button").hide();
    event.preventDefault();
    var bella_ciao = document.getElementById("bella-ciao");
    bella_ciao.pause();
    $("#song2").hide();
    var battle3 = document.getElementById("battle3");
    var hasta_siempre = document.getElementById("hasta-siempre");
    $(".intro").hide();
    $(".risorgimento").hide();
    $("#guerra-civil").hide();
    $(".favicon").remove();
    $("head").append("<link rel='icon' href='public/images/cuba-flag.png'  class='favicon'>");
    $("body").removeClass("lucha-2");
    $("body").removeClass("interim-1-2");
    $("body").addClass("interim-2-3");
    battle3.play();
    setTimeout(function(){
      hasta_siempre.play();
    }, 9500);
    setTimeout(function(){
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

//this sends user through a vortex experience that then reloads the page

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

});

var apiKey = require("./../.env").apiKey;

function User(_username) {
  this.username = _username;
  this.repositories = [];
}

function notFound(){
    $(".repository-list").html("<p>Lo siento compadre, no hay ningunos repositorios. Pe'o oye, verme hablando <a href='https://www.youtube.com/watch?v=CPCuzfDeUpc' target='_blank'>aqui</a> sobre la opresion americano.</p>");
}

User.prototype.getRepos = function(_username){
  $.get('https://api.github.com/users/'+this.username+'/repos?access_token=' + apiKey+'&type=all&sort=updated').then(function(response){
    var that = this;
    var temp = [];
    for (var i = 0; i < response.length; i++) {
      temp.push(response[i].name);
    }
    this.repositories = temp;
    this.username = _username;
  for (var j = 0; j < this.repositories.length; j++) {
    $(".repository-list").append("<li><a target='_blank' href=https://github.com/" + _username + "/" + this.repositories[j] + " >" + this.repositories[j] + "</a></li>");
  }

  $(".username-placeholder").text(this.username);
  if(this.repositories.length === 0){
  notFound();
    }
  }).fail(function(error){

    // here is a nested get request inside of another. If for some reason the first call failed (because user doesn't exist or otherwise), we make a second call with my own github account hardcoded in as a failsafe to deliver the gihub api experience. the idea is also that the second attempt would also add another layer of security

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

      $(".username-placeholder").text(this.username + ", for I believe this is the one you seek");
      if(this.repositories.length === 0){
        notFound();
      }

      //end of NESTED api call

    }).fail(function(error){
      notFound();
    });
  });
};


exports.userModule = User;

},{"./../.env":1,"./../js/user.js":2}]},{},[3]);
