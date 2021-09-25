import * as z from "zod"

export const EssentialSchema = z.object({
  ip: z.string(),
  hn: z.string(),
  pc: z.number(),
  pm: z.number(),
  gm: z.string(),
  la: z.string(),
  pa: z.boolean(),
  vn: z.string(),
})
export type Essential = z.infer<typeof EssentialSchema>

export const AllSchema = z.object({
  ip: z.string(),
  dm: z.string().optional(),
  core: EssentialSchema,
  ru: z.map(z.string(), z.string()).optional(),
  description: z.string().optional(),
  banner: z.string().optional(),
  active: z.boolean(),
})
export type All = z.infer<typeof AllSchema>

