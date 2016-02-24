(function(){
  $(window).load(function(){
    var $logo = $(".headerLogo").find("img");
    var $proxi = $(".proxi");

    $logo.addClass("jello");

    setTimeout(function(){
      $proxi.addClass("flash");
    }, 2000)
  });

})();
