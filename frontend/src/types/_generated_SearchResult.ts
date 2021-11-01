import * as z from "zod"

export const HitSchema = z.object({
  score: z.number(),
  url: z.string(),
  title: z.string(),
  desc: z.string(),
  title_fragment: z.string(),
  desc_fragment: z.string(),
})
export type Hit = z.infer<typeof HitSchema>

export const SearchResultsSchema = z.object({
  total: z.number(),
  took: z.number(),
  hits: HitSchema.array(),
})
export type SearchResults = z.infer<typeof SearchResultsSchema>

