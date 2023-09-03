import Link from "next/link";
import CreateTodo from "@/components/form/CreateTodo";
import SignoutButton from "@/components/form/SignoutButton";
import TodoList from "@/components/ui/TodoList";
import { prisma } from "@/utils/database";
import { isAuthenticated } from "@/utils/session";

export default async function Page () {
  const user = await isAuthenticated()
  await new Promise(r => setTimeout(r, Math.random() * 200));
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="flex flex-col gap-2 w-96">
      <TodoList todos={todos} />
      <div className="divider"></div>
      <CreateTodo />
      <Link href="/todo/create" className="link">Create Todo</Link>
      {user &&
        <span>
          {user.name}({user.email})
          <SignoutButton />
        </span> ||
        <span>Unlogin</span>}
    </div>
  )
}
