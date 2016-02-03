var Browser = new Object();
Browser.ua = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.ua);
Browser.moz = /gecko/.test(Browser.ua);
//JsLoader
var Loader = {
	Jsload: function(sUrl, fCallback){
		var _script = document.createElement("script");
		_script.setAttribute("type", "text/javascript");
		_script.setAttribute("src", sUrl);
		document.getElementsByTagName("head")[0].appendChild(_script);
		if (Browser.ie){
			_script.onreadystatechange = function(){
				if (this.readyState=="loaded" || this.readyState=="complete"){
					fCallback();
				}
			};
		}else if (Browser.moz){
			_script.onload = function(){
				fCallback();
			};
		}else{
			fCallback();
		}
	},
	CssLoad : function(url){
			var _css = document.createElement("link");
			_css.setAttribute("charset",'utf-8');
			_css.setAttribute("type",'text/css');
			_css.setAttribute("rel",'stylesheet');
			_css.setAttribute("href",url);
			document.getElementsByTagName("head")[0].appendChild(_css);
			
	}
	 
};

Loader.Jsload("http://static.55xys.com/jquery.min.js",function(){
	jQuery.noConflict();
	jQuery(function(){
		var uid = (function (script, i, me) {
			for (i in script) {
				// \u5982\u679c\u901a\u8fc7\u7b2c\u4e09\u65b9\u811a\u672c\u52a0\u8f7d\u5668\u52a0\u8f7d\u672c\u6587\u4ef6\uff0c\u8bf7\u4fdd\u8bc1\u6587\u4ef6\u540d\u542b\u6709"artDialog"\u5b57\u7b26
				if (script[i].src && script[i].src.indexOf('55xys.js') !== -1) me = script[i];
			};
			
			_thisScript = me || script[script.length - 1];
			me = _thisScript.src;
			return me.slice(me.lastIndexOf("?uid=")+5);
		}(document.getElementsByTagName('script')));
		
		 jQuery.ajax({
					 //url:"http://www.55xys.com/index.php?m=member&c=js_spider&a=public_visit",
					 url:"http://static.55xys.com/public_visit",
					 data:{uid:uid,url:encodeURIComponent(location.href)},
					 dataType:"jsonp"
					 });
		// \u4e3e\u62a5\u63d2\u4ef6
		new xys_report(uid);
	});
	var xys_report = function(uid){
		this.id="xys_reprot";
		this.widget = null;
		this.widgetUl = null;
		this.postUrl = "http://www.55xys.com/index.php?m=member&c=js_spider&a=public_post_report";
		this.getOpenUrl = "http://www.55xys.com/index.php?m=member&c=js_spider&a=public_get_report_info";
		this.cookieName = "55xysCookie";
		//\u83b7\u53d6js\u540e\u9762\u7684uid
		this.uid = uid;
		
		this.init();
	}
	xys_report.prototype = {
		init : function(){
			var that = this;
			//var cookie = this.getCookie(this.cookieName);
			var cookie = "" ;
			if(cookie ==""){
				jQuery.ajax({
					url : this.getOpenUrl ,
					data :{userid : this.uid},
					dataType :"jsonp",
					success : function (data){
						that.setCookie(that.cookieName,data.flag==1?1:0);
						if(parseInt(data.flag)==1){
							that.initHTML();
						}
					},error:function(){
						
					}
				});
			}else{
				if(cookie == 1){
					this.initHTML();
				}
			}
			
		},
		initHTML: function(){
			Loader.CssLoad("http://www.55xys.com/statics/css/xys_report.css");
			this.draw();
			this.setPostion();
			this.addEvent();
		},
		setCookie : function (name,value){
			var exdate=new Date();
			exdate.setDate(exdate.getDate()+1);
			document.cookie=name+ "=" +escape(value)+
			(";expires="+exdate.toGMTString())+"; path=/";
		},
		getCookie :function(name){
			if (document.cookie.length>0){
			  	var c_start=document.cookie.indexOf(name + "=");
			  	if (c_start!=-1){ 
					c_start=c_start + name.length+1 ;
					c_end=document.cookie.indexOf(";",c_start);
					if (c_end==-1) c_end=document.cookie.length;
					return unescape(document.cookie.substring(c_start,c_end));
				} 
			}
			return "";
		},
		draw : function(){
			var w = jQuery("<div/>",{
				"class":"xys_report",
				"id":this.id,
				style:"display:none;width:250px;position:fixed;"
			}).html('<div class="xys_head"><span class="xys_ico"></span><span class="xys_ico_text">\u4e3e\u62a5\u8fdd\u6cd5\u4fe1\u606f</span></div>\
					<div class="xys_wrap"><p class="xys_label">\u8bf7\u590d\u5236\u8fdd\u6cd5\u5173\u952e\u8bcd\u5982\u7f51\u5740\u3001QQ\u53f7\u7b49\u5230\u8f93\u5165\u6846\uff0c\u70b9\u51fb\u63d0\u4ea4\u5c31\u53ef\u4ee5\u5566\uff01</p>\
					<div class="xys_form"><textarea class="xys_text" ></textarea>\
				<span class="xys_btn"><span class="xys_btn_left"></span><span class="xys_btn_center">\u63d0 \u4ea4</span>\
					<span class="xys_btn_right"></span></span><span class="xys_tishi"><i class="icon"></i><b></b></span>\
				</div><a class="xys_link" href="http://www.55xys.com/report/" target = "_blank">\u53bb\u67e5\u770b\u4ed6\u4eba\u7684\u4e3e\u62a5</a></div>').appendTo("body");
			
		},
		addEvent : function(){
			var that = this;
			var widget = jQuery("#"+this.id);
			widget.find(".xys_btn").click(function(){
				var error = widget.find(".xys_tishi");
				var keywords = jQuery.trim(widget.find(".xys_text").val());
				
				error.removeClass("_error").removeClass("_ok").find("b").html('');
				if(keywords == ""){
					error.addClass("_error").find("b").html("\u60a8\u6ca1\u6709\u8f93\u5165\u4efb\u4f55\u5173\u952e\u8bcd\uff01");
					setTimeout(function(){
						error.removeClass("_error").find("b").html("");
					},2000);
					return ;
				}
				that.postKeywords(keywords,jQuery(this));
			});
			//\u5c55\u5f00\u9690\u85cf\u7684\u52a8\u753b
			widget.mouseout(function(event){
				widget.clearQueue();
				widget.delay(60).animate({left:parseInt(jQuery(window).width())+"px"},130,function(){
					//widget.css({left:parseInt(jQuery(window).width())+"px"});

				});
			}).mouseover(function(){
				widget.clearQueue();
				widget.delay(60).animate({left:parseInt(jQuery(window).width()-widget.find(".xys_wrap").width())+"px"},130,function(){

					//widget.css({left:parseInt(jQuery(window).width()-widget.find(".xys_wrap").width())+"px"});
				});
			});
		},
		postKeywords :function(keywords,target){
			
			jQuery.ajax({
				url:this.postUrl,
				dataType:"jsonp",
				data:{keyword:encodeURIComponent(keywords),userid:this.uid,url:encodeURIComponent(location.href)},
				success : function(data){
					target.prev().val("");
					if(data.status=="success"){
						target.next().addClass("_ok").removeClass("_error").find("b").html("\u4e3e\u62a5\u6210\u529f");
					}else{
						target.next().addClass("_error").removeClass("_ok").find("b").html("\u4e3e\u62a5\u5931\u8d25");
					}
					setTimeout(function(){
						target.next().removeClass("_error").removeClass("_ok").find("b").html("");
					},2000);
				},
				error : function(data){
					target.prev().val("");
					target.next().addClass("_error").removeClass("_ok").find("b").html("\u4e3e\u62a5\u5931\u8d25");
					setTimeout(function(){
						target.next().removeClass("_error").find("b").html("");
					},2000);
				}
			});
			
		},
		/**
		//\u8bbe\u7f6e\u521d\u59cb\u7684\u4f4d\u7f6e
		***/
		setPostion : function(){
			var widget = jQuery("#"+this.id);
			widget.css({
				left : jQuery(window).width()+"px",
				right:"none"
			}).show();;
		}
	}
})
