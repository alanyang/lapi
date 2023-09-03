import React from "react";

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-min-full flex flex-col justify-center items-center">
      <h3 className="text-2xl font-black py-3">Todos</h3>
      {children}
    </div>
  )
}