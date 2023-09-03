"use server"
import { signout } from "@/utils/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout () {
  await signout()
  revalidatePath("/todo")
}