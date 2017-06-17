	$('.nav>div').on('click',function(){
		$(this).children().addClass("active").end().siblings().children().removeClass('active');
	});