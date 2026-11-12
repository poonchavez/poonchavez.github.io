# Chavez Poon — Portfolio

A Markdown-powered portfolio built with Hugo Extended and the Hugo Narrow theme.

## Run locally

Requirements: Hugo Extended 0.165.0 or newer and Go (for Hugo Modules).

```sh
hugo mod get
hugo server --buildDrafts
```

Open http://localhost:1313.

## Build

```sh
hugo --minify
```

Hugo writes the static site to `public/`.

## Content

- `content/_index.md` — homepage introduction
- `content/pages/` — standalone pages
- `content/projects/` — portfolio projects
- `content/posts/` — writing

Hugo Narrow is pinned in `go.mod`; its upstream project is archived. The theme is distributed under AGPL-3.0. Review the theme license when publishing or redistributing this site.
