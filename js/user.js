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
