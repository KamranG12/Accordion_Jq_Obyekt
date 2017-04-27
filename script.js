var x=0;
$.fn.Accordion=function(){
	this.click(function() {
        $('.panel-body').each(function() {
            $(this).slideUp(500);
        });
        x=$(this).find('.panel-body').css('display');
        if(x==='block'){
       $(this).find('.panel-body').slideUp(500);
      }else{
        $(this).find('.panel-body').slideToggle(500);
      }
    });

}







$(document).ready(function() {
      $('.panel').Accordion();
})