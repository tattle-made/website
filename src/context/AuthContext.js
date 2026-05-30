import React, { createContext, useContext, useState, useEffect } from "react"
import { apiFetch } from "../lib/api-client"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [backendOnline, setBackendOnline] = useState(null)

  useEffect(() => {
    apiFetch("/api/auth/me")
      .then(r => r.json())
      .then(({ user }) => {
        setBackendOnline(true)
        setUser(user ?? null)
      })
      .catch(() => setBackendOnline(false))
      .finally(() => setLoading(false))
  }, [])

  const login = async (email, password) => {
    const res = await apiFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (res.ok) {
      setUser(data.user)
      return { ok: true }
    }
    return { ok: false, error: data.error }
  }

  const register = async attrs => {
    const res = await apiFetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(attrs),
    })
    const data = await res.json()
    if (res.ok) {
      setUser(data.user)
      return { ok: true }
    }
    return { ok: false, errors: data.errors }
  }

  const logout = async () => {
    await apiFetch("/api/auth/logout", { method: "DELETE" })
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, backendOnline, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
