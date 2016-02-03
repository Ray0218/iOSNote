function searchKeydown(e, type) {
    e = e || window.event;
    if (e.keyCode == 13) {
        return searchNewClick(type);
    }
}
function searchNewClick(typeval) {
    var keyword = document.getElementById("txtKeyWord").value;

    if (keyword == "请输入您想要找的内容...") {
        alert("请输入您想要查找的内容！");
        return false;
    }
    if (keyword.replace(/^\s*/, "").replace(/\s*$/, "").length < 1) {
        alert("请输入您想要查找的内容！"); 
        return false;
    }

    keyword = keyword;

    var fm = document.createElement("form");
    fm.target = "_blank";
    fm.method = "get";
    var urlStr = "";

    urlStr = "http://so.ixueyi.com/search.php";

    var type = document.createElement("input");
    type.name = "type";
    type.type = "text";
    type.value = typeval;
    fm.appendChild(type);

    var input = document.createElement("input");
    input.name = "q";
    input.type = "text";
    input.value = keyword;
    fm.appendChild(input);

    fm.action = urlStr;
    document.body.appendChild(fm);
    fm.submit();
    document.body.removeChild(fm);
    return false;
}