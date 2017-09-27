$(function(){

	/*字符串的截取*/

	var width_screen = window.screen.width;

	if(width_screen>1000){
		
		var lls = $(".con .center_first .text_center dl dt a .text_t");
		for(var i=0;i<lls.length;i++){
			var str = lls.eq(i).text();
			str_ = $.trim(str);
			lls.eq(i).html(str_.substr(0,14)+"······");
		}

		var llss = $(".con .center_first .text_center .text_header .header_cen small");
		for(var i=0;i<llss.length;i++){
			var strr = llss.eq(i).text();
			strr_  = $.trim(strr);
			llss.eq(i).html(strr_.substr(0,25)+"......");
		}
	}




	/*选项卡头部*/
	$(".con .model-top .model-right .head li").each(function(index){
		$(this).click(function(){
			$(this).find("a").addClass('active_add').parent("li").siblings('li').find("a").removeClass('active_add');
			$(".con .model-top .model-right .center").eq(index).fadeIn(0).siblings(".center").hide();
		})
	})


	/*swiper轮播性质*/
	var mySwiper = new Swiper('.con .model-top .model-left .swiper-container',{
		autoplay : 210000,
		loop : true,
		createPagination :false,
autoplay:4000,
		pagination:'.pagination',
		paginationClickable:true
	})
	var mySwiper = new Swiper('.sjfc .swiper-container',{
		slidesPerView : 4,
		slidesPerGroup :4,
		autoplay:4000,
		loop : true
	})
	
	$(".con .center_first .text_center").eq(1).addClass('addClass_two');

	$(".con .center_first .text_center").eq(4).addClass('addClass_two');

	$(".con .center_first .text_center").eq(7).addClass('addClass_two');


		//	侧滑
		$("#m-btn-nav").click(function() {
	if($("#left-close").val()==0){
		$("body").css("transform", "translateX(80%)");
		$(".m-nav").css("left", "-80%");
		$("#left-close").val(1);
	}else{
		$("body").css("transform", "none");
		$("#left-close").val(0);
	}
});



		var a = 0;
		$("#m-btn-search").click(function() {
			if(a==0){
				$(".search_list").slideDown();
				a=1;
				return;
			}else{
				$(".search_list").slideUp();
				a=0;
				return;
			}
		})













			//	导航下拉
			$(".m-nav-item").click(function() {
				$(this).next().slideToggle("hide");
			});
			$(".m-nav-close").click(function() {
				$("body").css("transform", "none");
				$("#left-close").val(0);
			});

			/*图片加载完之后*/







			var lis = $(".contruction .contruction_all_right .icon_all");
			for(var i =0;i<lis.length;i++){
				var flog = (i+2)%2;
				if(flog==0){
					lis.eq(i).addClass('add_margin');
				}
			}




			$(".fiveth_center .fiveth_center_left>span").each(function(index){
				$(this).find("a").click(function(){
					$(this).parent("span").addClass('add_pageall').siblings("span").removeClass('add_pageall');
					$(".fiveth_center_right").eq(index).show().siblings('.fiveth_center_right').hide();
				})
			})


			$(".bottom_b  .select a").click(function(){
				$(this).siblings('ul').slideToggle(100);
			})


			$(".bottom_b .select ul li").click(function(){
				var text_center = $(this).text();
				$(this).parent().parent().find("span").text(text_center);
				$(this).parent().parent().find("ul").slideUp(0);
			})

		})
//手机端搜索
		$("#m-btn-search").on('click', function() {
			var $searchList = $(".search_list").toggle("fast");
			if ($searchList.css('display') == 'block') {
				$(this).hide();
			} else {
				$(this).show();
			}
			return false;
		});
		$(".m-soso").on('click', function() {
			var $searchList1 = $(".study-form").toggle("fast");
			if ($searchList1.css('display') == 'block') {
				$(this).hide();
				$('.tab-bar.study').css('margin-top', '55px');
			} else {
				$(this).show();
				$('.tab-bar.study').css('margin-top', '15px');
			}
			return false;
		});
		
		$("body").click(function(e) {
			var $searchList = $('.search_list');
			if ($searchList.css('display') == 'block') {
				if (!$(e.target).closest('.search_list').hasClass('search_list')) {
					$searchList.hide('fast');
					$('#m-btn-search').show();
				}
			}
		});
		$(window).on('scroll', function() {
			$('#nav-list').css('display', 'none');
			$("#m-btn-search").show();
			$('.search_list').hide('fast');
			
			$(".m-soso").show();
			$('.study-form').hide('fast');
			$('.tab-bar.study').css('margin-top', '15px');
		});