import * as z from "zod"

export const AuthorSchema = z.object({
  id: z.string(),
  name: z.string(),
  admin: z.boolean(),
  createdAt: z.string(),
})
export type Author = z.infer<typeof AuthorSchema>

export const PostMetaSchema = z.object({
  author: z.string(),
  postId: z.string(),
  slug: z.string(),
  title: z.string(),
  short: z.string(),
})
export type PostMeta = z.infer<typeof PostMetaSchema>

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  colour: z.string(),
  sort: z.number(),
  recent: PostMetaSchema.array().optional(),
  postCount: z.number(),
})
export type Category = z.infer<typeof CategorySchema>

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
  posts: z.number(),
  replyTo: PostMetaSchema.nullable(),
  category: CategorySchema,
})
export type Post = z.infer<typeof PostSchema>

