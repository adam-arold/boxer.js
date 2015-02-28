window.addEventListener('DOMContentLoaded', function () {
    var rotators = BOXERJS.boxify(".box-container", ".box", {
        width: 300,
        height: 300,
        depth: 300,
        showBackfaces: false
    });
    document.querySelector("#signin-button").addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector("#username").innerHTML = document.querySelector("#inputUsername").value;
        rotators.showLeft();
    }, false);
    document.querySelector("#forgot-password").addEventListener('click', function(event){
        event.preventDefault();
        rotators.showBack();
    }, false);
    document.querySelector("#proceed-to-sign-in").addEventListener('click', function(event){
        event.preventDefault();
        rotators.showFront();
    }, false);
    document.querySelector("#password-reset").addEventListener('click', function(event){
        event.preventDefault();
        rotators.showRight();
    }, false);
    document.querySelector("#log-out").addEventListener('click', function(event){
        event.preventDefault();
        rotators.showTop();
    }, false);
    document.querySelector("#sign-in-from-logout").addEventListener('click', function(event){
        event.preventDefault();
        rotators.showFront();
    }, false);
    document.querySelector("#view-profile").addEventListener('click', function(event){
        event.preventDefault();
        rotators.showBottom();
    }, false);
    document.querySelector("#back").addEventListener('click', function(event){
        event.preventDefault();
        rotators.showLeft();
    }, false);
}, false);
