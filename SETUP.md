# Gemini OAuth Setup Guide

## Prerequisites

1. **Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

## Step 1: Enable APIs

Enable the following APIs in your Google Cloud project:

1. **Google+ API** (for user profile)
2. **Generative Language API** (for Gemini access)

Navigate to: **APIs & Services > Library**

## Step 2: Create OAuth 2.0 Credentials

1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials > OAuth client ID**
3. Select **Web application**
4. Configure:
   - **Name**: Coherence Protocol
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (for development)
     - Your production URL (when deploying)
   - **Authorized redirect URIs**:
     - `http://localhost:3000/api/auth/callback/google` (development)
     - `https://your-domain.com/api/auth/callback/google` (production)
5. Click **Create**
6. Copy your **Client ID** and **Client Secret**

## Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. Fill in your credentials:
   \`\`\`env
   GOOGLE_CLIENT_ID=your_client_id_here
   GOOGLE_CLIENT_SECRET=your_client_secret_here
   NEXTAUTH_SECRET=your_random_secret
   NEXTAUTH_URL=http://localhost:3000
   \`\`\`

3. Generate NEXTAUTH_SECRET:
   \`\`\`bash
   openssl rand -base64 32
   \`\`\`

## Step 4: Install Dependencies

\`\`\`bash
pnpm install
\`\`\`

## Step 5: Run the Application

\`\`\`bash
pnpm dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000)

## Authentication Flow

1. Click **"Get Started with Google"**
2. Sign in with your Google account
3. Grant permissions for:
   - Basic profile info
   - Generative Language API access
4. Redirected to `/dashboard` with active session
5. Chat with Gemini AI powered by your OAuth token

## Scopes Requested

- `openid`: OpenID Connect
- `email`: User email
- `profile`: User profile info
- `https://www.googleapis.com/auth/generative-language.retriever`: Gemini API access

## Troubleshooting

### "Error: Missing GOOGLE_CLIENT_ID"
- Ensure `.env.local` exists with correct values
- Restart dev server after adding env vars

### "Error: redirect_uri_mismatch"
- Add exact redirect URI to Google Cloud Console
- Format: `http://localhost:3000/api/auth/callback/google`

### "Error: access_denied"
- User declined OAuth consent
- Check required scopes in auth.config.ts

### "Error: API not enabled"
- Enable "Generative Language API" in Google Cloud Console
- Go to APIs & Services > Library

## Production Deployment

### Vercel

1. Add environment variables in Vercel dashboard:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your production URL)

2. Update Google OAuth redirect URIs:
   - Add `https://your-domain.vercel.app/api/auth/callback/google`

## Security Notes

- **Never commit** `.env.local` to git
- Rotate `NEXTAUTH_SECRET` periodically
- Use environment-specific OAuth credentials
- Review OAuth consent screen configuration
- Limit scopes to minimum required

## API Usage

The Gemini API is called server-side using the user's OAuth token:

\`\`\`typescript
import { google } from "@ai-sdk/google"
import { streamText } from "ai"

const result = streamText({
  model: google('gemini-2.0-flash-exp'),
  messages: [...],
})
\`\`\`

## Resources

- [Google Cloud Console](https://console.cloud.google.com/)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Vercel AI SDK](https://sdk.vercel.ai/)
- [Gemini API Documentation](https://ai.google.dev/)
