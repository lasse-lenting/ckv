var backgroundTime = 0;
var videoTime = 0;

$(document).ready(function() {

    $("#mainVideo").on("timeupdate", function(event){
      	videoTime = this.currentTime;
     	if(videoTime > backgroundTime + 1){
     		if(videoTime - 4 < this.duration || backgroundTime - 4 < this.duration){
	     		$("#backgroundVideo").prop("currentTime", videoTime);
	     	}
     	}
    });

    $("#backgroundVideo").on("timeupdate", function(event){
      	backgroundTime = this.currentTime;
	 	if(backgroundTime > videoTime + 1){
	 		if(backgroundTime - 4 < this.duration && videoTime - 4 < this.duration){
		 		$("#mainVideo").prop("currentTime", backgroundTime);
		 	}
	 	}
    });

 	if(backgroundTime == 0){
 		$("#backgroundVideo").get(0).load();
 		$("#backgroundVideo").prop("currentTime", videoTime);
 	}

 	if(videoTime == 0){
 		$("#mainVideo").get(0).load();
 		$("#mainVideo").prop("currentTime", backgroundTime);
 	}

});