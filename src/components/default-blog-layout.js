import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Box } from "grommet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "./atomic/AppShell"
import BlogHeaderCard from "./atomic/BlogHeaderCard"
import { PlainLink } from "./atomic/TattleLinks"
import { Heading } from "grommet"
import TagBubbleBlog from "./atomic/TagBubbleBlog"
import { useLocation } from "@reach/router"

const shortcodes = { Link, BlogHeaderCard }

export default function PageTemplate({ data: { mdx, allMdx } }) {
	const { name, author, project, date } = mdx.frontmatter
	const tags = mdx.frontmatter.tags ? mdx.frontmatter.tags.split(',').map(tag => tag.trim()) : [];

	const location = useLocation()
	const [label, setLabel] = useState("")

	// create a dict to store tag counts
	const tagCounts = {};
	const allBlogPosts = allMdx.nodes;
	// console.log(allBlogPosts);
	// count tags
	allBlogPosts.forEach(post => {
		if (post.frontmatter.tags) {
			const postTags = post.frontmatter.tags.split(',').map(tag => tag.trim());
			postTags.forEach(tag => {
				tagCounts[tag] = (tagCounts[tag] || 0) + 1;
			});
		}
	});
	console.log(tagCounts)

	useEffect(() => {
		setLabel(location.pathname.split("/")[1])
		console.log({ l2: location.pathname })
	}, [location])

	return (
		<AppShell
			headerLabel={label}
			footerItems={footerItems}
			primaryNav={primaryNav}
			expandCenter={true}
			isMDXPage={true}
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
					<Box direction={"row-responsive"} gap={"xsmall"}>
						{tags.map(tag => (
							<Link to={`/blog/tags/${tag}`} key={tag} style={{ textDecoration: 'none' }}>
								<TagBubbleBlog data={{ label: tag, count: tagCounts[tag]}} />
							</Link>
						))}
					</Box>
					<MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
				</Box>
			</MDXProvider>
		</AppShell>
	)
}
export const pageQuery = graphql`
query BlogPostQuery($id: String) {
	mdx(id: {eq: $id}) {
	  id
	  body
	  frontmatter {
		name
		excerpt
		author
		project
		date
		tags
	  }
	}
	allMdx {
	  nodes {
		frontmatter {
		  name
		  author
		  date
		  tags
		}
	  }
	}
  }
`
