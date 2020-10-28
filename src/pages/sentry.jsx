import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import App from './_app';

Sentry.init({
  dsn:
    'https://cacca9dabb3a48ae843cc31a268a91b8@o467302.ingest.sentry.io/5493494',
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 0.5,
});

ReactDOM.render(<App />, document.getElementById('root'));
