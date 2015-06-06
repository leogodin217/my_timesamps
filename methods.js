Meteor.methods({
	entriesCount: function() {
		return Entries.find().count();
	}
})