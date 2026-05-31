import React, { useState, useEffect, useCallback } from "react"
import { Box, Text, Heading } from "grommet"
import { useAuth } from "../context/AuthContext"
import { apiFetch } from "../lib/api-client"

// ─── Design tokens ───────────────────────────────────────────────────────────
const FONT = { fontFamily: "Raleway" }
const NAVY = "#252653"
const CORAL = "#E76D67"
const CREAM = "#edc9c4"
const BORDER = "#e0d8f0"
const BG_CARD = "#faf8ff"

const inputStyle = {
  ...FONT,
  fontSize: "14px",
  padding: "10px 12px",
  borderRadius: "0.4em",
  border: `1px solid ${BORDER}`,
  background: BG_CARD,
  color: NAVY,
  width: "100%",
  boxSizing: "border-box",
}

const btnPrimary = (disabled) => ({
  ...FONT,
  fontWeight: 700,
  fontSize: "14px",
  background: disabled ? "#aaa" : NAVY,
  color: CREAM,
  padding: "9px 22px",
  borderRadius: "0.4em",
  border: "none",
  cursor: disabled ? "not-allowed" : "pointer",
  width: "fit-content",
})

const btnGhost = {
  ...FONT,
  fontSize: "13px",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "2px 0",
  color: "#666",
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

// ─── Auth panel ──────────────────────────────────────────────────────────────
function AuthPanel() {
  const { login, register } = useAuth()
  const [tab, setTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const switchTab = t => { setTab(t); setError(null) }

  const handleLogin = async e => {
    e.preventDefault()
    setLoading(true); setError(null)
    const r = await login(email, password)
    setLoading(false)
    if (!r.ok) setError(r.error)
  }

  const handleRegister = async e => {
    e.preventDefault()
    setLoading(true); setError(null)
    const r = await register({ email, password, display_name: displayName })
    setLoading(false)
    if (!r.ok) {
      const msgs = Object.values(r.errors || {}).flat()
      setError(msgs.length ? msgs.join(". ") : "Registration failed.")
    }
  }

  return (
    <Box pad="medium" background={BG_CARD} round="small"
         border={{ color: BORDER, size: "xsmall" }} gap="small">
      <Text style={{ ...FONT, color: NAVY, fontWeight: 600, fontSize: "15px" }}>
        Sign in to leave a comment
      </Text>

      <Box direction="row" gap="medium" border={{ side: "bottom", color: BORDER }}>
        {[{ key: "login", label: "Sign in" }, { key: "register", label: "Create account" }].map(
          ({ key, label }) => (
            <button key={key} onClick={() => switchTab(key)} style={{
              ...FONT,
              fontWeight: tab === key ? 700 : 400,
              fontSize: "14px",
              background: "none",
              border: "none",
              borderBottom: tab === key ? `2px solid ${CORAL}` : "2px solid transparent",
              marginBottom: "-1px",
              color: tab === key ? CORAL : "#888",
              cursor: "pointer",
              padding: "6px 2px",
            }}>
              {label}
            </button>
          )
        )}
      </Box>

      <form onSubmit={tab === "login" ? handleLogin : handleRegister}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {tab === "register" && (
          <input style={inputStyle} placeholder="Display name (shown publicly)"
                 value={displayName} onChange={e => setDisplayName(e.target.value)}
                 required minLength={2} maxLength={50} />
        )}
        <input style={inputStyle} type="email" placeholder="Email"
               value={email} onChange={e => setEmail(e.target.value)} required />
        <input style={inputStyle} type="password" placeholder="Password"
               value={password} onChange={e => setPassword(e.target.value)}
               required minLength={8} />
        {error && <Text style={{ ...FONT, color: "#c0392b", fontSize: "13px" }}>{error}</Text>}
        <button type="submit" disabled={loading} style={btnPrimary(loading)}>
          {loading ? "…" : tab === "login" ? "Sign in" : "Create account"}
        </button>
      </form>
    </Box>
  )
}

// ─── Comment form ─────────────────────────────────────────────────────────────
function CommentForm({ slug, parentId = null, onPosted, onCancel, compact = false }) {
  const [body, setBody] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!body.trim()) return
    setSubmitting(true); setError(null)

    const payload = { slug, body }
    if (parentId) payload.parent_id = parentId

    const res = await apiFetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    setSubmitting(false)

    if (res.ok) {
      setBody("")
      onPosted(data.comment)
    } else {
      setError(data.error || "Something went wrong.")
    }
  }

  return (
    <form onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <textarea value={body} onChange={e => setBody(e.target.value)}
                placeholder={parentId ? "Write a reply…" : "Write a comment…"}
                required maxLength={2000}
                style={{ ...inputStyle, minHeight: compact ? "70px" : "90px", resize: "vertical" }} />
      {error && <Text style={{ ...FONT, color: "#c0392b", fontSize: "13px" }}>{error}</Text>}
      <Box direction="row" gap="small">
        <button type="submit" disabled={submitting || !body.trim()} style={btnPrimary(submitting || !body.trim())}>
          {submitting ? "Posting…" : parentId ? "Post reply" : "Post comment"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} style={{ ...btnGhost, color: "#999" }}>
            Cancel
          </button>
        )}
      </Box>
    </form>
  )
}

// ─── Vote buttons ─────────────────────────────────────────────────────────────
function VoteButtons({ commentId, upvotes, downvotes, currentVote, canVote, onVoteChange }) {
  const [optimistic, setOptimistic] = useState({ upvotes, downvotes, currentVote })

  useEffect(() => {
    setOptimistic({ upvotes, downvotes, currentVote })
  }, [upvotes, downvotes, currentVote])

  const handleVote = async type => {
    if (!canVote) return
    const prev = { ...optimistic }

    // Optimistic update
    if (optimistic.currentVote === type) {
      // Toggle off
      setOptimistic(s => ({
        upvotes: type === "up" ? s.upvotes - 1 : s.upvotes,
        downvotes: type === "down" ? s.downvotes - 1 : s.downvotes,
        currentVote: null,
      }))
      const res = await apiFetch(`/api/comments/${commentId}/vote`, { method: "DELETE" })
      if (!res.ok) setOptimistic(prev)
      else onVoteChange && onVoteChange()
    } else {
      setOptimistic(s => ({
        upvotes: type === "up"
          ? s.upvotes + 1
          : s.currentVote === "up" ? s.upvotes - 1 : s.upvotes,
        downvotes: type === "down"
          ? s.downvotes + 1
          : s.currentVote === "down" ? s.downvotes - 1 : s.downvotes,
        currentVote: type,
      }))
      const res = await apiFetch(`/api/comments/${commentId}/vote`, {
        method: "POST",
        body: JSON.stringify({ vote_type: type }),
      })
      if (!res.ok) setOptimistic(prev)
      else onVoteChange && onVoteChange()
    }
  }

  const voteBtn = (type, icon, count) => {
    const active = optimistic.currentVote === type
    return (
      <button
        onClick={() => handleVote(type)}
        title={canVote ? (active ? `Remove ${type}vote` : `${type === "up" ? "Upvote" : "Downvote"}`) : "Only approved users can vote"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          ...FONT,
          fontSize: "13px",
          background: "none",
          border: `1px solid ${active ? CORAL : BORDER}`,
          borderRadius: "0.3em",
          padding: "3px 8px",
          color: active ? CORAL : "#888",
          cursor: canVote ? "pointer" : "default",
          opacity: canVote ? 1 : 0.6,
        }}
      >
        {icon} {count}
      </button>
    )
  }

  return (
    <Box direction="row" gap="xsmall" align="center">
      {voteBtn("up", "▲", optimistic.upvotes)}
      {voteBtn("down", "▼", optimistic.downvotes)}
    </Box>
  )
}

// ─── Single comment card ──────────────────────────────────────────────────────
function CommentCard({ comment, slug, depth, user, onReplyPosted }) {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const canVote = user?.comment_status === "approved"
  const canReply = depth === 0 // max 2 levels

  const handleReplyPosted = reply => {
    setShowReplyForm(false)
    onReplyPosted(reply)
  }

  return (
    <Box
      pad="medium"
      background={BG_CARD}
      round="small"
      border={{ color: BORDER, size: "xsmall" }}
      gap="xsmall"
      style={{ marginLeft: depth > 0 ? "24px" : 0, borderLeft: depth > 0 ? `3px solid ${BORDER}` : undefined }}
    >
      <Box direction="row" justify="between" align="center" wrap>
        <Text style={{ ...FONT, fontWeight: 700, color: NAVY, fontSize: "14px" }}>
          {comment.user.display_name}
        </Text>
        <Text style={{ ...FONT, color: "#aaa", fontSize: "12px" }}>
          {formatDate(comment.inserted_at)}
        </Text>
      </Box>

      <Text style={{ ...FONT, color: NAVY, fontSize: "14px", lineHeight: "1.65", whiteSpace: "pre-wrap" }}>
        {comment.body}
      </Text>

      <Box direction="row" justify="between" align="center" margin={{ top: "xsmall" }}>
        <VoteButtons
          commentId={comment.id}
          upvotes={comment.upvotes}
          downvotes={comment.downvotes}
          currentVote={comment.current_user_vote}
          canVote={canVote}
        />
        {canReply && user && (
          <button onClick={() => setShowReplyForm(v => !v)} style={{ ...btnGhost, color: CORAL }}>
            {showReplyForm ? "Cancel reply" : "Reply"}
          </button>
        )}
      </Box>

      {showReplyForm && (
        <Box margin={{ top: "xsmall" }}>
          <CommentForm slug={slug} parentId={comment.id}
                       onPosted={handleReplyPosted}
                       onCancel={() => setShowReplyForm(false)}
                       compact />
        </Box>
      )}
    </Box>
  )
}

// ─── Comment Section ──────────────────────────────────────────────────────────
export default function CommentSection({ slug }) {
  const { user, loading: authLoading, backendOnline, logout } = useAuth()
  const [comments, setComments] = useState([])
  const [loadingComments, setLoadingComments] = useState(true)
  // Track if this user's session comment_status has flipped to "pending"
  // after posting their first comment (optimistic local update).
  const [localPending, setLocalPending] = useState(false)

  const fetchComments = useCallback(() => {
    if (!slug) return
    apiFetch(`/api/comments?slug=${encodeURIComponent(slug)}`)
      .then(r => r.json())
      .then(({ comments }) => setComments(comments ?? []))
      .catch(() => {})
      .finally(() => setLoadingComments(false))
  }, [slug])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  const handleNewComment = comment => {
    if (comment.status === "pending") {
      // First comment — held for moderation, don't add to list
      setLocalPending(true)
    } else {
      // Published immediately (approved user)
      setComments(prev => [...prev, { ...comment, replies: [] }])
    }
  }

  const handleNewReply = (parentId, reply) => {
    setComments(prev =>
      prev.map(c =>
        c.id === parentId
          ? { ...c, replies: [...(c.replies || []), reply] }
          : c
      )
    )
  }

  const commentStatus = localPending ? "pending" : user?.comment_status

  if (!backendOnline) return null

  return (
    <Box pad={{ vertical: "large" }}
         border={{ side: "top", color: BORDER, size: "xsmall" }}
         gap="medium">
      <Heading level={3} margin="none"
               style={{ ...FONT, color: NAVY, fontWeight: 700, fontSize: "20px" }}>
        {loadingComments
          ? "Comments"
          : `Comments${comments.length > 0 ? ` (${comments.length})` : ""}`}
      </Heading>

      {/* Comment list */}
      {loadingComments ? (
        <Text style={{ ...FONT, color: "#aaa", fontSize: "14px" }}>Loading…</Text>
      ) : comments.length === 0 ? (
        <Text style={{ ...FONT, color: "#888", fontSize: "14px" }}>
          No comments yet. Be the first!
        </Text>
      ) : (
        <Box gap="small">
          {comments.map(c => (
            <Box key={c.id} gap="small">
              <CommentCard comment={c} slug={slug} depth={0} user={user}
                           onReplyPosted={reply => handleNewReply(c.id, reply)} />
              {(c.replies || []).map(r => (
                <CommentCard key={r.id} comment={r} slug={slug} depth={1} user={user}
                             onReplyPosted={() => {}} />
              ))}
            </Box>
          ))}
        </Box>
      )}

      {/* Bottom section: auth state drives what we render */}
      {!authLoading && (
        <>
          {!user ? (
            <AuthPanel />
          ) : commentStatus === "banned" ? (
            <Text style={{ ...FONT, color: "#c0392b", fontSize: "14px" }}>
              Your account has been suspended.
            </Text>
          ) : commentStatus === "pending" ? (
            <Box pad="medium" background="#fff8e1" round="small"
                 border={{ color: "#ffe082", size: "xsmall" }}>
              <Text style={{ ...FONT, color: "#7a6000", fontSize: "14px" }}>
                Your first comment is awaiting moderation. You'll be able to comment
                freely once a moderator approves it.
              </Text>
            </Box>
          ) : (
            <>
              <Box direction="row" justify="between" align="center">
                <Text style={{ ...FONT, color: "#666", fontSize: "13px" }}>
                  Commenting as <strong style={{ color: NAVY }}>{user.display_name}</strong>
                </Text>
                <button onClick={logout} style={{ ...btnGhost, textDecoration: "underline" }}>
                  Sign out
                </button>
              </Box>
              <CommentForm slug={slug} onPosted={handleNewComment} />
            </>
          )}
        </>
      )}
    </Box>
  )
}
