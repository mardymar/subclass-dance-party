
var MakeKillDancer = function(top, left) {
  MakeDancer.call(this, top, left, 'killdancer');

  var styleSettings = {
    content: 'url(http://68.media.tumblr.com/782d01e54fc568807a2fad727f5c7eab/tumblr_inline_mhia66yjts1qz4rgp.gif)'
  };

  this.$node.css(styleSettings);

  var that = this;
  this.$node.mouseover(function(){
    var index = window.dancers.indexOf(this.$node);
    window.dancers.splice(index, 1);
    that.$node.remove();
  });

  this.charge();
}

MakeKillDancer.prototype = Object.create(MakeDancer.prototype);
MakeKillDancer.prototype.constructor = MakeKillDancer;

MakeKillDancer.prototype.charge = function() {
    if(window.dancers.length > 1){
      console.log(window.dancers.length)
      this.execute();
    }

    var that = this;
    setTimeout(function(){that.charge()}, 5000);
};

MakeKillDancer.prototype.execute = function(){
  var index = Math.floor(Math.random() * window.dancers.length);

  while(window.dancers[index] === this.$node){
    index = Math.floor(Math.random() * window.dancers.length);
  }

  var p = window.dancers[index].position();

  this.$node.animate({
        top: p.top,
        left: p.left,
        }, 2000, function() {
          window.dancers[index].remove();
          window.dancers.splice(index, 1);
  });
}