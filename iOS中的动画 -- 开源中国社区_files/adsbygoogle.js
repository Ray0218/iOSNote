(function(){var p=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return q.apply(null,arguments)};var v=(new Date).getTime();var ea=function(){},x=function(a,b,c){switch(typeof b){case "string":fa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),x(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&(c.push(d),fa(f,c),c.push(":"),x(a,e,c),d=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},A={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ga=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,fa=function(a,b){b.push('"');b.push(a.replace(ga,function(a){if(a in A)return A[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return A[a]=f+b.toString(16)}));b.push('"')};var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ia=/&/g,ja=/</g,ka=/>/g,la=/"/g,ma=/'/g,na=/\x00/g,C={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},D={"'":"\\'"},E=function(a,b){return a<b?-1:a>b?1:0};var F=function(a){F[" "](a);return a};F[" "]=function(){};var G=function(a){try{var b;if(b=!!a&&null!=a.location.href)t:{try{F(a.foo);b=!0;break t}catch(c){}b=!1}return b}catch(d){return!1}},H=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(f){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},oa=/^(-?[0-9.]{1,30})$/,I=function(a){return oa.test(a)&&(a=Number(a),!isNaN(a))?a:null};var pa=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b};var qa=document,J=window;var K=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},L=function(a){return!!a&&"function"==typeof a&&!!a.call},ra=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},sa=function(a){var b=document;b.addEventListener?b.addEventListener("DOMContentLoaded",a,!1):b.attachEvent&&b.attachEvent("onDOMContentLoaded",a)},ta=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},ua=function(a){a=
a.google_unique_id;return"number"==typeof a?a:0},va=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},M=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},wa=/(^| )adsbygoogle($| )/;var xa={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},ya=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];K(a,function(a,d){if(null!=a){var f;try{var e=[];x(new ea,a,e);f=e.join("")}catch(g){}f&&(f=f.replace(/\\|\//,"\\$&"),ra(b,d,"=",f,";"))}});return b.join("")};var za={overlays:1,interstitials:2};var N=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},Aa=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},Ba=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,Ca=function(a,b){if(!a)return b;var c=a.match(Ba);return c?c[0]:b};var Da=N("0.15"),Ea=N("0.006"),Fa=N("0.001"),Ga=N("0.01"),Ha=N("0.01"),Ia=N("0.001"),Ja=N("0.2"),Ka=Aa("true",!0);var La=Aa("false",!1),Ma=Aa("false",!1);var Na=!!window.google_async_iframe_id,Oa=function(a,b,c){var d=["<iframe"],f;for(f in a)a.hasOwnProperty(f)&&ra(d,f+"="+a[f]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var Pa=!0,Qa={},Ta=function(a,b,c,d){var f=Ra,e,g=Pa;try{e=b()}catch(h){try{var k=pa(h);b="";h.fileName&&(b=h.fileName);var m=-1;h.lineNumber&&(m=h.lineNumber);g=f(a,k,b,m,c)}catch(l){try{var u=pa(l);a="";l.fileName&&(a=l.fileName);c=-1;l.lineNumber&&(c=l.lineNumber);Ra("pAR",u,a,c,void 0,void 0)}catch(w){Sa({context:"mRE",msg:w.toString()+"\n"+(w.stack||"")},void 0)}}if(!g)throw h;}finally{if(d)try{d()}catch(y){}}return e},Ra=function(a,b,c,d,f,e){var g={};if(f)try{f(g)}catch(h){}g.context=a;g.msg=
b.substring(0,512);c&&(g.file=c);0<d&&(g.line=d.toString());g.url=qa.URL.substring(0,512);g.ref=qa.referrer.substring(0,512);Ua(g);Sa(g,e);return Pa},Sa=function(a,b){try{if(Math.random()<(b||.01)){var c="/pagead/gen_204?id=jserror"+Va(a),d="http"+("http:"==J.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,d=d.substring(0,2E3);J.google_image_requests||(J.google_image_requests=[]);var f=J.document.createElement("img");f.src=d;J.google_image_requests.push(f)}}catch(e){}},Ua=function(a){var b=
a||{};K(Qa,function(a,d){b[d]=J[a]})},Wa=function(a,b){return function(){var c=arguments;return Ta(a,function(){return b.apply(void 0,c)},void 0,void 0)}},Xa=function(a,b){return Wa(a,b)},Ya=function(a){return Wa("aa:reactiveTag",a)},Va=function(a){var b="";K(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};var Za=null,$a=function(){if(!Za){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,G(a))b=a;else break;Za=b}return Za};var O=function(a){var b=arguments.length;if(1==b&&"array"==aa(arguments[0]))return O.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var ab={J:"google_auto_instream_debug",K:"google_anchor_debug",L:"google_infinite_scroll_debug",M:"google_inflate_debug",O:"google_ia_debug",P:"google_ia_debug_fi",R:"google_ia_debug_spa",Q:"google_ia_debug_scr",S:"google_ladder_rung_debug",T:"google_lat_debug",U:"google_lat_debug_all",V:"google_resize_debug",N:"google_inflate_debug_all"};var P=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}},cb=function(a){var b=!1;K(ab,function(c){bb(a,c)&&(b=!0)});return b},bb=function(a,b){if(!a||!a.indexOf)return!1;if(-1!=a.indexOf(b))return!0;var c=db(b);return-1!=a.indexOf(c)?!0:!1},db=function(a){var b="";K(a.split("_"),function(a){b+=a.substr(0,2)});return b};var eb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var fb=/^([0-9.]+)px$/,gb=/^([0-9.]+)$/,Q=function(a){return(a=fb.exec(a))?Number(a[1]):null},hb=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var f="google_ad_"+c[d];if(!b.hasOwnProperty(f)){var e;e=(e=Q(a[c[d]]))?Math.round(e):null;null!=e&&(b[f]=e)}}},ib=function(a,b){var c=b.document.documentElement;try{var d=c.getBoundingClientRect();return a.getBoundingClientRect().top-d.top}catch(f){return 0}};var jb={rectangle:1,horizontal:2,vertical:4},kb=[{width:970,height:90,format:2},{width:728,height:90,format:2},{width:468,height:60,format:2},{width:336,height:280,format:1},{width:320,height:100,format:2},{width:320,height:50,format:2},{width:300,height:600,format:4},{width:300,height:250,format:1},{width:250,height:250,format:1},{width:234,height:60,format:2},{width:200,height:200,format:1},{width:180,height:150,format:1},{width:160,height:600,format:4},{width:125,height:125,format:1},{width:120,
height:600,format:4},{width:120,height:240,format:4}],lb=function(a,b){return b.width-a.width||b.height-a.height};O("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));O("action","cite","data","formaction","href","manifest","poster","src");O("embed","iframe","link","object","script","style","template");var R;t:{var mb=p.navigator;if(mb){var nb=mb.userAgent;if(nb){R=nb;break t}}R=""};var S=function(){return-1!=R.indexOf("Edge")};var ob=-1!=R.indexOf("Opera")||-1!=R.indexOf("OPR"),T=-1!=R.indexOf("Edge")||-1!=R.indexOf("Trident")||-1!=R.indexOf("MSIE"),pb=-1!=R.indexOf("Gecko")&&!(-1!=R.toLowerCase().indexOf("webkit")&&!S())&&!(-1!=R.indexOf("Trident")||-1!=R.indexOf("MSIE"))&&!S(),qb=-1!=R.toLowerCase().indexOf("webkit")&&!S(),rb=function(){var a=R;if(pb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(T&&S())return/Edge\/([\d\.]+)/.exec(a);if(T)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(qb)return/WebKit\/(\S+)/.exec(a)},
sb=function(){var a=p.document;return a?a.documentMode:void 0},tb=function(){if(ob&&p.opera){var a=p.opera.version;return"function"==aa(a)?a():a}var a="",b=rb();b&&(a=b?b[1]:"");return T&&!S()&&(b=sb(),b>parseFloat(a))?String(b):a}(),ub={},vb=function(a){if(!ub[a]){for(var b=0,c=ha(String(tb)).split("."),d=ha(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var l=k.exec(g)||["","",""],u=m.exec(h)||
["","",""];if(0==l[0].length&&0==u[0].length)break;b=E(0==l[1].length?0:parseInt(l[1],10),0==u[1].length?0:parseInt(u[1],10))||E(0==l[2].length,0==u[2].length)||E(l[2],u[2])}while(0==b)}ub[a]=0<=b}},wb=p.document,xb=sb(),yb=!wb||!T||!xb&&S()?void 0:xb||("CSS1Compat"==wb.compatMode?parseInt(tb,10):5);var zb;if(!(zb=!pb&&!T)){var Ab;if(Ab=T)Ab=T&&(S()||9<=yb);zb=Ab}zb||pb&&vb("1.9.1");T&&vb("9");var Bb=function(a,b){this.q=[0,0];this.n=a||"";this.k=b||""},U=function(a,b){0>a.n.indexOf(b)&&(a.n=b+a.n)};Bb.prototype.toString=function(){return[this.q[0],this.q[1],this.n,this.k].join("|")};var Cb=function(a,b){if(3!=a.nodeType&&1==a.nodeType){if(/^(head|script|style)$/i.test(a.nodeName))return 0;try{var c=M(a,b)}catch(d){}if(c){if("none"==c.display||"fixed"==c.position)return 0;if("absolute"==c.position)return 1}return 2}return 0};var Db=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};Pa=!La;Qa={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var Eb=function(a,b,c){c||(c=Ma?"https":"http");return[c,"://",a,b].join("")};var V=null;var W=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:q(this.H,this)});this.D=a.google_iframe_oncopy},Fb;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(ia,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(ja,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace(ka,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(la,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(ma,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(na,"&#0;")));Fb=X;W.prototype.set=function(a,b){this.D.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",q(this.w,this,a),!1)};
W.prototype.w=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};W.prototype.H=function(a,b){var c=Gb("rx",a),d;t:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break t}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var Gb=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var Hb=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Y,Z=function(a){this.m=[];this.j=a||window;this.i=0;this.l=null;this.u=0},Ib=function(a,b){this.A=a;this.I=b};Z.prototype.v=function(a,b){0!=this.i||0!=this.m.length||b&&b!=window?this.r(a,b):(this.i=2,this.t(new Ib(a,window)))};Z.prototype.r=function(a,b){this.m.push(new Ib(a,b||this.j));Jb(this)};Z.prototype.B=function(a){this.i=1;if(a){var b=Xa("sjr::timeout",q(this.s,this,!0));this.l=this.j.setTimeout(b,a)}};
Z.prototype.s=function(a){a&&++this.u;1==this.i&&(null!=this.l&&(this.j.clearTimeout(this.l),this.l=null),this.i=0);Jb(this)};Z.prototype.C=function(){return!(!window||!Array)};Z.prototype.F=function(){return this.u};Z.prototype.nq=Z.prototype.v;Z.prototype.nqa=Z.prototype.r;Z.prototype.al=Z.prototype.B;Z.prototype.rl=Z.prototype.s;Z.prototype.sz=Z.prototype.C;Z.prototype.tc=Z.prototype.F;var Jb=function(a){var b=Xa("sjr::tryrun",q(a.G,a));a.j.setTimeout(b,0)};
Z.prototype.G=function(){if(0==this.i&&this.m.length){var a=this.m.shift();this.i=2;var b=Xa("sjr::run",q(this.t,this,a));a.I.setTimeout(b,0);Jb(this)}};Z.prototype.t=function(a){this.i=0;a.A()};
var Kb=function(a){try{return a.sz()}catch(b){return!1}},Lb=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Kb(a)&&L(a.nq)&&L(a.nqa)&&L(a.al)&&L(a.rl)},Mb=function(){if(Y&&Kb(Y))return Y;var a=$a(),b=a.google_jobrunner;return Lb(b)?Y=b:a.google_jobrunner=Y=new Z(a)},Nb=function(a,b){Mb().nq(a,b)},Ob=function(a,b){Mb().nqa(a,b)};var Pb=Na?1==ua(J):!ua(J),Qb=function(){var a=F("script"),b;b=Ca("","pagead2.googlesyndication.com");return["<",a,' src="',Eb(b,"/pagead/js/r20150303/r20150224/show_ads_impl.js",""),'"></',a,">"].join("")},Rb=function(a,b,c,d){return function(){var f=!1;d&&Mb().al(3E4);var e=a.document.getElementById(b);e&&!G(e.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{if(G(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(h.open(),g.google_async_iframe_close=!0,h.write(c))}else{var k=a.document.getElementById(b).contentWindow,m;e=c;e=String(e);if(e.quote)m=e.quote();else{g=['"'];for(h=0;h<e.length;h++){var l=e.charAt(h),u=l.charCodeAt(0),w=h+1,y;if(!(y=C[l])){var t;if(31<u&&127>u)t=l;else{var n=l;if(n in D)t=D[n];else if(n in
C)t=D[n]=C[n];else{var z=n,r=n.charCodeAt(0);if(31<r&&127>r)z=n;else{if(256>r){if(z="\\x",16>r||256<r)z+="0"}else z="\\u",4096>r&&(z+="0");z+=r.toString(16).toUpperCase()}t=D[n]=z}}y=t}g[w]=y}g.push('"');m=g.join("")}k.location.replace("javascript:"+m)}f=!0}catch(B){k=$a().google_jobrunner,Lb(k)&&k.rl()}f&&(f=Gb("google_async_rrc",c),(new W(a)).set(b,Rb(a,b,f,!1)))}},Sb=function(a){var b=["<iframe"];K(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},Ub=function(a,
b,c){Tb(a,b,c,function(a,b,e){a=a.document;for(var g=b.id,h=0;!g||a.getElementById(g);)g="aswift_"+h++;b.id=g;b.name=g;g=Number(e.google_ad_width);h=Number(e.google_ad_height);16==e.google_reactive_ad_format?(e=a.createElement("div"),e.innerHTML=Oa(b,g,h),c.appendChild(e.firstChild)):c.innerHTML=Oa(b,g,h);return b.id})},Tb=function(a,b,c,d){var f=F("script"),e={},g=b.google_ad_height;e.width='"'+b.google_ad_width+'"';e.height='"'+g+'"';e.frameborder='"0"';e.marginwidth='"0"';e.marginheight='"0"';
e.vspace='"0"';e.hspace='"0"';e.allowtransparency='"true"';e.scrolling='"no"';e.allowfullscreen='"true"';e.onload='"'+Fb+'"';d=d(a,e,b);var e=Vb(b)?H(["c","e"],Ja):null,h=b.google_ad_output,g=b.google_ad_format;g||"html"!=h&&null!=h||(g=b.google_ad_width+"x"+b.google_ad_height,"e"==e&&(g+="_as"));h=!b.google_ad_slot||Vb(b);g=g&&h?g.toLowerCase():"";b.google_ad_format=g;for(var g=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],h=[],k=0,m=c;m&&25>k;m=m.parentNode,
++k)h.push(9!=m.nodeType&&m.id||"");(h=h.join())&&g.push(h);b.google_ad_unit_key=va(g.join(":")).toString();g=a.google_adk2_experiment=a.google_adk2_experiment||H(["C","E"],Ia)||"N";if("E"==g){g=[];for(h=0;c&&25>h;++h){k=(k=9!=c.nodeType&&c.id)?"/"+k:"";t:{if(c&&c.nodeName&&c.parentElement)for(var m=c.nodeName.toString().toLowerCase(),l=c.parentElement.childNodes,u=0,w=0;w<l.length;++w){var y=l[w];if(y.nodeName&&y.nodeName.toString().toLowerCase()==m){if(c==y){m="."+u;break t}++u}}m=""}g.push((c.nodeName&&
c.nodeName.toString().toLowerCase())+k+m);c=c.parentElement}c=g.join()+":";g=a;h=[];if(g)try{for(var t=g.parent,k=0;t&&t!=g&&25>k;++k){for(var n=t.frames,m=0;m<n.length;++m)if(g==n[m]){h.push(m);break}g=t;t=g.parent}}catch(z){}b.google_ad_unit_key_2=va(c+h.join()).toString()}else"C"==g&&(b.google_ad_unit_key_2="ctrl");var t=ya(b),r;b=b.google_ad_client;if(n=Pb){if(!V)r:{c=[J.top];n=[];for(g=0;h=c[g++];){n.push(h);try{if(h.frames)for(var B=h.frames.length,k=0;k<B&&1024>c.length;++k)c.push(h.frames[k])}catch(jc){}}for(B=
0;B<n.length;B++)try{if(r=n[B].frames.google_esf){V=r;break r}}catch(kc){}V=null}n=!V}n?(r={style:"display:none"},r["data-ad-client"]=Hb(b),r.id="google_esf",r.name="google_esf",r.src=Eb(Ca("","googleads.g.doubleclick.net"),"/pagead/html/r20150303/r20150224/zrt_lookup.html"),r=Sb(r)):r="";B=(new Date).getTime();b=a.google_top_experiment;if(n=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=
void 0;c=a.google_always_use_delayed_impressions_experiment;e=["<!doctype html><html><body>",r,"<",f,">",t,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',v,";",b?'google_top_experiment="'+b+'";':"",n?'google_async_for_oa_experiment="'+n+'";':"",c?'google_always_use_delayed_impressions_experiment="'+c+'";':"",e?'google_append_as_for_format_override="'+e+'";':"","google_bpp=",B>v?B-v:1,";google_async_rrc=0;</",f,">",Qb(),"</body></html>"].join("");
(a.document.getElementById(d)?Nb:Ob)(Rb(a,d,e,!0))},Wb=Math.floor(1E6*Math.random()),Xb=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var f=c[d].indexOf("=");-1!=f&&(b[c[d].substr(0,f)]=c[d].substr(f+1))}}catch(e){}c=b[3];if(b[1]==Wb&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();
window.google_top_js_callbacks.length=0}},Vb=function(a){return a.google_override_format||!eb[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used},Yb=function(a,b){var c=navigator;if(Ka&&a&&b&&c){var d=a.document,c=d.createElement("script"),f=Hb(b);c.async=!0;c.type="text/javascript";c.src=Eb("pagead2.googlesyndication.com","/pub-config/"+f+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}};var Zb=function(a){return wa.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},ac=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");$b(a,b,c)},$b=function(a,b,c){bc(a,b,c);if(!cc(a,b,c)){ta(c);1==ua(c)&&Yb(c,b.google_ad_client);K(xa,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&"html"!=d)throw Error("No support for google_ad_output="+d);Ta("aa::main",function(){Ub(c,b,a)})}},cc=function(a,b,c){var d;var f=b.google_ad_slot;
d=c.google_ad_modifications;if(!d||Db(d.ad_whitelist,f,b.google_tag_origin))d=null;else{var e=d.space_collapsing||"none";d=(f=Db(d.ad_blacklist,f))?{p:!0,o:f.space_collapsing||e}:d.remove_ads_by_default?{p:!0,o:e}:null}if(d&&d.p){if("none"==d.o)return!0;if(null!==I(a.getAttribute("width"))||null!==I(a.getAttribute("height")))a.setAttribute("width",0),a.setAttribute("height",0);a.style.width="0px";a.style.height="0px";if("slot_and_pub"==d.o)for(b=a.ownerDocument,b=b.defaultView||b.parentWindow,c=new Bb;a;){try{var g=
/^head$/i.test(a.nodeName)?null:M(a,b)}catch(h){0>c.k.indexOf("c")&&(c.k="c"+c.k)}e=b;d=a;f=c;try{var k=d.style}catch(m){0>f.k.indexOf("s")&&(f.k="s"+f.k)}var l=void 0;if(d&&d.parentElement)for(var l=0,u=d.parentElement.childNodes,w=0;w<u.length;w++){var y=u[w];y!==d&&(l|=Cb(y,e))}else l=0;3==l?U(f,"m"):(e=d.getAttribute("width"),I(e),d=d.getAttribute("height"),I(d),(d=k?k.width:null)&&Q(d),k&&k.height&&Q(k.height));if(g)if("none"==g.display){U(c,"n");break}else if("absolute"==g.position){U(c,"a");
break}else if("fixed"==g.position){U(c,"f");break}else if("hidden"==g.visibility||"collapse"==g.visibility){U(c,"v");break}else"hidden"==g.overflow&&U(c,"o");a=a.parentElement;if(!a)try{a=b.frameElement;var t=b.parent;t&&t!=b&&(b=t)}catch(n){U(c,"c");break}}return!0}return!(g=M(a,c))||"none"!=g.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||b.google_reactive_ads_config?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),
!0)},bc=function(a,b,c){for(var d=a.attributes,f=d.length,e=0;e<f;e++){var g=d[e];if(/data-/.test(g.name)){var h=g.name.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(h)||(g=g.value,"google_reactive_ad_format"==h&&(g=+g,g=isNaN(g)?null:g),null===g||(b[h]=g))}}cb(c.location.hash)&&(b.google_adtest="on");if(b.google_enable_content_recommendations&&1==b.google_reactive_ad_format)b.google_ad_width=P(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=
320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=P(c).clientWidth||0,b.google_ad_height=P(c).clientHeight||0,a.style.display="none",bb(c.location.hash,"google_ia_debug_spa")&&(b.google_vignette_manual_trigger=!0);else if(d=b.google_ad_format,"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)){d=["IC","IE"];f=a.offsetWidth;d=320==P(window).clientWidth&&300<=f&&320>f?H(d,Ha):null;b.google_responsive_optimization_experiment=d||
H(["SC","SE"],Ga)||"-";var d=a.offsetWidth,f=b.google_ad_format,k;if("auto"==f)k=P(c).clientWidth,k=Math.min(1200,k),k=.25>=d/k?4:3;else{e=0;for(k in jb)-1!=f.indexOf(k)&&(e|=jb[k]);k=e}b&&(b.google_responsive_formats=k);t:{e=kb.sort(lb);if(g=h=488>P(c).clientWidth)g=Math.min(P(c).clientHeight,16*P(c).clientWidth/9),g=ib(a,c)<g-100;for(var m=0;m<e.length;m++){var l=e[m];if(e[m].width<=d&&l.format&k&&!(320==l.width&&(h&&50==l.height||!h&&100==l.height)||g&&250<=l.height)){k=l;break t}}k=null}e=k;if(!e)throw Error("Cannot find a responsive size for a container of width="+
d+"px and data-ad-format="+f);f=b.google_responsive_optimization_experiment;("SC"==f||"SE"==f?e.width!=(300<d&&300<e.height?e.width:1200<d?1200:Math.round(d)):"IC"!=f&&"IE"!=f||234==e.width&&60==e.height)||(b.google_responsive_optimization_experiment=void 0);h=b.google_responsive_optimization_experiment;f="SE"==h?e.width:300<d&&300<e.height?e.width:1200<d?1200:Math.round(d);k=e.height;if(e=234==e.width&&60==e.height&&"IE"==h){e=P(c).clientWidth||0;if(!(d=!(320==e&&300<=d&&320>d)))r:{d=a;for(h=0;10>
h&&d.parentElement;h++){d=d.parentElement;g=M(d,c);if(!g)break;g=g.overflowX||g.overflow;if("hidden"==g||"scroll"==g||"auto"==g)break;if(d.clientWidth>=e){d=!1;break r}}d=!0}d?e=!1:(c=M(a,c),d=a.getBoundingClientRect(),c&&d?(d=d.left,0>=d?e=!1:(e-=d+a.offsetWidth,"rtl"!=c.direction?(c=Q(c.marginLeft)||0,a.style.marginLeft=c-d+"px"):(c=Q(c.marginRight)||0,a.style.marginRight=c-e+"px"),e=!0)):e=!1)}e&&(f=320,k=100);b.google_ad_width=f;b.google_ad_height=k;a.style.height=b.google_ad_height+"px";b.google_ad_resizable=
!0;delete b.google_ad_format;b.google_loader_features_used=128}else{if(!gb.test(b.google_ad_width)&&!fb.test(a.style.width)||!gb.test(b.google_ad_height)&&!fb.test(a.style.height))d=M(a,c),a.style.width=d.width,a.style.height=d.height,hb(d,b),b.google_loader_features_used=256;else{hb(a.style,b);t:{if(!(b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height)&&(d=P(c).clientHeight,ib(a,c)>1.5*d&&(d=H("C E CL EL CM EM".split(" "),Ea)))&&(f="E"==d||"EL"==d||"EM"==
d,k=a.style.width,a.style.width="100%",e=a.offsetWidth,a.style.width=k,!(336>e)&&("C"==d||"E"==d||("CL"==d||"EL"==d)&&600>e||("CM"==d||"EM"==d)&&450>P(c).scrollWidth))){f&&(b.google_available_width=e);break t}d=void 0}b.google_efmwe=d}d=b.google_ad_width;f=b.google_ad_height;if(d&&f&&!eb[d+"x"+f]&&(d=H("C E C0 E0 C15 E15 C30 E30".split(" "),Fa)))if("C"==d)b.google_overflowing_ads_experiment=d;else if(k=/^(E|C)(\d*)$/.exec(d),f=+(k&&k[2]),k=!!k&&"E"==k[1],e=P(c),a&&a.getBoundingClientRect&&e&&e.getBoundingClientRect?
(c=a.getBoundingClientRect(),e=e.getBoundingClientRect(),c=Math.min(c.right,e.right)-Math.max(c.left,e.left),h=Math.max(0,c)):h=0,c=b.google_ad_width,160>h||c-h<=f?a=!1:(e=a.style.width||"",a.style.width="100%",h=Math.round(Math.max(a.offsetWidth,h)),160>h||c-h<=f?(a.style.width=e,a=!1):(k?(b.google_original_width=c,b.google_ad_width=h,a.style.width=h+"px"):a.style.width=e,a=!0)),a||"E"==d)b.google_overflowing_ads_experiment=d}0<b.google_reactive_ad_format&&!b.google_pgb_reactive&&(b.google_pgb_reactive=
3)},dc=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(Zb(d)&&(!a||d.id==a))return d;return null},ec=!1,fc=function(a){var b={};K(za,function(c,f){a.hasOwnProperty(f)&&(b[f]=a[f])});ba(a.enable_page_level_ads)&&(b.page_level_pubvars=a.enable_page_level_ads);var c=document.createElement("ins");c.className="adsbygoogle";c.style.display="none";document.body.appendChild(c);ac(c,{google_reactive_ads_config:b,google_ad_client:a.google_ad_client})},gc=function(a){if(ec)throw Error("adsbygoogle.push(): Only one 'enable_page_level_ads'  allowed per page.");
ec=!0;document.body?fc(a):sa(Ya(function(){fc(a)}))},hc=function(a){var b;t:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){b=!0;break t}throw Error("adsbygoogle.push(): 'google_ad_client' is missing from the tag config.");}b=!1}if(b)gc(a);else{b=a.element;a=a.params||{};if(b){if(!Zb(b)&&(b=b.id&&dc(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");}else if(b=dc(),
!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");ac(b,a)}},ic=function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:G(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=J.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=H(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],Da),"jp_c"!==window.google_top_experiment){a=
window;a.addEventListener?a.addEventListener("message",Xb,!1):a.attachEvent&&a.attachEvent("onmessage",Xb);window.google_top_js_status=3;a={0:"google_loc_request",1:Wb};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{hc(a)}catch(f){throw window.setTimeout(ic,0),f;}d&&d.loaded||(window.adsbygoogle={push:hc,loaded:!0})};ic();})();
