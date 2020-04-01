import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = polka()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		(req, res, next) => {
			res.status = code => {
				res.statusCode = code;
				return res;
			};
			res.json = (data) => {
				res.writeHead(res.statusCode || 200, {
					'Content-Type': 'application/json',
				});
				res.end(JSON.stringify(data));
			};
			next();
		},
		sapper.middleware({
			session: (req) => ({ headers: req.headers }),
		}),
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

export default app;