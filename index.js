
function nav(){
    var logo = id("logo");
    if(window.innerWidth <= 1100 && window.innerWidth>=900){
        logo.textContent = "V";
    } else {
        logo.textContent = "VITALITY";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    nav();
    window.addEventListener("resize", nav);
});

function id(name){
    return document.getElementById(name);
}

