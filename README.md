# ui GlassCard 

Ultimate glassmorphism package to make awesome glasscard UI componets like info cards in websites

# Installation 

1. In terminal install this package with the next line:

```
npm i ui-glasscard --save
```
2. Then import the package function into your main javascript file.

```
import { uiglasscard } from 'uiglasscard';
```

3. And finally choose the options to manage the look and feel of the card:

```
uiglasscard({
    glass_type: 'hard',
    glass_color: 'dark',
    border: true,
    border_radius: 2
})
```

# Options

UI-GLASSCARD supports 2 options at the beguining, both are optionals:

* *glass_type* - _hard / soft_ (Default to soft)
* *glass_color* - _dark / light_ (Default to light)
* *border* - _boolean_ (Default to false)
* *border_radius* - _1 / 2 / 3_ (Default to 1)

# Contributing
If someone wants to add new features in UI-GRASSCARD or improve something, I invite you to collaborate directly in this repository: [ui-glasscard](https://github.com/cquesadad/ui-glasscard)

# License
random-msg is released under the [MIT License](https://opensource.org/licenses/MIT).

