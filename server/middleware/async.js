const asyncWrapper = (fn) => {
  return async (req,res,next)=>{
    try {
      fn(req,res,next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = asyncWrapper