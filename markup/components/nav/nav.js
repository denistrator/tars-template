$(function(){
	$(".nav-toggler").on('click', function(){
		$(this).toggleClass("active");
		$(".nav").toggleClass("open");
	});
})