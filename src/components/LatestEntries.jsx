import React, { useContext } from "react"
import { Box, ResponsiveContext, Text } from "grommet"
import { PlainLink } from "./atomic/TattleLinks"
import { ExternalLink } from "react-feather"

/**
 * Formats a date string to "MMM DD YYYY" format (e.g., "Jun 22 2025").
 *
 * @param {string|Date} date - The original date input.
 * @returns {string} Formatted date string.
 */

function formatDateLatestEntries(date) {
  let dateString = new Date(date).toDateString("ind")
  return dateString.split(" ").slice(1).join(" ")
}

/**
 * @param {string} author
 */

/**
 * Formats the author string to show abbreviated form (e.g., "John Doe et al.").
 *
 * @param {string} author - Full author name string, usually comma-separated.
 * @returns {string} Abbreviated author string.
 */

function formatAuthor(author) {
  if (typeof author !== "string") return ""
  let firstDividerIndex = -1
  let dividers = ["&", "and", "And", ","]
  for (let d of dividers) {
    let i = author.indexOf(d)

    if (firstDividerIndex === -1) {
      firstDividerIndex = Math.max(firstDividerIndex, i)
    } else {
      firstDividerIndex = Math.max(firstDividerIndex, i)
    }
  }
  if (firstDividerIndex === -1) return author

  author = author.substring(0, firstDividerIndex).trim().concat(" et al.")

  return author
}

/**
 * Renders a list of blog or update entries based on the `isUpdate` flag.
 *
 * @param {Object} props
 * @param {Object[]} props.entries - Array of entry objects (blog/update).
 * @param {boolean} props.isUpdate - Determines if the list is for updates or blogs.
 * @returns {JSX.Element} Rendered list of entries.
 */

// Component to Display latest entries of Blogs and Updates
export function LatestEntries({ entries, isUpdate }) {
  const size = useContext(ResponsiveContext)

  return (
    <Box margin={{ top: "1em" }}>
      {entries.map((entry,key) => {
        return (
          <Box
            key={key}
            width={"full"}
            flex
            direction="row-responsive"
            align="center"
            margin={{ bottom: "1em" }}
          >
            <Box style={{ minWidth: "7em" }}>
              <Text size={size === "small" ? "xsmall" : "small"}>
                {formatDateLatestEntries(entry.frontmatter.date)}
              </Text>
            </Box>

            <Box
              style={{ textAlign: "start" }}
              pad={{ horizontal: size !== "small" ? "1em" : "0" }}
            >
              {isUpdate ? (
                entry.frontmatter.url && entry.frontmatter.url.length !== 0 ? (
                  <PlainLink
                    href={entry.frontmatter.url}
                    target={"_blank"}
                    className="flex items-center space-x-1"
                  >
                    <Text size="small" weight={600} truncate>
                      {entry.frontmatter.title}
                    </Text>
                    <span><ExternalLink size={14} /></span>
                  </PlainLink>
                ) : (
                  <Text size="small" weight={600} truncate>
                    {entry.frontmatter.title}
                  </Text>
                )
              ) : (
                <Text size="small" weight={600} truncate>
                  <PlainLink to={`/blog/${entry.fields.slug}`}>
                    {entry.frontmatter.name}
                  </PlainLink>
                </Text>
              )}
            </Box>

            {!isUpdate && (
              <Box
                // width={"fit"}
                style={{
                  textAlign: "end",
                  minWidth: "7em",
                  flexGrow: 1,
                  flexShrink: 0,
                }}
                align={size === "small" ? "start" : "end"}
              >
                <Text size="small">
                  {formatAuthor(entry.frontmatter?.author)}
                </Text>
              </Box>
            )}
          </Box>
        )
      })}
    </Box>
  )
}
