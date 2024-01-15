<div align="center">

# Marquee <br> 🌬️

> A beautiful marquee components for React.

![NPM Version](https://img.shields.io/npm/v/%40devnomic%2Fmarquee?logo=npm)

</div>

## Installation

```bash
npm install @devnomic/marquee
```

## Import

```ts
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
```

or you can skip npm install, and just copy and paste the source code into your component ala shadcn ui (don't forget to also copy tailwind config if you do this).

## Usage

This library has very few props and self explanatory, you can get it running in no time. See web example for more details.

```ts
<Marquee
  fade={true}
  direction="left"
  reverse={false}
  pauseOnHover={false}
  className="" // pass class to change gap or speed
  innerClassName="" // pass class to change gap or speed
>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
  <div>Content 4</div>
</Marquee>
```

This lib made specifically for tailwind users, however you can use normal css class too, to override the gap by passing class.

## License

Released under [MIT](/LICENSE) by [@devnomic](https://github.com/devnomic).
