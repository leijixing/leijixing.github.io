window.onload = function(){
	setInterval(function(){
		$("body").css("height",$(window).height())
	},10)
	
	$(".move").each(function(i){
		$(".move").eq(i).css("left",i*239+"px")
	})
	
	//通过鼠标的悬浮与否来实现遮罩层的淡入淡出和里面内容的变化
	$(".move").mouseover(function(){
		$(".zhe").eq($(this).index(".move")).stop(true,true).animate({
			opacity: 0
		},10)
		$(".yj").eq($(this).index(".move")).stop(true,true).delay(100).animate({
			left:-150+"px"
		},200)
		$(".tExt").eq($(this).index(".move")).stop(true,true).delay(100).animate({
			left:300+"px"
		},200)
	})
	$(".move").mouseout(function(){
		$(".zhe").eq($(this).index(".move")).stop(true,true).animate({
			opacity: .9
		},10)
		$(".yj").eq($(this).index(".move")).stop(true,true).delay(100).animate({
			left:0+"px"
		},200)
		$(".tExt").eq($(this).index(".move")).stop(true,true).delay(100).animate({
			left:0+"px"
		},200)
	})
	
	//通过鼠标悬浮来给中间灰色块里的文字加背景色和改变字体颜色
	$("dd").mouseover(function(){
		$("dd").eq($(this).index()).css({"color":"#fff","background-image":"url(img/content_bg.jpg)"});
	})
	$("dd").mouseout(function(){
		$("dd").eq($(this).index()).css({"color":"","background-image":""});
	})
	
	//鼠标悬浮倒数第二个的时候最后一段文字下移给二级栏让出一个位置
	$("dd").eq(4).mouseover(function(){
		$(".dUl").delay(1000).toggle();
		$("dd").eq(5).css("margin-top","50px")
	})
	$("dd").eq(4).mouseout(function(){
		$(".dUl").delay(1000).toggle();
		$("dd").eq(5).css("margin-top","0px")
	})
	
	//鼠标悬浮倒数第二个的时候出现二级栏
	$(".dUl_l").mouseover(function(){
		$(".dUl_l").eq($(this).index()).css("color","black")
	})
	$(".dUl_l").mouseout(function(){
		$(".dUl_l").eq($(this).index()).css("color","")
	})
	
	//通过鼠标在界面上的X轴坐标来实现左右两边按钮的出现与消失
	$("body").bind("mousemove",function(e){
		var x = e.pageX;
		var y = e.pageY;
		var dWidth = document.body.clientWidth;
		if(x<=79){
			$(".left").delay(100).stop(true,true).animate({
				"margin-left":"79px"
			})
		}else{
			$(".left").delay(100).stop(true,true).animate({
				"margin-left":"-79px"
			})
		}
		if(x>=(dWidth-79)){
			$(".right").delay(100).stop(true,true).animate({
				"margin-right":"79px"
			})
		}else{
			$(".right").delay(100).stop(true,true).animate({
				"margin-right":"-79px"
			})
		}
	})
	
	if($("#hJpg").css("left")=="-719px"){
		$("dd").bind("click",function (){
			$("#hidden").css("display","block");
			$("#hJpg").stop(true,true).delay(50).animate({
				"left":"0px"
			},300)
			$("#jpg").stop(true,true).delay(350).animate({
				"top":"0px"
			},300)
		})
	}
	
	
	
	var a = 0;
	var onoff=true;
	$(".left").bind("click",function(){
		if(onoff){
			a--;
			if(a<=0){
				a=0;
			}
			if($(".oUl").css("left")=="0px"){
				setTimeout(function(){
					$(".oUl").animate({
						left:"-150px"
					},30)
				},1)
				setTimeout(function(){
					$(".oUl").animate({
						left:"0px"
					},30)
				},32)
			}else{
				$(".oUl").stop(true,true).animate({
					left:-(a*239)+"px"
				})
			}
			onoff=!onoff;
			setTimeout(function(){
				onoff = !onoff;
			},500)
		}
		
	})
	
	$(".right").bind("click",function(){
		if(onoff){
			a++;
			if(a>8){
				$(".oUl").css("left","0px")
				a=1;
			}
			$(".oUl").stop(true,true).animate({
				left:-(a*239)+"px"
			},300)
			onoff = !onoff;
			setTimeout(function(){
				onoff = !onoff;
			},500)
		}
		
		
	})
	
	
	
	
	
	
	
	
}
