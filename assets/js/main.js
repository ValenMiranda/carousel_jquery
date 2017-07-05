$(document).ready(function(){
	var imageItem = $('.slider li').length;

	for(var i = 1; i <= imageItem; i++){
		$('.pagination').append('<li><i class="fa fa-circle"></i></li>');
	}

	$('.slider li').hide();
	$('.slider li:first').show();
});