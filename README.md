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
    BOXERJS.boxify(".box-container", ".box", {
        width : 300,
        height : 200,
        depth : 100
    });
```

Use the first `containerSelector` parameter to supply the selector for your box's container tag.
Use the second `boxSelector` parameter to supply the selector for your box tag.

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

The `boxify` function returns an object containing callbacks:

```javascript
    {
        showFront,
        showBack,
        showLeft,
        showRight,
        showTop,
        showBottom
    }
```

Use them to flip your box to the appropriate side.

## Good to know
 * There is an optional `boolean` parameter `showBackfaces` which you can use to turn backface visibility on/off.
 * The `depth` of a box must be smaller than its `width` and its `height` otherwise the size of the box container will vary thus messing up your page.

## Examples:

Simple example with resizable box: [link](https://cdn.rawgit.com/adam-arold/boxer.js/master/examples/showcase/showcase.html)

More real life example with a login box: [link](https://cdn.rawgit.com/adam-arold/boxer.js/master/examples/loginbox/loginbox.html)

## Roadmap:
 * Support for container/box selectors returning multiple elements

## License
Boxer.js is made available under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

## Credits
Boxer.js is created and maintained by Adam Arold

