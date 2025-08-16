// define the zod schema for the users!

import z, { email } from "zod";

export const registerSchema = z.object({
    username:z.string(),
    fullName:z.string(),
    emailId:z.string().email(),
    password:z.string(),
    role:z.string().optional(),
    age:z.number().optional()
})

export const LoginSchema = z.object({
    emailId:z.string().email(),
    password:z.string()
})

