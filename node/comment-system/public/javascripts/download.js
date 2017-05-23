window.onload=function(){
	$('#download').click(function(){
		clickbutton();
	});
	console.log('bbbbb');
	function clickbutton(){
		console.log('aaaa');
		$.ajax({
			url:'/?download=true',
			type:'GET', //GET
			async:true,    //或false,是否异步
			dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
			beforeSend:function(xhr){
				console.log(xhr);
				console.log('发送前');
			},
			success:function(data){
				console.log('success');
				//console.log(data);
				window.location.href=data.url;
				
			},
			error:function(xhr,textStatus){
				console.log('错误');
				console.log(xhr);
				console.log(textStatus);
			},
			complete:function(){
				console.log('结束');
			}
		});
	}
}