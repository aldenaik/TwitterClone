$(function() {
	$("textarea").focus(function() {
		$(this).addClass('expand');
		$("#tweet-controls").show();
	   
		$('textarea').keydown(function() {
			var count = $(this).val().length;

		$('#char-count').text(140-count);
			$('#char-count').text(140-count);
				if (count > 130) {
				$('#char-count').css('color', 'red');
				}else{
					$('#char-count').css('color', 'black');
			} 

			if(count>140) {
				$(".button").attr("disabled","disabled");
			}
			else{
				$(".button").removeAttr("disabled","disabled");
			}
		});


	$("textarea").blur(function() {
		$(this).removeClass('expand');
		$("#tweet-controls").hide();
	})


	});// end textarea click


			
				
	


	$("#tweet-submit").mousedown(function(){
		var tweetWords = $(".tweet-compose").val(),
			newTweet   = $('.tweet').clone().eq(0),
			oneName    = $("#realName").text(),
			user 	   = "@aldenaikele",
			picture    = $("#myAvatar").attr("src");



		newTweet.find('.tweet-text').html(tweetWords);
		newTweet.find('.avatar').attr('src', picture);
		newTweet.find('.fullname').html(oneName);
		newTweet.find('.username').html(user);

				$("#stream").prepend(newTweet);

				$("textarea").val("");

	 });  //end click tweet
  				

	$("body").on('click', ".tweet", function(){
		$(this).find('.stats').animate({
				height:"toggle"},500);
	})

		$("body").on('click', ".tweet", function(){
		$(this).find('.reply').animate({
				height:"toggle"},500);
	});

  







});//end page ready

