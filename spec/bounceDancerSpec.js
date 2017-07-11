describe('bounceDancer', function() {

  var bounceDancer, clock;
  // var timeBetweenSteps = 100;

  beforeEach(function() {
    // clock = sinon.useFakeTimers();
    bounceDancer = new MakeBounceDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(bounceDancer.$node).to.be.an.instanceof(jQuery);
  });

});