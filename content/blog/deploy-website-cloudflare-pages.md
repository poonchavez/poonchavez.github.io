---
title: "Deploy your website to Cloudflare Pages"
date: 2026-11-19
showDate: true
draft: false
tags: ["Cloudfare Page"]
series: ["development"]
---

Cloudflare Pages can build and host a website directly from a GitHub repository. Once the repository is connected, each push to your production branch can trigger a new build and deployment. You also get preview deployments for other branches, which are handy for checking a change before it goes live.

Some of you might know that my [main personal homepage](https://www.chavezpoon.com) is also deployed to Cloudflare Pages. Here’s how to set up a site of your own.

## Before you start

Make sure your website builds on your computer and that its source code is pushed to GitHub or GitLab. You’ll need to be able to authorize Cloudflare to access the repository.

The build command and output directory depend on your website’s framework. This guide uses Hugo. If you use another framework, check Cloudflare’s [build configuration guide](https://developers.cloudflare.com/pages/configuration/build-configuration/) for its settings.

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
