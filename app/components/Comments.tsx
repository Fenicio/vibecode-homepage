"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Comment {
  id: number;
  content: string;
  user_id: number | null;
  story_id: number | null;
  created_at: string;
  updated_at: string;
  users: {
    id: number;
    name: string | null;
    avatar: string | null;
    image: string | null;
  } | null;
}

interface CommentsProps {
  storyId: number;
}

export default function Comments({ storyId }: CommentsProps) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchComments();
  }, [storyId]);

  async function fetchComments() {
    try {
      const res = await fetch(`/api/comments?story_id=${storyId}`);
      const data = await res.json();
      setComments(data);
      setLoading(false);
    } catch {
      console.error("Error fetching comments");
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!session?.user?.email) {
      setError("You must be logged in to comment");
      return;
    }

    setError("");
    try {
      // Get user ID from session
      const userRes = await fetch(`/api/users/me`);
      const userData = await userRes.json();

      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: newComment,
          user_id: userData.id,
          story_id: storyId,
        }),
      });

      if (res.ok) {
        setNewComment("");
        fetchComments();
      } else {
        setError("Failed to post comment");
      }
    } catch {
      setError("Failed to post comment");
    }
  }

  async function handleUpdate(commentId: number) {
    try {
      const res = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: editContent }),
      });

      if (res.ok) {
        setEditingId(null);
        setEditContent("");
        fetchComments();
      }
    } catch {
      console.error("Error updating comment");
    }
  }

  async function handleDelete(commentId: number) {
    if (!confirm("Are you sure you want to delete this comment?")) return;

    try {
      const res = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchComments();
      }
    } catch {
      console.error("Error deleting comment");
    }
  }

  if (loading) return <div className="mt-8"><p>Loading comments...</p></div>;

  return (
    <div className="mt-8 border-t pt-8">
      <h2 className="text-2xl font-bold mb-4">Comments ({comments.length})</h2>

      {/* Comment form */}
      {session ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            required
            rows={4}
            className="w-full border rounded px-3 py-2 mb-2"
          />
          {error && <p className="text-red-600 mb-2">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>
      ) : (
        <p className="mb-6 text-gray-600">
          Please <a href="/signin" className="text-blue-600 underline">sign in</a> to comment.
        </p>
      )}

      {/* Comments list */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border rounded p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {(comment.users?.image || comment.users?.avatar) && (
                  <img
                    src={comment.users.image || comment.users.avatar || ""}
                    alt={comment.users?.name || "User"}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div>
                  <p className="font-semibold">{comment.users?.name || "Anonymous"}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Edit/Delete buttons for comment owner */}
              {session?.user?.email && comment.users?.id && (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingId(comment.id);
                      setEditContent(comment.content);
                    }}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>

            {/* Comment content */}
            {editingId === comment.id ? (
              <div>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full border rounded px-3 py-2 mb-2"
                  rows={3}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(comment.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setEditContent("");
                    }}
                    className="bg-gray-400 text-white px-3 py-1 rounded text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-800">{comment.content}</p>
            )}
          </div>
        ))}

        {comments.length === 0 && (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
