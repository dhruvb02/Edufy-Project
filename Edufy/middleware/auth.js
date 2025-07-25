const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

// Authentication middleware
exports.auth = async (req, res, next) => {
    try {
        // Extract token from different sources
        const token = req.cookies.token || 
                     req.body.token || 
                     req.header("Authorization")?.replace("Bearer ", "");

        // If no token provided
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            });
        }

        // Verify token
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            });
        }
        
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something went wrong while validating the token"
        });
    }
};

// Student role middleware
exports.isStudent = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Students only"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified"
        });
    }
};

// Instructor role middleware
exports.isInstructor = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Instructors only"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified"
        });
    }
};

// Admin role middleware
exports.isAdmin = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin only"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified"
        });
    }
};