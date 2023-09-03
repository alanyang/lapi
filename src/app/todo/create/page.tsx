"use client"
import CreateTodo from "@/components/form/CreateTodo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page () {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center">
      <CreateTodo success={() => { router.push("/todo") }} />
      <Link href="/todo" className="link">Todos</Link>
    </div>
  )
}