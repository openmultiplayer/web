import * as z from "zod"

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  authMethod: z.string(),
  name: z.string(),
  bio: z.string().optional(),
  admin: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().optional(),
  github: z.string().optional(),
  discord: z.string().optional(),
})
export type User = z.infer<typeof UserSchema>

