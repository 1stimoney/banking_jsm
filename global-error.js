import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3038d805df17b0ee0e7daa396c9af584@o4508505399492608.ingest.us.sentry.io/4508505405063168",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,
});
