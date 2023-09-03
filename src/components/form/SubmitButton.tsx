"use client"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitButton ({ children, className }: { children: React.ReactNode, className?: string }) {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} className={className} type="submit">
      {children}
    </button>
  )
}