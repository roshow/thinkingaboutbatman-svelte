import auth0 from '../../utils/auth0';

export async function get(req, res) {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/admin' });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}