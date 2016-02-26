$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip()

  if(window.matchMedia("(min-width: 900px)").matches){
    /*Smooth Scroll*/

    var $window = $(window);		//Window object

    var scrollTime = 1.2;			//Scroll time
    var scrollDistance = 180;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

    $window.on("mousewheel DOMMouseScroll", function(event){

      event.preventDefault();

      var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
      var scrollTop = $window.scrollTop();
      var finalScroll = scrollTop - parseInt(delta*scrollDistance);

      TweenMax.to($window, scrollTime, {
        scrollTo : { y: finalScroll, autoKill:true },
          ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
          autoKill: true,
          overwrite: 5
        });
    });

    var controller = new ScrollMagic.Controller({
      globalSceneOptions:{
        triggerHook: 'onCenter' //add trigger events
      }
    });

    var moveMountain = new TimelineMax().add([
      TweenMax.fromTo("#triggerMountain img", 1,
        {y: '100'}, //add effects from init
        {y: '-50'} //add effects to finish
      )
    ])

    var pallaraxMountain = new ScrollMagic.Scene({
      triggerElement: '#triggerMountain', //add initial trigger envent
      duration: '74%',
      offset: '-120'
    })
    .setTween(moveMountain)
    // .addIndicators() //display triggers
    .addTo(controller)
  }
});
