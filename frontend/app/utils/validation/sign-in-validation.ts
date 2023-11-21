
import { z } from "zod";

export const validationSchema = z
    .object({
        username: z.string().min(1, { message: "Username is required" }),
        password: z
            .string()
            .min(1, { message: "Password is required" }),
    });


export type ValidationSchema = z.infer<typeof validationSchema>;