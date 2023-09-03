"use client"
import { AnimatePresence, motion } from "framer-motion"
import TodoItem from "./TodoItem"

type Todo = {
  id: string
  title: string
  done: boolean
}

export default function TodoList ({ todos }: { todos: Todo[] }) {
  return (
    <AnimatePresence>
      {todos.map((todo, i) => (
        <motion.div
          key={todo.id}
          transition={{ delay: i * 0.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 30 }}
        >
          <TodoItem {...todo} />
        </motion.div>
      ))}
    </AnimatePresence>
  )
}