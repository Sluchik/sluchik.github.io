
$(function() {
$(".tabContents").hide();
$(".tabContents:first").show();

$("#contaier ul li a").click(function(){
     var activeTab = $(this).attr("href"); //save the clicked links target
    $("#contaier ul li a").removeClass("active"); // remove pre-highlighted tabs
     $(this).addClass("active"); //set this link to highlight
     $(".tabContents").hide(); // again hide pre-showing div
     $(activeTab).fadeIn(100); //match the target div &amp; show it
});
    $(".tip").hide();
    $("input").hover(function() {
    $(this).next(".tip").animate({opacity: "show", right: "-100"}, "slow");
  }, function() {
    $(this).next(".tip").animate({opacity: "hide", right: "-120"}, "slow");
  });

  $("button").on('click', function(){
      $(".tip").show();
  })

});
