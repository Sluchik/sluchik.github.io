
$(function() {
$(".tabContents").hide();
$(".tabContents:first").show();

$("#contaier ul li a").click(function(e){
     var activeTab = $(this).attr("href");
    $("#contaier ul li a").removeClass("active");
     $(this).addClass("active");
     $(".tabContents").hide();
     $(activeTab).fadeIn(100);
    e.preventDefault();
});
    $(".tip").hide();
    $("input").hover(function() {
    $(this).next(".tip").stop(true, false).animate({
      opacity: "show",
      right: "-100"
    }, "slow");
  }, function() {
    $(this).next(".tip").stop(true, false).animate({opacity: "hide", right: "-120"}, "slow");
  });

  $("button").on('click', function(){
      $(".tip").show();
  })

});
