window.onload = function() {
	var help_link = 'http://yunjiasu.baidu.com/help/#help_title=遇见50X怎么办？';
	var head = document.getElementsByTagName("head")[0];
	var link = document.createElement("link");
	var jssrc = head.getElementsByTagName("script")[1].src.split('?')[1];
	var server_code = jssrc.split('&')[0];
	var server_code = server_code.split('=')[1];
	var server_msg = jssrc.split('&')[1];
	var server_msg = server_msg.split('=')[1];
	var ip = head.getElementsByTagName("script")[1].src.split('//')[1].split('/')[0];
	var css_link = "http://" + ip + "/static/http/customer_http_error_code.css?v=20140523";
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = css_link;
	head.appendChild(link);

	server_code = parseInt(server_code,10);
	var re = /^\d{3}$/;
	var hit = (re.test(server_code));
	server_code = hit ? server_code : "?";
	var browser_host = location.hostname;

	text = {
		browser: {
			success: "工作正常",
			unknow: "工作正常",
			error: "工作正常",
			cc: "疑似攻击"
		},
		server: {
			success: "工作正常",
			unknow: "服务器状态未知",
			error: "服务器访问错误",
			cc: "工作正常"
		},
		link: {
			success: "工作正常",
			unknow: "服务器状态未知",
			error: "服务器访问错误",
			cc: "工作正常"
		},
		cloud: {
			success: "工作正常",
			unknow: "云加速节点状态未知",
			error: "云加速节点访问错误",
			cc: "正在防御CC攻击"
		}
	};
	var code_400 = {
		browser: "success",
		link_1: "error",
		cloud: "success",
		link_2: "success",
		server: "unknow",
		server_code_html: server_code,
		server_msg: '网站异常：可能网络异常或者服务器负载过重',
		server_type: ' - DNS解析错误'

	};
	var code_503 = {
		browser: "success",
		link_1: "success",
		cloud: "success",
		link_2: "success",
		server: "error",
		server_msg: '网站异常：可能网络异常或者服务器负载过重',
		server_code_html: server_code,
		server_type: ' - 源站异常(源站返回503)'
	};
	var code_504 = {
		browser: "success",
		link_1: "success",
		cloud: "success",
		link_2: "success",
		server: "error",
		server_msg: '网站异常：可能网络异常或者服务器负载过重',
		server_code_html: server_code,
		server_type: ' - 源站异常--(请求处理超时或者主动断开到百度云加速节点的连接)'
	};
	var code_502 = {
		browser: "success",
		link_1: "success",
		cloud: "success",
		link_2: "error",
		server: "unknow",
		server_msg: '网站异常：可能网络异常或者服务器负载过重',
		server_code_html: server_code,
		server_type: ' - 百度云加速节点无法连接源站'
	};
	var code_521 = {
		browser: "cc",
		link_1: "cc",
		cloud: "cc",
		link_2: "success",
		server: "cc",
		server_msg: '访问频繁：您访问' + browser_host + '网站过于频繁，间隔时间短，请确认是否被黑客利用',
		server_code_html: server_code,
		server_type: '- 访问过于频繁'
	};
	var code_unknow = {
		browser: "success",
		link_1: "success",
		cloud: "success",
		link_2: "success",
		server: "unknow",
		server_msg: '网站异常：可能网络异常或者服务器负载过重',
		server_code_html: server_code,
		server_type: ' - 未知错误 '
	};
	var code = {
		code_400: code_400,
		code_502: code_502,
		code_503: code_503,
		code_504: code_504,
		code_521: code_521,
		code_unknow: code_unknow
	};
	var code = code['code_' + server_code] ? code['code_' + server_code] : code['code_unknow'];
	server_msg = server_msg ? decodeURIComponent(server_msg) : code.server_msg
	var body = document.getElementsByTagName("body")[0];
	body.style.display = "none";
	var html = "";
	var codeHtml = "";
	if (server_code == 400) {
		codeHtml = '<div class="error404"><div class="error404_title">' +
			'<h4>肿么了？</h4>' +
			'<p>您刚刚访问了' + browser_host + '这个网站，这个请求落到了百度云加速的网络中,而百度云加速现在还无法解析这个域名。</p></div>' +
			'<div class="error400_list">' +
			'<h4>可能原因:</h4>' +
			'<ul>' +
			'<li>大多数情况：网站主刚刚在百度云加速添加了这个域名，百度云加速需要几十秒的时间同步到全球网络中。稍等片刻刷新页面即可解决。</li>' +
			'</ul></div>' +
			'</div>'
	} else if (server_code == 523) {
	    var Captcha	= ['<div id="ccContent"><form action="/yjs_captcha_verify_page" method="POST" >',
            '<p><img title="刷新验证码" id="getCaptcha" alt="刷新验证码"  src="/yjs_captcha_genimg_page" /><input id="getCaptchaBtn" class="btn" value="刷新"></p>',
            '<p><input type="text" class="response" name="response" />',
            '<input type="submit" class="btn" value="提交验证码" /></p>',
        	'</form></div>'].join('')
		codeHtml = '<div class="error404"><div class="error404_title">' +
			'<h4 style="margin-bottom:10px">输入验证码!</h4>' +
			'<p>输入验证码证明您不是机器人，输入后可以浏览网站'+browser_host+'</p>'+
			Captcha+'</div>' +
			'<div class="error400_list" >' +
			'<h4 style="margin-bottom: 0px">可能的原因有两个：</h4>' +
			'<ul style="margin-bottom: 20px;margin-top: 5px;">' +
			'<li>您的计算机中毒，被黑客利用攻击此网站</li>'+
			'<li>您局域网中有计算机中毒</li>'+
			'</ul>'+
			'<h4 style="margin-bottom: 0px">解决办法：</h4>' +
			'<ul style="margin-bottom: 20px;margin-top: 5px;">' +
			'<li>下载百度杀毒以确认您的计算机是否有问题</li>'+
			'<li>您如果确认计算机没有问题，请稍后刷新重试</li>'+
			'<li>如果您是网站管理员，点击查看<a style="color: #006ab3;text-decoration: underline;" target="_blank"  href="' + help_link + '">如何修复</a></li>'+
			'</ul>'+
			'</div>' +
			'</div>'
	} else if (server_code == 521) {
		codeHtml = '<div class="error404"><div class="error404_title">' +
			'<h4 style="margin-bottom:10px">访问频繁!</h4>' +
			'<p>您访问' + browser_host + '网站过于频繁，百度云加速为保护此网站已暂时拒绝您的访问。</p></div>' +
			'<div class="error400_list" >' +
			'<h4 style="margin-bottom: 0px">可能的原因有两个：</h4>' +
			'<ul style="margin-bottom: 20px;margin-top: 5px;">' +
			'<li>您的计算机中毒，被黑客利用攻击此网站</li>'+
			'<li>您局域网中有计算机中毒</li>'+
			'</ul>'+
			'<h4 style="margin-bottom: 0px">解决办法：</h4>' +
			'<ul style="margin-bottom: 20px;margin-top: 5px;">' +
			'<li>下载百度杀毒以确认您的计算机是否有问题</li>'+
			'<li>您如果确认计算机没有问题，请稍后刷新重试</li>'+
			'<li>如果您是网站管理员，点击查看<a target="_blank"  href="' + help_link + '">如何修复</a></li>'+
			'</ul>'+
			'</div>' +
			'</div>'
	}else {
		codeHtml = '<div  class="error_img_list">' +
			'<div class="error_img_item browser ' + code.browser + '">' +
			'<p class="place">您的访问</p>' +
			'<p class="status success">' + text.browser[code.browser] + '</p>' +
			'</div>' +
			'<div class="error_img_item link ' + code.link_1 + '">' +
			'<p class="place ' + code.link_1 + '">DNS</p>' +
			'<p class="status ' + code.link_1 + '">DNS服务器访问出错</p>' +
			'</div>' +
			'<div class="error_img_item cloud ' + code.cloud + '">' +
			'<p class="place">百度云加速节点</p>' +
			'<p class="status ' + code.cloud + '">' + text.cloud[code.cloud] + '</p>' +
			'</div>' +

		'<div class="error_img_item link ' + code.link_2 + '">' +
			'<p class="place ' + code.link_2 + '">线路</p>' +
			'<p class="status ' + code.link_2 + '">连接超时</p>' +
			'</div>' +
			'<div class="error_img_item server ' + code.server + '">' +
			'<p class="place"> ' + browser_host + '</p>' +
			'<p class="status ' + code.server + '">' + text.server[code.server] + '</p>' +
			'</div>' +
			'</div>'
	}
	var refresh = '';
	if (server_code != 521 || server_code != 523) {
		refresh = '<a title="点击刷新，可以正常访问本页面" href="">刷新重试</a></p>'
	}
	html += '<div id="header" class="header">' +
		'<p><span>' + server_msg + '</span>' + refresh +
		'</div>' +
		'<div class="error-content">' +
		'<p class="error-type"><span>Error' + code.server_code_html + '</span>' + code.server_type + '</p>' +
		'<p id="js_help_link">如果您是网站管理员，点击查看<a target="_blank"  href="' + help_link + '">如何修复</a>。如需进行网站监控可以进行<a target="_blank" title="点击进入百度云观测，进行网站体检" href="http://ce.baidu.com/?r=eval/onekeyeval&hosturl=' + browser_host + '">网站体检</a>。</p>' +
		'</div>' +
		'<div class="error_img clearfix">' + codeHtml +
		'</div>' +
		'<div class="contact">' +
		'<a target="_blank" class="baidu" href="http://yunjiasu.baidu.com"></a>' +
		'</div>';
	body.innerHTML = html;
	if (server_code == 523) {
		var captcha = document.getElementById("getCaptcha")
		captcha.onclick = function(){
    		captcha.src="/yjs_captcha_genimg_page/?"+Math.random();
    	}
		document.getElementById("getCaptchaBtn").onclick = function(){
    		captcha.src="/yjs_captcha_genimg_page/?"+Math.random();
    	}
	}
	if (server_code == 521 || server_code == 523) {
		document.getElementById("header").style.display = "none";
		document.getElementById("js_help_link").style.display = "none";
		document.getElementsByTagName('body')[0].style.backgroundPosition = "0 -80px"
	}
	body.style.display = "";
}