import * as z from "zod"

export const AuthorSchema = z.object({
  id: z.string(),
  name: z.string(),
  admin: z.boolean(),
  createdAt: z.string(),
})
export type Author = z.infer<typeof AuthorSchema>

export const PostSchema = z.object({
  id: z.string(),
  title: z.string().nullable(),
  slug: z.string().nullable(),
  body: z.string(),
  short: z.string(),
  first: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
  userId: z.string(),
  replyPostId: z.string().nullable(),
  rootPostId: z.string().nullable(),
  author: AuthorSchema,
})
export type Post = z.infer<typeof PostSchema>

