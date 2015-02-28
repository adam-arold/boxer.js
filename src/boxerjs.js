/**
 * boxer.js is a tiny library for creating rotating 3d boxes.
 */
var BOXERJS = (function () {
    "use strict";
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
        var container = document.querySelector(containerSelector);
        setContainerStyles(container, descriptor);
        var box = document.querySelector(boxSelector);
        setBoxStyles(box);
        setSideStyles(box);
        var sides = processSides(box, descriptor);
        sides.frontSide.setVendorPrefixedStyle("transform", "translateZ(" + (descriptor.depth / 2) + "px)");
        sides.backSide.setVendorPrefixedStyle("transform", "rotateX(-180deg) translateZ(" + (descriptor.depth / 2) + "px)");
        sides.leftSide.setVendorPrefixedStyle("transform", "rotateY(-90deg) translateZ(" + (descriptor.width / 2) + "px)");
        sides.rightSide.setVendorPrefixedStyle("transform", "rotateY(90deg) translateZ(" + (descriptor.width / 2) + "px)");
        sides.topSide.setVendorPrefixedStyle("transform", "rotateX(90deg) translateZ(" + (descriptor.height / 2) + "px)");
        sides.bottomSide.setVendorPrefixedStyle("transform", "rotateX(-90deg) translateZ(" + (descriptor.height / 2) + "px)");
        box.setVendorPrefixedStyle("transform", "translateZ( -" + (descriptor.depth / 2) + "px )");
        setBonusProperties(sides, descriptor);

        function showFront() {
            box.setVendorPrefixedStyle("transform", "translateZ(-" + (descriptor.depth / 2) + "px) rotateY(0deg)");
        }

        function showBack() {
            box.setVendorPrefixedStyle("transform", "translateZ(-" + (descriptor.depth / 2) + "px) rotateX(-180deg)");
        }

        function showLeft() {
            box.setVendorPrefixedStyle("transform", "translateZ(-" + (descriptor.width / 2) + "px) rotateY(90deg)");
        }

        function showRight() {
            box.setVendorPrefixedStyle("transform", "translateZ(-" + (descriptor.width / 2) + "px) rotateY(-90deg)");
        }

        function showTop() {
            box.setVendorPrefixedStyle("transform", "translateZ(-" + (descriptor.height / 2) + "px) rotateX(-90deg)");
        }

        function showBottom() {
            box.setVendorPrefixedStyle("transform", "translateZ(-" + (descriptor.height / 2) + "px) rotateX(90deg)");
        }
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
            side.style.left = ((descriptor.width - descriptor.depth) / 2 ) + "px";
        });

        [top, bottom].forEach(function (side) {
            side.style.width = descriptor.width + "px";
            side.style.height = descriptor.depth + "px";
            side.style.top = ((descriptor.height - descriptor.depth) / 2) + "px";
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

    function setContainerStyles(container, descriptor) {
        container.style.position = "relative";
        container.setVendorPrefixedStyle("perspective", "1000px");
        container.style.width = descriptor.width + "px";
        container.style.height = descriptor.height + "px";
    }

    function setBoxStyles(box) {
        box.style.position = "absolute";
        box.style.width = "100%";
        box.style.height = "100%";
        box.setVendorPrefixedStyle("transformStyle", "preserve-3d");
    }

    function setSideStyles(box) {
        [].forEach.call(box.children, function (child) {
            child.style.position = "absolute";
            child.style.display = "block";
        });
    }

    function setBonusProperties(sides, descriptor) {
        for (var key in sides) {
            if (sides.hasOwnProperty(key)) {
                sides[key].setVendorPrefixedStyle("backfaceVisibility", descriptor.showBackfaces ? "visible" : "hidden");
            }
        }
    }

    function checkConstraints(containerSelector, boxSelector, descriptor) {
        // TODO: multiple boxes
        // TODO: container exists
        // TODO: box is in container
        // TODO: depth is not bigger than height or width
    }

    // utils
    if (!Element.prototype.hasClassName) {
        Element.prototype.hasClassName = function (a) {
            return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
        };
    }

    if (!Element.prototype.addClassName) {
        Element.prototype.addClassName = function (a) {
            if (!this.hasClassName(a)) {
                this.className = [this.className, a].join(" ");
            }
        };
    }

    if (!Element.prototype.removeClassName) {
        Element.prototype.removeClassName = function (b) {
            if (this.hasClassName(b)) {
                var a = this.className;
                this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
            }
        };
    }

    if (!Element.prototype.toggleClassName) {
        Element.prototype.toggleClassName = function (a) {
            this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
        };
    }

    HTMLElement.prototype.setVendorPrefixedStyle = function(prop, val){
        var capProp = prop.charAt(0).toUpperCase() + prop.slice(1);
        this.style[prop] = val;
        this.style["webkit" + capProp] = val;
        this.style["moz" + capProp] = val;
        this.style["o" + capProp] = val;
        this.style["ms" + capProp] = val;
    }

    return {
        boxify: boxify
    };
}());