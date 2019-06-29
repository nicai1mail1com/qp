layui.use(['layer','flow', 'jquery','carousel'], function(){
  var $ = layui.jquery;
  var layer = layui.layer;
  $('.close_box').click(function(){
  	$(".weixin-tip").hide();
  })
  /*下载提示*/
	var loadstr="<div class='download-title'>苹果手机下载帮助<span class='layui-layer-setwin'><a class='layui-layer-ico layui-layer-close layui-layer-close2' href='javascript:;'></a></span></div><div class='game'><div class='game_pic'><a href='javascript:;' class='ios_link_click'><img src='./img/download/ios.jpg'/></a><br><img src='./img/download/index1.jpg'><br><img src='./img/download/img-0.jpg'><br><img src='./img/download/index2.jpg'><br><img src='./img/download/img-1.jpg'><br><img src='./img/download/index3.jpg'><br><img src='./img/download/img-2.jpg'><br><img src='./img/download/index4.jpg'><br><img src='./img/download/img-3.jpg'><br><img src='./img/download/index5.jpg'><br><img src='./img/download/img-4.jpg'><br><img src='./img/download/index6.jpg'><br><img src='./img/download/img-5.jpg'><br><a href='https://9uc.oss-cn-hangzhou.aliyuncs.com/App.mobileprovision'><img src='./img/download/xinren.jpg'></a><br></div></div></div>";
	//微信中打开，显示右上角打开
	var ua = navigator.userAgent.toLowerCase();
	function is_weixin() {
		if(ua.match(/iPhone/i) || ua.match(/iPad/i) == "iPad"){
			$(".weixin-tip p").css("margin-top","0");
			$(".weixin-tip p").css("padding","0")
			$(".weixin-tip img").attr("src","./img/iostip.png");
		}
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			return true;
		} else if (ua.match(/QQ/i) == "qq") {
			return true;
		} else {
			return false;
		}
	}
	var isWeixin = is_weixin();
	if (isWeixin) {
		var winHeight = $(window).height();
		$(".weixin-tip").css("height", winHeight);
		$(".weixin-tip").show();
	}
	//是ios系统 不是safari浏览器
	var userAgent = navigator.userAgent;
	if(!isWeixin && (ua.match(/iPhone/i) || ua.match(/iPad/i) == "iPad")
		&& !/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
		){
		$(".safari-tip").show();
	}
	var $successTip=$(".btn_tip");
    function showSuccessTip(){
        $successTip.show();
        setTimeout(function(){
            $successTip.fadeOut(400);
        }, 1000);
    }
	var channelid = getUrlParam("a");
	$(".safariBtn").attr('data-clipboard-text', window.location.href);
    var clipboard = new Clipboard('.safariBtn');
    clipboard.on('success', function (e) {
        showSuccessTip();
    });
    clipboard.on('error', function (e) {
        alert("您的浏览器可能不支持，请手动复制网址~");
    });
	if(channelid == null){
		channelid = "600001";
	}
	$(".android_link_click").click(function(){
		console.log(channelid);
	    document.location = "https://baishenguc.oss-cn-hangzhou.aliyuncs.com/apk/"+channelid+".apk";
	})
	$(".ios_link_click").click(function(){
	    document.location = "itms-services://?action=download-manifest&url=https://baishenguc.oss-cn-hangzhou.aliyuncs.com/ipa/"+channelid+".plist";
	    layer.open({
		  type:1,
		  title: false,
		  area: ['91%', '70%'],
		  shade: 0.3,
		  closeBtn: false,
		  content: loadstr,
		  shadeClose:true,
		});
	})
	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
});