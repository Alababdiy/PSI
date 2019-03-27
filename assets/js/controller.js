// abstracted item object
function createCartObj(itemId, name, price, attrs) {

}



// animation worker
function Duanimate(TheElement,action,animate,speed){
    speed = speed;
    if(action == "hide"){ action = "none" ;}
    else if(action == "show"){ action = "inline" ;}
    else if(action == "toggle"){
        if( $(TheElement).is(":visible") ){
            action = "none" ;
            animate = animate.replace("In", "Out");
        }else{
            action = "inline";
            animate = animate.replace("Out", "In");
        }
    }else if(action == "none"){
        action = "inline" ;
    }


    speedOut = speed.split(".").join("");
    if(speed.toString().indexOf('.') == "-1"){
        speed = "0."+speed;
        speedOut = Math.floor(speed)+100;
    }



    $(TheElement).addClass("animated "+animate).css("animation-duration",speed+"s");

    if ($(TheElement).css('display') == 'none'){
        $(TheElement).css("display",action); setTimeout(function () { $(TheElement).removeClass("animated "+animate);},speedOut);
    }else{
        $(TheElement).css("display",action); setTimeout(function () { $(TheElement).removeClass("animated "+animate);},speedOut);

    }

    return false;
}