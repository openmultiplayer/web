import * as z from "zod"

export const SubscriptionSchema = z.object({
  id: z.string(),
  refersType: z.string(),
  refersTo: z.string(),
  userId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
})
export type Subscription = z.infer<typeof SubscriptionSchema>

export const NotificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  link: z.string(),
  read: z.boolean(),
  createdAt: z.string(),
  subscription: SubscriptionSchema.nullable(),
})
export type Notification = z.infer<typeof NotificationSchema>

