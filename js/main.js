
$( document ).ready(function() {
    
    console.log( "ready!" );
    
    var state = 0;
    
    $('body').click(function() {
        
        if(state === 0) {
            gotoState1();
        } else {
            //gotoState0();
        }
        
    });
    
    gotoState0 = function() {
        //console.log( "state 0" );
        //$(".content-apropos").hide();
        //$(".content-mtl").show();
        
        //state = 0;
    }
    
    gotoState1 = function() {
        console.log( "state 1" );
        $(".content-apropos").show();
        $("body").animate({"color":"black"},300);
        $(".main-container").css("border-color","black");
        $("body, .corner").css("background-color","white");
        $(".content-mtl").hide();
        state = 1;
    }
    setTimeout(gotoState1,5000)
    
    
});