import { initAuth0 } from '@auth0/nextjs-auth0';

const {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  COOKIE_SECRET,
  NODE_ENV,
} = typeof window === 'undefined' ? process.env : {};

const SITE_URL = NODE_ENV === 'production' ? 'https://thinkingaboutbatman-svelte.roshow.now.sh' : 'http://localhost:3000';

export default initAuth0({
  domain: 'dev-mn7oivc5.auth0.com',
  clientId: AUTH0_CLIENT_ID,
  clientSecret: AUTH0_CLIENT_SECRET,
  scope: 'openid email profile',
  redirectUri: `${SITE_URL}/api/callback`,
  postLogoutRedirectUri: SITE_URL,
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: COOKIE_SECRET,
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,
  },
});