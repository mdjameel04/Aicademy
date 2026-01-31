
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createNewRoom = mutation({
  args:{
    ExpertsList: v.string(),
    topic : v.string(),
    expertName: v.string()
  },
  
  handler: async (ctx, args)=> {
    const result = await ctx.db.insert("DiscussionRoom",{
        ExpertsList : args.ExpertsList,
    topic : args.topic,
    expertName : args.expertName
    })
    return result
  },
    
}) 

export const GetDiscussionRoom = query({
  args :{
    id: v.id('DiscussionRoom')
  },
  handler : async (ctx,args) => {
    const result = ctx.db.get(args.id)
     return result
  }
})