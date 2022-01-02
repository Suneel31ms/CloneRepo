var navbar=document.getElementById("nav");
window.onscroll=function(){
    if(window.pageYOffset>navbar.offsetTop){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}

// ---------toggle bar-------
var menu=document.getElementById("nlinks");
function showmenu(){
    menu.style.right="0";
}
function hidemenu(){
    menu.style.right="-200px"
}
