import { AppRouter } from "@/server/routers/app"
import { createTRPCNext } from "@trpc/next"
import { httpBatchLink } from "@trpc/client"
import superjson from "superjson"
function getBaseUrl () {
  if (typeof window !== "undefined") {
    return ""
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>({
  config (opts) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers: async () => {
            return {}
          }
        }),

      ]
    }
  },
  ssr: false
})