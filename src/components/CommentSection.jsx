import React, { useState, useEffect } from "react"
import { Box, Text, Heading } from "grommet"
import { useAuth } from "../context/AuthContext"
import { apiFetch } from "../lib/api-client"

const FONT = { fontFamily: "Raleway" }
const NAVY = "#252653"
const CORAL = "#E76D67"
const CREAM = "#edc9c4"

const inputStyle = {
  ...FONT,
  fontSize: "14px",
  padding: "10px 12px",
  borderRadius: "0.4em",
  border: "1px solid #d0c9e4",
  background: "#faf8ff",
  color: NAVY,
  width: "100%",
  boxSizing: "border-box",
}

const submitButtonStyle = (disabled) => ({
  ...FONT,
  fontWeight: 700,
  fontSize: "14px",
  background: NAVY,
  color: CREAM,
  padding: "10px 24px",
  borderRadius: "0.4em",
  border: "none",
  cursor: disabled ? "not-allowed" : "pointer",
  width: "fit-content",
  opacity: disabled ? 0.65 : 1,
})

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function AuthPanel() {
  const { login, register } = useAuth()
  const [tab, setTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const switchTab = t => {
    setTab(t)
    setError(null)
  }

  const handleLogin = async e => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const result = await login(email, password)
    setLoading(false)
    if (!result.ok) setError(result.error)
  }

  const handleRegister = async e => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const result = await register({ email, password, display_name: displayName })
    setLoading(false)
    if (!result.ok) {
      const msgs = Object.values(result.errors || {}).flat()
      setError(msgs.length ? msgs.join(". ") : "Registration failed.")
    }
  }

  return (
    <Box
      pad="medium"
      background="#faf8ff"
      round="small"
      border={{ color: "#e0d8f0", size: "xsmall" }}
      gap="small"
    >
      <Text style={{ ...FONT, color: NAVY, fontWeight: 600, fontSize: "15px" }}>
        Sign in to leave a comment
      </Text>

      <Box direction="row" gap="medium" border={{ side: "bottom", color: "#e0d8f0" }}>
        {[
          { key: "login", label: "Sign in" },
          { key: "register", label: "Create account" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => switchTab(key)}
            style={{
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
            }}
          >
            {label}
          </button>
        ))}
      </Box>

      <form
        onSubmit={tab === "login" ? handleLogin : handleRegister}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {tab === "register" && (
          <input
            style={inputStyle}
            placeholder="Display name (shown publicly)"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            required
            minLength={2}
            maxLength={50}
          />
        )}
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={8}
        />
        {error && (
          <Text style={{ ...FONT, color: "#c0392b", fontSize: "13px" }}>{error}</Text>
        )}
        <button type="submit" disabled={loading} style={submitButtonStyle(loading)}>
          {loading ? "…" : tab === "login" ? "Sign in" : "Create account"}
        </button>
      </form>
    </Box>
  )
}

function CommentForm({ slug, onPosted }) {
  const { user, logout } = useAuth()
  const [body, setBody] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!body.trim()) return
    setSubmitting(true)
    setError(null)
    const res = await apiFetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ slug, body }),
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
    <Box gap="small">
      <Box direction="row" justify="between" align="center">
        <Text style={{ ...FONT, color: "#666", fontSize: "13px" }}>
          Commenting as <strong style={{ color: NAVY }}>{user.display_name}</strong>
        </Text>
        <button
          onClick={logout}
          style={{
            ...FONT,
            fontSize: "12px",
            color: "#888",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Sign out
        </button>
      </Box>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Write a comment…"
          required
          maxLength={2000}
          style={{
            ...inputStyle,
            minHeight: "90px",
            resize: "vertical",
          }}
        />
        {error && (
          <Text style={{ ...FONT, color: "#c0392b", fontSize: "13px" }}>{error}</Text>
        )}
        <button
          type="submit"
          disabled={submitting || !body.trim()}
          style={submitButtonStyle(submitting || !body.trim())}
        >
          {submitting ? "Posting…" : "Post comment"}
        </button>
      </form>
    </Box>
  )
}

export default function CommentSection({ slug }) {
  const { user, loading: authLoading } = useAuth()
  const [comments, setComments] = useState([])
  const [loadingComments, setLoadingComments] = useState(true)

  useEffect(() => {
    if (!slug) return
    setLoadingComments(true)
    apiFetch(`/api/comments?slug=${encodeURIComponent(slug)}`)
      .then(r => r.json())
      .then(({ comments }) => setComments(comments ?? []))
      .catch(() => {})
      .finally(() => setLoadingComments(false))
  }, [slug])

  return (
    <Box
      pad={{ vertical: "large" }}
      border={{ side: "top", color: "#e0d8f0", size: "xsmall" }}
      gap="medium"
    >
      <Heading
        level={3}
        margin="none"
        style={{ ...FONT, color: NAVY, fontWeight: 700, fontSize: "20px" }}
      >
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
            <Box
              key={c.id}
              pad="medium"
              background="#faf8ff"
              round="small"
              border={{ color: "#e0d8f0", size: "xsmall" }}
              gap="xsmall"
            >
              <Box direction="row" justify="between" align="center" wrap>
                <Text style={{ ...FONT, fontWeight: 700, color: NAVY, fontSize: "14px" }}>
                  {c.user.display_name}
                </Text>
                <Text style={{ ...FONT, color: "#aaa", fontSize: "12px" }}>
                  {formatDate(c.inserted_at)}
                </Text>
              </Box>
              <Text
                style={{
                  ...FONT,
                  color: NAVY,
                  fontSize: "14px",
                  lineHeight: "1.65",
                  whiteSpace: "pre-wrap",
                }}
              >
                {c.body}
              </Text>
            </Box>
          ))}
        </Box>
      )}

      {/* Auth check is deferred until hydration to avoid SSR flicker */}
      {!authLoading && (
        user
          ? <CommentForm slug={slug} onPosted={c => setComments(prev => [...prev, c])} />
          : <AuthPanel />
      )}
    </Box>
  )
}
