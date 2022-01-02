///Switch case.....
function myfun(developer) {
    var whathappen;
    switch (developer) {

        case "html":
            whathappen = "Hey... I'm a front end developer";
            break;
        case "css":
            whathappen = "Hi...I'm a Styling developer";
            break
        case "php":
            whathappen = "Hello... I'm a backend developer";
            break;
        case "mysql":
            whathappen = "hey..I'm a Database developer";
            break;
        default:
            whathappen = "something went wrong";

    }
    return whathappen;

}
console.log(myfun("css"));

// switch case
var pr=74;
    switch(true){
        case (pr>80 && pr<100):
            console.log("Merit");
            break;
            case (pr>60 && pr<80):
            console.log("Ist Division");
            break;
            case (pr>40 && pr<60):
            console.log("IInd Division");
            break;
            case (pr>33 && pr<40):
            console.log("IIIrd Division");
            break;
            case (pr>0 && pr<33):
            console.log("Fail");
            break;
            default:
                console.log("Something went wrong");
                
    }
    