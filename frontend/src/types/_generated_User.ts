import * as z from "zod"

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  authMethod: z.string(),
  name: z.string(),
  bio: z.string().nullable(),
  admin: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
  github: z.string().nullable(),
  discord: z.string().nullable(),
})
export type User = z.infer<typeof UserSchema>

