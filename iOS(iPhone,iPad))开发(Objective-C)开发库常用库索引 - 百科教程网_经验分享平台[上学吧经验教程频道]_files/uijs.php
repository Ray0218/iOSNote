startTime=(new Date()).getTime(); 
var ad_block = [{"title":"android","desc":"","surl":"","curl":"http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww%2Eshangxueba%2Ecom%2Fjingyan%2F2268417%2Ehtml&p=baidu&c=news&n=10&t=tpclicked3_hc&q=csai_cpr&k=android&k0=android&k1=touch&k2=c%2B%2B&k3=bar&k4=%B5%BC%BA%BD&k5=ios&sid=671e0c065d2d667f&ch=0&tu=u1730417&jk=fd717ece4fd203d3&cf=29&fv=15&stid=9&urlid=0&luki=1&seller_id=1&di=8","isHB":false,"bid":"","noticeurl":"","adpre":"0","width":"125","height":"125","type":"text","lpId":"3"},{"title":"touch","desc":"","surl":"","curl":"http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww%2Eshangxueba%2Ecom%2Fjingyan%2F2268417%2Ehtml&p=baidu&c=news&n=10&t=tpclicked3_hc&q=csai_cpr&k=touch&k0=touch&k1=c%2B%2B&k2=bar&k3=%B5%BC%BA%BD&k4=ios&k5=%C9%E8%BC%C6&sid=671e0c065d2d667f&ch=0&tu=u1730417&jk=fd717ece4fd203d3&cf=29&fv=15&stid=9&urlid=0&luki=2&seller_id=1&di=8","isHB":false,"bid":"","noticeurl":"","adpre":"0","width":"125","height":"125","type":"text","lpId":"3"},{"title":"c++","desc":"","surl":"","curl":"http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww%2Eshangxueba%2Ecom%2Fjingyan%2F2268417%2Ehtml&p=baidu&c=news&n=10&t=tpclicked3_hc&q=csai_cpr&k=c%2B%2B&k0=c%2B%2B&k1=bar&k2=%B5%BC%BA%BD&k3=ios&k4=%C9%E8%BC%C6&k5=android&sid=671e0c065d2d667f&ch=0&tu=u1730417&jk=fd717ece4fd203d3&cf=29&fv=15&stid=9&urlid=0&luki=3&seller_id=1&di=8","isHB":false,"bid":"","noticeurl":"","adpre":"0","width":"125","height":"125","type":"text","lpId":"3"},{"title":"bar","desc":"","surl":"","curl":"http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww%2Eshangxueba%2Ecom%2Fjingyan%2F2268417%2Ehtml&p=baidu&c=news&n=10&t=tpclicked3_hc&q=csai_cpr&k=bar&k0=bar&k1=%B5%BC%BA%BD&k2=ios&k3=%C9%E8%BC%C6&k4=android&k5=touch&sid=671e0c065d2d667f&ch=0&tu=u1730417&jk=fd717ece4fd203d3&cf=29&fv=15&stid=9&urlid=0&luki=4&seller_id=1&di=8","isHB":false,"bid":"","noticeurl":"","adpre":"0","width":"125","height":"125","type":"text","lpId":"3"},{"title":"导航","desc":"","surl":"","curl":"http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww%2Eshangxueba%2Ecom%2Fjingyan%2F2268417%2Ehtml&p=baidu&c=news&n=10&t=tpclicked3_hc&q=csai_cpr&k=%B5%BC%BA%BD&k0=%B5%BC%BA%BD&k1=ios&k2=%C9%E8%BC%C6&k3=android&k4=touch&k5=c%2B%2B&sid=671e0c065d2d667f&ch=0&tu=u1730417&jk=fd717ece4fd203d3&cf=29&fv=15&stid=9&urlid=0&luki=5&seller_id=1&di=8","isHB":false,"bid":"","noticeurl":"","adpre":"0","width":"125","height":"125","type":"text","lpId":"3"},{"title":"ios","desc":"","surl":"","curl":"http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww%2Eshangxueba%2Ecom%2Fjingyan%2F2268417%2Ehtml&p=baidu&c=news&n=10&t=tpclicked3_hc&q=csai_cpr&k=ios&k0=ios&k1=%C9%E8%BC%C6&k2=android&k3=touch&k4=c%2B%2B&k5=bar&sid=671e0c065d2d667f&ch=0&tu=u1730417&jk=fd717ece4fd203d3&cf=29&fv=15&stid=9&urlid=0&luki=6&seller_id=1&di=1","isHB":false,"bid":"","noticeurl":"","adpre":"0","width":"125","height":"125","type":"text","lpId":"1"},{"title":"设计","desc":"","surl":"","curl":"http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww%2Eshangxueba%2Ecom%2Fjingyan%2F2268417%2Ehtml&p=baidu&c=news&n=10&t=tpclicked3_hc&q=csai_cpr&k=%C9%E8%BC%C6&k0=%C9%E8%BC%C6&k1=android&k2=touch&k3=c%2B%2B&k4=bar&k5=%B5%BC%BA%BD&sid=671e0c065d2d667f&ch=0&tu=u1730417&jk=fd717ece4fd203d3&cf=29&fv=15&stid=9&urlid=0&luki=7&seller_id=1&di=1","isHB":false,"bid":"","noticeurl":"","adpre":"0","width":"125","height":"125","type":"text","lpId":"1"}]

TEXT_DIV_ID = "bd_neiwen_div";
REPEAT_WORD_FREQ = 0.001 ;
TOTAL_WORD_FREQ = 0.03 ;
DIS_SAME_WORD = 400 ;
DIS_WORD = 0 ;
TOP = 5;
A_STYLE = "color:#0000ff" ;
var enable_midPage = 32

var forbidden = {"a":1,"h1":1,"h2":1,"h3":1,"h4":1,"h5":1,"h6":1,"h7":1,"h8":1,"h9":1,"meta":1,"script":1,"link":1,"iframe":1,"textarea":1,"img":1,"br":1,"style":1};
var wordIdMapping = [];

String.prototype.Trim = function(){ return Trim(this);}
String.prototype.LTrim = function(){return LTrim(this);}
String.prototype.RTrim = function(){return RTrim(this);}
function LTrim(str)
{
    var i;
    for(i=0;i<str.length;i++)
    {
        if(str.charCodeAt(i)!=12288 &&str.charCodeAt(i)!=10&&str.charCodeAt(i)!=32&&str.charCodeAt(i)!=9)break;
    }
    str=str.substring(i,str.length);
    return str;
}

function RTrim(str)
{
    var i;
    for(i=str.length-1;i>=0;i--)
    {
        if(str.charCodeAt(i)!=12288 &&str.charCodeAt(i)!=10&&str.charCodeAt(i)!=32&&str.charCodeAt(i)!=9)break;
    }
    str=str.substring(0,i+1);
    return str;
}

function Trim(str)
{
    return LTrim(RTrim(str));
}

function GetCurrentStyle(obj, prop) {
    if (obj.currentStyle) { 
        return obj.currentStyle[prop];
    } else if (window.getComputedStyle) {
        return document.defaultView.getComputedStyle(obj, null)[prop];
    }
    return null;
}
function bind_script(file){
    var loader = document.createElement("script");
    loader.type = "text/javascript";
    loader.async = true;
    loader.defer="defer"
    loader.src = file;
    loader.charset="GBK";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(loader, s);
}
function write_log(kv_items){
    var is_first_item = true;
    var str = "http://220.181.163.69/neiwen.js";
    for (key in kv_items) {
        if (is_first_item) {
            str += "?" + key + "=" + (kv_items[key]);
            is_first_item = false;
        } else {
            str += "&" + key + "=" + (kv_items[key]);
        }
    }
    bind_script(str);
}

var HUACI = {
    nodelist : [],
    content : {len:0},
    word : {pos:[],num:0,arr:[],dic:[],tree:[]},
    find_peici : function() {
        if (typeof(ad_block) == "undefined") {
            return null;
        }
        var word_arr = [];
        for(var i=0;i<ad_block.length;++i){
            word_arr.push(ad_block[i].title);
        }
        if(this.content.len >1000) TOP = TOP*2;
        word_arr.splice(TOP,word_arr.length - TOP); 
        var out = [];
        var tmp = out;  
        for(var i = 0;i<word_arr.length;++i){
            var word = word_arr[i];
            for(var j = 0;j<word.length;++j){
                var ch = word.charAt(j).toString();
                if(typeof tmp[ch] == "undefined"){
                    tmp[ch]=[];
                }
                tmp = tmp[ch];
            }
            tmp.push('$')
            tmp = out;
        }
        this.word.dic = word_arr;
        this.word.tree = out;
        return out;
    },
    huaci : function() {
        var w_list = this.find_peici();
        if (null == w_list) {
            return 0;
        }
        
        var tmp = w_list;
        var absolute_pos = 0;
        for ( var i = 0; i < this.nodelist.length; ++i){
            var text = this.nodelist[i].data;
            var relative_pos = text.length;
            var str = "";
            for( var j = 0;j <text.length;++j){
                var ch = text.charAt(j);
                if(typeof tmp[ch] == "undefined"/*||tmp.length >0*/){//here is a switch!!
                    var asc = ch.charCodeAt(0)
                    if(asc<=122 &&asc>=97){
                        var c = ch.toUpperCase()
                        if(typeof tmp[c]!= "undefined"){
                            tmp = tmp[c];
                            str += ch;
                            continue;
                        }
                    }
                    if(asc<=90 &&asc>=65){
                        var c = ch.toLowerCase()
                        if(typeof tmp[c]!= "undefined"){
                            tmp = tmp[c];
                            str += ch;
                            continue;
                        }
                    }
                    //if(tmp.length >0){
                    if(tmp[0]==='$'){
                        if(typeof this.word.pos[str] == "undefined") this.word.pos[str] = [];
                        this.word.pos[str].push({param:i,rel_pos:(j-str.length+1),ab_pos:absolute_pos+j-str.length+1,to_replace:0});
                        this.word.num +=1;
                        tmp = w_list;
                        str = "";
                    }else{
                        tmp = w_list;
                        str="";
                    }
                }else{
                    tmp = tmp[ch];
                    str += ch;
                }
            }
            //handle the last word 
            if(tmp[0]==='$'){
                if(typeof this.word.pos[str] == "undefined") this.word.pos[str] = [];
                this.word.pos[str].push({param:i,rel_pos:(j-str.length+1),ab_pos:absolute_pos+j-str.length+1,to_replace:0});
                this.word.num +=1;
                tmp = w_list;
                str = "";
            }
            tmp = w_list;
            absolute_pos += relative_pos;
        }
        
        for ( i in this.word.pos){
            if(typeof this.word.pos[i] == "object"){
                for(var j=0;j<ad_block.length;++j){
                    if(i==ad_block[j].title){
                        this.word.arr.push({"word":i,"pos":this.word.pos[i],"link":ad_block[j].curl});
                    }
                }
            }
        }
        this.word.arr.sort(function(a,b){
                return b.pos.length - a.pos.length;
        });
    },
    piao : function(){
        var arr = this.word.arr;
        var list = [];
        for(var i=0;i<arr.length;++i){
            for(var j = 0;j<arr[i].pos.length;++j){
                list.push({"word":arr[i].word,"pos":arr[i].pos[j],"link":arr[i].link})
            }
        }
        list.sort(function(a,b){
            return a.pos.ab_pos - b.pos.ab_pos ;
        });

        var flag = -1;
        var begin = 0;
        var end = 0;
        for(var i=0;i<list.length;++i){
            var item = list[i];
            var node = this.nodelist[item.pos.param]
            var str = node.data;
            var parent = node.parentNode;
            var fsize = GetCurrentStyle(parent,"fontSize");
            
            end = item.pos.rel_pos-1;
            var pre_node = document.createTextNode(str.substring(begin,end));
            parent.insertBefore(pre_node,node);
            
            var linkp = document.createElement("span");
            linkp.id = i+"_nwp";
            linkp.style.width="auto";
            linkp.style.height="auto";
            linkp.style.float="none";
            var link = document.createElement("a");
            link.id = i+"_nwl";
            if(1){
                link.href = item.link.replace(/&di=\d*/,"&di=128");
            }else{
                link.href = item.link.replace(/&di=\d*/,"&di=8");
            }
            link.target="_blank"; 
            link.setAttribute("mpid",i);
            link.style.cssText="text-decoration:none";
            link.innerHTML = "<span style=\""+A_STYLE+";font-size:"+fsize+";width:auto;height:auto;float:none;\" >" + item.word + "</span>";
            linkp.appendChild(link);
            parent.insertBefore(linkp,node);
            
            wordIdMapping[item.word] = i;

            begin = end+item.word.length;
            if(i+1<list.length &&item.pos.param != list[i+1].pos.param){
                //push the rest
                var pre_node = document.createTextNode(str.substring(begin));
                parent.insertBefore(pre_node,node);
                node.parentNode.removeChild(node);
                begin = 0;
                end = 0;
            }else if(i+1 == list.length){
                var pre_node = document.createTextNode(str.substring(begin));
                parent.insertBefore(pre_node,node);
                node.parentNode.removeChild(node);
            }    
        }
        for(var j=0;j<ad_block.length;++j){
            if(typeof wordIdMapping[ad_block[j].title] == "undefined"){
                wordIdMapping[ad_block[j].title] = ++i;
            }
        }
    },
    is_bold_font : function (node){
        if("bold"== GetCurrentStyle(node,"fontWeight")){
            return true;
        }
        if(500 < parseInt(GetCurrentStyle(node,"fontWeight"))){
            return true;
        }
        return false;
    },

    check_total_word_num : function(){
        //cut the most frequnt words from last pos
        if(this.word.num >this.content.total_word_num){
            var delta = this.word.num - this.content.total_word_num;
            var arr = this.word.arr;
            for(var i =0;i < delta ; ++i){
                var n = 0;
                arr[n].pos.pop();//do not delete just mark it!
                this.word.num--;
                while((n+1)< arr.length && arr[n].pos.length < arr[n+1].pos.length ){
                    //swap a and a+1
                    var t = arr[n];
                    arr[n] = arr[n+1];
                    arr[n+1] = t;
                    ++n;
                }
            }
        }
    },
    check_same_word_num : function(){
        //cut from last
        var arr = this.word.arr;
        for(var i=0;i<arr.length;++i){
            if(arr[i].pos.length > this.content.same_word_num && arr[i].pos.length >1){
                var delta = arr[i].pos.length - this.content.same_word_num;
                for(var j=0;j<delta;++j){
                    arr[i].pos.pop();//do not delete just mark it!
                    this.word.num--;
                }
            }else{
                break;
            }
        }
    },
    check_dis_same_word : function(){
        if(this.content.dis_same_word == 0 )return;
        //cut by dis,always use first one
        var arr = this.word.arr;
        for(var i=0;i<arr.length;++i){
            //check from the 2st pos!
            var cur = 0;
            for(;cur<arr[i].pos.length-1;){
                if( arr[i].pos[cur+1].ab_pos-arr[i].pos[cur].ab_pos <this.content.dis_same_word){
                    arr[i].pos.splice(cur+1,1);
                    this.word.num--;
                }else{
                    ++cur;
                }
            }
        }
    },
    check_dis_word : function(){
        if(this.content.dis_word == 0 )return;
        //cut by dis,always use first one
        var arr = this.word.arr;
        var list = [];
        for(var i=0;i<arr.length;++i){
            for(var j = 0;j<arr[i].pos.length;++j){
                list.push({"word":arr[i].word,"pos":arr[i].pos[j].ab_pos,"x":i,"y":j})
            }
        }
        list.sort(function(a,b){
            return a.pos - b.pos;
        })
        var cur = 0;
        for(;cur<list.length-1;){
            if( (list[cur+1].pos - list[cur].pos) <this.content.dis_word){
                list.splice(cur+1,1)
            }else{
                ++cur;
            }
        }

        for(var i=0;i<arr.length;++i){
            for(var j = 0;j<arr[i].pos.length;){
                var f = 0;
                for(var k = 0;k<list.length;++k){
                    if(arr[i].pos[j].ab_pos ==list[k].pos){
                        f=1;
                    }
                }
                if(!f){
                    arr[i].pos.splice(j,1);
                    this.word.num--;
                }else{
                    ++j
                }
            }
        }
    },
    append_queue : function(queue,node){
        if(this.is_bold_font(node))return 0;
        for(var i=0;i<node.childNodes.length;++i){
            var child = node.childNodes[i];
            if(forbidden[child.nodeName.toLowerCase()] == 1){
                continue;
            }
            if(child.nodeType == 1){//node is HTML node
                if(this.is_bold_font(child)){
                    continue;
                }
            }else if(child.nodeType==3){ //node is child
                if(child.data.Trim().length==0){
                    continue;
                }else if(child.data.Trim().length < 2){//to be decided
                    continue;
                }else{
                }
            }else if(child.nodeType == 8){//comment
                continue;
            }else if(child.nodeType == 9){//document
                continue;
            }else{
                //nothing
            }
            queue.push(child);
        }
        return 0;
    },
    push_node : function (root){
        var queue = [];
        queue.push(root);

        while(queue.length >0 ){
            var node = queue.shift();
            switch (node.nodeType){
                case 3 : {
                            this.nodelist.push(node);
                            this.content.len += node.data.length;
                            break;
                        }
                case 1 : this.append_queue(queue,node);break;

            }
        }
        this.nodelist.reverse();
    },
    log : function(){
        var num = 0;
        var arr = this.word.arr;
        var words = "";
        var wpos = "";
        for(var i=0;i<arr.length;++i){
            num+=arr[i].pos.length;
            words+="#"+arr[i].word+":"+arr[i].pos.length
            if(arr[i].pos.length>0){
                wpos+="#"+arr[i].pos[0].ab_pos;
            }else{
                wpos+="#0";
            }
        
        }
        
        var param = {};
        if(ad_block[0]){
            var arg = ad_block[0].curl.substr(ad_block[0].curl.indexOf('?')+1);
            var p = arg.split('&');
            for(i in p){
                var t = p[i].split('=');
                if(t.length == 2)param[t[0]]=t[1];
            }
        }
        words = encodeURIComponent(words);
        wpos = encodeURIComponent(wpos);
        endtime = (new Date()).getTime();
        var t = endtime - startTime;
        var str = "http://220.181.163.69/neiwen.js";
        kv_items = []
        kv_items["num"] = num;
        kv_items["v"] = 7;
        kv_items["length"] = this.content.len;
        kv_items["top"] = TOP;
        kv_items["t"] = t;
        kv_items["words"] = words;
        kv_items["position"] = wpos;
        kv_items["jk"] = param.jk;
        
        //write_log(kv_items);
    },
    init : function(){
        if(typeof this.done != "undefined" && this.done==1){return}
        var root = document.getElementById(TEXT_DIV_ID);
        if(root == null){
            root = document.getElementsByTagName("body")[0];
            //return;
        }
        this.push_node(root);

        this.huaci();
        
        this.content.same_word_num = Math.max(Math.floor(this.content.len * REPEAT_WORD_FREQ),1);
        this.content.total_word_num = Math.ceil(this.content.len * TOTAL_WORD_FREQ);
        this.content.dis_same_word = DIS_SAME_WORD;
        this.content.dis_word = DIS_WORD;
            
        this.check_dis_same_word();
        this.check_same_word_num();
        this.check_dis_word();
        this.check_total_word_num();
        this.piao();
        //this.log();
        this.done = 1;
    }
};


var T,
baidu = T = baidu || {version: "1.5.2.2"}; 
baidu.browser = baidu.browser || {};
(function(){
    var ua = navigator.userAgent;
    baidu.browser.safari = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ua) && !/chrome/i.test(ua) ? + (RegExp['\x241'] || RegExp['\x242']) : undefined;
    baidu.browser.ie = baidu.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || + RegExp['\x241']) : undefined;
    baidu.browser.opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ?  + ( RegExp["\x246"] || RegExp["\x242"] ) : undefined;
    baidu.dom = baidu.dom || {};
})();
(function() {
    var ready = baidu.dom.ready = function() {
        var readyBound = false,
            readyList = [],
            DOMContentLoaded;
        if (document.addEventListener) {
            DOMContentLoaded = function() {
                document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);
                ready();
            };
        } else if (document.attachEvent) {
            DOMContentLoaded = function() {
                if (document.readyState === 'complete') {
                    document.detachEvent('onreadystatechange', DOMContentLoaded);
                    ready();
                }
            };
        }
        function ready() {
            if (!ready.isReady) {
                ready.isReady = true;
                for (var i = 0, j = readyList.length; i < j; i++) {
                    readyList[i]();
                }
            }
        }
        function doScrollCheck(){
            try {
                document.documentElement.doScroll("left");
            } catch(e) {
                setTimeout( doScrollCheck, 1 );
                return;
            }   
            ready();
        }
        function bindReady() {
            if (readyBound) {
                return;
            }
            readyBound = true;

            if (document.readyState === 'complete') {
                ready.isReady = true;
            } else {
                if (document.addEventListener) {
                    document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
                    window.addEventListener('load', ready, false);
                } else if (document.attachEvent) {
                    document.attachEvent('onreadystatechange', DOMContentLoaded);
                    window.attachEvent('onload', ready);

                    var toplevel = false;

                    try {
                        toplevel = window.frameElement == null;
                    } catch (e) {}

                    if (document.documentElement.doScroll && toplevel) {
                        doScrollCheck();
                    }
                }
            }
        }
        bindReady();
        return function(callback) {
            ready.isReady ? callback() : readyList.push(callback);
        };
    }();
    ready.isReady = false;
})();
T.undope=true;

(function(o){
 window[o] = {
    Sys : {},
    Tips : {},
    slideStartX : 0,
    PreSelection : "",
    ToolTip : {},
    proxy: function (fn, context, args) {
        var method = fn;
        var thisObj = context;
        return function () {
            if (args && args.length) {
                return method.apply(thisObj || {}, args);
            } else {
                return method.apply(thisObj || {}, arguments);
            }
        };
    },
    init : function(){
        var s;
        var ua = navigator.userAgent.toLowerCase();
        (s = ua.match(/msie ([\d.]+)/)) ? this.Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? this.Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? this.Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? this.Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? this.Sys.safari = s[1] : 0;

        this.Sys.ie11 = (navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv:11/));
        this.Sys.ie10 = parseInt(this.Sys.ie)==10;
        this.Sys.ie9 = parseInt(this.Sys.ie)==9;
        this.Sys.ie8 = parseInt(this.Sys.ie)==8;
        this.Sys.ie7 = parseInt(this.Sys.ie)==7;
        this.Sys.ie6 = !-[1,]&&!window.XMLHttpRequest;
    },
    unBind: function(element, type, listener) {
        type = type.replace(/^on/i, '').toLowerCase();
        if (element.addEventListener) {
            element.removeEventListener(type, listener, false);
        }
        else if (element.attachEvent) {
            element.detachEvent('on' + type, listener);
        }
        return element;
    },
    Bind: function(element, type, listener) {
        type = type.replace(/^on/i, '').toLowerCase();
        if (element.addEventListener) {
            element.addEventListener(type, listener, false);
        }
        else if (element.attachEvent) {
            element.attachEvent('on' + type, listener);
        }
        return element;
    },
    remove: function(id){
        var elmt = document.getElementById(id);
        if(elmt)elmt.parentNode.removeChild(elmt);
    },
    click: function(e){
        var r = document.getElementById('textBox').value;
        if(r.length>12)r = r.substr(0,12);
        var url = 'http://cpro.baidu.com/cpro/ui/uijs.php?rs=1&u=http%3A%2F%2Fwww%2Eshangxueba%2Ecom%2Fjingyan%2F2268417%2Ehtml&p=baidu&c=news&n=10&t=tpclicked3_hc&q=csai_cpr&sid=671e0c065d2d667f&ch=0&tu=u1730417&jk=fd717ece4fd203d3&cf=0&fv=15&stid=0&urlid=0&luki=0&seller_i';
        if(url[url.length-1]=='&')url=url.substr(0,url.length-1);
        if(1){
            window.open(url+'&di=128&k='+encodeURIComponent(r));
        }else{
            window.open(url+'&di=8&k='+encodeURIComponent(r));
        }
    },
    Hide: function(e){
        var p = document.getElementById('BaiduInstantlogo');
        if(p) {
            var opc = parseFloat(p.style.opacity);
            if(opc > 0.7){
                opc-=0.05;
                p.style.opacity= opc;
                clearTimeout(this.fadeOut);
                this.fadeOut = setTimeout(this.proxy(this.Hide,this),50);
            }
        }
    },
    out: function(e){
        var elmt = e.srcElement || e.target;
        while(elmt && elmt.id!="BaiduInstatSearchToolTip"){
            elmt = elmt.parentNode;
        }
        elmt.style.boxShadow = "";
        this.fadeOut = setTimeout(this.proxy(this.Hide,this),1000);
    },
    hover: function(e){
        clearTimeout(this.fadeOut);
        var p = document.getElementById('BaiduInstantlogo');
        if(p) {
            p.style.opacity= 1;
        }
        var elmt = e.srcElement || e.target;
        while(elmt && elmt.id!="BaiduInstatSearchToolTip"){
            elmt = elmt.parentNode;
        }
        elmt.style.boxShadow = "0px 0px 8px #999999";
    },
    recordStartPoint: function(e){
        if(this.Sys.ie){
            this.slideStartX=window.event.x
        }else{
            this.slideStartX=e.pageX;
        }
    },
    drawHints : function(e){
                var target = e.target || e.srcElement;
                if(target.tagName.toLowerCase() == 'input')return;
                var x = 10;
                var y = 10;
                var r = "";
                if (document.selection) {
                    r = document.selection.createRange().text;
                }
                else if (window.getSelection()) {
                    r = window.getSelection().toString();
                }
                if (r!= "" && r!=this.PreSelection) {
                    this.PreSelection = r;
                    this.remove('BaiduInstatSearchToolTip');
                    if(0){
                        var Tip = document.createElement('div');
                        ToolTip.id = "BaiduInstatSearchToolTip";
                        ToolTip.style.width="250px";
                        ToolTip.style.height="48px";
                        ToolTip.style.borderRadius="4px";
                        ToolTip.style.background="#e6e6e6";

                        var t = document.createElement('div');
                        t.style.padding="9px 16px 13px 15px";
                        t.style.height="22px";
                        //文本框
                        var i = document.createElement('input');
                        i.id="textBox";
                        i.style.width="142px";
                        i.style.height="20px";
                        i.style.lineHeight="20px";
                        i.style.marginRight="4px";
                        i.style.color="#333333";
                        i.style.padding="0";
                        i.style.paddingLeft="4px";
                        i.style.border="1px solid #e2e2e2";
                        i.value = r;
                        //按钮
                        var b = document.createElement('button');
                        b.id = 'btn';
                        b.style.width="65px";
                        b.style.height="22px";
                        b.style.background="#0180ff";
                        b.style.border="0";
                        b.style.borderBottom="1px solid #1977d4";
                        b.style.color="#ffffff";
                        b.style.fontSize="12px";
                        b.style.padding="0";
                        b.innerHTML = "百度一下";

                        //各浏览器样式微调
                        if(this.Sys.chrome || this.Sys.safari)ToolTip.style.background="-webkit-gradient(linear, left top, left bottom, from(#f7f7f7), color-stop(0.5, #eeeeee), to(#e6e6e6))";
                        if(this.Sys.firefox)ToolTip.style.background="-moz-linear-gradient(top,#f7f7f7, #e6e6e6, #eeeeee 50%)";
                        if(this.Sys.ie){
                            b.style.lineHeight="22px";
                            if(this.Sys.ie10){
                                ToolTip.style.background="-ms-linear-gradient(top, #f7f7f7 0%,#eeeeee 50%, #e6e6e6 100%)";
                            }else{
                                ToolTip.style["filter"]="progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f7f7', endColorstr='#eeeeee'";
                            }
                        }else{
                            if(this.Sys.ie11){
                                ToolTip.style.background="-ms-linear-gradient(top, #f7f7f7 0%,#eeeeee 50%, #e6e6e6 100%)";
                                b.style.lineHeight="22px";
                            }
                        }

                        //组装个元素
                        t.appendChild(i);
                        t.appendChild(b);
                        ToolTip.appendChild(t);
                        document.getElementsByTagName('body')[0].appendChild(ToolTip);

                        //调整悬窗位置
                        if(this.slideStartX > (e.pageX || window.event.x)){
                            y=15;
                        }else{
                            y=10;
                        }
                        var mouseX=0,mouseY=0;
                        if(this.Sys.ie){
                            var st = document.documentElement.scrollTop || document.body.scrollTop;
                            mouseX = window.event.x;
                            mouseY = window.event.y + st;
                        }else{
                            mouseX = e.pageX;
                            mouseY = e.pageY;
                        }
                        ToolTip.style.top=(mouseY + y)+"px";
                        ToolTip.style.left=(mouseX - 169)+"px";
                        ToolTip.style.position="absolute";
                        ToolTip.style.display="block";
                    }else{
                        this.ToolTip = document.createElement('div');
                        this.ToolTip.id = "BaiduInstatSearchToolTip";
                        this.ToolTip.style.width="37px";
                        this.ToolTip.style.height="37px";
                        this.ToolTip.style.borderRadius="50%";

                        var b = document.createElement('a');
                        b.id="btn";
                        b.href="javascript:void(0)";

                        var h = document.createElement('input');
                        h.id="textBox";
                        h.value=r;
                        h.style.display="none";

                        if(this.Sys.ie6){
                            var m = document.createElement('div');
                            m.style.width="37px";
                            m.style.height="37px";
                            m.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=noscale, src='http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/icon.png')";
                            m.id="BaiduInstantlogo";
                        }else{
                            var m = document.createElement('img');
                            m.src="http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/icon.png";
                            m.id="BaiduInstantlogo";
                            m.style.opacity=1;
                            m.style.marginLeft="-1px";
                        }

                        b.appendChild(m);
                        this.ToolTip.appendChild(b);
                        this.ToolTip.appendChild(h);
                        document.getElementsByTagName('body')[0].appendChild(this.ToolTip);

                        y = 46;
                        if(this.Sys.ie){
                            var st = document.documentElement.scrollTop || document.body.scrollTop;
                            this.ToolTip.style.top=(window.event.y - y + st)+"px";
                            this.ToolTip.style.left=(window.event.x - 29)+"px";
                        }else{
                            this.ToolTip.style.top=(e.pageY - y)+"px";
                            this.ToolTip.style.left=(e.pageX - 29)+"px";
                        }
                        this.ToolTip.style.position="absolute";
                        this.ToolTip.style.display="block";
                    }
                    var elmt = document.getElementById('btn');
                    this.Bind(elmt,'click',this.proxy(this.click, this));
                    this.unBind(this.ToolTip,'mouseover',this.proxy(this.hover,this));
                    this.Bind(this.ToolTip,'mouseover',this.proxy(this.hover,this));
                    this.unBind(this.ToolTip,'mouseout',this.proxy(this.out,this));
                    this.Bind(BaiduInstatSearchToolTip,'mouseout',this.proxy(this.out,this));
                    this.fadeOut = setTimeout(this.proxy(this.Hide,this),1000);
                }else if(target.tagName.toLowerCase() != 'input' && target.tagName.toLowerCase() != 'button' && target.tagName.toLowerCase() != 'img' && target.id!="BaiduInstantlogo"){
                    this.remove('BaiduInstatSearchToolTip');
                    return;
                }
    },
    drawTips : function(){
        this.Tips = document.createElement('div');
        this.Tips.id="notice_tips";
        this.Tips.style.display="none";
        this.Tips.style.padding="8px 0px 8px 8px";
        this.Tips.style.height="160px";
        this.Tips.style.width="25px";
        if(this.Sys.ie6||this.Sys.ie7||this.Sys.ie8){
            this.Tips.style.filter="alpha(opacity=100)";
        }
        if(this.Sys.ie6){
            var st = document.documentElement.scrollTop || document.body.scrollTop;
            this.Tips.style.position="absolute";
            this.Tips.style.top=(st + 300)+"px";
            this.Tips.style.right="0px";
        }else{
            this.Tips.style.position="fixed";
            this.Tips.style.top="300px";
            this.Tips.style.right="0px";
        }
        this.Tips.style.boxShadow="-1px 1px 3px rgba(0,0,0,0.75)";
        this.Tips.style.background="#FAFAFA";
        if(this.Sys.chrome || this.Sys.safari)this.Tips.style.background="-webkit-gradient(linear, left top, right top, from(#ffffff), color-stop(0.5, #f3f3f3), to(#e9e9e9))";
        if(this.Sys.firefox)this.Tips.style.background="-moz-linear-gradient(left,#ffffff, #e9e9e9, #f3f3f3 80%)";
        if(this.Sys.ie){
            if(this.Sys.ie10){
                this.Tips.style.background="-ms-linear-gradient(left, #ffffff 0%,#f3f3f3 80%, #e9e9e9 100%)";
            }else{
                //BaiduInstantSearchTips.style["filter"]="progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e9e9e9'";
            }
        }else{
            if(this.Sys.ie11){
                this.Tips.style.background="-ms-linear-gradient(left, #ffffff 0%,#f3f3f3 80%, #e9e9e9 100%)";
            }
        }
        this.Tips.style.borderTopLeftRadius="5px";
        this.Tips.style.borderBottomLeftRadius="5px";
        this.Tips.style.border="1px solid #c2c2c2";
        this.Tips.style.borderRight="none";

        var tips_wrap = document.createElement('img');
        tips_wrap.src='http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/instant_search_tips.png';
        tips_wrap.style.width="17px";
        tips_wrap.style.height="17px";

        var text_wrap = document.createElement('div');
        text_wrap.style.width="17px";
        text_wrap.style.fontSize="14px";
        text_wrap.style.lineHeight="14px";
        text_wrap.style.fontFamily="微软雅黑";
        text_wrap.style.color="#7f7f7f";
        text_wrap.innerHTML="框选文字即可搜索";

        var close_btn= document.createElement('div');
        close_btn.id = "instant_close";
        close_btn.style.width="20px";
        close_btn.style.height="20px";
        close_btn.style.borderTop="1px solid #cccccc";
        close_btn.style.marginLeft="-2px";
        close_btn.style.marginTop="5px";

        var close_btn_img = document.createElement('img');
        close_btn_img.src="http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/instant_close.png";
        close_btn_img.style.marginTop="5px";
        close_btn_img.style.marginLeft="2px";

        var close_btn_link = document.createElement('a');
        close_btn_link.href="javascript:void(0)";
        close_btn_link.appendChild(close_btn_img);
        close_btn.appendChild(close_btn_link);

        this.Bind(close_btn_link,'click',this.proxy(this.HideTips, this));
        this.Tips.appendChild(tips_wrap);
        this.Tips.appendChild(text_wrap);
        this.Tips.appendChild(close_btn);
        document.getElementsByTagName('body')[0].appendChild(this.Tips);
        this.tipsFadeOut = 0;
        this.Bind(window,'scroll',this.proxy(this.TipsScrollShow, this));
    },
    HideTips : function(e){
        this.Tips.style.display="none";
        this.instant_is_close=true;
    },
    TipsScrollShow : function(e){
        if(this.Sys.ie6){
            var st = document.documentElement.scrollTop || document.body.scrollTop;
            this.Tips.style.top=(st + 300)+"px";
        }
        if(this.instant_is_close) return;
        this.Tips.style.display="block";
        if(this.Sys.ie6||this.Sys.ie7||this.Sys.ie8){
            this.Tips.style.filter="alpha(opacity=100)";
        }else{
            this.Tips.style.opacity= 1;
        }
        clearTimeout(this.tipsFadeOut);
        this.tipsFadeOut=setTimeout(this.proxy(this.tipsFadeout,this),3000);
    },
    Main : function(){
            this.init();
            this.Bind(document,'mousedown',this.proxy(this.recordStartPoint, this));
            this.Bind(document,'mouseup',this.proxy(this.drawHints, this));
            //this.drawTips();
    },
    tipsFadeout : function(){
        var p = document.getElementById('notice_tips');
        if(p) {
            if(this.Sys.ie6||this.Sys.ie7||this.Sys.ie8){
                var opc= /\d+/g.exec(p.style.filter);
                if(opc > 10){
                    opc -= 5;
                    p.style.filter="alpha(opacity="+opc+")";
                    clearTimeout(this.fadeOut);
                    this.fadeOut = setTimeout(this.proxy(this.tipsFadeout,this),50);
                }
            }else{
                var opc = parseFloat(p.style.opacity);
                if(opc > 0.1){
                    opc-=0.05;
                    p.style.opacity= opc;
                    clearTimeout(this.fadeOut);
                    this.fadeOut = setTimeout(this.proxy(this.tipsFadeout,this),50);
                }
            }
        }
    }
}
})("BaiduInstantSearch");

(function () {
    baidu.dom.ready(function()
    {
       HUACI.init();
       if(1) window["BaiduInstantSearch"].Main();
    });
})();
