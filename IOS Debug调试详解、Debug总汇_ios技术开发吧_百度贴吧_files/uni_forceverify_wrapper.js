var passport=passport||window.passport||{};passport._modulePool=passport._modulePool||{};passport._define=passport._define||function(a,b){passport._modulePool[a]=b&&b()};passport._getModule=passport._getModule||function(a){return passport._modulePool[a]};passport.pop=passport.pop||{};passport.pop.insertScript=passport.pop.insertScript||function(b,a){var e=document,c=e.createElement("SCRIPT");c.type="text/javascript";c.charset="UTF-8";if(c.readyState){c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete"){c.onreadystatechange=null;a&&a()}}}else{c.onload=function(){a&&a()}}c.src=b;e.getElementsByTagName("head")[0].appendChild(c)};passport.pop.initForceverify=passport.pop.initForceverify||function(f){var j={"http:":"http://passport.baidu.com","https:":"https://passport.baidu.com"};var b=j[window.location.protocol.toLowerCase()],l="js",h={uni_forceverify:"/passApi/js/uni_forceverify_e9b34746.js?cdnversion=20140415",lib_rsa:"/passApi/js/lib/rsa_fae57fb2.js?cdnversion=20140415"},e="/passApi/css/uni_forceverify_a7f0e779.css";var f=f||{};var a=a||{};var g=document,i,f=f||{},k="_PassUni"+new Date().getTime();var c=b+e;if(f.cssUrlWrapper){c=cssUrlWrapper.join("uni_forceverify.css")}i={show:function(){i.loadPass();return i},loadPass:function(){var d=g.createElement("link");d.rel="stylesheet";d.type="text/css";d.href=c;d.disabled=false;d.setAttribute("data-for","result");g.getElementsByTagName("head")[0].appendChild(d);i.passCallback();delete i.loadPass},passCallback:function(){if(i.components.length>0){passport.pop.insertScript(i.components.shift(),i.passCallback)}else{new passport.pop.Forceverify(f,true,i);delete i.passCallback;delete i.components}},components:[]};i.components.push(b+h.uni_forceverify);i.components.push(b+h.lib_rsa);if(f.cache){i.loadPass()}return i};