<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# ui GlassCard 

Ultimate glassmorphism package to make awesome glasscard UI componets like info cards in websites

<!-- ABOUT THE PROJECT -->
## Preview

[![Preview Screen Shot][product-screenshot]](https://www.linkedin.com/in/carlosquesadad/)


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


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/cquesadad/ui-glasscard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/cquesadad/ui-glasscard/network/members
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: hhttps://github.com/cquesadad/ui-glasscard/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/cquesadad/ui-glasscard/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/carlosquesadad/
[product-screenshot]: https://cquesada.es/img/ui-glasscard-preview.jpg

