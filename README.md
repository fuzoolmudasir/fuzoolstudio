# FUZOOL STUDIO 001

An image texture playground by Mudasir Basit.

## Run

Use a static web server, or use Node.js:

```sh
npm start
```

Then visit http://127.0.0.1:8080. No installation or build step is required.

## Files

- `index.html`: interface and footer
- `style.css`: responsive layout and monochrome design
- `app.js`: image decoding, live effects, custom colors and PNG export
- `fonts/`: bundled JetBrains Mono webfonts and its OFL license
- `favicon.svg`: studio mark
- `sample.png`: included butterfly demo image
- `sky-wallpaper.png`: original sky asset, retained for future use
- `serve.cjs`: optional local server

## GitHub

Upload the extracted files to the root of your repository. The website is static and can be published directly from the repository root with GitHub Pages or another static host. Keep `index.html`, `style.css`, `app.js`, `favicon.svg` and `sample.png` together.

## Using the studio

Open or drop an image. Select Cloud, Dots, Grain or Lines. Use Tune for detail, contrast, tone, contour and paper grain. Use Color for presets, native color pickers or hexadecimal colors. Compare with the original, invert tones, or reset at any time.

SAVE 1× exports the displayed pixel dimensions; SAVE 2× renders at exactly twice the width and height. Large inputs are resized to at most 2,400 pixels on the longest edge and 6 million pixels before editing, to keep exports reliable. Supported image formats depend on the browser; PNG, JPG and WebP work in modern browsers. Animated images use a still frame.

The interface uses SF Pro Display through installed/system fonts, with a system sans-serif fallback when unavailable. JetBrains Mono is bundled locally for controls and technical details.

All editing happens on your device. No uploads, external fonts, API keys or runtime dependencies are required. The source does not contain Sites account identifiers or credentials.

Created with love by Mudasir Basit.


