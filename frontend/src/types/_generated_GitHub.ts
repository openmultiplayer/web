import * as z from "zod"

export const LinkSchema = z.object({
  url: z.string(),
})
export type Link = z.infer<typeof LinkSchema>

export const CallbackSchema = z.object({
  state: z.string(),
  code: z.string(),
})
export type Callback = z.infer<typeof CallbackSchema>

