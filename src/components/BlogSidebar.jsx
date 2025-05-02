import React from "react"
import { Box, Heading, Text } from "grommet"
import { GatsbyImage } from "gatsby-plugin-image"
import { PlainLink } from "./atomic/TattleLinks"

const RelatedPostItem = ({ post }) => (
  <Box
    margin={{ bottom: "small" }}
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

const BlogSidebar = ({ relatedPosts }) => {
  return (
    <Box
      pad={"medium"}
      background="visuals-two"
      round="small"
      elevation="small"
      width="100%"
      className="mt-10 lg:mt-0 lg:ml-10 w-full text-center flex flex-col"
    >
      <Heading level={3} className={`w-full text-center mx-auto`}>
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
