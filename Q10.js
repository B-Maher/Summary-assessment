var colors = {
	1 : "red",
	3 : "blue",
	5 : "yellow",
	6 : "orange",
	8 : "green",
	4 : "purple",
	9 : "black", 
}
var color = 0;

$('#create').on('click',function(){
	if($(':checked').length === 3){
		$('ul').append('<li class="black">black</li>');
	}else if ($(':checked').length === 2){
		color =  parseInt($(':checked')[0].id) + parseInt($(':checked')[1].id);
		$('ul').append('<li class=' + colors[color] +'>' + colors[color] + '</li>');
	}else if ($(':checked').length === 1){
		color =  parseInt($(':checked')[0].id) ;
		$('ul').append('<li class=' + colors[color] +'>' + colors[color] + '</li>');
	}
});

$('#remove').on('click', function(){
	if($(':checked').length === 3){
		$('.black').remove();
	}else if ($(':checked').length === 2){
		color =  parseInt($(':checked')[0].id) + parseInt($(':checked')[1].id);
		$('.' + colors[color]).remove();
	}else if ($(':checked').length === 1){
		color =  parseInt($(':checked')[0].id) ;
		$('.' + colors[color]).remove();
	}
})

