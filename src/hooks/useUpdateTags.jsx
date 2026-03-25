import { graphql, useStaticQuery } from "gatsby"
import { projectSlugMaker } from "../lib/project-slug-maker"

/**
 * A custom Hook to provide all the data related to all tags (general and project tags) used in the updates. 
 *
 * @typedef {Object} TagsData
 * @property {Object} tagCounts - An object mapping each tag to its count.
 * @property {Object} projectTagsCounts - An object mapping each project slug (or tag) to its count.
 * @property {string[]} projectsTags - Array of all unique project slugs.
 * @property {string[]} uniqueTags - Array of all the unique tags.
 * @property {string[]} sortedUniqueTags - An array of unique tags sorted by their count in descending order.
 * @property {string[]} sortedProjectTags - An array of project slugs sorted by their count in descending order.
 * 
 * @returns {TagsData}
 */
export default function useUpdateTags() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { internal: { contentFilePath: { regex: "/.*/src/updates/" } }}) {
        nodes {
          frontmatter {
            tags
            project {
              fields {
                slug
              }
              frontmatter {
                name
              }
            }
          }
        }
      }
    }
  `)

  const updates = data?.allMdx?.nodes || []
  const tagCounts = {}
  const projectTagsCounts = {}
  const uniqueTagsSet = new Set()

  // Projects array from linked project nodes
  const projectsTags = [
    ...new Set(
      updates
        .map(node => node.frontmatter?.project?.fields?.slug)
        .filter(slug => typeof slug === "string" && slug.trim() !== "")
    ),
  ]

  updates.forEach(blog => {
    // Handle regular tags
    const blogTagsRaw = blog.frontmatter?.tags
    if (blogTagsRaw) {
      const blogTags = blogTagsRaw.split(",").map(tag => tag.trim())
      blogTags.forEach(tag => uniqueTagsSet.add(tag))
      blogTags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    }

    // Handle linked project tags
    const projectSlug = blog.frontmatter?.project?.fields?.slug
    if (projectSlug) {
      const slug = projectSlugMaker(projectSlug)
      projectTagsCounts[slug] = (projectTagsCounts[slug] || 0) + 1
    }
  })

  const uniqueTags = Array.from(uniqueTagsSet)
  const sortedUniqueTags = uniqueTags.sort((a, b) => tagCounts[b] - tagCounts[a])
  const sortedProjectTags = projectsTags.sort(
    (a, b) => projectTagsCounts[b] - projectTagsCounts[a]
  )

  return {
    tagCounts,
    projectTagsCounts,
    projectsTags,
    uniqueTags,
    sortedUniqueTags,
    sortedProjectTags,
  }
}