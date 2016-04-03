// JavaScript Document

/*
$('.primary_content').on('click', '.right > li', function (){});


*/




function loadCart(getFlie) {

	$.ajax({
		url: getFlie,
		beforeSend: function () {
			$('.load_content').html('loading...');
		},
		success: function (data) {
			$('.cart').html(data);
		}
	});
}



function loadCotent(getFlie) {

	$.ajax({
		url: getFlie,
		beforeSend: function () {
			$('.load_content').html('loading...');
		},
		success: function (data) {
			$('.content').html(data);
		}
	});
}

function loadpoint(getFlie) {

	$.ajax({
		url: getFlie,
		beforeSend: function () {
			$('.load_content').html('loading...');
		},
		success: function (data) {
			$('.pointt').html(data);
		}
	});
}

function loadusername(getFlie) {

	$.ajax({
		url: getFlie,
		beforeSend: function () {
			$('.load_content').html('loading');
		},
		success: function (data) {
			$('.user').html(data);
		}
	});
}

/*
$('.primary_content').on('click', '.right > li', function (){});
*/



function loadshare(getFlie) {
	$.ajax({
		url: getFlie,
		beforeSend: function () {
			$('.load_content').html('loading...');
		},
		success: function (data) {
			$('.whatsappli').html(data);
		}
	});
}
$(document).ready(function () {
	loadshare("http://dukancomshop.com/share.php");

	/*splash screen********************************/
	$(window).load(function () {

		$('#splash').delay(3000).fadeOut(200);
		$('#splash_logo').delay(2000).slideUp(300);
		$('.hellow').delay(1000).fadeIn(200);
		$('#splash_progress').delay(500).fadeOut(200);
		$('body').css("overflow", "auto");
	});

	function searchq() {
		var searchTxt = $("input[name='search']").val();
		$.post("search.php", {
			searchVal: searchTxt
		}, function (output) {
			$(".output").html(output);


		});

	}

	/*load content*/ ///////////////////	
	loadpoint('http://dukancomshop.com/mypoint.php');
	loadusername('http://dukancomshop.com/username.php');
	loadCart('http://dukancomshop.com/cart.php');
	loadCotent("http://dukancomshop.com/content.php");




	/**************hide image on input************************************/
	$("#search_input").focus(function () {
		$(this).css("background-image", "none");
		$(this).animate({
			width: '80%',
			margin: '5px 10% 5px auto;'
		}, "fast");

	});

	$("#search_input").blur(function () {
		$(this).css("background-image", "url(img/search-icon.png)");
		$(this).animate({
			width: '70%',
			margin: '5px 15% 5px auto;'
		}, "fast");
	});
	/*********************************************************************/

	/*
$('.content').on('submit', '.form-item', function (){});
*/



	/*$(".form-item").submit(function(e){*/
	$('.content').on('submit', '.form-item', function (e) {
		var form_data = $(this).serialize();
		var button_content = $(this).find('button[type=submit]');
		button_content.html('...جاري اﻹضافه'); //Loading button text 

		$.ajax({ //make ajax request to cart_process.php
			url: "http://dukancomshop.com/cart_process.php", //الملف المعلج
			type: "POST",
			dataType: "json", //expect json value from server
			data: form_data
		}).done(function (data) { //on Ajax success
			$("#cart-info").html(data.items); //total items in cart-info element
			button_content.html('أضف الي السلة'); //reset button text to original text
			alert("تمت اﻹضافة الرجاء الذهاب الي السلة ﻹتمام العملية"); //alert user
			if ($(".shopping-cart-box").css("display") == "block") { //if cart box is still visible
				$(".cart-box").trigger("click"); //trigger click to update the cart box.
			}
		})
		e.preventDefault();
	});


	/*$(".form-item").submit(function(e){*/
	$('.output').on('submit', '.form-item', function (e) {
		var form_data = $(this).serialize();
		var button_content = $(this).find('button[type=submit]');
		button_content.html('...جاري اﻹضافه'); //Loading button text 

		$.ajax({ //make ajax request to cart_process.php
			url: "http://dukancomshop.com/cart_process.php", //الملف المعلج
			type: "POST",
			dataType: "json", //expect json value from server
			data: form_data
		}).done(function (data) { //on Ajax success
			$("#cart-info").html(data.items); //total items in cart-info element
			button_content.html('أضف إلي السلة'); //reset button text to original text
			alert("تمت اﻹضافة الرجاء الذهاب الي السلة ﻹتمام العملية"); //alert user
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
		$("#shopping-cart-results").load("http://dukancomshop.com/cart_process.php", {
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
		$(this).parent().fadeOut(); //remove item element from box
		$.getJSON("http://dukancomshop.com/cart_process.php", {
			"remove_code": pcode
		}, function (data) { //get Item count from Server
			$("#cart-info").html(data.items); //update Item count in cart-info
			$(".cart-box").trigger("click"); //trigger click on cart-box to update the items list
		});
	});

});