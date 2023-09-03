
import { NextRequest } from "next/server"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { appRouter } from "@/server/routers/greeting"

const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: "api/trpc",
    req,
    router: appRouter,
    createContext: () => {
      return {}
    }
  })
}

export { handler as GET, handler as POST }