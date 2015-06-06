describe('Home page layout', function () {
  beforeEach(function (done) {
    Router.go('/');
    Tracker.afterFlush(done);
  });

  beforeEach(waitForRouter);

  it('Display the title', function () {
  	title = $('h1').text();
  	expect(title).toBe('My Timestamps');
  });
});