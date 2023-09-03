import { cookies } from "next/headers"
import { unsealData, sealData } from "iron-session"

type User = {
  id: string | number
  name: string
  email: string
  avatar?: string
}

const AUTH_KEY = "__s"
const SECRET_KEY = (process.env.SECRET_KEY as string).slice(0, 32)


export async function isAuthenticated () {
  const token = cookies().get(AUTH_KEY)
  if (!token) {
    return false
  }
  const user = (await unsealData(token.value, { password: SECRET_KEY })) as User
  return (user && user.id) ? user : null
}

export async function signin (user: User) {
  const token = await sealData(user, { password: SECRET_KEY })
  return cookies().set(AUTH_KEY, token)
}

export async function signout () {
  return await cookies().delete(AUTH_KEY)
}