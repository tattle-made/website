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
        <Box margin={{ bottom: 'xsmall' }} className="max-w-full h-[120px] overflow-hidden">
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
        className="font-[Bitter] text-[0.85rem] leading-[1.3] "
      >
        {post.title}
      </Heading>
    </PlainLink>
    {post.excerpt && (
      <Text 
        size="small" 
        color="dark-3"
        className="block text-ellipsis overflow-hidden"
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
        const isTablet = size === "medium";

        return (
          <Box
            pad={isMobile ? "small" : "medium"}
            background="visuals-two"
            round="small"
            elevation="small"
            width="100%"
            margin={{ left: "large" }} // Increased separation from blog text
            className="max-w-full box-border relative z-10"
          >
            <Heading
              level={4}
              margin={{ bottom: "small" }}
              className={`font-[Bitter] text-center ${
                isMobile ? "text-[0.8rem]" : isTablet ? "text-[0.95rem]" : "text-[1.1rem]"
              }`}
            >
              Related Posts
            </Heading>

            <Box direction="column" gap={isMobile ? "xsmall" : "small"} className="max-w-full overflow-hidden">
              {relatedPosts.length > 0 ? (
                relatedPosts.slice(0, 5).map((post) => (
                  <RelatedPostItem key={post.id} post={post} />
                ))
              ) : (
                <Text size="small" color="dark-3" className="text-center">
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
