	var num=0;
	var str=["img/ban1.jpg","img/oneAD.jpg","img/fre_b1.jpg"];
	var carousel2=document.getElementsByClassName("carousel");
function carousel(){
	var carousel=document.getElementById("carousel");
	num++;
	if(num==3)num=0;
	for(var i=0;i<str.length;i++){
		carousel.src=str[num];
		if(num==i){
			carousel2[i].style.background="red";
		}else{
			carousel2[i].style.background="rgb(204,192,179)";
		}
	}
}
setInterval(carousel,1500);

/* 			for(var i=0;i<carousel2.length;i++){
				var carousel2=document.getElementsByClassName("carousel");
				carousel2[0].index = i;
				carousel2[0].onclick=function(){
					for(var j=0;j<carousel2.length;j++){
						if(this.index==j){
							carousel2[j].style.background="red";
						}else{
							carousel2[j].style.background="pink";
						}
					}
					document.getElementById("carousel").src = "str[this.index]";
					alert(1)
				}
			} */
