Subscription = new Mongo.Collection("subscription");

if (Meteor.isClient) {

/*helpers*/  
  Template.body.helpers({
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });


/*events*/  
  Template.body.events({
    "submit .new-subscription": function (event) {
      var subName = event.target.subName.value;
      console.log("subName:",subName);
      Subscription.insert({
        name: subName,
        createdAt: new Date() // current time
      });

      event.target.subName.value = "";

      return false;
    }
  });


}


