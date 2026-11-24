# poonchavez.github.io

## Editing content

Page titles, descriptions, and introductory copy live in `content/pages/` as Markdown files. Edit the matching file to change a page’s text. Writing articles live in `posts/`. Page layouts and interactive components remain in `app/` and `components/`.

The browser-based editor is at `/admin/`. It manages Markdown pages, projects, and writing. To enable sign-in, create a Decap Turbo site for the `poonchavez/poonchavez.github.io` repository, set its admin URL to `https://www.chavezpoon.com/admin/`, and replace `YOUR_DECAP_TURBO_SITE_ID` in `public/admin/config.yml` with the site ID shown by Turbo. Saving and publishing CMS changes updates GitHub; the deployment workflow then builds the site.
