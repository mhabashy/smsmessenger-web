# BulkMailer Pro Web

This app is now configured for **Firebase App Hosting** with a standard Next.js server build.

## Local development

```bash
npm install
npm run dev
```

## Firebase App Hosting

1. Create an App Hosting backend in Firebase for this repository.
2. Add these environment variables in the App Hosting backend settings:
   - `NEXT_PUBLIC_ENDPOINT`
   - `NEXT_PUBLIC_UNSUBSCRIBE_ENDPOINT`
   - `NEXT_PUBLIC_LOGIN_DOMAIN`
3. If you want local CLI deploys, run `firebase init apphosting` after the backend exists so Firebase can generate the correct `firebase.json` with your backend ID.

The previous static `firebase.json` Hosting config was removed because this app now deploys as a Next.js server on App Hosting instead of a static export.
