var apiKey = require("./../.env").apiKey;

function User(_username) {
  this.username = _username;
  this.repositories = [];
}

User.prototype.getRepos = function(){
  $.get('https://api.github.com/users/'+this.username+'/repos?access_token=' + apiKey+'&type=all&sort=updated').then(function(response){
    var temp = [];
    for (var i = 0; i < response.length; i++) {
      temp.push(response[i].name);
    }
    this.repositories = temp;
    console.log(this.repositories);
  }).fail(function(error){
    $.get('https://api.github.com/users/jkontiki/repos?access_token=' + apiKey+'&type=all&sort=updated').then(function(response){
      var temp = [];
      for (var i = 0; i < response.length; i++) {
        temp.push(response[i].name);
      }
      this.repositories = temp;
      console.log(this.repositories);
    }).fail(function(error){



      console.log("superfail");



    });
  });
};


$(document).ready(function(){

  // $("#user-form").submit(function(event){
  $(".footer-holder").click(function(event){
    event.preventDefault();
    // var username = $("#username").val();
    var username = "jkontikiasdfasdfsd";
    var user = new User(username);
    user.getRepos();
  });


});
