module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== 'my-secret-key') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
  };
  