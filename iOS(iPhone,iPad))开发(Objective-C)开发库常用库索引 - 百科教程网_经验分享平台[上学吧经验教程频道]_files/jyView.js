function addFriend(name) {
    ymPrompt.win('http://passport.shangxueba.com/ajax/iframe_myfriend_add.aspx?name=' + name, 300, 160, '添加 ' + name + ' 为好友', null, null, null, { id: 'a' });
}
function switchTag(tag, content, k, n, stylea, styleb) {
    for (i = 1; i <= n; i++) {
        if (i == k) {
            document.getElementById(tag + i).className = stylea;
            document.getElementById(content + i).className = "showbox";
            document.getElementById(content + i).style.display = "block";
        }
        else {
            document.getElementById(tag + i).className = styleb;
            document.getElementById(content + i).className = "Hidebox";
            document.getElementById(content + i).style.display = "none";
        }
    }
}
function JyChengGong(obj, ids) {
    $.ajax({
        type: "GET",
        url: "ajax/addJYcgCount.aspx",
        data: { id: ids, type: obj },
        dataType: "html",
        success: function(data) {
            if (data == "ok") {
                if (type == 1) {
                    $("#LiteSuccess").html(parseInt($("#LiteSuccess").html()) + 1);
                    $("#LiteSuccess_2").html(parseInt($("#LiteSuccess_1").html()) + 1);

                }
                else if (type == 2) {
                    $("#LiteFailures").html(parseInt($("#LiteFailures").html()) + 1);
                    $("#LiteFailures_2").html(parseInt($("#LiteFailures_1").html()) + 1);
                }
            } else if (data == "no") {
                alert("您已反馈，谢谢！");
            }
        }
    });

}
function ajaxClickXG(ids, type, gotoid) {
    //1资料，2试卷，3视频，4图书，5经验,6学友群,7商品
    $.ajax({
        type: "GET",
        url: "ajax/clickXG.ashx",
        data: { id: ids, type: type, gotoid: gotoid },
        dataType: "html",
        success: function(data) { }
    });
}
function Addhuifu(a, b) {
    if (a == 1) {
        document.getElementById("huifu" + b).style.display = "block";
        document.getElementById("sethuifu" + b).style.display = "none";
        document.getElementById("gethuifu" + b).style.display = "block";
        document.getElementById("huifu" + b).getElementsByTagName("textarea").item(0).focus();
    }
    if (a == 2) {
        document.getElementById("huifu" + b).style.display = "none";
        document.getElementById("sethuifu" + b).style.display = "block";
        document.getElementById("gethuifu" + b).style.display = "none";
    }
}
//购买经验教程
function BuyJy(id) {
    $.ajax({
        type: "post",
        datatype: "html",
        url: "ajax/CheckIsLogin.aspx",
        data: "id=" + Math.random,
        success: function(data) {
            if (data == "01") {
                var url = "iframeBuyPoints.aspx?id=" + id;
                ymPrompt.win(url, 320, 150, '阅读付费', null, null, null, { id: 'a' });
            } else {
                alert("您还未登录，请先登录!");
                location.href = "http://passport.shangxueba.com/user/userlogin.aspx?url=" + window.location.href;
            }
        },
        error: function(data) {
            alert(data);
        }
    });


}
function Orientation() {
    window.location = "#PL";
}

function changeCode(flag) {
    if (flag == 1) {
        document.getElementById("codeimage").style.display = "";
        document.getElementById("codeword").style.display = "none";
    }
    else {
        document.getElementById("codeimage").style.display = "none";
        document.getElementById("codeword").style.display = "";
        document.getElementById("imgVerify").src = document.getElementById("imgVerify").src + '?';
    }
}
function switchAll(obj) {
    var i = 0;
    if (obj.src.indexOf("images130121/jc_mlicsq.gif") > -1) {
        var list = document.getElementById("list").getElementsByTagName("span");
        if (list.length > 0) {
            for (i = 0; i < list.length; i++) {
                list[i].className = "mu02";
                document.getElementById(list[i].id + "_list").className = "hidden";
                document.getElementById(list[i].id + "_img").src = "images130121/jc_mulic02.png";
            }
        }
        obj.src = "images130121/jc_mliczk.gif";
    }
    else {
        var list = document.getElementById("list").getElementsByTagName("span");
        if (list.length > 0) {
            for (i = 0; i < list.length; i++) {
                list[i].className = "mu01";
                document.getElementById(list[i].id + "_list").className = "";
                document.getElementById(list[i].id + "_img").src = "images130121/jc_mulic01.png";
            }
        }
        obj.src = "images130121/jc_mlicsq.gif";
    }
}
function switchT(obj) {
    if (obj.className == "mu01") {
        obj.className = "mu02";
        document.getElementById(obj.id + "_list").className = "hidden";
        document.getElementById(obj.id + "_img").src = "images130121/jc_mulic02.png";
    }
    else {
        obj.className = "mu01";
        document.getElementById(obj.id + "_list").className = "";
        document.getElementById(obj.id + "_img").src = "images130121/jc_mulic01.png";
    }
    var list = document.getElementById("list").getElementsByTagName("span");
    var flag1 = 0;
    var flag2 = 0;
    var i;
    if (list.length > 0) {
        for (i = 0; i < list.length; i++) {
            if (list[i].className == "mu02") {
                flag1++;
            }
            else {
                flag2++;
            }
        }
        if (flag1 == list.length)
            document.getElementById("allTopic").src = "images130121/jc_mliczk.gif";
        if (flag2 == list.length)
            document.getElementById("allTopic").src = "images130121/jc_mlicsq.gif";
    }
}

function showTopFolde(id, jyid, subid, title) {
    var url = "PopFolder.aspx?id=" + id + "&jyid=" + jyid + "&subid=" + subid;
    ymPrompt.win(url, 960, 540, title, null, null, null, { id: 'a' });

}