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
  omp: z.boolean(),
  pr: z.boolean(),
})
export type Essential = z.infer<typeof EssentialSchema>

export const AllSchema = z.object({
  ip: z.string(),
  dm: z.string().nullable(),
  core: EssentialSchema,
  ru: z.map(z.string(), z.string()).optional(),
  description: z.string().nullable(),
  banner: z.string().nullable(),
  active: z.boolean(),
  lastUpdated: z.string(),
})
export type All = z.infer<typeof AllSchema>

