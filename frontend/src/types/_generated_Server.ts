import * as z from "zod"

export const EssentialSchema = z.object({
  ip: z.string(),
  hostname: z.string(),
  players: z.number(),
  maxPlayers: z.number(),
  gamemode: z.string(),
  language: z.string(),
  password: z.boolean(),
  version: z.string(),
})
export type Essential = z.infer<typeof EssentialSchema>

export const AllSchema = z.object({
  ip: z.string(),
  domain: z.string().optional(),
  core: EssentialSchema,
  rules: z.map(z.string(), z.string()).optional(),
  description: z.string().optional(),
  banner: z.string().optional(),
  active: z.boolean(),
})
export type All = z.infer<typeof AllSchema>

