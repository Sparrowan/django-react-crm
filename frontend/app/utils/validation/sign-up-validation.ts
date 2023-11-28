
import { z } from "zod";

export const validationSchema = z
    .object({
        username: z.string().min(1, { message: "Username is required" }),
        email: z.string()
            .min(1, { message: "Email is required" }).email('Email is invalid'),
        password: z
            .string()
            .min(8, { message: "Password should have a minimum of 8 characters!" }),
        confirmPassword: z
            .string()
            .min(8, { message: "Confirmation password should have a minimum of 8 characters!" }),
    }).refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Password and confirmation passwords do not match',
    });


export type ValidationSchema = z.infer<typeof validationSchema>;