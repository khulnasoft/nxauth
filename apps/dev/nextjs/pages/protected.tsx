import { useState, useEffect } from "react"
import { useSession } from "nxauth/react"

export default function Page() {
  const { status } = useSession({ required: true })
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect(() => {
    if (status === "loading") return
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected")
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [status])

  if (status === "loading") return "Loading..."

  // If session exists, display content
  return (
    <>
      <h1>Protected Page</h1>
      <p>
        <strong>{content}</strong>
      </p>
    </>
  )
}
