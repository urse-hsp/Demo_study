function ajax(method,url,asy,fn){
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	oAjax.open(method,url,asy)
	oAjax.send()
	oAjax.onreadystatechange = function(){
		if(oAjax.readyState==4 && oAjax.status==200){
			var res = JSON.parse(oAjax.responseText)
			fn(res)
		}
	}
}
	