describe('killDancer', function() {

  var killDancer, clock;
  var timeBetweenSteps = 5000;


  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.dancers = [];
    killDancer = new MakeKillDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(killDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a charge function that makes it fight', function() {
    sinon.spy(killDancer, 'charge');
    killDancer.charge();
    expect(killDancer.charge.called).to.be.true;
  });

  it('should call charge at least once per five seconds', function() {
    sinon.spy(killDancer, 'charge');
    expect(killDancer.charge.callCount).to.be.equal(0);
    clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);
      //The html ran fine. Our code only needed one tick

    expect(killDancer.charge.callCount).to.be.equal(1);

    clock.tick(timeBetweenSteps);
    expect(killDancer.charge.callCount).to.be.equal(2);
  });

});