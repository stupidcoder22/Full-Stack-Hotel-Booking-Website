import jsonwebtoken from "jsonwebtoken";
import { createError } from "../Error/error";

export const verifytoken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(creatcreateError(401, "You are not Authenticated"));
  }
  jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) next(createError(403, "token is not valid"));
    req.user = user;
    next();
  });
};

export const verifyuser = (req, res, next) => {
  verifytoken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifytoken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "You are not authorized"));
    }
  });
};
