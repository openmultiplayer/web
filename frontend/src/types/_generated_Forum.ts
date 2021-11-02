import * as z from "zod"

export const AuthorSchema = z.object({
  id: z.string(),
  name: z.string(),
  admin: z.boolean(),
  createdAt: z.string(),
})
export type Author = z.infer<typeof AuthorSchema>

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  colour: z.string(),
})
export type Category = z.infer<typeof CategorySchema>

export const PostMetaSchema = z.object({
  author: z.string(),
  postId: z.string(),
})
export type PostMeta = z.infer<typeof PostMetaSchema>

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
  rootPostId: z.string().nullable(),
  author: AuthorSchema,
  tags: z.string().array(),
  category: CategorySchema,
  posts: z.number(),
  replyTo: PostMetaSchema.nullable(),
})
export type Post = z.infer<typeof PostSchema>

