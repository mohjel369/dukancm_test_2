// JavaScript Document

/*
$('.primary_content').on('click', '.right > li', function (){});


*/




function loadCart(getFlie)
{

$.ajax({
	url:getFlie,
	beforeSend: function(){
		$('.load_content').html('<div class="load"><img src="images/page-loader.jpg"/></div>');
		},
		success:function(data){
			$('.cart').html(data);
			}
	});
}



function loadCotent(getFlie)
{

$.ajax({
	url:getFlie,
	beforeSend: function(){
		$('.load_content').html('<div class="load"><img src="images/page-loader.jpg"/></div>');
		},
		success:function(data){
			$('.content').html(data);
			}
	});
}
function loadpoint(getFlie)
{

$.ajax({
	url:getFlie,
	beforeSend: function(){
		$('.load_content').html('<div class="load"><img src="images/page-loader.jpg"/></div>');
		},
		success:function(data){
			$('.point').html(data);
			}
	});
}


/*
$('.primary_content').on('click', '.right > li', function (){});
*/

function loadpointt(getFlie)
{

$.ajax({
	url:getFlie,
	beforeSend: function(){
		$('.load_content').html('<div class="load"><img src="images/page-loader.jpg"/></div>');
		},
		success:function(data){
			$('.pointt').html(data);
			}
	});
}

function loadusername(getFlie)
{

$.ajax({
	url:getFlie,
	beforeSend: function(){
		$('.load_content').html('<div class="load"><img src="images/page-loader.jpg"/></div>');
		},
		success:function(data){
			$('.user').html(data);
			}
	});
}




function loadshare(getFlie) 
{
	$.ajax({ 
		url:getFlie,
		beforeSend: function(){
			$('.load_content').html('<div class="load"><img src="images/page-loader.jpg"/></div>');
		},
		success:function(data){
			$('.whatsappli').html(data);
		}
	});
}
$(document).ready(function(){
		loadshare("share.php");
		loadpointt('mypoint.php');  
		loadusername('username.php');	
	    loadCart('cart.php');
		loadCotent("gold.php");
		loadpoint("mypoint.php");		 
	
	 /************************details*******************************/
$('.content').on('click', '.details_link', function (e){
	var i=$(this).index('li .details_link');
		$('.products_details').eq( i ).fadeIn(500);
  });
  
$('.content').on('click', '.close_details', function (e){	
       $('.products_details').fadeOut(500);
  });
		  /*
$('.content').on('submit', '.form-item', function (){});
*/
		  
		  
	/*$(".form-item").submit(function(e){*/


	$('.content').on('submit', '.form-item', function (e) {
		var form_data = $(this).serialize();
		var button_content = $(this).find('button[type=submit]');
		button_content.html('...جاري اﻹضافه'); //Loading button text 

		$.ajax({ //make ajax request to cart_process.php
			url: "cart_process.php", //الملف المعلج
			type: "POST",
			dataType: "json", //expect json value from server
			data: form_data
		}).done(function (data) { //on Ajax success
			$("#cart-info").html(data.items); //total items in cart-info element
			button_content.html('أضف إلي السلة'); //reset button text to original text
			alert("تمت اﻹضافة الرجاء الذهاب الي السلة ﻹتمام العملية"); //alert user
			location.reload();
			if ($(".shopping-cart-box").css("display") == "block") { //if cart box is still visible
				$(".cart-box").trigger("click"); //trigger click to update the cart box.
			}
		}).fail(function (data) { //on Ajax success
			$("#cart-info").html(data.items); //total items in cart-info element
			button_content.html('أضف إلي السلة'); //reset button text to original text
			alert("ﻻيمكن الاضافة نقاطك ﻻ تكفي! \n أو هذه الهدية تم طلبها مسبقا"); //alert user
			location.reload();
			if ($(".shopping-cart-box").css("display") == "block") { //if cart box is still visible
				$(".cart-box").trigger("click"); //trigger click to update the cart box.
			}
		})
		e.preventDefault();
	});







	/*
$('.cart').on('click', '.cart-box', function (){});
*/

	//Show Items in Cart
	/*$( ".cart-box").click(function(e) {*/ //when user clicks on cart box
	$('.cart').on('click', '.cart-box', function (e) {
		e.preventDefault();
		$(".shopping-cart-box").fadeIn(); //display cart box
		$("#shopping-cart-results").html('<img src="images/ajax-loader.gif">'); //show loading image
		$("#shopping-cart-results").load("cart_process.php", {
			"load_cart": "1"
		}); //Make ajax request using jQuery Load() & update results
	});

	//Close Cart
	/*$( ".close-shopping-cart-box").click(function(e){*/
	//user click on cart box close link
	$('.content').on('click', '.close-shopping-cart-box', function (e) {
		e.preventDefault();
		$(".shopping-cart-box").fadeOut(e); //close cart-box
	});

	//Remove items from cart

	$(".content").on('click', 'a.remove-item', function (e) {
		e.preventDefault();
		var pcode = $(this).attr("data-code"); //get product code
		var gpcode = $(this).attr("data-point"); //get product code
		$(this).parent().fadeOut(); //remove item element from box
		$.getJSON("cart_process.php", {
			"remove_code": pcode,
			"gift_point": gpcode
		}, function (data) { //get Item count from Server
			location.reload();
			$("#cart-info").html(data.items); //update Item count in cart-info
			$(".cart-box").trigger("click"); //trigger click on cart-box to update the items list
		});
	});

});