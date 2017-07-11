
var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, 'blidancer');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
}

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function() {
    this.$node.toggle();

    var that = this;

    setTimeout(function(){that.step()}, this.timeBetweenSteps);

};
