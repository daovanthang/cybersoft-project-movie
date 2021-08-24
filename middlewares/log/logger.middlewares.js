const logger = (message) => (req, res, next) => {
  console.log(message);
  next(); // tiep tuc toi middle ware
};

module.exports = {
  logger,
};
