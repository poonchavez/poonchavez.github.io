---
title: "Deploying a website with Cloudflare Pages"
description: "A practical guide to publishing a website from GitHub with Cloudflare Pages, including build settings, previews, and a custom domain."
date: "2026-11-24"
---

Want to get your website online without managing a server? Cloudflare Pages can build and publish it straight from GitHub or GitLab. Connect your repository once, and new commits can trigger deployments automatically. Pages can also make preview links for branches and pull requests, so you can check changes before they go live.

My [main personal website](https://www.chavezpoon.com) is also deployed to Cloudflare Pages. In this guide, I’ll walk you through the Git-based setup. I use Hugo for the examples, but you can follow the same process with other static site generators by entering the right build command and output folder.

## Before you start

Before we begin, make sure you have:

- A website that builds locally.
- A GitHub or GitLab repository containing the site.
- A Cloudflare account.

Commit your latest changes and push them to your repository. Already have the project on GitHub or GitLab? Great—you’re ready to connect it.

## Connect the repository

In the Cloudflare dashboard, head to **Workers & Pages**, choose **Create application**, then select **Pages** and **Import an existing Git repository**. If Cloudflare asks, authorize it to access your GitHub or GitLab account. Then pick the repository for your website.

Next, choose the branch you want to publish as your live site. It’s often called `main`. When you push changes to this branch, Cloudflare will update the production site. Other branches can get their own preview links.

## Set the build configuration

Cloudflare needs two details: how to build your site, and where the finished files end up. For a typical Hugo project, enter:

| Setting | Hugo value |
| --- | --- |
| Build command | `hugo` |
| Build output directory | `public` |

Using a different site generator? Use its build command and output folder instead. For example, Vite projects commonly build with `npm run build` and put the finished site in `dist`. If you’re not sure what to enter, check your framework’s deployment guide.

If your Hugo site needs a specific base URL, you can use this build command:

```sh
hugo -b "$CF_PAGES_URL"
```

Want to pin your site to a particular Hugo release? Set `HUGO_VERSION` in your Pages project’s environment variables. If both your live site and previews need an environment variable, remember to add it to both environments.

Now select **Save and Deploy** and let Pages do its thing: it will install dependencies, build your site, and publish the result. When it’s ready, open the `pages.dev` link and have a look around. Check that the pages, images, and links are all working as expected.

## Publish future changes

That’s it for the initial setup. From now on, pushing to your production branch will kick off a new build. Other branches and pull requests get preview links, giving you a chance to try out changes before merging them. If a build fails, open it in the Cloudflare dashboard and check the log. Start by looking at the build command and output folder, then check for missing environment variables or dependency installation issues.

## Add a custom domain

Ready to use your own domain? In your Pages project, open **Custom domains**, select **Set up a domain**, and enter your domain. Cloudflare will show you the DNS steps to finish connecting it.

For a root domain like `example.com`, first make sure it’s set up in Cloudflare and its nameservers point to Cloudflare. For a subdomain like `www.example.com`, follow the DNS instructions for that hostname. Be sure to add the domain through the Pages **Custom domains** screen; adding a CNAME record on its own may not connect the domain to your Pages project.

## A note about Next.js

One quick heads-up if you’re using Next.js: Pages is for static site output, so your Next.js project needs to use static export. That means features that need a server at request time won’t be available. If your app uses server-side rendering, route handlers, or server actions, check Cloudflare’s current [Next.js on Workers guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/) instead. Cloudflare’s framework support can change, so it’s a good idea to check the latest guide before you start.

## Wrap up

For a static website, the main steps are connecting your repository and entering the right build command and output folder. After that, your Git pushes take care of publishing updates, and preview links make it easy to check your work along the way. Have fun putting your site out into the world!

For current framework-specific settings, see Cloudflare’s [Pages framework guides](https://developers.cloudflare.com/pages/framework-guides/), [Git integration guide](https://developers.cloudflare.com/pages/configuration/git-integration/), and [custom domains guide](https://developers.cloudflare.com/pages/configuration/custom-domains/).
