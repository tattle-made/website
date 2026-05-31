import React, { useState } from "react"
import { Box, Text, TextInput, Button, Heading } from "grommet"
import { useAuth } from "../context/AuthContext"
import { apiFetch } from "../lib/api-client"

const LS_KEY = "tattle_blog_subscribed"

export default function BlogSubscribe() {
  const { user, backendOnline } = useAuth()

  if (!backendOnline) return null
  if (user?.is_subscriber) return null
  if (!user && typeof window !== "undefined" && localStorage.getItem(LS_KEY)) return null

  return <BlogSubscribeForm user={user} />
}

function BlogSubscribeForm({ user }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle | submitting | done | error
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMsg("")

    try {
      const body = user ? {} : { email }
      const res = await apiFetch("/api/blog/subscribe", {
        method: "POST",
        body: JSON.stringify(body),
      })
      const data = await res.json()

      if (res.ok) {
        if (!user) localStorage.setItem(LS_KEY, "1")
        setStatus("done")
      } else {
        setErrorMsg(data.error || "Something went wrong.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Could not connect. Please try again.")
      setStatus("error")
    }
  }

  if (status === "done") {
    return (
      <Box
        background="light-2"
        pad="medium"
        round="small"
        align="center"
        gap="xsmall"
      >
        <Text size="large" weight={600}>You're subscribed!</Text>
        <Text size="small" color="dark-4">
          We'll let you know when new posts go live.
        </Text>
      </Box>
    )
  }

  return (
    <Box
      background="light-2"
      pad="medium"
      round="small"
      gap="small"
    >
      <Heading level={3} margin="none">Stay in the loop</Heading>
      <Text size="small" color="dark-4">
        Get notified when we publish new posts.
      </Text>

      <form onSubmit={handleSubmit}>
        <Box direction="row-responsive" gap="small" align="end">
          {!user && (
            <Box flex>
              <TextInput
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={status === "submitting"}
              />
            </Box>
          )}
          {user && (
            <Text size="small" color="dark-4">
              Subscribing as <strong>{user.email}</strong>
            </Text>
          )}
          <Button
            type="submit"
            label={status === "submitting" ? "Subscribing…" : "Subscribe"}
            primary
            disabled={status === "submitting"}
            style={{
              display: "inline-block",
              fontFamily: "Raleway",
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontSize: "14px",
              background: "brand",
              color: "accent-3",
              borderRadius: "0.6em",
              textDecoration: "none",
            }}
          />
        </Box>
      </form>

      {status === "error" && (
        <Text size="small" color="status-error">{errorMsg}</Text>
      )}
    </Box>
  )
}
