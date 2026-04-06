import React from "react"
import { Box, Text } from "grommet"
import { PlainLink } from "./atomic/TattleLinks"
import { ExternalLink } from "react-feather"

/**
 * Safe date formatter (SSR-safe)
 */
function formatDateLatestEntries(date) {
  if (!date) return ""

  const d = new Date(date)

  if (isNaN(d.getTime())) return ""

  return d.toDateString().split(" ").slice(1).join(" ")
}

/**
 * Safe author formatter
 */
function formatAuthor(author) {
  if (!author || typeof author !== "string") return ""

  const dividers = ["&", "and", "And", ","]
  let index = -1

  dividers.forEach(d => {
    const i = author.indexOf(d)
    if (i !== -1 && (index === -1 || i < index)) {
      index = i
    }
  })

  if (index === -1) return author

  return author.substring(0, index).trim() + " et al."
}

export function LatestEntries({ entries = [], isUpdate }) {
  if (!Array.isArray(entries)) return null

  return (
    <Box margin={{ top: "1em" }}>
      {entries.map((entry) => {
        const id =
          entry?.fields?.slug ||
          entry?.frontmatter?.title ||
          Math.random().toString()

        return (
          <Box
            key={id}
            width="full"
            direction="row-responsive"
            align="center"
            margin={{ bottom: "1em" }}
          >
            {/* DATE */}
            <Box style={{ minWidth: "7em" }}>
              <Text size="small" className="text-xs sm:text-sm">
                {formatDateLatestEntries(entry?.frontmatter?.date)}
              </Text>
            </Box>

            {/* TITLE */}
            <Box
              style={{ textAlign: "start" }}
              className="px-0 sm:px-[1em]"
            >
              {isUpdate ? (
                entry?.frontmatter?.url ? (
                  <PlainLink
                    href={entry.frontmatter.url}
                    target="_blank"
                    className="flex items-center space-x-1"
                  >
                    <Text size="small" weight={600} truncate>
                      {entry?.frontmatter?.title}
                    </Text>
                    <span>
                      <ExternalLink size={14} />
                    </span>
                  </PlainLink>
                ) : (
                  <Text size="small" weight={600} truncate>
                    {entry?.frontmatter?.title}
                  </Text>
                )
              ) : (
                <Text size="small" weight={600} truncate>
                  <PlainLink to={`/blog/${entry?.fields?.slug}`}>
                    {entry?.frontmatter?.name}
                  </PlainLink>
                </Text>
              )}
            </Box>

            {/* AUTHOR */}
            {!isUpdate && (
              <Box
                style={{
                  textAlign: "end",
                  minWidth: "7em",
                  flexGrow: 1,
                  flexShrink: 0,
                }}
                className="items-start sm:items-end"
              >
                <Text size="small">
                  {formatAuthor(
                    entry?.frontmatter?.author
                      ?.map(a => a?.frontmatter?.name)
                      ?.filter(Boolean)
                      ?.join(", ")
                  )}
                </Text>
              </Box>
            )}
          </Box>
        )
      })}
    </Box>
  )
}