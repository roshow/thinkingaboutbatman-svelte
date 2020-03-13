import thoughts from './_thoughts.json';

const getRandomThought = (idToExclude) => {
	const thought = thoughts[Math.floor(Math.random() * thoughts.length)];
	if (thought._id.$oid === idToExclude) {
		return getRandomThought(idToExclude);
	}
	return thought;
}

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
	});
	
	const thought = getRandomThought(req.query.exclude);
	
	res.end(JSON.stringify(thought));
}