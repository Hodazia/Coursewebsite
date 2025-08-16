import z from "zod";
export declare const registerSchema: z.ZodObject<{
    username: z.ZodString;
    fullName: z.ZodString;
    emailId: z.ZodString;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodString>;
    age: z.ZodOptional<z.ZodNumber>;
}, z.z.core.$strip>;
export declare const LoginSchema: z.ZodObject<{
    emailId: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
//# sourceMappingURL=Schema.d.ts.map