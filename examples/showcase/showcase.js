var init = function () {
    var boxes = null;

    function boxify() {
        boxes = BOXERJS.boxify({
            containerSelector: ".box-container",
            boxSelector: ".box",
            width: document.querySelector("#width").value,
            height: document.querySelector("#height").value,
            depth: document.querySelector("#depth").value,
            showBackfaces: document.querySelector("#show-backfaces").checked
        });
    }

    document.querySelector("#go-button").addEventListener('click', boxify, false);
    document.querySelector(".show-front-button").addEventListener('click', function () {
        boxes.showFront();
    }, false);
    document.querySelector(".show-back-button").addEventListener('click', function () {
        boxes.showBack();
    }, false);
    document.querySelector(".show-left-button").addEventListener('click', function () {
        boxes.showLeft();
    }, false);
    document.querySelector(".show-right-button").addEventListener('click', function () {
        boxes.showRight();
    }, false);
    document.querySelector(".show-top-button").addEventListener('click', function () {
        boxes.showTop();
    }, false);
    document.querySelector(".show-bottom-button").addEventListener('click', function () {
        boxes.showBottom();
    }, false);

    document.querySelector("#rotateXButton").addEventListener('click', function (e) {
        e.preventDefault();
        boxes.rotateX(document.querySelector("#rotateX").value);
    }, false);
    document.querySelector("#rotateYButton").addEventListener('click', function (e) {
        e.preventDefault();
        boxes.rotateY(document.querySelector("#rotateY").value);
    }, false);
    document.querySelector("#rotateZButton").addEventListener('click', function (e) {
        e.preventDefault();
        boxes.rotateZ(document.querySelector("#rotateZ").value);
    }, false);

    boxify();
}
window.addEventListener('DOMContentLoaded', init, false);
