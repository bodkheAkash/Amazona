import { z } from "zod"
import { formatNumberWithDecimal } from "./utils"

//Common
const Price = (field: string) =>
  z.coerce
    .number()
    .refine(
      (value) => /^\d+\.\d{2}$/.test(formatNumberWithDecimal(value)),
      `${field} must have exactly two decimal places (e.g., 49.99)`
    )

export const ProductInputSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(1, "Category is required"),
  images: z.array(z.string()).min(1, "Product must have at least 1 image"),
  brand: z.string().min(1, "Brand is required"),
  description: z.string().min(1, "Description is required"),
  isPublished: z.boolean(),
  price: Price("price"),
  listPrice: Price("List Price"),
  countInStock: z.coerce
    .number()
    .int()
    .nonnegative("count in stock must be non-negative number"),
  tags: z.array(z.string()).default([]),
  sizes: z.array(z.string()).default([]),
  colors: z.array(z.string()).default([]),
  avgRating: z.coerce
    .number()
    .min(0, "Average Rating must be at least zero")
    .max(0, "Average Rating must be at most five"),
  numReviews: z.coerce
    .number()
    .int()
    .nonnegative("Number of reviews must be non-negative number"),
  ratingDistribution: z.array(
    z.object({ rating: z.number(), count: z.number() })
  ),
  reviews: z.array(z.string()).default([]),
  numSales: z.coerce
    .number()
    .int()
    .nonnegative("Number of sales must be non-negative number"),
})
