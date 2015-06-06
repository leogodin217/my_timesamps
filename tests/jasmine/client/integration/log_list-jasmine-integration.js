describe('Listing posts', function () {
  beforeEach(function (done) {
    // Clear the database
    Meteor.call('clearDB', function(error, result){
      if(error) {
      console.log(error);
      }
//      Meteor.call('loadFixtures');
    });

    Router.go('/');
    Tracker.afterFlush(function() {
      done();
    });
  });

  beforeEach(waitForRouter);

  it('should list three entries', function() {

    // Given no entry items exist 
    var entryItems = $('#entry-list .entry-items');
    expect(entryItems.length).toBe(0);

    // When I create three entries
    Entries.insert({
      group: "Coffee",
      value: 1,
      notes: "It was good"
    });
    Entries.insert({
      group: "Coffee",
      value: 1,
      notes: "It was good"
    });
    Entries.insert({
      group: "Coffee",
      value: 1,
      notes: "It was good"
    });

    var entryItems = $('#entry-list .entry-item')
    expect(entryItems.length).toBe(3);

    // cleanup
    var entries = Entries.find().fetch();
    _.each(entries, function(entry) {Entries.remove(entry._id)});

  });

  it('should list the right fields', function() {
    // Given no entry items exist 
    var entryItems = $('#entry-list .entry-item');
    expect(entryItems.length).toBe(0);

    // When I create an item
    entryId = Entries.insert({
      group: "Coffee",
      value: 1,
      notes: "It was good"
    });

    // The correct fields should show 
    var groupText = $('.entry-group').text();
    expect(groupText).toBe("Coffee");
    var valueText = $('.entry-value').text();
    expect(valueText).toBe("1");
    var notesText = $('.entry-notes').text();
    expect(notesText).toBe("It was good");
    var timestampText = $('.entry-timestamp').text();
    expect(timestampText).toBe("timestamp");


  });


});