import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.email("Please enter a valid email address."),
  collaborationType: z
    .enum([
      "",
      "Product engineering",
      "Frontend leadership",
      "Performance & reliability",
      "AI tooling",
      "Other",
    ])
    .optional(),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more about the opportunity.")
    .max(3000),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
