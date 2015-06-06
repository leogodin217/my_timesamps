Router.route('/', function() {
	entries = Entries.find();
	this.render('entriesList');
});