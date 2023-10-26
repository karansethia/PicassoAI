const errorHandler = (error, req, res, next) => {
  return res.status(error.status).json({message: error.message})
}

module.exports = errorHandler