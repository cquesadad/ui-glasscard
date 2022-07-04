# UI Glass Card 

Ultimate glassmorphism package to make awesome glasscard UI componets like info cards in websites

# Installation 

1. In terminal install this package with the next line:

```
npm i ui-glasscard --save
```
2. Then import the package function into your main javascript file.

...
import { uiglasscard } from 'uiglasscard';
...

3. And finally choose the options to manage the look and feel of the card:
...
uiglasscard({
    glass_type: 'soft',
    border: true 
})
...

# Options

UI-GLASSCARD supports 2 options at the beguining, both are optionals:

* *glass_type* - _hard / soft_ (Default to soft)
* *border* - _boolean_ (Default to false)

# License
random-msg is released under the [MIT License](https://opensource.org/licenses/MIT).

