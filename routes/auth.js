
import express from "express";


// controllers
import {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  changePassword,
} from "../controllers/auth.js";

const router = express.Router();
router.get("/", (req, res) => {
  return res.json({
    data: "hello world from kaloraat auth API",
  });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgotpassword", forgotPassword);
router.get("/reset-password/:id/:token", resetPassword);
router.post("/reset-password/:id/:token", changePassword);
export default router;
