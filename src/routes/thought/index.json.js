import thoughts from './_thoughts.json';

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
	});
  
  const thought = thoughts[Math.floor(Math.random() * thoughts.length)];

	res.end(JSON.stringify(thought));
}