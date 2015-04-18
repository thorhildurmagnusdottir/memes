if (Meteor.isClient) {
  Memes = new Mongo.Collection("memes");
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  Template.addmeme.events({
    'submit form': function(event) {
      return addMeme(event);
    }
  });
  var addMeme = function(e){
    e.preventDefault();
    var memeUrl = e.target.memeUrl.value;
    console.log('Add meme URL: ' + memeUrl);
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
