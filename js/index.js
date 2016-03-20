// 1.循环格子，输出到页面中  数学平方math.pow(x,y)
// 2.添加颜色  
// 3.删除外面的一层
// 4.设置属性
// 5.设置地雷所有的div
// 6. 添加事件
// 7.判断单击的位置
var row=20;
var h='';
var colors=['blue-grey1','blue-grey']
for (var i = 0; i < Math.pow(row+2,2); i++) {
	h+='<div></div>'
}
$('.box').html(h).find('div').addClass('block').addClass(function(i){
	return 'block '+colors[i%2]
})
$('.box').find('div:lt(23)').removeClass().end()
.find('div:gt(461)').removeClass().end()
.find('div:nth-child(22n+1)').removeClass().end()
.find('div:nth-child(22n)').removeClass().end()
.find('div').each(function(i){
	$(this).data('index',i)
})
$('.box').find('.block')
.each(function(i){
	if(Math.random()>0.9){
		$(this).data('islei',true)
	}
})
$('.box div').click(function(){
	if($(this).data('islei')){
		$('.tan').css({'display':'block'});
		setTimeout(function(){
			$('.tan').css({'webkitTransform':'scale(1,1)','opacity':'0.8'});
		},800)
		$('.box .block')
		.removeClass()
		.addClass('block')
		.addClass(function(i){
			if($('.box .block').eq(i).data('islei')){
				return 'black'
			}
		}).css('animation-duration',function(){
			return Math.random()*0.8.toFixed(2)+'s';
		});
		return $('.box div').unbind( "click" );
	}else{
		$els=$('.box div')
		var num=0;
		var pos=$(this).data('index');
		if($els.eq(pos-1).data('islei')){
			num+=1;
		};if($els.eq(pos+1).data('islei')){
			num+=1;
		};
		if($els.eq(pos-22).data('islei')){
			num+=1;
		};
		if($els.eq(pos-21).data('islei')){
			num+=1;
		};
		if($els.eq(pos-23).data('islei')){
			num+=1;
		};
		if($els.eq(pos+21).data('islei')){
			num+=1;
		};
		if($els.eq(pos+22).data('islei')){
			num+=1;
		};
		if($els.eq(pos+23).data('islei')){
			num+=1;
		};
		$(this).text(num);
	}
})
$('.game').click(function(){
	window.location.reload();
	$('.tan').css({'display':'none'});
})
$('.tan').bind('mousedown',function(ev){
    ev.preventDefault();
})