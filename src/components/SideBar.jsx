import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { PlainLink } from './atomic/TattleLinks';

const Sidebar = ({ relatedPosts }) => {
  // Only show the top 5 related posts
  const topRelatedPosts = relatedPosts.slice(0, 5);
  
  return (
    <Box 
      pad="medium" 
      background="light-2" 
      round="small"
      elevation="small"
    >
      <Heading level={3} margin={{ bottom: 'small' }}>
        Related Posts
      </Heading>
      
      {topRelatedPosts.map(post => (
        <Box 
          key={post.id} 
          margin={{ bottom: 'medium' }}
          border={{ color: 'light-4', size: 'xsmall', side: 'bottom' }}
          pad={{ bottom: 'small' }}
        >
          <PlainLink to={`/blog/${post.slug}`}>
            {post.coverImage && (
              <Box margin={{ bottom: 'xsmall' }}>
                <GatsbyImage
                  image={post.coverImage}
                  alt={post.title || "Related post"}
                  style={{ borderRadius: '4px' }}
                />
              </Box>
            )}
            <Text weight="bold">{post.title}</Text>
            {post.excerpt && (
              <Text size="small" color="dark-3">
                {post.excerpt.substring(0, 80)}...
              </Text>
            )}
          </PlainLink>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;