var passport=passport||window.passport||{};passport._modulePool=passport._modulePool||{};passport._define=passport._define||function(a,b){passport._modulePool[a]=b&&b()};passport._getModule=passport._getModule||function(a){return passport._modulePool[a]};passport._load=passport._load||function(c,a,i){if(a){var h=document,f=h.createElement("SCRIPT");f.type="text/javascript";f.charset="UTF-8";var b=c.split("?")[0];var g=Math.round(Math.random()*1000);var e=new Date().getTime();if(f.readyState){f.onreadystatechange=function(){if(f.readyState=="loaded"||f.readyState=="complete"){f.onreadystatechange=null;if(100==g){var d=new Date().getTime()-e;(new Image()).src="http://nsclick.baidu.com/v.gif?pid=111&type=1023&url="+encodeURIComponent(b)+"&time="+d}i&&i()}}}else{f.onload=function(){if(100==g){var d=new Date().getTime()-e;(new Image()).src="http://nsclick.baidu.com/v.gif?pid=111&type=1023&url="+encodeURIComponent(b)+"&time="+d}i&&i()}}if(100==g){f.src=b+"?t="+Math.random()}else{f.src=c}h.getElementsByTagName("head")[0].appendChild(f)}else{var h=document,f=h.createElement("SCRIPT");f.type="text/javascript";f.charset="UTF-8";f.src=c;h.getElementsByTagName("head")[0].appendChild(f);if(f.readyState){f.onreadystatechange=function(){if(f.readyState=="loaded"||f.readyState=="complete"){f.onreadystatechange=null;i&&i()}}}else{f.onload=function(){i&&i()}}}};passport._use=passport._use||function(e,f,h){var a={"http:":"http://passport.bdimg.com","https:":"https://ss0.bdstatic.com/5LMZfyabBhJ3otebn9fN2DJv"};if(passport&&passport._protocol=="https"){var g="https:"}else{var g=window.location?window.location.protocol.toLowerCase():document.location.protocol.toLowerCase()}var d=(a[g]||a["https:"])+f;var c=e+".js";moduleInstance=passport._getModule(c);if(moduleInstance){h&&h(moduleInstance)}else{passport._load(d,true,b)}function b(){var i=passport._getModule(c);if(i){h&&h(i)}else{throw new Error("load "+c+"module script error.")}}};passport.use=passport.use||function(d,c,f){var b=(c&&c.tangram===false)?"":"_tangram";if(c&&c.protocol){passport._protocol=c.protocol}if(d=="reg"&&c&&c.regPhoneOnly){d="regPhone"}if(d=="topBar"&&c&&c.library){passport.library=c.library;b=""}var e={login:"/passApi/js/login_f0203be1.js",login_tangram:"/passApi/js/login_tangram_d9fa1cb7.js",loginWLtoPC:"/passApi/js/loginWLtoPC_d57c652e.js",accConnect:"/passApi/js/accConnect_2b5231c9.js",accConnect_tangram:"/passApi/js/accConnect_tangram_d38c2850.js",topBar:"/passApi/js/topBar_7a01d14c.js",topBar_tangram:"/passApi/js/topBar_tangram_a75a5a88.js",loginWap:"/passApi/js/loginWap_52d30b32.js",reg:"/passApi/js/reg_799a68c5.js",reg_tangram:"/passApi/js/reg_tangram_dada22ca.js",regPhone:"/passApi/js/regPhone_81a1d950.js",regPhone_tangram:"/passApi/js/regPhone_tangram_1a225490.js",fillUserName:"/passApi/js/fillUserName_ba28fe28.js",fillUserName_tangram:"/passApi/js/fillUserName_tangram_0dad9206.js",qrcode:"/passApi/js/qrcode_77872c36.js",qrcode_tangram:"/passApi/js/qrcode_tangram_3d80c97e.js",realUserTag:"/passApi/js/realUserTag_47a2f73b.js",realUserTag_tangram:"/passApi/js/realUserTag_tangram_e6e61e60.js",bind:"/passApi/js/bind_effdaa13.js",bind_tangram:"/passApi/js/bind_tangram_d32c0f7a.js",multiBind:"/passApi/js/multiBind_473e32b7.js",multiBind_tangram:"/passApi/js/multiBind_tangram_631c8042.js",multiUnbind:"/passApi/js/multiUnbind_4c90c019.js",multiUnbind_tangram:"/passApi/js/multiUnbind_tangram_275997b3.js",changeUser:"/passApi/js/changeUser_06a9792a.js",changeUser_tangram:"/passApi/js/changeUser_tangram_31a26f53.js",loginMultichoice:"/passApi/js/loginMultichoice_cb590345.js",loginMultichoice_tangram:"/passApi/js/loginMultichoice_tangram_c65324d1.js",confirmWidget:"/passApi/js/confirmWidget_92063696.js",confirmWidget_tangram:"/passApi/js/confirmWidget_tangram_37566441.js",uni_rebindGuide:"/passApi/js/uni_rebindGuide_3469332e.js",uni_rebindGuide_tangram:"/passApi/js/uni_rebindGuide_tangram_c4e19a84.js"},a=d+b;if(arguments.length==2){f=c}if(c&&c.tangramInst){passport.tangramInst=c.tangramInst}passport._use(a,e[a],f)};