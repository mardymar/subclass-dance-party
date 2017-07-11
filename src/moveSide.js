$('.moveDancerButton').on('click', function(event){
  var top = 100;
  var left = 20;
  for(var i = 0; i < window.dancers.length; i++){
    // var styleSettings = {
    //   top: top,
    //   left: left
    // };

    // window.dancers[i].css(styleSettings);

    window.dancers[i].animate({
        top: top,
        left: left,
      }, 2000 );

    top += 100;
  }
});