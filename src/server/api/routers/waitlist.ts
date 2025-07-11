import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const waitlistRouter = createTRPCRouter({
  join: publicProcedure
    .input(
      z.object({
        email: z.string().email("Please enter a valid email address"),
        source: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        // Check if email already exists
        const existingEntry = await ctx.db.waitlist.findUnique({
          where: { email: input.email },
        });

        if (existingEntry) {
          throw new Error("This email is already on our waitlist!");
        }

        // Create new waitlist entry
        const waitlistEntry = await ctx.db.waitlist.create({
          data: {
            email: input.email,
            source: input.source ?? "landing_page",
          },
        });

        return {
          success: true,
          message: "Successfully joined the waitlist!",
          id: waitlistEntry.id,
        };
      } catch (error) {
        // Handle unique constraint error
        if (
          error instanceof Error &&
          error.message.includes("already on our waitlist")
        ) {
          throw error;
        }

        // Handle database unique constraint error
        if (
          error &&
          typeof error === "object" &&
          "code" in error &&
          error.code === "P2002"
        ) {
          throw new Error("This email is already on our waitlist!");
        }

        throw new Error("Failed to join waitlist. Please try again.");
      }
    }),

  getCount: publicProcedure.query(async ({ ctx }) => {
    const count = await ctx.db.waitlist.count();
    return { count };
  }),

  // Admin-only procedure to get all waitlist entries (you can add auth later)
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(50),
        offset: z.number().min(0).default(0),
      }),
    )
    .query(async ({ ctx, input }) => {
      const entries = await ctx.db.waitlist.findMany({
        take: input.limit,
        skip: input.offset,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          email: true,
          source: true,
          createdAt: true,
        },
      });

      const total = await ctx.db.waitlist.count();

      return {
        entries,
        total,
        hasMore: input.offset + input.limit < total,
      };
    }),
});
