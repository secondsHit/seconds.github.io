/*左侧导航切换*/
$("span.menu").click(function(){
						$(".top-nav-in ul").slideToggle(500, function(){
						});
					});
/*部分页面图片切换*/
$(function () {
				$("#slider1").responsiveSlides({
						auto: true,
						speed: 500,
						namespace: "callbacks",
						pager: false,
						nav:true,
					});
				});
$(function () {
				 $("#slider4").responsiveSlides({
						auto: true,
						speed: 500,
						namespace: "callbacks",
						pager: true,
					 });
				});
$(function () {
				 $("#slider").responsiveSlides({
						auto: true,
						speed: 500,
						namespace: "callbacks",
						pager: true,
					 });
				});