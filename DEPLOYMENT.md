# Deployment Setup Guide

This portfolio automatically deploys to both GitHub Pages and Cloudflare Pages when you push to the `main` branch.

## GitHub Pages (Automatic)

GitHub Pages deployment is configured out-of-the-box. The workflow (`.github/workflows/deploy.yml`) will automatically run when you push to `main`.

**Requirements:**
- GitHub Pages must be enabled in your repository settings
- Set the source to "GitHub Actions"

**Live URL:** `https://<username>.github.io/portfolio/` or your custom domain

---

## Cloudflare Pages (Using Wrangler)

Cloudflare Pages deployment uses Wrangler CLI for a simpler, more streamlined deployment process.

### Step 1: Get Your Cloudflare API Token

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **My Profile** > **API Tokens** (https://dash.cloudflare.com/profile/api-tokens)
3. Click **Create Token**
4. Use the **"Edit Cloudflare Workers"** template or create a custom token with:
   - Permissions: `Account - Cloudflare Pages - Edit`
   - Account Resources: `Include - Your Account`
5. Click **Continue to Summary** > **Create Token**
6. Copy the token (you won't be able to see it again!)

### Step 2: Add Secret to GitHub

1. Go to your GitHub repository
2. Click **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Add this secret:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: (paste your API token)

That's it! The workflow uses Wrangler to automatically deploy to Cloudflare Pages.

### Step 3: Verify Wrangler Configuration

The `wrangler.toml` file in the repository root configures Wrangler to:
- Use the project name "portfolio"
- Deploy the `./dist` directory as static assets
- Use Node.js compatibility

No additional configuration is needed!
- Or manually create a Pages project named `portfolio` in Cloudflare Dashboard

### Step 4: Test the Deployment

1. Push a commit to the `main` branch
2. Go to **Actions** tab in your GitHub repository
3. Watch both workflows run:
   - "Deploy static content to Pages" (GitHub Pages)
   - "Deploy to Cloudflare Pages" (Cloudflare Pages with Wrangler)

---

## Workflow Files

- **`.github/workflows/deploy.yml`** - GitHub Pages deployment
- **`.github/workflows/cloudflare-pages.yml`** - Cloudflare Pages deployment using Wrangler

Both workflows:
- Run on push to `main` branch
- Can be manually triggered from the Actions tab
- Build the project using `npm ci` and `npm run build`
- Deploy the `dist` directory

### Cloudflare Workflow Details
The Cloudflare workflow uses the official `cloudflare/wrangler-action@v3` to:
- Authenticate using your `CLOUDFLARE_API_TOKEN`
- Run `wrangler pages deploy dist --project-name=portfolio`
- Deploy to your Cloudflare Pages project

---

## Custom Domain Setup

### For GitHub Pages:
1. Add your domain to the `CNAME` file in the repository root
2. Configure DNS with a CNAME record pointing to `<username>.github.io`

### For Cloudflare Pages:
1. In Cloudflare Dashboard, go to your Pages project
2. Click **Custom Domains**
3. Add your domain (e.g., `h07.me`)
4. Cloudflare will handle DNS automatically if your domain is on Cloudflare

---

## Troubleshooting

### Cloudflare deployment fails with authentication error
- Double-check that `CLOUDFLARE_API_TOKEN` is correctly set in GitHub Secrets
- Ensure the API token has "Cloudflare Pages: Edit" permissions
- Verify your Wrangler configuration in `wrangler.toml`

### GitHub Pages deployment fails
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow has the necessary permissions

### Build fails
- Check the build logs in the Actions tab
- Ensure `npm ci` and `npm run build` work locally
- Verify all dependencies are listed in `package.json`

### Wrangler command fails
- Check that the project name in the workflow matches your Cloudflare Pages project
- Verify the `dist` directory is created after build
- Review Wrangler logs in the Actions tab for detailed error messages

---

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Wrangler Action](https://github.com/cloudflare/wrangler-action)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
