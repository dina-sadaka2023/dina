$(".product-item").isotope({
	itemSelector: ".item",
	layoutMode:"fitRows"
});
 $(".product-menu ul li").click(function(){
	$(".product-menu ul li").removeClass("active");
	$(this).addClass("active");
	
	var Selector = $(this).attr("data-filter");
 $(".product-item").isotope({
	filter: Selector
 });
 return false;
  
 });
 