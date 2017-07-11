
var MakeSpinDancer = function(top, left) {
  MakeDancer.call(this, top, left, 'spindancer');
}

MakeSpinDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinDancer.prototype.constructor = MakeSpinDancer;