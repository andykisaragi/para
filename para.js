
$( document ).ready(function() {

  //$('body').css("display","none");

  $(window).load(function(){
    
    //console.log("inner " + window.innerHeight);
  
    var colWidth = $(".side-sliders .column.left").width();
    
    var windowHeight = window.innerHeight;
    
    $(".side-sliders").each(function(){
      $(this).css("top",windowHeight + "px");
      $(this).css("height",windowHeight + "px");
    });
    $(".slider-left").each(function(){
      //var offset = parseInt($(this).css("width"));
      var offset = $(this).width();
      console.log("width " + offset);
      $(this).css("left","-" + offset + "px").attr("data-target",colWidth - offset);
    });
    
    $(".slider-right").each(function(){
      var offset = parseInt($(this).css("width"));
      console.log("width " + offset);
      $(this).css("left",colWidth + offset + "px").attr("data-target",0);
    });

    $(window).scroll(function() {
      var scrolltop = ($(window).scrollTop());
      console.log("scrolltop " + scrolltop);
      $(".background").each(function(){
        //console.log($(this).data("min"));
        if($(this).hasClass("inactive")){
          if (scrolltop > $(this).data("min") && scrolltop < $(this).data("max")){
            $(".background.active").addClass("inactive").removeClass("active");
            $(this).removeClass("inactive").addClass("active");
          }
        }
      });
      
      
      
      $(".side-sliders").each(function(){
      
        var min = $(this).data("min");
        var max = $(this).data("max");
        var vertRange = windowHeight * 2;
      
      
      
        console.log("min " + min + " max " + max + " vertrange " + vertRange + " windowHeight " + windowHeight);
      
        if(scrolltop <= min){        
          $(this).css("top",windowHeight + "px");
        }else if(scrolltop > min && scrolltop < max){
          
          var offset = windowHeight - (((scrolltop - min) / (max - min)) * vertRange);
          
          console.log("offset " + max);
          $(this).css("top",offset + "px");
          
        }else if(scrolltop > max){
          $(this).css("top","-" + windowHeight + "px");
        }
        
        
      
      });
      
      $(".slider-left").each(function(){
        var min = $(this).data("from");
        var max = $(this).data("to");
        //console.log(scrolltop + " " + min + " " + max);
        var vertRange = max - min;
        var horizRange = colWidth;
        if(scrolltop < min){        
          $(this).css("left","-" + $(this).width() + "px")
        }else if(scrolltop > min && scrolltop < max){

          var pos = (scrolltop - min) / vertRange;
          var offset = (pos * horizRange) - $(this).width();
          $(this).css("left",offset + "px");        
        }else if(scrolltop > max){
          //var pos = (scrolltop - min) / vertRange;
          //var offset = (pos * horizRange) - $(this).width();
          $(this).css("left",$(this).data("target") + "px");
        }
      });
      $(".slider-right").each(function(){
        var min = $(this).data("from");
        var max = $(this).data("to");
        //console.log(scrolltop + " " + min + " " + max);
        var vertRange = max - min;
        var horizRange = colWidth;
        if(scrolltop < min){        
          $(this).css("left",(colWidth + $(this).width()) + "px")
        }else if(scrolltop > min && scrolltop < max){

          var pos = (scrolltop - min) / vertRange;
          var offset = colWidth - (pos * horizRange);
          $(this).css("left",offset + "px");        
        }else if(scrolltop > max){
          $(this).css("left",0);
        }
      });
      
      
      
    });
    

  });

});