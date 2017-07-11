
// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, caller) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class=' + caller + ' id="dancer"></span>');
  this.setPosition(top, left);
  this.setImage();
};


MakeDancer.prototype.setPosition = function(top, left){
   var styleSettings = {
     top: top,
     left: left
   };

   this.$node.css(styleSettings);
}

MakeDancer.prototype.setImage = function(){
  var imageArr = [];
  imageArr.push('url(https://vignette2.wikia.nocookie.net/world-of-warriors/images/8/80/Atilla.png/revision/latest?cb=20141222170229)');
  imageArr.push('url(https://archive.lolrus.mediamolecule.com/2014/uploads/wordpress/2009/08/blog_genghis.png)');
  imageArr.push('url(https://storybookstorage.s3.amazonaws.com/items/images/000/600/025/original/20161122-7-rzfnfo.png?1479797361)');
  imageArr.push('url(http://www.gifs.net/Animation11/Geography_and_History/Asia/Mongol.gif)');
  imageArr.push('url(https://68.media.tumblr.com/bcd1ebe133a38b4d995a309d926444e3/tumblr_ngt3xj1Rlx1r6sk6wo1_500.gif)');
  imageArr.push('url(http://aoniwang.com/projects/Boolean/prun.gif)');
  imageArr.push('url(http://thwaite.onesuffolk.net/assets/Gallery-1/pc40.gif)');
  var index = Math.floor(Math.random() * imageArr.length)

  var styleSettings = {
    content: imageArr[index]
  };

  this.$node.css(styleSettings);
}
