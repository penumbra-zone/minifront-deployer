# Github Action: Minifront Cron Deployment

This GitHub Action automates the build and deployment process for [Minifront](https://github.com/penumbra-zone/web/tree/main/apps/minifront).

## How to Use

1. **Fork this repository** to your own GitHub account.

2. **Customize the Action**. Modify the `.github/workflows/deploy-minifront.yml` file:
     - Fill in environment variables for your desired hosting providers. You can use as many as you like, they will all be deployed sequentially.
     - Update the secrets in your GitHub repository accordingly.
     - Providers without configured secrets won't run.
     - Github Pages are deployed automatically, but need to be enabled in your repository settings.
     - Change cron frequency as desired (given github free tier, you can deploy at most every 4 hours)

3. **Enable GitHub Actions**. Make sure GitHub Actions are enabled in your forked repository (Settings > Actions > General).

4. **Enjoy Automatic Deployments!**. Your Minifront App will now automatically build and deploy:
    - Every 6 hours
    - When manually triggered via the "Actions" tab in your GitHub repository
