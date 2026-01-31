import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// convex automztically generates uniqueId and createdTime
export default defineSchema({
    users: defineTable({
        name : v.string(),
        email: v.string(),
        credits: v.number(),
        subscriptionId:v.optional(v.string())
    }),

    DiscussionRoom: defineTable({
        ExpertsList : v.string(),
        topic: v.string(),
        expertName : v.string(),
        conversation: v.optional(v.string())
    })
})