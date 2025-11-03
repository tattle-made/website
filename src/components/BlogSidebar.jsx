import React from "react"
import { Box, Heading, Text } from "grommet"
import { GatsbyImage } from "gatsby-plugin-image"
import { PlainLink } from "./atomic/TattleLinks"

/**
 * RelatedPostItem displays a related blog post with an optional cover image,
 * the title (linked to the blog page), and an excerpt preview.
 *
 * @param {object} props - Component props
 * @param {object} props.post - The related blog post data
 * @param {string} props.post.title - Title of the blog post
 * @param {string} props.post.slug - URL slug for the blog post
 * @param {object} [props.post.coverImage] - Gatsby image object for the cover image
 * @param {string} [props.post.excerpt] - Short excerpt or summary of the blog post
 * @returns {JSX.Element} The rendered related post item
 */

const RelatedPostItem = ({ post }) => (
  <Box
    margin={{ top: "medium", bottom: "medium" }}
    border={{ color: "light-4", size: "xsmall", side: "bottom" }}
    pad={{ bottom: "xsmall" }}
  >
    <PlainLink to={`/blog/${post.slug}`}>
      {post.coverImage && (
        <Box
          margin={{ bottom: "xsmall" }}
          overflow="hidden"
          className="w-full flex justify-center"
        >
          <GatsbyImage
            image={post.coverImage}
            alt={post.title || "Related post"}
            className="rounded max-w-[80%] self-center object-cover"
          />
        </Box>
      )}
      <Box className="w-full flex justify-center ">
        <Text margin={{ bottom: "xsmall" }} size="small">
          {post.title}
        </Text>
      </Box>
    </PlainLink>
    {post.excerpt && (
      <Text size="xsmall" color="dark-3" className="line-clamp-3 lg:text-start">
        {post.excerpt}
      </Text>
    )}
  </Box>
)

/**
 * BlogSidebar displays a list of related blog posts in the sidebar.
 *
 * @param {object} props - Component props
 * @param {Array<object>} props.relatedPosts - Array of related blog post objects
 * @returns {JSX.Element} The rendered sidebar with related posts or a fallback message
 */

const BlogSidebar = ({ relatedPosts }) => {
  return (
    <Box
      pad={"medium"}
      background="visuals-two"
      round="small"
      elevation="small"
      className="w-full lg:w-48 mt-10 lg:mt-0 lg:ml-10 flex flex-col"
    >
      <Heading level={3} className={`w-full mx-auto`}>
        Related Posts
      </Heading>

      <Box className=" flex flex-col w-full">
        {relatedPosts.length > 0 ? (
          relatedPosts.map((post) => (
            <RelatedPostItem key={post.id} post={post} />
          ))
        ) : (
          <Text color="dark-3" className="text-center">
            No related posts found
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default BlogSidebar
