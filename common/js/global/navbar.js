define(['jquery'],function($){
		$(window).scroll(function(){
			$('nav').fadeOut("slow",function(){
				$('nav').fadeIn("slow",function(){
					return null;
				});
			});
		});
});