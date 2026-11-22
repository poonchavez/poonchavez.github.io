# Chavez Poon's Personal Portfolio Website

A Markdown-powered portfolio website built with Hugo Extended and the Introduction theme.

## Run locally

Requirements: Hugo Extended 0.165.0 or newer, Node.js 22.12 or newer, and npm.

```sh
cd themes/introduction && npm ci --ignore-scripts && cd ../..
PATH="$PWD/themes/introduction/node_modules/.bin:$PATH" hugo server --buildDrafts
```

Open http://localhost:1313.

## Build

```sh
PATH="$PWD/themes/introduction/node_modules/.bin:$PATH" hugo --minify
```

Hugo writes the static site to `public/`.

## Content

- `content/home/` — homepage introduction and sections
- `content/about/` — about page
- `content/projects/` — portfolio projects
- `content/blog/` — writing

Introduction is included as a Git submodule from [victoriadrake/hugo-theme-introduction](https://github.com/victoriadrake/hugo-theme-introduction) and is licensed under Apache-2.0.
