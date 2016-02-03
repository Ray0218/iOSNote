function creatShopCartDiv_view(divid,cWidth,cHeight,curObj,topMove,leftMove) {
    var thisShopCart;
    
    if(document.getElementById(divid))
    {
        thisShopCart = document.getElementById(divid);
    }
    else
    {
        creatShopCartDiv(divid,cWidth,cHeight,curObj);
        thisShopCart = document.getElementById(divid);
    }
    
    var thistop = getOffsetTop(curObj);
    var thisleft = getOffsetLeft(curObj);
    thisShopCart.style.top = (thistop + topMove) + "px";
    thisShopCart.style.left = (thisleft + leftMove) + "px";
    thisShopCart.style.display = "";
}

 
function creatShopCartDiv(divid,cWidth,cHeight,curObj)
{
    var myCart = document.createElement("div");
    myCart.id = divid;
    myCart.style.position = "absolute";
    myCart.style.zIndex = 9900;
    myCart.style.display = "block";
    myCart.style.width = cWidth + "px";
    myCart.style.height = cHeight + "px";
    //myCart.style.backgroundColor = "#ccc";//背静色  
    document.body.appendChild(myCart);
}


function getOffsetTop(el){
	var retValue=0;
	while (el != null) {
        retValue += el["offsetTop"];
        el = el.offsetParent;
    }
    return retValue;
}

function getOffsetLeft(el){
	var retValue=0;
	//el = el.offsetParent;
	while (el != null) {
        retValue += el["offsetLeft"];
        el = el.offsetParent;
    }
    return retValue;
}



function GetCallBack_addToShopCart(divid,cWidth,cHeight,str,curObj,topMove,leftMove){

    if(str == -1)
    {
        alert("请先登录！");
        location.href="http://passport.shangxueba.com/user/userlogin.aspx?url="+escape(location.href);
        return false;
    }
    creatShopCartDiv_view(divid,cWidth,cHeight,curObj,topMove,leftMove);
    $(divid).innerHTML = str;
   // setTimeout("closeShopCart('"+divid+"')","1000");

}

function closeShopCart(divid)
{
    $(divid).style.display = "none";
}






/** 添加到收藏夹 **/
function com_all_favoriteadd(divid,cWidth,cHeight,curObj,topMove,leftMove,shopid,shopname,shoptype,everytime){
    document.domain = "shangxueba.com";
    if(everytime == 1)
    {
        if(document.getElementById(divid))
        {
            $(divid).style.display = "";
           // setTimeout("closeShopCart('"+divid+"')","1000");
            return;
        } 
    }
    var ajax=new Ajax();
        ajax.setServer("http://www.shangxueba.com/share/ajax/all_favoriteadd.ashx");
        ajax.setParam("shopid",escape(shopid));
        ajax.setParam("shopname",escape(shopname));
        ajax.setParam("shoptype",shoptype);
        ajax.setCallback(function(str){GetCallBack_addToShopCart(divid,cWidth,cHeight,str,curObj,topMove,leftMove);});
        ajax.sendByGet(0,true);	
        
    
}




