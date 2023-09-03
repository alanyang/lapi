"use client"

import { logout } from "@/app/auth/actions"

export default function () {
  return (
    <button onClick={() => logout()} className="link link-primary">Signout</button>
  )
}