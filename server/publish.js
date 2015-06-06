Meteor.publish('entries', function() {
  return Entries.find();
});

Entries.allow({
	insert: function() {return true;},
	remove: function() {return true;}
});