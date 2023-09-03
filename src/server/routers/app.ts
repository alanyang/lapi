import { z } from "zod"
import { procedure, router } from "../trpc"

export const appRouter = router({
  greeting: procedure.
    input(z.object({
      name: z.string().min(2).max(128)
    })).
    query((opts) => {
      return { greeting: `hello ${opts.input.name}` }
    })
})

export type AppRouter = typeof appRouter