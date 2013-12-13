
$( document ).ready(function() {
  $(window).scroll(function() {
    var scrolltop = ($(window).scrollTop());
    $(".background").each(function(){
      console.log($(this).data("min"));
      if($(this).hasClass("inactive")){
        if (scrolltop > $(this).data("min") && scrolltop < $(this).data("max")){
          
          $(".background.active").addClass("inactive").removeClass("active");
        
          $(this).removeClass("inactive").addClass("active");
       
       
        }
      }
      
    });
  });

});