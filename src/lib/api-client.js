const API_URL = process.env.GATSBY_API_URL || "http://localhost:4000"

export async function apiFetch(path, options = {}) {
  const { headers = {}, ...rest } = options
  return fetch(`${API_URL}${path}`, {
    ...rest,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  })
}
