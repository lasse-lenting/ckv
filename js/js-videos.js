var openVideo = false;

$(document).ready(function() {
    
    $(".videoItems .item").on("click", function(){
        if(!openVideo){
            openVideo = true;
            var ytCode = $(this).data("youtube");
            $(".videoOverlay").addClass("active");
            $(".videoOverlay .innerVideo").html("<iframe src='https://www.youtube.com/embed/"+ ytCode +"' frameborder='0' allowfullscreen></iframe>");
        }
    });
    
    $(".videoOverlay .background, .videoOverlay .closeVideo").on("click", function(){
        $(".videoOverlay").removeClass("active");
        setTimeout(function(){
            $(".videoOverlay .innerVideo").html("");
            openVideo = false;
        }, 600);
    });
    
});