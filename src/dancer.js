
// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img src="https://weaponsandwarfare.files.wordpress.com/2015/12/attila-039-s-real-face-4.jpg"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);
  this.step();
};



MakeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  var that = this;

  setTimeout(function(){that.step()}, this.timeBetweenSteps);
};



MakeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};