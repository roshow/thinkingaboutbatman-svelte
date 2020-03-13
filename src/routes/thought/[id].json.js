import thoughts from './_thoughts.json';

export function get(req, res, next) {
  const thought = thoughts.find(t => t._id.$oid === req.params.id);

  if (thought) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(JSON.stringify(thought));
  } else {
    next();
  }
}