

$(".openNav").on('click',function(){
    $("#leftMenu").animate({ width:'200px'},100)
   $("#home-content").animate({marginLeft :'250px'},100)
})

$(".closebtn").on('click',function(){
    $("#leftMenu").animate({ width:'0px'},100)
   $("#home-content").animate({marginLeft :'0px'},100)
})








$('#slideDown .toggle').on('click',function(){
    $('.inner').not($('#slideDown .toggle').next()).slideUp(1000);
    $(this).next().slideToggle(1000);
});








let maxCarct = 100;
$('textarea').keyup(function() {
  let length = $('textarea').val().length;
  let AmountLeft = maxCarct-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});



