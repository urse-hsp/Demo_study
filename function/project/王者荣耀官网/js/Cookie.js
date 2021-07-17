function setCookie(name,value,iDay){
    //document.cookie="name=value;expires=date"
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+"="+value+";expires"+oDate;
    }
	
function getCookie(name){
    var arr=document.cookie.split("; ");
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split("=");
        // arr2[0];
        if(arr2[0]==name){
            return arr2[1];
        }
    }
    return "";
}
	
function removerCookie(name){
        setCookie(name,1,-1)
}
setCookie("houshao","houshaoping",35);
setCookie("password","156444",365);
removerCookie("password");
alert(document.cookie);