jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( ".popup-boss .window" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			$('.popup-boss').removeClass('opened');
		}
	});
});

$(function(){
	$(".feedback-page button.add, .feedback-page .add-person .block-name .close").click(function(){
		$(".feedback-page .add-person").slideToggle();
	});
	$(".feedback-page button.upload").click(function(){
		$(".feedback-page input[type='file']").trigger('click');
	});
	$('.feedback-page .text-link').click(function() {
		$(this).toggleClass('active');
		$(this).prev('.text').toggleClass('opened');
	});
	$('#ch1').click(function(){
		if ($(this).is(':checked')){
			$('.feedback-page .name3').hide();
		} else {
			$('.feedback-page .name3').show();
		}
	});
	$('#ch2').click(function(){
		if ($(this).is(':checked')){
			$('.feedback-page .name4').hide();
		} else {
			$('.feedback-page .name4').show();
		}
	});
	$('.menubg, .mobile-menu .close').click(function() {
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');
	});
	$('.menubg, .mobile-menu .close').click(function() {
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');
	});
	$('.header .menu-button').click(function() {
		$('.menubg').fadeIn();
		$('.mobile-menu').addClass('opened');
	});
	$('.popup-search .close').click(function() {
		$('.popup-search').fadeOut();
	});
	$('.top-page-line .links .search').click(function() {
		$('.popup-search').fadeIn();
	});
	$('.header .dots').click(function() {
		$('.popup-boss').addClass('opened');
	});
	$('.index-projects-block nav a').click(function() {
		$('.index-projects-block nav a').removeClass('active');
		$(this).addClass('active');
	});
	$('.index-page-slider').slick({
		dots: true
	});
	$('.index-projects-block .list').slick({
		arrows: false
	});
});