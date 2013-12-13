
$( document ).ready(function() {

  $(window).load(function(){
    var colWidth = $(".side-sliders .column.left").width();
    //console.log(colWidth);
    
    $(".slider-left").each(function(){
      var offset = parseInt($(this).css("width"));
      
      console.log("width " + offset);
      $(this).css("left","-" + offset + "px").attr("data-target",colWidth - offset);
    });

    $(window).scroll(function() {
      var scrolltop = ($(window).scrollTop());
      $(".background").each(function(){
        //console.log($(this).data("min"));
        if($(this).hasClass("inactive")){
          if (scrolltop > $(this).data("min") && scrolltop < $(this).data("max")){
            
            $(".background.active").addClass("inactive").removeClass("active");
          
            $(this).removeClass("inactive").addClass("active");
         
         
          }
        }
        
      });
    });
  });

});