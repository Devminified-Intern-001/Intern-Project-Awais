import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  condition: z.string().min(1, "Please select an option"),
  age: z
    .number()
    .min(1, "Age must be greater than 0")
    .max(100, "Age must be realistic"),
  sex: z.enum(["Male", "Female", "Other"]),
});

export type FormValues = z.infer<typeof formSchema>;
