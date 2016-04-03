$(document).ready(function() {
	$('.one').fadeIn(500);
	$('.one').delay(10000).fadeOut(500);
	$('.two').delay(11000).fadeIn(500);
	$('.two').delay(10000).fadeOut(500);
	$('.three').delay(22000).fadeIn(500);
	$('.three').delay(10000).fadeOut(500);
	$('.four').delay(33000).fadeIn(500);
	$('.four').delay(10000).fadeOut(500);
	$('.five').delay(44000).fadeIn(500);
	$('.five').delay(10000).fadeOut(500);
	$('.six').delay(55000).fadeIn(500);
	/*
	$('.three').fadeIn(100);
	$('.four').fadeIn(100);
	$('.five').fadeIn(100);*/
                                
  
  
  $('#s7').cycle({
		 
   fx: 'scrollRight',
   timeout:20000,
   pause:1,
   next:   '#left_arrwo', 
   prev:   '#right_arrwo'  
        
	});
  
  
  
  
  
 
});
