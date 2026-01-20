import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// convex automztically generates uniqueId and createdTime
export default defineSchema({
    users: defineTable({
        name : v.string(),
        email: v.string(),
        credits: v.number(),
        subscriptId:v.optional(v.string())
    })
})