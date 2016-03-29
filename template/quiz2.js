var results;
var i;

(function(){
	$(document).ready(function() {
		$("#titleBtn").show();
		$(".timeout").hide();
		setTimeout(function(){
			$('.timeout').fadeIn('slow');
		}, 1000);
	
		var index = parseInt(document.cookie.split(";")[0].split("=")[1]);
		if(index > -1){	
			$.getJSON('http://www.mattbowytz.com/simple_api.json?data=quizData', function(quizData){
				results = quizData.data;
				$("#list").html(results[index]);
			});
		document.cookie = "name=" + -1;
		}
	});

   	$mouseover = $('.mouseover');
 	$click = $('.clicks');
   	$submit = $('.submit');
  	
	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click(function() {
		$this = $(this);
		$this.html('Peace Out!')
		$(this).fadeout(1500);
		return false;
	});
	
	$submit.on('submit', function(e) {
		e.preventDefault();
		$this = $(this);
		if ($(this).find('input[type="text"]').val() !== "") {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

})();

function randomFunction(){
	$.getJSON('http://www.mattbowytz.com/simple_api.json?data=quizData', function(quizData){
		results = quizData.data;
		i = Math.floor((Math.random() * 14));
		$("#list").html(results[i]);
		
		$("#titleBtn").html("Change It");
		$("#keepBtn").show();
	});
};

function bakingFunction(){
	document.cookie = "name=" + i;
};