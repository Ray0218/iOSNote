(function(){var I=this;var H;if(typeof(I.require)=="function"){try{var G=I.require("crypto").randomBytes;H=G&&function(){return G(16)}}catch(J){}}if(!H&&I.crypto&&crypto.getRandomValues){var E=new Uint8Array(16);H=function K(){crypto.getRandomValues(E);return E}}if(!H){var D=new Array(16);H=function(){for(var e=0,f;e<16;e++){if((e&3)===0){f=Math.random()*4294967296}D[e]=f>>>((e&3)<<3)&255}return D}}var C=typeof(I.Buffer)=="function"?I.Buffer:Array;var B=[];var z={};for(var F=0;F<256;F++){B[F]=(F+256).toString(16).substr(1);z[B[F]]=F}function w(h,e,j){var f=(e&&j)||0,g=0;e=e||[];h.toLowerCase().replace(/[0-9a-f]{2}/g,function(i){if(g<16){e[f+g++]=z[i]}});while(g<16){e[f+g++]=0}return e}function r(f,e){var g=e||0,h=B;return h[f[g++]]+h[f[g++]]+h[f[g++]]+h[f[g++]]+"-"+h[f[g++]]+h[f[g++]]+"-"+h[f[g++]]+h[f[g++]]+"-"+h[f[g++]]+h[f[g++]]+"-"+h[f[g++]]+h[f[g++]]+h[f[g++]]+h[f[g++]]+h[f[g++]]+h[f[g++]]}var y=H();var x=[y[0]|1,y[1],y[2],y[3],y[4],y[5]];var s=(y[6]<<8|y[7])&16383;var d=0,A=0;function a(g,f,l){var h=f&&l||0;if(typeof(g)=="string"){f=g=="binary"?new C(16):null;g=null}g=g||{};var k=g.random||(g.rng||H)();k[6]=(k[6]&15)|64;k[8]=(k[8]&63)|128;if(f){for(var j=0;j<16;j++){f[h+j]=k[j]}}return f||r(k)}var c=a;c.v4=a;c.parse=w;c.unparse=r;c.BufferClass=C;if(typeof define==="function"&&define.amd){define(function(){return c})}else{if(typeof(module)!="undefined"&&module.exports){module.exports=c}else{var b=I.uuid;c.noConflict=function(){I.uuid=b;return c};I.uuid=c}}}).call(this);(function(e,f,a){var g=String.prototype.trim;var c=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;var b=g&&!g.call("\uFEFF\xA0")?function(j){return j==null?"":g.call(j)}:function(j){return j==null?"":(j+"").replace(c,"")};var i={};i.domReady={add:function(k){if(i.domReady.loaded){return k()}var n=i.domReady.observers;if(!n){n=i.domReady.observers=[]}n[n.length]=k;if(i.domReady.callback){return}i.domReady.callback=function(){if(i.domReady.loaded){return}i.domReady.loaded=true;if(i.domReady.timer){clearInterval(i.domReady.timer);i.domReady.timer=null}var r=i.domReady.observers;for(var o=0,q=r.length;o<q;o++){var p=r[o];r[o]=null;p()}i.domReady.callback=i.domReady.observers=null};var m=!!(e.attachEvent&&!e.opera);var j=navigator.userAgent.indexOf("AppleWebKit/")>-1;if(f.readyState&&j){i.domReady.timer=setInterval(function(){var o=f.readyState;if(o=="loaded"||o=="complete"){i.domReady.callback()}},50)}else{if(f.readyState&&m){var l=(e.location.protocol=="https:")?"://0":"javascript:void(0)";f.write('<script type="text/javascript" defer="defer" src="'+l+'" onreadystatechange="if (this.readyState == \'complete\') {window.__MockEvent && __MockEvent.domReady && __MockEvent.domReady.callback && __MockEvent.domReady.callback();}"><\/script>')}else{if(e.addEventListener){f.addEventListener("DOMContentLoaded",i.domReady.callback,false);e.addEventListener("load",i.domReady.callback,false)}else{if(e.attachEvent){e.attachEvent("onload",i.domReady.callback)}else{var k=e.onload;e.onload=function(){i.domReady.callback();if(k){k()}}}}}}}};e.__MockEvent=i;var d=function d(){this.init.apply(this,arguments)};d.prototype={options:{cookieExpires:1095,src:"http://g.cloudid.anquanbao.com/cloudid.gif"},init:function(){this.initId();var j=this;i.domReady.add(function(){j.execute()})},initId:function(){this.cookieName="_AQB_CloudId";this.userId=uuid.v4()},execute:function(){return this._execute();var k=f.body.onload;var j=this;var l=function(){e.setTimeout(function(){j._execute()},100);k&&k.apply(e,arguments)};f.body.onload=l},_execute:function(){if(this.getCookie()){return}this.setCookie(this.userId);this.createImage()},clear:function(){return this.setCookie(null)},createImage:function(){var m="&ver=2&"+this.collectPerformanceInfo();var j="&t="+new Date().getTime();var l=this.options.src+"?id="+this.userId+m+j;var k=new Image();k.src=l},getCookie:function(){return this.cookieManager.get(this.cookieName)},getDomain:function(){return e.location.host},setCookie:function(l){var k=this.cookieName;var j={expires:this.options.cookieExpires,path:"/",domain:this.getDomain()};return this.cookieManager.set(k,l,j)},collectPerformanceInfo:function(){var k=e.performance;if(!k){return}var u=k.timing;var r={redirect:["redirectStart","redirectEnd"],"app-cache":["fetchStart","domainLookupStart"],dns:["domainLookupStart","domainLookupEnd"],tcp:["connectStart","connectEnd"],ssh:["secureConnectionStart","connectEnd"],request:["requestStart","responseStart"],response:["responseStart","responseEnd"],processing:["domLoading","domComplete"],"dom-content-loaded":["domContentLoadedEventStart","domContentLoadedEventEnd"],load:["loadEventStart","loadEventEnd"],unload:["unloadEventStart","unloadEventEnd"]};var o={};for(var l in r){var n=r[l];var v=u[n[0]];var m=u[n[1]];if(!v){o[l]="-1"}else{o[l]=m-v}}var j=[];for(var l in o){j.push([l,o[l]].join("="))}return j.join("&")},cookieManager:{get:function(j){var n=null;if(f.cookie&&f.cookie!=""){var m=f.cookie.split(";");for(var l=0;l<m.length;l++){var k=b(m[l]);if(k.substring(0,j.length+1)==(j+"=")){n=decodeURIComponent(k.substring(j.length+1));break}}}return n},set:function(m,o,l){l=l||{};if(o===null){o="";l.expires=-1}var j="";if(l.expires&&(typeof l.expires=="number"||l.expires.toUTCString)){var k;if(typeof l.expires=="number"){k=new Date();k.setTime(k.getTime()+(l.expires*24*60*60*1000))}else{k=l.expires}j="; expires="+k.toUTCString()}var q=l.path?"; path="+l.path:"";var n=l.domain?"; domain="+l.domain:"";var p=l.secure?"; secure":"";f.cookie=[m,"=",encodeURIComponent(o),j,q,n,p].join("")},remove:function(j){return this.set(j,null)}}};var h=new d()})(window,window.document);