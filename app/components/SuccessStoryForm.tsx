"use client"

import * as React from "react"
import { useState } from "react"
import { ComboBox, ComboBoxOption } from "@/components/ui/combobox"
import { Editor } from "@/components/blocks/editor-00/editor"
import { SerializedEditorState } from "lexical"
import { Button } from "@/components/ui/button"

// Example tool/technology options. Replace with API data as needed.
const TOOL_OPTIONS: ComboBoxOption[] = [
  { value: "nextjs", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "nodejs", label: "Node.js" },
  { value: "typescript", label: "TypeScript" },
  { value: "tailwind", label: "Tailwind CSS" },
]

export function SuccessStoryForm({
  onSubmit,
  initialTitle = "",
  initialTags = [],
  initialEditorState,
}: {
  onSubmit?: (data: { title: string; tags: string[]; content: SerializedEditorState }) => void
  initialTitle?: string
  initialTags?: string[]
  initialEditorState?: SerializedEditorState
}) {
  const [title, setTitle] = useState(initialTitle)
  const [tags, setTags] = useState<string[]>(initialTags)
  const [editorState, setEditorState] = useState<SerializedEditorState | undefined>(initialEditorState)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    if (onSubmit && editorState) {
      onSubmit({ title, tags, content: editorState })
    }
    setSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-4 bg-background rounded-lg shadow">
      <div>
        <label htmlFor="story-title" className="block font-medium mb-1">Title</label>
        <input
          id="story-title"
          type="text"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter story title"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Tags (Tools & Technologies)</label>
        <ComboBox
          options={TOOL_OPTIONS}
          selectedValue={tags}
          onChange={v => setTags(Array.isArray(v) ? v : [v])}
          multiselect
          placeholder="Select tools/technologies..."
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Story Content (Markdown)</label>
        <Editor
          editorSerializedState={editorState}
          onSerializedChange={setEditorState}
        />
      </div>
      <Button type="submit" disabled={submitting || !title || !editorState} className="w-full mt-2">
        {submitting ? "Saving..." : "Save Story"}
      </Button>
    </form>
  )
}
