describe('dancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 5000;


  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.dancers = [];
    dancer = new MakeDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should NOT functions from other classes', function() {
    expect(dancer.charge).to.not.exist;
    expect(dancer.execute).to.not.exist;
    expect(dancer.step).to.not.exist;
  });

});