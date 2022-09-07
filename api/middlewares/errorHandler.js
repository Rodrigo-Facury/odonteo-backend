module.exports = function(err, _req, res) {
  const { message, status } = err;

  return res.status(status).json({ message });  
}
