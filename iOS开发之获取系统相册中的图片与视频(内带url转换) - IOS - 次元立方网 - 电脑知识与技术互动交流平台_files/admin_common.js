function confirmurl(url,message) {
	url = url+'&pc_hash='+pc_hash;
	if(confirm(message)) redirect(url);
}
function redirect(url) {
	location.href = url;
}
//滚动条
$(function(){
	$(":text").addClass('input-text');
})

/**
 * 全选checkbox,注意：标识checkbox id固定为为check_box
 * @param string name 列表check名称,如 uid[]
 */
function selectall(name) {
	if ($("#check_box").attr("checked")=='checked') {
		$("input[name='"+name+"']").each(function() {
  			$(this).attr("checked","checked");
			
		});
	} else {
		$("input[name='"+name+"']").each(function() {
  			$(this).removeAttr("checked");
		});
	}
}
function openwinx(url,name,w,h) {
	if(!w) w=screen.width-4;
	if(!h) h=screen.height-95;
	url = url+'&pc_hash='+pc_hash;
    window.open(url,name,"top=100,left=400,width=" + w + ",height=" + h + ",toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no");
}
//弹出对话框
function omnipotent(id,linkurl,title,close_type,w,h) {
	if(!w) w=700;
	if(!h) h=500;
	art.dialog({id:id,iframe:linkurl, title:title, width:w, height:h, lock:true},
	function(){
		if(close_type==1) {
			art.dialog({id:id}).close()
		} else {
			var d = art.dialog({id:id}).data.iframe;
			var form = d.document.getElementById('dosubmit');form.click();
		}
		return false;
	},
	function(){
			art.dialog({id:id}).close()
	});void(0);
}
function ViewProperty(type)
{
	if(type == 'soft')
		SetProperty(true,true,false,false,false);
	if(type == 'open')
		SetProperty(true,true,true,false,false);
	if(type == 'book')
		SetProperty(true,true,false,false,false);
	if(type == 'document')
		SetProperty(true,true,false,false,false);
	if(type == 'video')
		SetProperty(false,false,false,false,true);
	if(type == 'activex')
		SetProperty(true,true,true,false,false);
	if(type == 'code')
		SetProperty(false,false,true,true,false);
	if(type == 'webcode')
		SetProperty(true,true,true,true,false);
	if(type == 'chm')
		SetProperty(false,false,false,false,true);
	if(type == 'js')
		SetProperty(true,false,false,true,false);
}
function SetProperty(os,agreement,language,categorys,propertys)
{
	if(os){
		$('#divos').css('display','block');
		$('h6:contains("运行平台")').css('display','block');
	}else
	{
		$('#divos').css('display','none');
		$('h6:contains("运行平台")').css('display','none');
	}
	if(agreement){
		$('#divagreement').css('display','block');
		$('h6:contains("授权协议")').css('display','block');
	}else
	{
		$('#divagreement').css('display','none');
		$('h6:contains("授权协议")').css('display','none');
	}
	if(language){
		$('#divlanguage').css('display','block');
		$('h6:contains("开发语言")').css('display','block');
	}else
	{
		$('#divlanguage').css('display','none');
		$('h6:contains("开发语言")').css('display','none');
	}
	if(categorys){
		$('#divcategorys').css('display','block');
		$('h6:contains("资源类别")').css('display','block');
	}else
	{
		$('#divcategorys').css('display','none');
		$('h6:contains("资源类别")').css('display','none');
	}
	if(propertys){
		$('#divpropertys').css('display','block');
		$('h6:contains("资源属性")').css('display','block');
	}else
	{
		$('#divpropertys').css('display','none');
		$('h6:contains("资源属性")').css('display','none');
	}
}