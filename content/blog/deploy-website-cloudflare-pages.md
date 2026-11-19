---
title: "Deploy a Hugo or Next.js website to Cloudflare Pages"
date: 2026-11-19
showDate: true
draft: false
tags: ["Cloudfare Page"]
series: ["development"]
toc: true
openLinksInNewTab: true
---

This guide explains how to deploy a **Hugo website** to Cloudflare Pages, and includes a separate section for **Next.js static sites**. In both cases, Cloudflare Pages builds and hosts the site from a GitHub or GitLab repository. Once connected, pushes to your production branch can trigger a new deployment, and other branches can get preview deployments.

Some of you might know that my [main personal homepage](https://www.chavezpoon.com) is also deployed to Cloudflare Pages. Here’s how to set up a site of your own.

## Before you start

Make sure your website builds on your computer and that its source code is pushed to GitHub or GitLab. You’ll need to be able to authorize Cloudflare to access the repository.

The build command and output directory depend on your website’s framework. The Hugo and Next.js instructions below use different settings, so follow the section for your project.

## Connect your repository

1. Sign in to the [Cloudflare dashboard](https://dash.cloudflare.com/) and open **Workers & Pages**.
2. Select **Create application**, choose **Pages**, then select **Connect to Git**.
3. Choose GitHub or GitLab and authorize Cloudflare if prompted.
4. Select the repository that contains your website, then choose **Begin setup**.

Cloudflare uses the connected repository as the source for your deployments. For a Hugo site, set the production branch to the branch you publish from, usually `main`.

## Configure the Hugo build

In **Set up builds and deployments**, use these Hugo settings:

| Setting | Value |
| --- | --- |
| Framework preset | Hugo |
| Production branch | `main` (or your production branch) |
| Build command | `hugo --minify` |
| Build output directory | `public` |

Hugo writes the generated website to `public` by default. If your `hugo.toml` or other Hugo config sets a different `publishDir`, use that directory instead.

If your project needs a particular Hugo version, add a `HUGO_VERSION` environment variable in the Pages project’s **Settings → Environment variables**. Use the same version you use to build locally. If you rely on environment variables during the build, add them to the production and preview environments as needed.

Check that your Hugo `baseURL` is set to the address where the finished site will live, such as `https://www.example.com/`. Hugo uses this value when it creates absolute links. Cloudflare’s [Hugo deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/) also explains how to use the deployment URL as the base URL when that suits your project.

When the settings are ready, select **Save and Deploy**. Open the build log if the first deployment fails; it shows whether the problem happened while installing tools, building the site, or publishing the output directory.

## Open the deployed website

After a successful deployment, Cloudflare gives the project a `*.pages.dev` address. Open it and check the homepage, links, images, and a few pages on mobile and desktop.

With Git integration enabled, pushing a change to the production branch starts a production deployment. Pushes to other branches can create preview deployments with their own URLs, so you can review changes before merging them.

## Add your own domain

To use a custom domain, open your Pages project and go to **Custom domains → Set up a domain**. Enter the domain and follow the DNS instructions shown in the dashboard.

For an apex domain such as `example.com`, the domain must be a Cloudflare zone on the account that owns the Pages project. A subdomain such as `www.example.com` can use a CNAME record pointing to the project’s `*.pages.dev` hostname. Add the domain through the Pages dashboard first; creating a DNS record alone does not finish the Pages domain setup. See Cloudflare’s [custom domains guide](https://developers.cloudflare.com/pages/configuration/custom-domains/) for details.

Once the custom domain is active, visit it over HTTPS and check that it serves the latest production deployment. From then on, publishing a site update is as simple as committing and pushing your changes to Git.

## Deploy a Next.js static site

Cloudflare Pages can host a Next.js site that exports to static HTML. This is a good fit for sites that can be generated as files at build time. It does not run a Next.js server, so features that require server rendering or a running server—such as API routes—need a different setup.

First, enable static export in your existing Next.js configuration. For an ESM config file such as `next.config.mjs`, add `output: 'export'` while keeping any settings you already have:

```js
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

Next.js writes the exported site to the `out` directory when you run `next build`. Connect your repository to Pages using the same **Workers & Pages → Create application → Pages → Connect to Git** steps above. In build settings, select **Next.js (Static HTML Export)** or enter:

| Setting | Value |
| --- | --- |
| Production branch | `main` (or your production branch) |
| Build command | `npx next build` |
| Build output directory | `out` |

Save and deploy, then check the generated `*.pages.dev` URL. Cloudflare’s [Next.js static site guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) has the current setup details. If your Next.js project needs server-side rendering or other full-stack features, Cloudflare currently recommends deploying it to Workers with [vinext](https://developers.cloudflare.com/pages/framework-guides/nextjs/) instead of using the static Pages export.
