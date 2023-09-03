"use server"
import { prisma } from "@/utils/database"
import { signin } from "@/utils/session"
import { revalidatePath } from "next/cache"

export async function add (title: string, done: boolean = false) {
  if (title.length < 3) {
    return { ok: false }
  }
  await prisma.todo.create({
    data: {
      title,
      done
    }
  })
  await signin({ id: 1128, name: "Alan Yang", email: "alanyang54@gmail.com" })
  revalidatePath("/todos")
  return { ok: true }
}

export async function toggle (id: string, done: boolean) {
  await prisma.todo.update({
    where: {
      id
    },
    data: {
      done
    }
  })
  revalidatePath("/todos")
  return { ok: true }
}

export async function remove (id: string) {
  await prisma.todo.delete({
    where: {
      id
    }
  })
  revalidatePath("/todos")
  return { ok: true }
}