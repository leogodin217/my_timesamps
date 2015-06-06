describe('Creating entries', function() {

	it('should allow insert', function() {
		var entryId = Entries.insert({
  		group: 'Coffee',
      value: '1',
  		notes: 'Just one coffee'
		});

		var entry = Entries.findOne(entryId);
		expect(entry.group).toBe('Coffee');
	});

});