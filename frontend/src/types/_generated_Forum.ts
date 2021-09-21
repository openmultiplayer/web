import * as z from "zod"

export const AuthorSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  bio: z.string().optional(),
  admin: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
})
export type Author = z.infer<typeof AuthorSchema>

export const PostSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  slug: z.string().optional(),
  body: z.string(),
  short: z.string(),
  first: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().optional(),
  userId: z.string(),
  replyPostId: z.string().optional(),
  rootPostId: z.string().optional(),
  author: AuthorSchema,
})
export type Post = z.infer<typeof PostSchema>

