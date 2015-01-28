Subscription = new Mongo.Collection("subscription");
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}