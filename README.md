[![NPM version](https://img.shields.io/badge/perspective--movement-v0.2.0-blue.svg)](https://www.npmjs.com/package/perspective-movement)

#  :exclamation::exclamation::exclamation:T​his is README for pm :exclamation::exclamation::exclamation:

### 🌟 Codepen Examples

- [Github 404 page](https://codepen.io/drafting-dreams/pen/zegNqg)

---

## ⚙ Installation

### Basic

Add script right before closing `</body>` tag, and initialize PM:

```html
<script src="https://unpkg.com/perspective-movement@0.2.0/dist/pm.js"></script>
<script>
 	PM.init()
</script>
```



### Using package manager

Install `pm` package:

- npm i --save perspective-movement

Import script and initialize PM(Below is an example in .vue file):

```vue
<script>
  	import { init, clear } from 'perspective-movement'
    export default {
        name: 'HelloPM',
        mounted() {
            init()
        }
        destroyed() {
            clear()
        }
    }
</script>
```

---

## 🤔 How to use it?

### 1. Initialize PM:

```javascript
init()

// You can also pass an optional settings
init({
    // Transform degree for global settings:
    pmRotatex: 10,
    pmRotatey: 10,
    pmTranslatex: 10,
    pmTranslatey: 10
})
```

### 2.  Activate an element by setting data-pm attribute:

```html
<div data-pm></div>
```

But for now, the element doesn't act any difference. That's because you haven't activate any transform function yet.

#### Using the default settings

 You can simply add some attribute as below to use the default settings in the `init` method above.

```html
<div data-pm
     data-pm-rotatex
     data-pm-rotatey
     data-pm-translatex
     data-pm-translatey
> 
</div>
```

#### Override default settings

You can override the attribute by giving it a different value.

```html

<div data-pm
     data-pm-translatex="15"
> 
</div>
```

---



### ❔Questions

This is my first project published on npm and this project is still not perfect. I plan to improve it to make the performance better.

If you found a bug, don't hesitate to create new issues. Help me make this project better.❤️

