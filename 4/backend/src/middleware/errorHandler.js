export const errorHandler = (err, req, res, next) => {
  console.error(err);
  // res.status(err.status || 500).json({
  //   message: err.message || "Internal Server Error",
  // });
  req.errorStatus = err.status || 500;
  req.errorMessage = err.message || "Internal Server Error";

  next();
};
