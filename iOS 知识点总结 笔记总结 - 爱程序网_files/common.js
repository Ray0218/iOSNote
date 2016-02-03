/**
 * Created on : 2014-08-25 22:29:01
 * Author  by : Alex Lee(1093834463@qq.com)
 */

$(document).ready(function(){
    //导航更多
    $(".nav-more,.drop-sub-nav").mouseover(function(){
        $(".verify-b").addClass("verify-b-on");
        $(".nav-more").css("backgroundColor","#006600");
        $(".drop-sub-nav").css("display","block");
    }).mouseout(function(){
        $(".verify-b").removeClass("verify-b-on");
        $(".nav-more").css("backgroundColor","#3fb118");
        $(".drop-sub-nav").css("display","none");
    });
});