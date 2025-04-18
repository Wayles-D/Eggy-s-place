import express from "express";
import { signUp, signIn, forgotpassword, resetPassword, isLoggedIn,} from "../controllers/authController.js";

const router = express.Router();

// sign up route

router.post("/sign-up", signUp);

// sign in route

router.post("/sign-in", signIn);

// forgot password

router.post("/forgot-password", forgotpassword );

// reset password route
router.put("/reset-password/:resetToken", resetPassword);

// isLoggedIn
router.get("/isloggedin", isLoggedIn)

export default router