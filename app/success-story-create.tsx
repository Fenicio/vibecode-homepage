"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SuccessStoryForm } from "@/components/SuccessStoryForm"

export default function SuccessStoryCreateView() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <div className="p-8 text-center">Loading...</div>
  }

  if (!session) {
    // Optionally, redirect to sign-in or show a message
    router.push("/signin")
    return <div className="p-8 text-center">Redirecting to sign in...</div>
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Create a Success Story</h1>
      <SuccessStoryForm />
    </div>
  )
}
