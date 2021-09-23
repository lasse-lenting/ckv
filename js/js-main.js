var amount = 2;

$(document).ready(function() {
    
    $('a').addClass("linkOut");
    $('a[target="blank"]').removeClass("linkOut");
    $('a[target="_blank"]').removeClass("linkOut");
    
    $(document).on("click", ".linkOut", function (e) {
        e.preventDefault();
        var url = $(this).data('link');
        if (url === '' || url === undefined) {
            url = $(this).attr('href');
        }
        $('body').addClass('fadeOut');
        $('.pageContainer, header').addClass('fadeOut');
        $("#hamburger").removeClass("active");
        $(".menuItems").removeClass("menuOpen");
        $("#mainMenu").removeClass("active");
        setTimeout(function() {
            document.location.href = url;
        }, 300);
    });
    
    setTimeout(function() {
        $('.pageContainer, header').removeClass('fadeOut');
    }, 300);
    
    if(Cookies.get('amount')){
        amount = parseInt(Cookies.get('amount')) + 1;
    }
	
    Cookies.set('amount', amount, { expires: 7 });
    
    if(Cookies.get('amount') >= 6){
        Cookies.set('amount', 1, { expires: 7 });
    }
    
    $("#hamburger").on("click", function(){
        $(this).toggleClass("active");
        $(".menuItems").toggleClass("menuOpen");
        $("#mainMenu").toggleClass("active");
    });
    
});