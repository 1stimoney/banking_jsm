import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3038d805df17b0ee0e7daa396c9af584@o4508505399492608.ingest.us.sentry.io/4508505405063168",

  integrations: [Sentry.replayIntegration()],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
