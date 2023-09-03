"use client"
export default function Error (
  { error, reset }: { error: Error, reset: () => void }
) {
  return (
    <div>
      <h1>Oops...</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}