import { PrismaClient } from '@prisma/client'

const globalForStorege = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const redisUrl = process.env.REDIS_URL

export const prisma = globalForStorege.prisma ?? new PrismaClient({})

if (process.env.NODE_ENV !== 'production') {
  globalForStorege.prisma = prisma
}