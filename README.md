# Frontend Mentor - Hotel booking confirmation page solution

This is a solution to the [Hotel booking confirmation page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/hotel-booking-confirmation-page). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close the navigation menu on smaller screens
- Copy the Wi-Fi password to their clipboard using the copy button
- Save the booking receipt as an image to their device
- Add the booking dates directly to their Google Calendar

The project also goes beyond the base challenge: the sidebar navigation links to fully built-out pages for **The House**, **Around Town**, **Breakfast**, and **Messages**, each following the same design language as the confirmation page.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [github.com/Eduardo-Vinicius-dos-SR/FrontendMentor-Hotel-booking-confirmation-page](https://github.com/Eduardo-Vinicius-dos-SR/FrontendMentor-Hotel-booking-confirmation-page)
- Live Site URL: [frontend-mentor-hotel-booking-confi-six.vercel.app](https://frontend-mentor-hotel-booking-confi-six.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- [React](https://react.dev/) - JS library
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first styling, configured via `@theme` and CSS custom properties
- [html-to-image](https://github.com/bubkoo/html-to-image) - Exporting the receipt card as a PNG
- CSS Grid with `auto-fit`/`minmax` for fully fluid, breakpoint-free card grids
- Mobile-first, responsive workflow (`lg:` / `2xl:` breakpoints)
- Deployed on [Vercel](https://vercel.com/)

### What I learned

**Variable fonts need every axis declared, not just weight.** [Fraunces](https://fonts.google.com/specimen/Fraunces) ships with `opsz` (optical size), `SOFT`, and `WONK` axes on top of `wght`. Declaring only `font-weight` in `@font-face` isn't enough — the browser falls back to whatever default the font file ships with for the other axes, which can look noticeably different from the design at large sizes. The fix was making sure the variable font file actually included every axis, then setting it explicitly:

```css
.font-fraunces {
  font-variation-settings: "opsz" 72;
  font-optical-sizing: auto;
}
```

**`width: 100%` and `margin-left` don't mix well.** Pushing the main content past a fixed sidebar with `margin-left` caused a persistent horizontal scrollbar, because `margin` isn't subtracted from `width: 100%` — only `padding`/`border` are, under `box-sizing: border-box`. Swapping to `padding-left` (or `calc()`) fixed it instantly:

```css
/* Before: overflows by exactly the sidebar's width */
.main { width: 100%; margin-left: 280px; }

/* After: padding is included in the box model */
.main { width: 100%; padding-left: calc(280px + 3rem); }
```

**Flex items don't shrink or wrap the way you'd expect.** Flex items have `min-width: auto` by default, meaning they refuse to shrink below their content's natural size. This showed up twice: once when a card's `max-w-*` was silently ignored because its flex parent had no defined width, and again when wrapping `<span>`s in `flex flex-wrap` stopped them from breaking onto a new line — the container just kept growing instead. Removing `flex` from purely textual content (which already wraps naturally as inline text) was the simpler fix in that second case.

**CSS Grid with `auto-fit`/`minmax` beats hand-rolled breakpoints for card layouts.**

```css
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
```

This lets the browser decide how many columns fit at any viewport width — no `sm:grid-cols-2 lg:grid-cols-3` guesswork, and it adapts gracefully to viewport sizes that weren't explicitly designed for.

**The Web Share API is a better fit than raw `.ics` downloads for "Add to calendar" on mobile**, but a signed `.ics` file still tripped up Outlook desktop until unescaped commas and CRLF line endings were fixed per RFC 5545. In the end, a direct Google Calendar prefill URL turned out simpler and more reliable across both desktop and mobile than juggling file generation and MIME parsing:

```ts
const params = new URLSearchParams({
  action: "TEMPLATE",
  text: title,
  dates: `${formatDate(start)}/${formatDate(end)}`,
  details: description,
  location,
})
```

### Continued development

- Wire up the `messages` page to a real backend instead of static mock data
- Add unit tests around the calendar URL builder and the receipt image export flow
- Consider `prefers-reduced-motion` handling for the hover-to-fan card interaction
- Look into an offline-friendly fallback for browsers where neither the Web Share API nor `<a download>` is available

### AI Collaboration

I used **Claude** throughout this project as a pair-programming and debugging partner, primarily inside a chat interface with direct access to my component files.

- **How I used it**: iterative debugging (diagnosing why the Fraunces font looked wrong, tracking down a horizontal-scroll bug down to a single `margin-left`, explaining why flex items wouldn't wrap), building out new components from a design screenshot (Welcome card, Receipt card, Guest info cards), implementing browser-native features I hadn't used before (Web Share API, `html-to-image`, Google Calendar URLs), and reviewing/refactoring existing code for dead code, accessibility gaps, and duplicated logic.
- **What worked well**: pasting real component code and screenshots together got far more accurate fixes than describing the problem in words — most of the trickiest bugs (the font optical-size axis, the margin/width overflow, the flex `min-width: auto` quirk) needed to be reasoned about from the actual CSS, not a general description. It was also useful as a sounding board for commit message conventions and for spotting unused code across many files at once.
- **What I'd do differently**: earlier on, I let a few CSS properties get duplicated between `@theme` and `:root` in `index.css` before catching it — worth doing a cleanup pass sooner rather than accumulating small redundancies across a longer session.

## Author

- Frontend Mentor - [@Eduardo-Vinicius-dos-SR](https://www.frontendmentor.io/profile/Eduardo-Vinicius-dos-SR)
