export const createError = (status, message) => {
  const err = new Error();
  err.Message = message;
  err.status = status;
  return err;
};
