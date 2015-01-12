define(['jquery'],function($){
		$(window).scroll(function(){
			if($(window).scrollTop() > 0 ){
				$('nav').fadeOut("slow",function(){
				$('nav').fadeIn("slow",function(){
					return null;
				});
			});
			}
		});
});