var init = function() {
    var boxes = null;

    function boxify(){
        boxes = BOXERJS.boxify(".box-container", ".box", {
            width : document.querySelector("#width").value,
            height : document.querySelector("#height").value,
            depth : document.querySelector("#depth").value,
            showBackfaces : document.querySelector("#show-backfaces").checked
        });
    }
    document.querySelector("#go-button").addEventListener( 'click', boxify, false);
    document.querySelector(".show-front-button").addEventListener('click', function(){
        boxes.showFront();
    }, false);
    document.querySelector(".show-back-button").addEventListener('click', function(){
        boxes.showBack();
    }, false);
    document.querySelector(".show-left-button").addEventListener('click', function(){
        boxes.showLeft();
    }, false);
    document.querySelector(".show-right-button").addEventListener('click', function(){
        boxes.showRight();
    }, false);
    document.querySelector(".show-top-button").addEventListener('click', function(){
        boxes.showTop();
    }, false);
    document.querySelector(".show-bottom-button").addEventListener('click', function(){
        boxes.showBottom();
    }, false);

    boxify();
}
window.addEventListener( 'DOMContentLoaded', init, false);
