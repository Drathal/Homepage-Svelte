import type { Handle } from '@sveltejs/kit';

const directives = {
  'base-uri': ["'self'"],
  'child-src': ["'self'"],
  'connect-src': ["'self'", 'ws://localhost:*'],
  'img-src': ["'self'", 'data:'],
  'font-src': ["'self'", 'data:'],
  'form-action': ["'self'"],
  'frame-ancestors': ["'self'"],
  'frame-src': ["'self'"],
  'manifest-src': ["'self'"],
  'media-src': ["'self'", 'data:'],
  'object-src': ["'none'"],
  'style-src': ["'self'", "'unsafe-inline'"],
  'default-src': ["'self'", 'markus-dethlefsen.dev', `ws://markus-dethlefsen.dev`],
  'script-src': ["'self'", "'unsafe-inline'"],
  'worker-src': ["'self'"]
};

const csp = Object.entries(directives)
  .map(([key, arr]) => key + ' ' + arr.join(' '))
  .join('; ');

export const handle = (async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'no-referrer');
  response.headers.set(
    'Permissions-Policy',
    'accelerometer=(), autoplay=(), camera=(), encrypted-media=(), fullscreen=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()'
  );
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  return response;
}) satisfies Handle;
