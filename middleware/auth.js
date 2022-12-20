import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const secret="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const isCustomAuth = token?.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret,{expiresIn:'1000d'});
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      const googleId = decodedData?.sub.toString();
      const user = await UserModel.findOne({ googleId });
      req.userId = user?._id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;