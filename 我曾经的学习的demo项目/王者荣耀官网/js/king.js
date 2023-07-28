jQuery(function($){
	var bt=baidu.template;
	
	//头部显示隐藏
	$(".header-nav").mouseenter(function(){
		$(".header-subnav").slideDown("fast");
	}).mouseleave(function(){
		$(".header-subnav").slideUp("fast");
	});
	
	//轮播
	$.ajax({
		url:"json/king.json",
		type:"get",
		success:function(res){
			var carousel = res.rodate;
			var str = "";
			var str2= "";
			var num = parseInt($("#rotateimg").css("margin-left"));
			$.each(carousel,function(index,element){
				str+="<li><a href='#'><img src=\""+carousel[index].rotateimg+"\" ></a></li>";
				str2+="<span>"+carousel[index].rotateclick+"</span>"
			});
			$("#rotateimg").html(str);
			$("#rotateclick").html(str2);
			
			$("#rotateimg").width($("#rotateimg>li").length*$("#rotateimg>li").width());
			$("#rotateimg").height($("#rotateimg>li").height());
			var imgwidth = parseInt($("#rotateimg").find("img").width());
			var imglength = $("#rotateimg").find("img").length;
			var spanObj = document.getElementById("rotateclick").getElementsByTagName("span");
			var nowIndex = 0;
			
			$.each(spanObj,function(index,element){
				$(element).mouseover(function(){
					$("#rotateimg").css("margin-left","-"+index*imgwidth+"px");
					$(this).css({"color":"#f3c258","background":"rgba(255,255,255,0.15)"}).siblings().css({"color":"#b1b2be","background":""})
				})
			});
			
			auto = setInterval(function carousel(){
				num+=imgwidth;
				nowIndex++;
				$("#rotateimg").css("margin-left",-num+"px");
				if(num>=imgwidth*(imglength-1))num=0;
				if(nowIndex>=imglength)nowIndex=0;
				for(var i=0;i<spanObj.length;i++){
					if(nowIndex==i){
						spanObj[i].style="color:#f3c258;background:rgba(255,255,255,0.15)";
					}else{
						spanObj[i].style="color:#b1b2be;transparent";
					}
				}
			},2000);
			
		// newsTab 
		var carousel = res.newsTab;
			var newsTab = "";
			var newsTab2 = "";
			var newsTab3 = "";
			var newsTab4 = "";
			var newsTab5 = "";
			$.each(carousel,function(index,element){  
				newsTab+="<li><a href='#'>"+carousel[index].news+"</a><em>"+carousel[index].newstemp+"</em></li>";
				newsTab2+="<li><a href='#'>"+carousel[index].news2+"</a><em>"+carousel[index].news2temp+"</em></li>";
				newsTab3+="<li><a href='#'>"+carousel[index].news3+"</a><em>"+carousel[index].news3temp+"</em></li>";
				newsTab4+="<li><a href='#'>"+carousel[index].news4+"</a><em>"+carousel[index].news4temp+"</em></li>";
				newsTab5+="<li><a href='#'>"+carousel[index].news5+"</a><em>"+carousel[index].news5temp+"</em></li>";
			});
			var newsTab6 = "<ul>"+newsTab+"</ul>"+"<ul>"+newsTab2+"</ul>"+"<ul>"+newsTab3+"</ul>"+"<ul>"+newsTab4+"</ul>"+"<ul>"+newsTab5+"</ul>";
			$("#newsTab-content").html(newsTab6);
			$("#newsTab-content").width($("#newsTab-content ul").length*$("#newsTab-content ul").width());
			$("#newsTab-content ul li em").addClass("emo");
						
			var lis = $(".newsTab-ul li");
			var ulwidth = parseInt($("#newsTab-content ul").width());
			$.each(lis,function(index,element){
				$("#newsTab-content ul:eq("+index+") li:first").addClass("line");
				$("#newsTab-content ul:eq("+index+") li:first a").addClass("linea");
				$("#newsTab-content ul:eq("+index+") li:first a").css({"color":"#f3c258","font-size":"18px"});
				$("#newsTab-content ul:eq("+index+") li em:first").hide();
				$(element).mouseover(function(){
					$("#newsTab-content").css("margin-left","-"+index*ulwidth+"px");
					$(this).addClass("lihover").siblings().css({"border-bottom":"none","color":"#b8b9c5;"});
					$(this).css({"border-bottom":"3px solid rgb(243,194,88)","color":"#d9ad50"}).siblings().css({"color":"#b8b9c5","border":"none"})
				})
			});
			
		// Quickentry 快速入口div
		var qe = res.Quickentry;
		var qestr = "";
			$.each(qe,function(index,element){
				qestr+="<a href='#'><img src='"+qe[index].Qeimg+"'/></a>";
			});
			$(".Quick_entry").html(qestr);
			$(".Quick_entry>a:lt(3)").addClass("margin");
			
		// content_center 第三块内容
		var center = res.contentvideo;
		var subnav1 = "";
		var subnav2 = "";
		
			$.each(center,function(index,element){
				subnav1+="<a href='javascript:;'>"+center[index].title+"</a>";
				subnav2+="<a href='javascript:;'>"+center[index].title2+"</a>";
				
				$("#center-submenu-a >.title").html(subnav1);
				$("#center-submenu-b >.title").html(subnav2);
				
				//三个点击栏
				$("#center-submenu-a>.title a").each(function(sbindex,sbelement){
						var sbindex1 = "";
							/*下1 子导航 */
							$.each(center[sbindex].content,function(index2,element2){
									sbindex1+="<li><a href='#'><img src=\'"+center[0].content[index2].img+"'title='"+center[0].content[index2].title+"'\>"+
										"<p><em>"+center[0].content[index2].play+"</em><em>"+center[0].content[index2].date+"</em></p><span>"
										+center[0].content[index2].title+"<span></a></li>";
							});
							$(".center-content").html("<ul>"+sbindex1+"</ul>");
				});
				//点击栏下面的子导航，内容中心
				$(".center-subnav a").each(function(index,element){

					$(element).mouseenter(function(){
						$(this).addClass("lihover").siblings().css({"border-bottom":"none","color":"#b8b9c5;"})
						$(this).css({"border-bottom":"3px solid rgb(243,194,88)","color":"#000000"}).siblings().css({"color":"#b8b9c5","border":"none"});
					var hide = document.getElementsByClassName("hide");
					$(".hide").each(function(index2,element2){
						if(index==index2){
							hide[index2].style.display="block";
						}else{
							hide[index2].style.display="none";
						}
					});
					$("#center-submenu-b>.title a").each(function(sbindex,sbelement){
							var sbindex2 = "";
								$.each(center[sbindex].content,function(index2,element2){
										sbindex2+="<li><a href='#'><img src=\'"+center[index].content[index2].img+"'title='"+center[index].content[index2].title+"'\>"+
											"<p><em>"+center[index].content[index2].play+"</em><em>"+center[index].content[index2].date+"</em></p><span>"
											+center[index].content[index2].title+"<span></a></li>";
								});
								$(".center-content").html("<ul>"+sbindex2+"</ul>");
						});
					
					})
				});

				$("#center-submenu-a>.title a").each(function(sbindex,sbelement){
				var sbindex1 = "";
				$(sbelement).mouseenter(function(){
					$(this).css({"border-color":"#f3c258","background":"#f3c258","color":"#fff"});
					$(this).siblings().css({"border-color":"#e5e5e5","background":"#f5f5f5","color":"#333"});
					$.each(center[sbindex].content,function(index2,element2){
							sbindex1+="<li><a href='#'><img src=\'"+center[sbindex].content[index2].img+"'title='"+center[sbindex].content[index2].title+"'\>"+
								"<p><em>"+center[sbindex].content[index2].play+"</em><em>"+center[sbindex].content[index2].date+"</em></p><span>"
								+center[sbindex].content[index2].title+"<span></a></li>";
					});
					$(".center-content").html("<ul>"+sbindex1+"</ul>");
				});
			 });
			 $("#center-submenu-b>.title a").each(function(sbindex,sbelement){

					var sbindex2 = "";
					$(sbelement).mouseenter(function(){
						//$(this).css({"border-color":"#f3c258","background":"#f3c258","color":"#fff"});
						//$(this).siblings().css({"border-color":"#e5e5e5","background":"#f5f5f5","color":"#333"});

						$.each(center[sbindex].content,function(index2,element2){
								sbindex2+="<li><a href='#'><img src=\'"+center[sbindex].content[index2].img+"'title='"+center[sbindex].content[index2].title+"'\>"+
									"<p><em>"+center[sbindex].content[index2].play+"</em><em>"+center[sbindex].content[index2].date+"</em></p><span>"
									+center[sbindex].content[index2].title+"<span></a></li>";
						});
						$(".center-content").html("<ul>"+sbindex2+"</ul>");
					});
				});
			});
			
			// 赛事中心部分读取
			var contest = res.contest;
			$(".cut").each(function(index,element){
				$("#match-left").html("<a href='#'><img src=\""+contest[0].pic+"\"/></a>");
				var contestImg = "";

				$.each(contest[index].title,function(index2,element2){
					contestImg+="<li><span>"+contest[0].title[index2].genre+"</span><a href='#'>"+
						contest[0].title[index2].content+"</a><em>"+contest[0].title[index2].date+"</em></li>";
					$("#match-right").html("<ul>"+contestImg+"</ul>");
				});
				var video = "";
				$.each(contest[index].requency,function(index2,element2){
					video+="<li><a href='#'><img src=\'"+contest[index].requency[index2].img+"'title='"+contest[index].requency[index2].title+"'\>"+
						"<p><em>"+contest[index].requency[index2].play+"</em><em>"+contest[index].requency[index2].data+"</em></p><span>"
						+contest[index].requency[index2].title+"<span></a></li>";
					$("#match-video").html(video);
				});
				$("#match-right li:first").prepend("<a href='#'>"+contest[0].nuws+"</a>");

				$(this).mouseenter(function(){
					$("#match-left").html("<a href='#'><img src=\""+contest[index].pic+"\"/></a>");
					var contestImg = "";
					$.each(contest[index].title,function(index2,element2){
						contestImg+="<li><span>"+contest[index].title[index2].genre+"</span><a href='#'>"+
									contest[index].title[index2].content+"</a><em>"+contest[index].title[index2].date+"</em></li>";
						$("#match-right").html("<ul>"+contestImg+"</ul>");
					});
					var video = "";
					$.each(contest[index].requency,function(index2,element2){
						
						video+="<li><a href='#'><img src=\'"+contest[index].requency[index2].img+"'title='"+contest[index].requency[index2].title+"'\>"+
								"<p><em>"+contest[index].requency[index2].play+"</em><em>"+contest[index].requency[index2].data+"</em></p><span>"
								+contest[index].requency[index2].title+"<span></a></li>";
						$("#match-video").html(video);
					});
					$("#match-right li:first").prepend("<a href='#'>"+contest[index].nuws+"</a>")
				})
				
			})
		}	
	});
	
	// 英雄皮肤
	var wid = $(".center-right-subnav").width();
		$(".head-wrap").width($(".center-right-subnav").width()*$(".head-wrap").children().length);
	var wnum = 0;
	$(".center-right-subnav a").each(function(index,element){
		$(this).mouseenter(function(){
			$(this).css({"border-bottom":"3px solid #f3c258","color":"#333333"});
			$(this).siblings().css({"border-color":"#e5e5e5","color":"#333"});
			$(".head-wrap").css("margin-left","-"+wid*index+"px")
		})
	});
	//console.log($("#mark div"))
	$(".mark").mouseenter(function(){
		$(".mark div").show();
	}).mouseleave(function(){
		$(".mark div").hide();
	});
	$(".identity").mouseenter(function(){
		$(".identity div").show();
	}).mouseleave(function(){
		$(".identity div").hide();
	});
	$(".cut").each(function(index,element){
		$(element).mouseenter(function(){
			$(".cut").css({"border-color":"#f5f5f5","color":"#999999"});
			$(this).css({"border-bottom":"3px solid #f3c258","color":"#333333"});
		});
	});

});






































/* jQuery(function($){
	
	//头部显示隐藏
	$(".header-nav").mouseenter(function(){
		$(".header-subnav").slideDown("fast");
	}).mouseleave(function(){
		$(".header-subnav").slideUp("fast");
	});
	
	// 轮播
	$.ajax({
		url:"json/king.json",
		type:"get",
		success:function(res){
			var carousel = res.rodate;
			var str = "";
			var str2= "";
			var nowIndex = 0;
			$.each(carousel,function(index,element){
				str+="<li><a href='#'><images src=\""+carousel[index].rotateimg+"\" ></a></li>";
				str2+="<span>"+carousel[index].rotateclick+"</span>"
			})
			$("#rotateimg").html(str);
			$("#rotateclick").html(str2);
			
			$("#rotateimg").width($("#rotateimg>li").length*$("#rotateimg>li").width());
			$("#rotateimg").height($("#rotateimg>li").height());
	
			var imgwidth = parseInt($("#rotateimg").find("images").width());
			var imglength = $("#rotateimg").find("images").length;
			var spanObj = document.getElementById("rotateclick").getElementsByTagName("span");
			var nowIndex = 0;
			$("#rotateclick>span").each(function(index,element){
				$(element).mouseenter(function(){
					clearInterval(auto);
					$("#rotateimg").css("margin-left",-index*imgwidth+"px");
					auto = setInterval(carousel,2000);
				});
				
			});
			var num = parseInt($("#rotateimg").css("margin-left"));
			function carousel(){
				num+=imgwidth;
				nowIndex++;
				$("#rotateimg").css("margin-left",-num+"px");
				if(num>=imgwidth*(imglength-1))num=0;
				if(nowIndex>=imglength)nowIndex=0;
				 for(var i=0;i<spanObj.length;i++){
					spanObj.index = i;
					if(nowIndex==i){
						spanObj[i].style="color:#f3c258;background:rgba(255,255,255,0.15)";
					}else{
						spanObj[i].style="color:#b1b2be;transparent";
					}
				} 
			}
			auto = setInterval(carousel,2000)
		}
	});
}); */


/* jQuery(function($){
	
	//头部显示隐藏
	$(".header-nav").mouseenter(function(){
		$(".header-subnav").slideDown("fast");
	}).mouseleave(function(){
		$(".header-subnav").slideUp("fast");
	});
	
	//轮播
	$.ajax({
		url:"json/king.json",
		type:"get",
		success:function(res){
			var carousel = res.rodate;
			var str = "";
			var str2= "";
			$.each(carousel,function(index,element){
				str+="<li><a href='#'><images src=\""+carousel[index].rotateimg+"\" ></a></li>";
				str2+="<span>"+carousel[index].rotateclick+"</span>"
			})
			$("#rotateimg").html(str);
			$("#rotateclick").html(str2);
			
			$("#rotateimg").width($("#rotateimg>li").length*$("#rotateimg>li").width());
			$("#rotateimg").height($("#rotateimg>li").height());
			var imgwidth = parseInt($("#rotateimg").find("images").width());
			var imglength = $("#rotateimg").find("images").length;
			var spanObj = document.getElementById("rotateclick").getElementsByTagName("span");
			
			var nowIndex = 0;
			$("#rotateclick>span").each(function(index,element){
				$(this).mouseenter(function(){
					clearInterval(auto);
					
					$("#rotateimg").css("margin-left",-index*imgwidth+"px");
					
					$(this).css({"color":"#f3c258","background":"rgba(255,255,255,0.15)"}).end();
					$(this).siblings().css({"color":"#b1b2be","background":""})
					auto = setInterval(carousel,2000);
				});
			});
			var num = 0;
			auto = setInterval(function carousel(){
				num+=imgwidth;
				nowIndex++;
				$("#rotateimg").css("margin-left",-num+"px");
				if(num>=imgwidth*(imglength-1))num=0;
				if(nowIndex>=imglength)nowIndex=0;
				for(var i=0;i<spanObj.length;i++){
					if(nowIndex==i){
						spanObj[i].style="color:#f3c258;background:rgba(255,255,255,0.15)";
					}else{
						spanObj[i].style="color:#b1b2be;transparent";
					}
				}
			},2000);
		}
	});
}); */