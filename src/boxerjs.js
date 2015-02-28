/**
 * boxer.js is a tiny library for creating rotating 3d boxes.
 */
var BOXERJS = (function () {

    /**
     * Boxifies the box (selected by <code>boxSelector</code>) inside the container (selected by <code>containerSelector</code>).
     * <code>boxSelector</code>s must be inside a <code>containerSeletor</code>. <em>Does not</em> work with multiple boxes.
     *
     * @param containerSelector for example <code>.container</code>
     * @param boxSelector for example <code>.box</code>
     * @param descriptor
     * @returns {showFront: showFront, showBack: showBack, showLeft: showLeft, showRight: showRight, showTop: showTop, showBottom: showBottom}
     */
    function boxify(containerSelector, boxSelector, descriptor) {

        checkConstraints(containerSelector, boxSelector, descriptor);

        // container styles
        var container = document.querySelector(containerSelector);
        setContainerStyles(container, descriptor);

        // box styles
        var box = document.querySelector(boxSelector);
        setBoxStyles(box);

        // child styles
        setSideStyles(box);

        var sides = processSides(box, descriptor);
        sides.frontSide.style.transform = "translateZ(" + (descriptor.depth / 2) + "px)";
        sides.backSide.style.transform = "rotateX(-180deg) translateZ(" + (descriptor.depth / 2) + "px)";
        sides.leftSide.style.transform = "rotateY(-90deg) translateZ(" + (descriptor.width / 2) + "px)";
        sides.rightSide.style.transform = "rotateY(90deg) translateZ(" + (descriptor.width / 2) + "px)";
        sides.topSide.style.transform = "rotateX(90deg) translateZ(" + (descriptor.height / 2) + "px)";
        sides.bottomSide.style.transform = "rotateX(-90deg) translateZ(" + (descriptor.height / 2) + "px)";

        box.style.transform = "translateZ( -" + (descriptor.depth / 2) + "px )"

        function showFront() {
            box.style.transform = "translateZ(-" + (descriptor.depth / 2) + "px) rotateY(0deg)";
        }

        function showBack() {
            box.style.transform = "translateZ(-" + (descriptor.depth / 2) + "px) rotateX(-180deg)";
        }

        function showLeft() {
            box.style.transform = "translateZ(-" + (descriptor.width / 2) + "px) rotateY(90deg)";
        }

        function showRight() {
            box.style.transform = "translateZ(-" + (descriptor.width / 2) + "px) rotateY(-90deg)";
        }

        function showTop() {
            box.style.transform = "translateZ(-" + (descriptor.height / 2) + "px) rotateX(-90deg)";
        }

        function showBottom() {
            box.style.transform = "translateZ(-" + (descriptor.height / 2) + "px) rotateX(90deg)";
        }

        setBonusProperties(box, sides, descriptor);

        return {
            showFront: showFront,
            showBack: showBack,
            showLeft: showLeft,
            showRight: showRight,
            showTop: showTop,
            showBottom: showBottom
        };
    }

    function processSides(box, descriptor) {
        // sides
        var front = box.getElementsByClassName("boxerjs-front")[0];
        var back = box.getElementsByClassName("boxerjs-back")[0];
        var left = box.getElementsByClassName("boxerjs-left")[0];
        var right = box.getElementsByClassName("boxerjs-right")[0];
        var top = box.getElementsByClassName("boxerjs-top")[0];
        var bottom = box.getElementsByClassName("boxerjs-bottom")[0];

        [front, back].forEach(function (side) {
            side.style.width = descriptor.width + "px";
            side.style.height = descriptor.height + "px";
        });

        [left, right].forEach(function (side) {
            side.style.width = descriptor.depth + "px";
            side.style.height = descriptor.height + "px";
            side.style.left = calculateLeft(descriptor) + "px";
        });

        [top, bottom].forEach(function (side) {
            side.style.width = descriptor.width + "px";
            side.style.height = descriptor.depth + "px";
            side.style.top = calculateTop(descriptor) + "px";
        });

        return {
            frontSide: front,
            backSide: back,
            leftSide: left,
            rightSide: right,
            topSide: top,
            bottomSide: bottom
        }
    }

    function calculateLeft(descriptor) {
        return ((descriptor.width - descriptor.depth) / 2 );
    }

    function calculateTop(descriptor) {
        return ((descriptor.height - descriptor.depth) / 2);
    }

    function setContainerStyles(container, descriptor) {
        container.style.position = "relative";
        container.style.perspective = "1000px";
        container.style.width = descriptor.width + "px";
        container.style.height = descriptor.height + "px";
    }

    function setBoxStyles(box) {
        box.style.position = "absolute";
        box.style.width = "100%";
        box.style.height = "100%";
        box.style.transformStyle = "preserve-3d";
    }

    function setSideStyles(box) {
        [].forEach.call(box.children, function (child) {
            child.style.position = "absolute";
            child.style.display = "block";
        });
    }

    function setBonusProperties(box, sides, descriptor) {
        for (var key in sides) {
            if (sides.hasOwnProperty(key)) {
                sides[key].style.backfaceVisibility = descriptor.showBackfaces ? "visible" : "hidden";
            }
        }
    }

    function checkConstraints(containerSelector, boxSelector, descriptor) {
        // TODO: multiple boxes
        // TODO: container exists
        // TODO: box is in container
        // TODO: depth is not bigger than height or width
    }

    var api = {
        boxify: boxify
    }

    return api;
}());