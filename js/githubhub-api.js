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
    this.username = _username;
  for (var j = 0; j < this.repositories.length; j++) {
    $(".repository-list").append("<li><a target='_blank' href=https://github.com/" + _username + "/" + this.repositories[j] + " >" + this.repositories[j] + "</a></li>");
  }
  // console.log(this.username);
  // console.log(this.repositories);
  $(".username-placeholder").text(this.username);
  if(this.repositories.length === 0){
    var cities = ["Havana","Santiago","Camaguey", "Holguin", "Santa Clara", "Guantanamo", "Bayamo", "Las Tunas"];
    for (var l = 0; l < cities.length; l++) {
      $(".repository-list").append(cities[l]);
    }
  }
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
      // console.log(this.username);
      // console.log(this.repositories);
      $(".username-placeholder").text(this.username + ", for I believe this is the one you seek");
      if(this.repositories.length === 0){
        var cities = ["Havana","Santiago","Camaguey", "Holguin", "Santa Clara", "Guantanamo", "Bayamo", "Las Tunas"];
        for (var l = 0; l < cities.length; l++) {
          $(".repository-list").append(cities[l]);
        }
      }
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
    $("body").addClass("interim-2-3");
    battle3.play();
    setTimeout(function(){
      hasta_siempre.play();
    }, 9500);
    setTimeout(function(){
      // $("#song3").show();
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
