import React from 'react';
import { Box, Heading, Text, ResponsiveContext } from 'grommet';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PlainLink } from './atomic/TattleLinks';


const RelatedPostItem = ({ post }) => (
  <Box
    margin={{ bottom: 'small' }}
    border={{ color: 'light-4', size: 'xsmall', side: 'bottom' }}
    pad={{ bottom: 'xsmall' }}
  >
    <PlainLink to={`/blog/${post.slug}`}>
      {post.coverImage && (
        <Box margin={{ bottom: 'xsmall' }} height="130px" overflow="hidden">
          <GatsbyImage
            image={post.coverImage}
            alt={post.title || "Related post"}
            className="rounded w-full h-full object-cover"
          />
        </Box>
      )}
      <Heading
        level={5}
        margin={{ bottom: 'xsmall' }}
        className="font-[Bitter] text-[0.9rem] leading-[1.3]"
      >
        {post.title}
      </Heading>
    </PlainLink>
    {post.excerpt && (
      <Text
        size="small"
        color="dark-3"
        className="line-clamp-3"
      >
        {post.excerpt}
      </Text>
    )}
  </Box>
);

const BlogSidebar = ({ relatedPosts }) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        const isMobile = size === "small";
        const isLarge = size === "large" || size === "xlarge";
        
        return (
          <Box
            pad={isMobile ? "small" : isLarge ? "medium" : "medium"}
            background="visuals-two"
            round="small"
            elevation="small"
            width="100%"
            margin={isMobile ? { top: "medium" } : "40px"}
          >
            <Heading
              level={4}
              margin={{ bottom: isLarge ? "medium" : "small" }}
              className={`font-[Bitter] text-center ${isLarge ? "text-[1.2rem]" : ""}`}
            >
              Related Posts
            </Heading>
            
            <Box direction="column" gap={isLarge ? "medium" : "small"}>
              {relatedPosts.length > 0 ? (
                relatedPosts.map((post) => (
                  <RelatedPostItem key={post.id} post={post} />
                ))
              ) : (
                <Text size={isLarge ? "medium" : "small"} color="dark-3" className="text-center">
                  No related posts found
                </Text>
              )}
            </Box>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};

export default BlogSidebar;
