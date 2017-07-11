describe('spinDancer', function() {

  var spinDancer, clock;
  beforeEach(function() {
    spinDancer = new MakeSpinDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(spinDancer.$node).to.be.an.instanceof(jQuery);
  });


});