$(document).ready(function(){
    var scroll = $(window).scrollTop();
    var height = $(window).height();
     $(document).keydown(function (evt) {
    if (evt.keyCode == 40) { // down arrow
        scroll += height;
        if(scroll < -1){
            scroll =$(window).height();
        }
        window.scrollTo(0, scroll);
    }
    if (evt.keyCode == 38) { // up arrow
        scroll -= height;
        window.scrollTo(0, scroll);
    }
  });
});
