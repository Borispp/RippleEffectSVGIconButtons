var parent, ripple, d, x, y;
$(".ripple-container .btn").click(function(e){
	parent = $(this).parent();
	if(parent.find(".ripple").length == 0)
		parent.prepend("<span class='ripple'></span>");
		
	ripple = parent.find(".ripple");
	ripple.removeClass("animate");

	if(!ripple.height() && !ripple.width())
	{
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ripple.css({height: d, width: d});
	}
	
	x = e.pageX - parent.offset().left - ripple.width()/2;
	y = e.pageY - parent.offset().top - ripple.height()/2;
	
	ripple.css({top: y+'px', left: x+'px'}).addClass("animate");
	return false;
})