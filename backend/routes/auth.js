const express = require('express');
const router = express.Router();
const { seekerLogin, seekerRegister, providerRegister, providerLogin } = require('../controller/authController');


// ========== SEEKER REGISTRATION ==========
router.post('/seeker/register', seekerRegister)

// ========== SEEKER LOGIN ==========
router.post('/seeker/login', seekerLogin);

// ========== PROVIDER REGISTRATION ==========
router.post('/provider/register', providerRegister);

// ========== PROVIDER LOGIN ==========
router.post('/provider/login', providerLogin);

module.exports = router;
//auth.js