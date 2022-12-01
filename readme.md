# How to use and recommend settings, vscode extensions, plugins for tailwind css

## Initial Setup based on tailwind CLI.

1. Run `npm install -D tailwindcss` and `npx tailwindcss init` to add and initialise `tailwind.config.js` file.
2. Add path to all template file we use in our folder in `tailwind.config.js` as `content: ["./src/**/*.{html,js}"],`.
3. Add tailwind directives, `@tailwind base;`, `@tailwind components`, `@tailwind utilities` to a new `input.css` file.
4. Now start the tailwind build process, `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch` in watch mode or `npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify` in build mode.
5. You can now start adding the classes to the HTML markup and Your tailwind is configured.


## VS Code recommneded extensions for tailwind css.
1. To use the `at rules` of tailwind with ease and the support of autocomplete on typing you can install [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension.
2. To use the PostCSS support, you can add [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) extension.


## Recommended Plugins for Tailwind CSS.
1. [Automatic Class sorting with prettier](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) to sort the classes based on the [recommended order](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)