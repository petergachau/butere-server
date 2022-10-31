
import express from "express";


// controllers
import {
  signup,
  signin,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.js";

const router = express.Router();
router.get("/", (req, res) => {
  return res.json({
    data: "hello world from kaloraat auth API",
  });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
