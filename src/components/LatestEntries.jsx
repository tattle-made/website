import React, { useContext } from "react"
import { Box, ResponsiveContext, Text } from "grommet"
import { PlainLink } from "./atomic/TattleLinks"
import { ExternalLink } from "react-feather"

function formatDateLatestEntries(date) {
  let dateString = new Date(date).toDateString("ind")
  return dateString.split(" ").slice(1).join(" ")
}

/**
 * @param {string} author
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
