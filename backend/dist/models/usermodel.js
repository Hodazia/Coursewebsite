// define the user model here 
import mongoose from "mongoose";
import { Schema } from "mongoose";
import { Types } from "mongoose";
// have a schema to count streaks, no of times the question they solved
const streakSchema = new mongoose.Schema({
    current: {
        type: Number, // current streak
        default: 1,
        min: 0
    },
    longest: {
        type: Number, // longest streak
        default: 1,
        min: 0
    },
    lastUpdated: {
        type: Date, // last updated !, 
        default: Date.now
    }
}, { _id: false }); // Prevents creating a separate _id for the subdocument
const sprintSchema = new mongoose.Schema({
    sprintName: {
        type: String,
        minLength: 1,
        maxLength: 50,
        trim: true
    },
    description: {
        type: String,
        minLength: 1,
        maxLength: 150,
        trim: true
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    problems: {
        type: [Schema.Types.ObjectId],
        ref: 'problems',
    }
}, { _id: false, timestamps: true });
const checkedProblemSchema = new mongoose.Schema({
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'problems',
    },
    isSolved: {
        type: Boolean,
    },
    submitDate: {
        type: Date,
    }
}, { _id: false });
const userschema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        default: null,
        trim: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true, //  all emailid should be in lowercase
    },
    emailVerified: {
        type: Boolean,
        default: false // once verified type will be true
    },
    age: {
        type: Number,
    },
    profileImageUrl: {
        type: String,
        // set maxlength in future , it will be stored in the cloudinary
        trim: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user" // default it will be a user role
    },
    password: {
        type: String,
        default: null // store hashed problems okay
    },
    noSolvedProblems: {
        type: Number,
        min: 0,
        default: 0
    },
    checkedProblems: {
        type: [checkedProblemSchema] // just the problems u check not necessarily solved
    },
    favouriteProblems: {
        type: [Schema.Types.ObjectId], // store the problem id of ur favourite problems
        ref: 'problems',
    },
    likedProblems: {
        type: [Schema.Types.ObjectId], // like problems , in ur problem id
        ref: 'problems',
    },
    bookmarks: {
        type: [sprintSchema]
    },
    points: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    },
    streaks: {
        type: streakSchema,
        required: true,
        default: () => ({}) // ensures default values apply automatically
    }
});
// creating new collection "users"
export const User = mongoose.model("users", userschema);
//# sourceMappingURL=usermodel.js.map