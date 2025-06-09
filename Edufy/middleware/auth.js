const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();
const User = require("../models/User");

// auth

exports.auth = (req, res, next) => {
  try {
    console.log('=== AUTH MIDDLEWARE DEBUG ===');
    console.log('Request URL:', req.url);
    console.log('Request Method:', req.method);
    
    // Debug all possible token sources
    const authHeader = req.header('Authorization');
    const xAuthToken = req.header('x-auth-token');
    const cookieToken = req.cookies?.token;
    
    console.log('Authorization header:', authHeader);
    console.log('x-auth-token header:', xAuthToken);
    console.log('Cookie token:', cookieToken);
    console.log('All cookies:', req.cookies);
    
    // Get token from header and remove quotes if present
    let token = req.header('Authorization')?.replace('Bearer ', '') || 
                req.header('x-auth-token') || 
                req.cookies?.token;
    
    // Remove surrounding quotes if they exist
    if (token && token.startsWith('"') && token.endsWith('"')) {
      token = token.slice(1, -1);
      console.log('Removed quotes from token');
    }

    console.log('Final extracted token:', token);
    console.log('Token length:', token?.length);
    console.log('Token type:', typeof token);
    
    // Compare with your debug token
    const debugToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0ZXN0MTIzIiwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzQ5NDk3NjE5LCJleHAiOjE3NTAxMDI0MTl9.R84tlBYVzRi1nVrPpy8WjOZocnALtJXIDYQZBJ32ceY";
    console.log('Tokens match:', token === debugToken);
    
    if (!token) {
      console.log('No token found!');
      return res.status(401).json({ 
        success: false,
        message: 'No token provided, authorization denied' 
      });
    }

    // Check JWT_SECRET
    console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
    console.log('JWT_SECRET length:', process.env.JWT_SECRET?.length);
    
    // Try to decode without verification first
    try {
      const unverified = jwt.decode(token);
      console.log('Unverified token payload:', unverified);
    } catch (decodeError) {
      console.log('Token decode error:', decodeError.message);
    }

    // Verify token
    console.log('Attempting to verify token...');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token verified successfully:', decoded);
    req.user = decoded;
    next();

  } catch (error) {
    console.error('=== TOKEN VERIFICATION ERROR ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    console.log('=== END DEBUG ===');
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        success: false,
        message: 'Token has expired, please login again',
        expired: true,
        expiredAt: error.expiredAt
      });
    }
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid token format' 
      });
    }

    // Generic token error
    return res.status(401).json({ 
      success: false,
      message: 'Token verification failed' 
    });
  }
};

// authorization

// isStudent - FIXED parameter order
exports.isStudent = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for students only"
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified."
        });
    }
}

// isInstructor - FIXED parameter order
exports.isInstructor = async (req, res, next) => {
    try {
        console.log("Checking instructor role for user:", req.user);
        if (req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for instructors only"
            });
        }
        next();
    }
    catch (error) {
        console.log("Instructor role check error:", error);
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified."
        });
    }
}

// isAdmin
exports.isAdmin = async (req, res, next) => {
    try {
        console.log("Admin check - User account type:", req.user.accountType);
        if (req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for admins only"
            });
        }
        next();
    }
    catch (error) {
        console.log("Admin role check error:", error);
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified."
        });
    }
}