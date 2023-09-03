"use client"
import { experimental_useFormStatus as useFormStatus } from "react-dom"
import { useEffect, useRef } from "react"
import Button from "./SubmitButton"
import { add } from "@/app/todo/actions"

export default function CreateTodo (
  { success = () => { } }: { success?: () => void, }
) {
  const { pending } = useFormStatus()
  const titleRef = useRef<HTMLInputElement>(null)

  const submit = async (data: FormData) => {
    const title = data.get("title") as string
    const status = data.get("status") as string
    if (title) {
      const { ok } = await add(title, status === "completed")
      ok && success()
    }
    titleRef.current!.value = ""
  }

  useEffect(() => {
  }, [pending])
  return (
    <form action={submit} className="join self-center">
      <input type="text" placeholder="Title" className="input join-item input-bordered" name="title" ref={titleRef} />
      <select className="select select-bordered join-item" name="status" defaultValue={"Uncompleted"}>
        <option>Undone</option>
        <option value="completed">Done</option>
      </select>
      <Button className="btn btn-primary join-item">Create</Button>
    </form >
  )
}