import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { Box, ResponsiveContext } from "grommet";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import { primaryNav, footerItems } from "../config/options";
import AppShell from "./atomic/AppShell";
import BlogHeaderCard from "./atomic/BlogHeaderCard";
import { PlainLink } from "./atomic/TattleLinks";
import { Heading } from "grommet";
import { useLocation } from "@reach/router";
import CustomCodeBlock from "./atomic/customCodeBlock";
import InlineCodeBlock from "./atomic/inlineCodeBlock";
import useBlogTags from "../hooks/useBlogTags";
import BlogSidebar from "./BlogSidebar";
import { projectSlugMaker } from "../lib/project-slug-maker";
import TagsRenderer from "./TagsRenderer";
import { getSrc, getImage } from "gatsby-plugin-image";

const shortcodes = {
  Link,
  BlogHeaderCard,
  code: (props) => <CustomCodeBlock {...props} />,
  inlineCode: (props) => <InlineCodeBlock {...props} />,
};

export default function PageTemplate({ data: { mdx }, pageContext: { blogNodes = [] }, children }) {
  const { tagCounts, projectTagsCounts } = useBlogTags();
  const { name, author, project, date, excerpt, cover } = mdx.frontmatter;
  const tags = mdx.frontmatter.tags
    ? mdx.frontmatter.tags.split(",").map((tag) => tag.trim())
    : [];

  const location = useLocation();
  const [label, setLabel] = useState("");

  useEffect(() => {
    setLabel(location.pathname.split("/")[1]);
  }, [location]);

  
  const findRelatedPosts = () => {
    // If no tags, return 5 most recent posts
    if (!blogNodes.length) {
      return [];
    }
    if (!tags.length) {
      return blogNodes
        .filter(node => node.id !== mdx.id)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        .slice(0, 5)
        .map(post => ({
          id: post.id,
          title: post.frontmatter.name,
          slug: post.fields.slug,
          coverImage: post.frontmatter.cover ? getImage(post.frontmatter.cover) : null,
          excerpt: post.frontmatter.excerpt,
          matchingTags: [],
          relevanceScore: 0
        }));
    }
  
    const postsWithRelevance = blogNodes
      .filter(node => node.id !== mdx.id) 
      .map(post => {
        const postTags = post.frontmatter.tags
          ? post.frontmatter.tags.split(",").map(tag => tag.trim())
          : [];
        
        const matchingTags = tags.filter(tag => postTags.includes(tag));
  
        const coverImage = post.frontmatter.cover 
          ? getImage(post.frontmatter.cover) 
          : null;
        
        return {
          id: post.id,
          title: post.frontmatter.name,
          slug: post.fields.slug,
          coverImage: coverImage,
          excerpt: post.frontmatter.excerpt,
          matchingTags: matchingTags,
          relevanceScore: matchingTags.length 
        };
      })
      .filter(post => post.relevanceScore > 0) 
      .sort((a, b) => b.relevanceScore - a.relevanceScore); 
    
    return postsWithRelevance.slice(0, 5); 
  };

  const relatedPosts = findRelatedPosts();

  return (
    <AppShell
      headerLabel={name}
      footerItems={footerItems}
      primaryNav={primaryNav}
      expandCenter={true}
      isMDXPage={true}
      meta={{
        name: name,
        excerpt: excerpt,
        project: project,
        tags: tags,
        cover: getSrc(cover),
      }}
    >
      <MDXProvider components={shortcodes}>
        <Box>
          <PlainLink to={"/blog"}>
            <Heading level={4}>back to all blogs</Heading>
          </PlainLink>
        </Box>
        
        <Box>
          <BlogHeaderCard
            name={name}
            author={author}
            project={project}
            date={date}
          />
          <Box direction="column" flex pad={0} basis="xsmall">
            <Box>
              <TagsRenderer
                sortedUniqueTags={tags}
                tagCounts={tagCounts}
                tagTypeHeading={"Tags: "}
                tagBaseURL={"/blog/tags/"}
              />
            </Box>
            {project && (
              <Box>
                <TagsRenderer
                  sortedUniqueTags={[projectSlugMaker(project)]}
                  tagCounts={projectTagsCounts}
                  tagTypeHeading={"Project: "}
                  tagBaseURL={"/blog/tags/project/"}
                />
              </Box>
            )}
          </Box>
        </Box>
        <ResponsiveContext.Consumer>
  {size => {
    const isLarge = size === "large" || size === "xlarge";
    return (
      <Box 
        direction={size === "small" ? "column" : "row"} 
        gap={isLarge ? "xlarge" : "medium"}
        align="start"
        
      >
        {/* Main Content */}
        <Box 
          flex={true}
          width={size === "small" ? "100%" : undefined}

        >
          {children}
        </Box>

        {/* Sidebar Section */}
        <Box 
          width={size === "small" ? "100%" : isLarge ? "320px" : "390px"}
          
          flex={false}
        >
          <BlogSidebar relatedPosts={relatedPosts} />
        </Box>
      </Box>
    );
  }}
</ResponsiveContext.Consumer>
      </MDXProvider>
    </AppShell>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        name
        excerpt
        author
        project
        date
        tags
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;