
$( document ).ready(function() {

  //$('body').css("display","none");

  $(window).load(function(){
 
    var colWidth = $(".side-sliders .column.left").width();
    var windowHeight = window.innerHeight;
    $(".text-panel").each(function(){
      var max = parseInt($(this).data("max"));
      max -= $(this).height();
      $(this).data("max",max);
      
      var min = parseInt($(this).data("min"));
      max += windowHeight;
      $(this).data("min",min);
      
      if($(this).data("starttop") == undefined){
        $(this).css("top",windowHeight + "px");
      }else{
        $(this).css("top",$(this).data("starttop") + "px");
      }
    });
    $(".blank").each(function(){
      $(this).css("top",$(this).data("start") + "px");
      $(this).height(windowHeight);
    });
    $(".side-sliders").each(function(){
      $(this).css("top",windowHeight + "px");
      $(this).css("height",windowHeight + "px");
    });
    $(".slider-left").each(function(){
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
        if($(this).hasClass("inactive")){
          if (scrolltop > $(this).data("min") && scrolltop < $(this).data("max")){
            $(".background.active").addClass("inactive").removeClass("active");
            $(this).removeClass("inactive").addClass("active");
          }
        }
      });

      $(".text-panel").each(function(){
        if($(this).data("slidein")=="1"){
        
          console.log($(this).data("max"));
          if(scrolltop > $(this).data("min") && scrolltop < $(this).data("max")){
            $(this).css("top",(Math.max(0,($(this).data("min") + windowHeight) - scrolltop)) + "px");
          }else if(scrolltop <= $(this).data("min")){
            $(this).css("top",windowHeight + "px");
          }
        }
        if($(this).data("slideout")=="1"){
          console.log($(this).data("max"));
          if(scrolltop >= $(this).data("max")){
            $(this).css("top",($(this).data("max") - scrolltop) + "px");
          }else if($(this).data("slidein")=="0" && scrolltop > $(this).data("min") && scrolltop < $(this).data("max")){
            $(this).css("top",0);
          }
        }
      });
      
      
      $(".side-sliders").each(function(){
      
        var min = $(this).data("min");
        var max = $(this).data("max");
        var vertRange = windowHeight * 2;
      
      
        if(scrolltop <= min){        
          $(this).css("top",windowHeight + "px");
        }else if(scrolltop > min && scrolltop < max){
          var offset = windowHeight - (((scrolltop - min) / (max - min)) * vertRange);
          $(this).css("top",offset + "px");
        }else if(scrolltop > max){
          $(this).css("top","-" + windowHeight + "px");
        }

      });
      
      $(".slider-left").each(function(){
        var min = $(this).data("from");
        var max = $(this).data("to");
        var vertRange = max - min;
        var horizRange = colWidth;
        if(scrolltop < min){        
          $(this).css("left","-" + $(this).width() + "px")
        }else if(scrolltop > min && scrolltop < max){
          var pos = (scrolltop - min) / vertRange;
          var offset = (pos * horizRange) - $(this).width();
          $(this).css("left",offset + "px");        
        }else if(scrolltop > max){
          $(this).css("left",$(this).data("target") + "px");
        }
      });
      $(".slider-right").each(function(){
        var min = $(this).data("from");
        var max = $(this).data("to");
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