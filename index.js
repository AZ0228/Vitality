
function nav(){
    image();
    var logo = id("logo");
    const burger = id("burger");
    if(window.innerWidth>900){
        if(burger.checked){
            uncheck();
        }
    }
    if(window.innerWidth <= 1100 && window.innerWidth>=900){
        logo.textContent = "V";
    } else {
        logo.textContent = "VITALITY";
    }
}

function uncheck(){
    const sidemenu = id('side-menu');
    const burger = id("burger");
    const blur = qs('.blur');
    burger.checked = false;
    sidemenu.style.transform="translateX(-500px)";
    setTimeout(() => {   
        blur.style.display = "none";
    }, 500);
    blur.classList.remove("blur1");

}

function image(){
    const img = id("heroimage");
    if(window.innerWidth <= 950){
        img.src = "images/heroimage.jpg";
    } else {
        img.src = "images/My project.png"
    }
}

function check(){
    const burger = id("burger");
    const sidemenu = id('side-menu');
    const blur = qs('.blur');
    burger.addEventListener("change",function(){
        if(this.checked){
            sidemenu.style.transform="translateX(0)";
            blur.style.display = "block";
            setTimeout(() => {
                blur.classList.add("blur1");
            }, 100);

        } else {
            sidemenu.style.transform="translateX(-500px)";
            setTimeout(() => {   
                blur.style.display = "none";
            }, 500);
            blur.classList.remove("blur1");

        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    nav();
    image();
    check();
    window.addEventListener("resize", nav);
});

function qs(name){
    return document.querySelector(name);
}

function id(name){
    return document.getElementById(name);
}

