module.exports = function corsMiddleware (req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': req.header('origin') || '*' || 'http://bic2cal.eecs.berkeley.edu',
    'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,HEAD,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type,Accept,Content-Encoding,X-Requested-With,x-api-user,x-api-key',
  });
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  return next();
};
