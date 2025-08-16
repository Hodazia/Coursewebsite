import {} from "express";
import { User } from "../../models/usermodel.js";
import { registerSchema, LoginSchema } from "../../utils/Schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getDayDifferenceFromDate } from "../../utils/utilfun.js";
export const Register = async (req, res) => {
    try {
        // send the username,fullname, emailId, password, role, age. profileimageurl, 
        //@ts-ignore
        if (!req.isAdmin)
            req.body.role = "user";
        // use zod for parsing the incoming requests!
        const { success, error } = registerSchema.safeParse(req.body);
        if (!success) {
            return res.status(401).json({
                "message": "Enter the correct credentials"
            });
        }
        // Hash the password via bcrypt, 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // creating new user document in the user collection
        const user = await User.create({
            username: req.body.username,
            fullName: req.body.fullName,
            password: hashedPassword,
            emailId: req.body.emailId,
            emailVerified: req.body.emailVerified,
            profileImageUrl: req.body.profileImageUrl,
            streaks: req.body.streaks
        });
        // generating jwt token
        const token = jwt.sign({ _id: user._id, username: user.username, emailId: user.emailId, role: user.role }, process.env.JWT_KEY, { expiresIn: 3600 });
        // creating reply
        const reply = {
            user: {
                username: user.username,
                fullName: user.fullName,
                _id: user._id,
                emailId: user.emailId,
                emailVerified: user.emailVerified,
                profileImageUrl: user.profileImageUrl,
                streaks: user.streaks
            },
            message: "User registered successfully"
        };
        // sending cookie
        res.cookie("token", token, { maxAge: 3600000 });
        // sending response with status code
        res.status(201).json(reply);
    }
    catch (e) {
        res.status(500).json({ "message": "There is an error " });
    }
};
export const Login = async (req, res) => {
    try {
        const { success, error } = LoginSchema.safeParse(req.body);
        if (!success) {
            return res.json(404).json({
                "message": "Enter valid credentials",
                errors: error.issues,
            });
        }
        // first check it in the DB
        const user = await User.findOne({ emailId: req.body.emailId });
        if (!user) {
            return res.status(404).json({
                "message": "No such user, first register"
            });
        }
        //@ts-ignore// Compare the provided password with the hashed password in the database
        // Ensure user.password exists before comparison to prevent crashes
        const passwordMatch = await bcrypt.compare(req.body.password, user.password || "");
        if (!passwordMatch) {
            return res.status(401).json({
                message: "Incorrect password. Please try again.",
            });
        }
        // Handle streak logic here
        if (user.streaks) {
            const lastUpdated = getDayDifferenceFromDate(user.streaks.lastUpdated);
            if (lastUpdated === 1) {
                user.streaks.current = user.streaks.current + 1;
            }
            else if (lastUpdated > 1) {
                user.streaks.current = 1; // Reset streak
            }
            // Update the longest streak
            if (user.streaks.current > user.streaks.longest) {
                user.streaks.longest = user.streaks.current;
            }
            // Update the last updated date for the streak
            user.streaks.lastUpdated = new Date();
            // Save the updated user document to the database
            await user.save();
        }
        // Generating a JWT token for the user
        const token = jwt.sign({
            _id: user._id,
            username: user.username,
            emailId: user.emailId,
            role: user.role,
        }, process.env.JWT_KEY, { expiresIn: "12h" } // Token expires in 1 hour
        );
        // Set the token as a cookie in the response
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3600000, // 1 hour in milliseconds
        });
        // Send a success response with the user data (excluding the password)
        const { password, ...userData } = user.toObject();
        return res.status(200).json({
            message: "Login successful.",
            user: userData,
            token,
        });
    }
    catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            message: "An internal server error occurred.",
        });
    }
};
// export const verifyEmail = async (req:Request,res:Response) => {
//     try{
//         if (req.user.emailVerified) 
//             return res.status(200).send('Email already verified.');
//         // creating verification token
//         const token = jwt.sign(
//             { 
//                 _id: req.user._id,
//             },
//             process.env.JWT_KEY,
//             { expiresIn: 600 }
//         );
//         // creating verification link   
//         const verificationLink = `${process.env.FRONTEND_ORIGIN}/profile/account/verify-email?token=${token}`; 
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//             user: process.env.EMAIL_USER,     // email
//             pass: process.env.EMAIL_PASS      // app password 
//             }
//         });
//         await transporter.sendMail({
//             from: '"HackForge" <your_email@gmail.com>',
//             to: req.user.emailId,
//             subject: "Verify Your Email",
//             html: `<h3>Hello ${req.user.username},</h3>
//                 <p>Click the link below to verify your email:</p>
//                 <a href="${verificationLink}">${verificationLink}</a>`
//         });
//         return res.status(200).send("Email send successfully");
//     }
//     catch(error)
//     {
//         return res.status(500).json("Error sending email");
//     }
// }
//# sourceMappingURL=authcontroller.js.map