const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Debug route to test token generation and verification
router.get('/debug-token', (req, res) => {
  console.log('=== TOKEN DEBUG ROUTE ===');
  
  try {
    // Check if JWT_SECRET exists
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        error: 'JWT_SECRET is not defined in environment variables'
      });
    }

    // Create a test token
    const testPayload = { 
      userId: 'test123', 
      email: 'test@example.com',
      iat: Math.floor(Date.now() / 1000) // issued at time
    };

    console.log('Creating token with payload:', testPayload);
    console.log('JWT_SECRET length:', process.env.JWT_SECRET.length);

    const testToken = jwt.sign(
      testPayload,
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    console.log('Token created successfully');
    console.log('Token length:', testToken.length);
    console.log('Token starts with:', testToken.substring(0, 50));

    // Immediately try to verify the token we just created
    const decoded = jwt.verify(testToken, process.env.JWT_SECRET);
    console.log('Token verified successfully:', decoded);

    res.json({
      success: true,
      message: 'Token generation and verification working perfectly!',
      tokenLength: testToken.length,
      payload: testPayload,
      decoded: decoded,
      jwtSecretLength: process.env.JWT_SECRET.length,
      token: testToken // Remove this in production
    });

  } catch (error) {
    console.error('Token debug error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      errorName: error.name,
      stack: error.stack
    });
  }
});

module.exports = router;