# galaxy-explorer

Browse famous galaxies as cards and filter them by name or type. A small React and TypeScript app built with Vite.

`react` · `typescript` · `vite` · `astronomy`

## Run it

```sh
yarn install
yarn dev       # local dev server
yarn build     # type-check, then build to dist/
yarn preview   # serve the built app
```

## Layout

- `index.html` is the Vite entry page and loads `src/index.tsx`.
- `src/App.tsx` holds the galaxy list, the search box and the type filters.
- `src/components/GalaxyCard.tsx` renders one galaxy.
