$(document).ready(function (){
	'use strict';

	// Ajax MailChimp
	$('#newsletter').ajaxChimp({
		language: 'en',
		url:'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f' // This is an example MailChimp URL. Change the url to your own MailChimp subscriber link.
	});

	// Scroll to newsletter signup form
	$(".header-button a").click(function(e) { 
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#newsletter-form").offset().top},
			'slow');           
	});

	// Countdown
	$(function() {
		var endDate = "December 01, 2016 00:00:00"; // Change the date to your launch date.
		$('.countdown .row').countdown({
			date: endDate,
			render: function(data) {
				$(this.el).html('<div><div><span>' + this.leadingZeros(data.days, 2) + '</span><span>days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
			}
		});
	});

	// Backstretch
	$("header").backstretch("images/your-image-here.jpg",{centeredY:false});

	// Tweetie
    $(function () {
    	$('.twitter-feed').twittie({
        	username: 'your-user-name-here',
        	count: 6,
        	dateFormat: '%d %B %Y',
        	template: '{{tweet}} <div class="twitter-date"><a href="{{url}}" target="_blank">{{date}}</a> <span>@{{user_name}}</span></div>',
        	apiPath: 'tweetie/api/tweet.php',
      	}, 	function () {
        		var ticker = $('.twitter-feed ul');
        		ticker.children('li:first').show().siblings().hide();        
        		setInterval(function() {
          			ticker.find('li:visible').fadeOut(500,function() {
            			$(this).appendTo(ticker);
            			ticker.children('li:first').fadeIn(500);
          			});
        		},5000);
      		});
    	}); 

});

// Preloader
$(window).load(function() {
	$(".preloader").delay(1500).fadeOut(500); // Change the delay value to speed up or slow down the preloader.
});

