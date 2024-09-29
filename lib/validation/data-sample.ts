import * as z from "zod";

export const DataSampleSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(1, {
      message: "Name is required.",
    })
    .max(32, { message: "Must be 32 or fewer characters long" }),
  slug: z.string().trim().optional(),
  description: z
    .string()
    .max(255, { message: "Must be 255 or fewer characters long" })
    .trim()
    .optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type DataSampleFormValues = z.infer<typeof DataSampleSchema>;
