if (Meteor.isClient) {
  /*// counter starts at 0
  Session.setDefault("counter", 0);

  Template.subscription.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.subscription.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });*/


  Template.body.helpers({
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });
}


