# Boxer.js
Boxer.js is a tiny library for creating 3d rotating boxes. Boxer.js uses CSS3 to do its job
and it has **no** dependencies.

*I'm open to suggestions, feel free to comment or to send me a message.
Pull reqeusts are also welcome!*

## Usage
 - Download [boxerjs.js](https://github.com/adam-arold/boxer.js/blob/master/src/boxerjs.js)
 - Load it in your html file
 - Boxify your boxes:


    ```javascript
    var boxes = BOXERJS.boxify({
        containerSelector: ".box-container",
        boxSelector: ".box",
        width: document.querySelector("#width").value,
        height: document.querySelector("#height").value,
        depth: document.querySelector("#depth").value,
        showBackfaces: document.querySelector("#show-backfaces").checked
    });
    ```


### Important:
 * Both selectors must return exactly **one** result.
 * Your box must be **inside** the container.
 * Your box **must contain** six elements for each side respectively using the appropriate classes:
    * `boxerjs-front`
    * `boxerjs-back`
    * `boxerjs-right`
    * `boxerjs-left`
    * `boxerjs-top`
    * `boxerjs-bottom`

HTML example:

```HTML
<section class="box-container">
    <div class="box show-front">
    <figure class="boxerjs-front">front</figure>
    <figure class="boxerjs-back">back</figure>
    <figure class="boxerjs-right">right</figure>
    <figure class="boxerjs-left">left</figure>
    <figure class="boxerjs-top">top</figure>
    <figure class="boxerjs-bottom">bottom</figure>
    </div>
</section>
```

The `boxify` function returns an object containing functions to operate on your box:

```javascript
{
    showFront,
    showBack,
    showLeft,
    showRight,
    showTop,
    showBottom,
    rotateX,
    rotateY,
    rotateZ,
    resetRotations
}
```

Use them to flip your box to the appropriate side or rotate it.

## Good to know
 * There is an optional `boolean` parameter `showBackfaces` which you can use to turn backface visibility on/off.
 * The `depth` of a box must be smaller than its `width` and its `height` otherwise the size of the box container will vary thus messing up your page.
 * The `show*` methods work differently compared to the `rotate*` methods: the `show*` methods will make your box stay within the bounds of the original container while the `rotate*` methods will rotate your box around its center. Check the examples to see how it works.
 * You can have a box rotated around all its axes with calls to different `rotate*` methods. This means that the rotation state is persistent.
 * You can reset the rotation state of a box by calling any of the `show*` methods
 * You can have multiple *boxified* boxes on the same page but you have to supply unique identifiers for each of them.
 
## Examples:

Simple example with resizable box: [link](https://cdn.rawgit.com/adam-arold/boxer.js/master/examples/showcase/showcase.html)

More real life example with a login box: [link](https://cdn.rawgit.com/adam-arold/boxer.js/master/examples/loginbox/loginbox.html)

## Roadmap:
 * Support for container/box selectors returning multiple elements

## License
Boxer.js is made available under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

## Credits
Boxer.js is created and maintained by Adam Arold

