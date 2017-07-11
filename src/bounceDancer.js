var MakeBounceDancer = function(top, left) {
  MakeDancer.call(this, top, left, 'bouncedancer');
}

MakeBounceDancer.prototype = Object.create(MakeDancer.prototype);
MakeBounceDancer.prototype.constructor = MakeBounceDancer;