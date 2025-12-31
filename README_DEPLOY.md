# Vercel Deployment Guide

To deploy this project to Vercel and provide a live URL for judges, follow these steps:

## 1. Connect to Vercel

1. Go to [Vercel](https://vercel.com/) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Find and click **"Import"** next to your `Refund_Datadog` repository.

## 2. Configure Project

Vercel should automatically detect the settings:

- **Framework Preset**: Vite
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 3. Set Environment Variables

Before clicking **"Deploy"**, expand the **"Environment Variables"** section and add the following keys:

| Key | Value | Description |
| :--- | :--- | :--- |
| `VITE_GEMINI_API_KEY` | `YOUR_KEY` | Your Google Gemini API Key |
| `VITE_DATADOG_APPLICATION_ID` | `YOUR_ID` | Datadog Application ID |
| `VITE_DATADOG_CLIENT_TOKEN` | `YOUR_TOKEN` | Datadog Client Token |
| `VITE_DATADOG_SITE` | `us5.datadoghq.com` | Your Datadog Site |
| `VITE_DATADOG_ENV` | `production` | Environment name |

## 4. Deploy

Click **"Deploy"**. Vercel will build the project and provide you with a live URL (e.g., `refund-multi-agents.vercel.app`).

## 5. Share with Judges

You can now share this URL with the hackathon judges!

---

### 💡 Pro Tip: Custom Domain

You can also connect a custom domain in the **"Settings" -> "Domains"** tab if you have one.
