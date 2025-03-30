import { response } from 'express';
import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                message: "Token Required"
            });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: "Token Verification Failed"
                });
            }
            req.user = decoded.user; 
            next(); 
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const isInstructor = (req, res, next) => {
    try {
        const {role} = req.user;

        if (role === "instructor") {
            return next();
        }

        return res.status(403).json({
            message: "You are not the instructor"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

const authMiddleware = {
    isAuth, isInstructor
}

export default authMiddleware