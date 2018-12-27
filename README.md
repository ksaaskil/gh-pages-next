# [GitHub pages with with Next.js](https://ksaaskil.github.io/gh-pages-next/)

Created using [this gh-pages example](https://github.com/zeit/next.js/tree/master/examples/gh-pages).

## Build and deploy `out/` to `gh-pages` branch

```bash
yarn run deploy
```

## The idea behind the example

This example shows the most basic idea behind Next. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`. Using `next/link` you can add hyperlinks between them with universal routing capabilities.
