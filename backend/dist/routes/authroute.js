// define all auth routes here!
import express from "express";
import { Login, Register } from "../controllers/auth/authcontroller.js";
const router = express.Router();
router.post("/auth/register", Register);
// router.get("/auth/verify-email",)
router.post("/auth/login", Login);
// router.post("/auth/logout",)
export const Authrouter = router;
//# sourceMappingURL=authroute.js.map