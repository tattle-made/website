import { graphql, useStaticQuery } from "gatsby"
import { projectSlugMaker } from "../lib/project-slug-maker"

/**
 * A custom Hook to provide all the data related to all tags (general and project tags) used in the Blogs. 
 *
 * @typedef {Object} TagsData
 * @property {Object} tagCounts - An object mapping each tag to its count.
 * @property {Object} projectTagsCounts - An object mapping each project slug (or tag) to its count.
 * @property {string[]} projectsTags - Array of all unique project slugs.
 * @property {string[]} uniqueTags - Array of all the unique tags.
 * @property {string[]} sortedUniqueTags - An array of unique tags sorted by their count in descending order. Entries same as uniqueTags, but sorted
 * @property {string[]} sortedProjectTags - An array of project slugs sorted by their count in descending order. Entries same as projectsTags, but sorted
 * 
 * @returns {TagsData}
 * 
 */
export default function useBlogTags() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/.*/src/blog/" } }) {
        nodes {
          frontmatter {
            tags
            project
          }
        }
      }
    }
  `)

  const blogs = data.allMdx.nodes
  const tagCounts = {}
  const projectTagsCounts = {}
  const uniqueTagsSet = new Set()
  const projectsTags = [
    ...new Set(
      blogs
        .map(node => node.frontmatter.project)
        .filter(project => typeof project === "string" && project.trim() !== "")
        .map(project => projectSlugMaker(project))
    ),
  ]

  blogs.forEach(blog => {
    if (blog.frontmatter.tags) {
      const blogTags = blog.frontmatter.tags.split(",").map(tag => tag.trim())
      // tags.push(...blogTags);
      blogTags.forEach(tag => uniqueTagsSet.add(tag))
      blogTags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    }
    //For Project Tags
    const project = blog.frontmatter.project
    if (project && typeof project === "string" && project.trim() !== "") {
      let projectSlug = projectSlugMaker(blog.frontmatter.project)
      projectTagsCounts[projectSlug] = (projectTagsCounts[projectSlug] || 0) + 1
    }
  })

  const uniqueTags = Array.from(uniqueTagsSet)
  const sortedUniqueTags = uniqueTags.sort(
    (a, b) => tagCounts[b] - tagCounts[a]
  )

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
