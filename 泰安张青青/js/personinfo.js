var uname="";//用户名
$(function(){
	$.ajax({
		type: "POST",
		url: "/member/getUser",
		dataType: "json",
		success: function(data){
			if(data.success==true||data.success=="true"){
				var DtUser = data.DtUser;
				if(DtUser!=null&&DtUser.isLogin==true||DtUser.isLogin=="true"){
					$('#grzqclj').hide();
					$('.loged-userbar')
					.show()
					.hover(function(e){$('.userbar-drop').show()}, function(e){$('.userbar-drop').hide()});
					$('#user-name').text(DtUser.userName);
					if(DtUser.userName!="" && DtUser.userName!=null){
						uname=DtUser.userName;
					}
					$('#user-img').attr('src',DtUser.userImg);
					var dysjLogin = $('.dysj-login');
					var userCard = dysjLogin.find('.user-card');
					if(dysjLogin.length > 0 && userCard.length > 0){
						userCard.find('.org-name').text(DtUser.orgName);
						userCard.find('.user-name').text(DtUser.userName);
						userCard.show();
						dysjLogin.find('label').remove();
					}
				}
			}
		}
	});
	(function() {
		var bj = '<div class="online-video clearfix">' +
		'<div class="online-left">' +
		'<span class="online-icon"></span>' +
		'<span class="online-font">灯塔-党建在线</span>' +
		'</div>' +
		'<div class="open-right">' +
		'<a href="javascript:void(0)" class="open-btn" id="J-call-app">立即打开</a>' +
		'<input id="J-download-app" type="hidden" name="storeurl" value="/r/cms/qilu/qilu/jty/down/index.html">' +
		'</div>' +
		'</div>';
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
			if(/[?&]share=/.test(location.href)) {
				$('.m-bar').css('display', 'block');
				$(".footer").remove();
				$("body").append(bj);
			}
		}
	})();
	(function() {
		var backUrl = '<a class="btn-nav" style="background:none;" onclick="window.history.back()">'+
		'<svg class="icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;width: 20px;height: 20px;cursor: pointer;color: #fff;margin-top: 13px;margin-left: 10px; " viewBox="0 0 1024 1024" version="1.1"  p-id="1499">' + 
		'<path d="M750.32064 52.16256 278.79936 512 750.32064 971.83744 750.32064 802.87744 444.62592 511.9232 750.32064 221.08672Z" p-id="1500">' +
		'</path></svg></a>';
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
			if(/[?&]apparticle=/.test(location.href)) {
				$(" #m-btn-nav").remove();
				$(".m-bar .top").append(backUrl);
			}
		}
	})();
	(function() {//尚未开通，敬请期待
		var screenPopupWapper = '<div class="screen-pop-ups-wapper"><div class="desk-pop-ups"><div class="pop-title"><a href="javascript:void(0)" class="shut-pop-icon"/></a></div>'+
		'<div class="desk-pop-ups-content"><img src="/r/cms/qilu/qilu/common/img/pop-ups.png"/><h2>即将开放，敬请期待</h2></div>'+
		'<div class="desk-pop-footer"><a href="javascript:void(0)" class="desk-pop-closebtn">返&nbsp;&nbsp;回</a></div></div></div>';
		if($('.page-underconstruction').length != 0) {
			$("body").append(screenPopupWapper);
		}
		

		$('.page-underconstruction').on('click', function(){
			$('.screen-pop-ups-wapper').show();
		})
		
		$('.desk-pop-closebtn').on('click', function(){
			$('.screen-pop-ups-wapper').hide();
		})

		$('.shut-pop-icon').on('click',function(){
			$('.screen-pop-ups-wapper').hide();
		})
	})();
	(function(){
		var ua = navigator.userAgent.toLowerCase();
		var t;

		function openclient() {
			var openTarget="dtdjzx://dtdjzx.gov.cn?type=news&id=" + contentid;

			if(mediaPath != null && mediaPath != ""){
				openTarget="dtdjzx://dtdjzx.gov.cn?type=video&id" + contentid;
			}
			var newsOpen=window.open(openTarget);
			setTimeout(function() {
				newsOpen.location ='/r/cms/qilu/qilu/jty/down/index.html';

			}, 2000);
		}
		window.addEventListener("DOMContentLoaded", function(){

			if(document.getElementById("J-call-app")!=null)
				document.getElementById("J-call-app").addEventListener('click',openclient,false);

		}, false);
		if(screen.width < 800) {
			var _height = screen.width / 1.333;
			$('.title3 .video-js').css('cssText','width: 100%!important;height:' + _height + 'px!important;')
		} 
	})()
});

