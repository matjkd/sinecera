var duration = 1500;
var timer = null;
var angle = 0;
function resizeImage() {
   // alert("I'm done resizing for the moment");
    var bodyheight = $(window).height();
    var bodywidth = $(window).width();
   
    var imageresize = bodyheight - 250;
    
    $('#imageframe').animate({
    	height: imageresize
    }, 80);
    
    if(bodywidth < 500) {
    	 $('.textbox').animate({
    	width: "300px"
    }, 80);
    
    
    
    };
    if(bodywidth > 500) {
    	 $('.textbox').animate({
    	width: "400px"
    }, 80);
    };
   // $("#sidebar").height(bodyheight);
};

var resizeTimer;
function opensite() {
	
	
	 $("#container").animate({ 
        top: "0px",
        height:"150px"
      }, duration ); 
      
       $("#logoContainer").animate({ 
        top: "20px",
        
      }, duration ); 
      
       $("#logo").animate({ 
        width: "300px",
        
      }, duration ); 
      
      
      
      
       $("#footerContainer").animate({ 
        bottom: "0px",
        height:"100px"
        
      }, duration ); 
       $("#topmenu").delay(duration).animate({ 
        top: "150px",
        
      }, 500 ); 
   
   loaderspin();
        
      $("#imageframe").delay(duration + 500).fadeIn(2000);
      $(".textbox").delay(duration + 1000).fadeIn(2000)
	
};


    
function loaderspin() {
	
	$('.loaderimg').rotate({
            duration:6000,
            angle: 0, 
            animateTo:2000
         },
         $('.loaderimg').delay(1800).fadeOut()
         
         );
         
	
};  

    
	




$(document).ready(function(){
	
	resizeImage();
	
		$("#logo").click(function() {
        
            $(this).stop().animate({
                opacity: 0.5
              },
            150
            );
               
            opensite();
            
            
            $(this).stop().animate({
                opacity: 1
             },
            150
            );
      	 });

//resize main image depending on window size
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeImage, 100);
    
    
    
});




});




