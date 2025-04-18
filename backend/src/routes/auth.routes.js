import { Router } from "express";
import { seekerLogin, seekerRegister, providerRegister, providerLogin } from '../controllers/authController.js'
export const authRouter = Router();

// ========== SEEKER REGISTRATION ==========
authRouter.post('/seeker/register', seekerRegister)

// ========== SEEKER LOGIN ==========
authRouter.post('/seeker/login', seekerLogin);

// ========== PROVIDER REGISTRATION ==========
authRouter.post('/provider/register', providerRegister);

// ========== PROVIDER LOGIN ==========
authRouter.post('/provider/login', providerLogin);

