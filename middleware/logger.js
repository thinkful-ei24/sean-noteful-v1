

function logger(req, res, next) {
  const now = new Date();
  const formattedLog = 
    `${now.toLocaleDateString()} ${now.toLocaleTimeString()}` +
    ` ${req.method} ${req.url}`;
  console.log(formattedLog);
  next();
}

module.exports = {logger};