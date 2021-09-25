import * as z from "zod"

export const APIErrorSchema = z.object({
  message: z.string().optional(),
  suggested: z.string().optional(),
  error: z.string().optional(),
})
export type APIError = z.infer<typeof APIErrorSchema>

