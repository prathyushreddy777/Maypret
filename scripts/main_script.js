$(document).ready(function(){
	//alert('123');
	$(".div_1_inside_class").css("top",(($(window).height()-$(".div_1_inside_class").height())/2));
	
	$('#about_maypret_id').addClass('sub_menu_active');
	var about_maypret = $('#about_mayp_id').clone().attr('id','abt');
	about_maypret.appendTo('.about_txt_main_class').css('display','inline');
	
	$('.sub_options_inside_div_class').click(function(){
		$('.sub_options_inside_div_class').removeClass('sub_menu_active');
		$(this).addClass('sub_menu_active');
		$('.about_txt_main_class').empty();
		
		var loading = $('#loading_button_div_id').clone().attr('id','load');
		loading.appendTo('.about_txt_main_class').css('display','inline');
		
		setTimeout(function(){
			$('.about_txt_main_class').empty();
			if($(this).attr('id')=='about_mayp_id'){
				var about_maypret = $('#about_mayp_id').clone().attr('id','abt');
				about_maypret.appendTo('.about_txt_main_class').css('display','inline');
			}else{
				var about_preeti = $('#abbout_preeti_id').clone().attr('id','abt');
				about_preeti.appendTo('.about_txt_main_class').css('display','inline');
			}
			
		},1000);
		
	});
	
});