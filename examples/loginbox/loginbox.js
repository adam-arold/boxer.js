window.addEventListener('DOMContentLoaded', function () {
    var boxes = BOXERJS.boxify({
        containerSelector: ".box-container",
        boxSelector: ".box",
        width: 300,
        height: 300,
        depth: 300,
        showBackfaces: false
    });
    document.querySelector("#signin-button").addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector("#username").innerHTML = document.querySelector("#inputUsername").value;
        boxes.showLeft();
    }, false);
    document.querySelector("#forgot-password").addEventListener('click', function(event){
        event.preventDefault();
        boxes.showBack();
    }, false);
    document.querySelector("#proceed-to-sign-in").addEventListener('click', function(event){
        event.preventDefault();
        boxes.showFront();
    }, false);
    document.querySelector("#password-reset").addEventListener('click', function(event){
        event.preventDefault();
        boxes.showRight();
    }, false);
    document.querySelector("#log-out").addEventListener('click', function(event){
        event.preventDefault();
        boxes.showTop();
    }, false);
    document.querySelector("#sign-in-from-logout").addEventListener('click', function(event){
        event.preventDefault();
        boxes.showFront();
    }, false);
    document.querySelector("#view-profile").addEventListener('click', function(event){
        event.preventDefault();
        boxes.showBottom();
    }, false);
    document.querySelector("#back").addEventListener('click', function(event){
        event.preventDefault();
        boxes.showLeft();
    }, false);
}, false);
