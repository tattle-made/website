import React, { useContext } from "react"
import {
	ResponsiveContext,
	Box,
	Heading,
	Paragraph,
	Text,
} from "grommet"
import { PlainSectionLink } from "./atomic/TattleLinks"
import DefaultLayout from "./default-layout"
import { graphql, Link } from "gatsby"
import NarrowContentWrapper from "./atomic/layout/narrow-content-wrapper"
import NarrowSection from "./atomic/layout/narrow-section"
import TagBubbleBlog from "./atomic/TagBubbleBlog"
import { AllBlogsIndexLayout } from "./atomic/layout/all-blogs-index-layout"

const byline = (author, project) => {
	if (author && project) return `${author} - ${project}`
	if (author) return `${author}`
}

export default function TagTemplate({ data, pageContext }) {
	const { allMdx } = data
	const tag = pageContext.tag
	// console.log(tag)
	const size = useContext(ResponsiveContext)

	const filteredNodes = allMdx.nodes.filter(node => {
		const tagsArray = node.frontmatter.tags?.split(',').map(tag => tag.trim());
		return tagsArray?.includes(tag);
	})
	console.log(filteredNodes)

	return (
		<DefaultLayout>
			<Box width="100%" pad="medium" direction="column">
			<NarrowContentWrapper>
				<NarrowSection>
					<Box direction="row-responsive" gap="small" align="center">
						<Heading level={3}>Blogs with Tag:</Heading>
						<TagBubbleBlog data={{ label: tag }} />
					</Box>
				</NarrowSection>
			</NarrowContentWrapper>
			<AllBlogsIndexLayout blogs={filteredNodes} />
			{/* <Box width="1280px" alignSelf="center" justify={"start"} pad="medium">
				<Box direction={"row-responsive"} wrap={true} justify={"start"}>
					{filteredNodes.map(node => {
						return (
							<Box
								direction={"column"}
								onClick={() => { }}
								hoverIndicator={true}
								focusIndicator={false}
								pad={"medium"}
								width={"medium"}
								height="fit-content"
								round
								border={{ color: "visuals-3" }}
								margin={{ bottom: "medium", right: "medium" }}
								alignSelf={"center"}
							>
								<PlainSectionLink to={`/blog/${node.slug}`}>
									<Box>
										<Box direction={"row"} align={"center"}>
											<Heading
												level={3}
												margin={"none"}
												weight={500}
												color={"brand"}
												fill
											>
												{node.frontmatter.name}
											</Heading>
										</Box>
										<Text size={"small"}>
											{`Published on ${new Date(
												node.frontmatter.date
											).toDateString()}`}
										</Text>
										<Text size={"small"}>
											{byline(
												node.frontmatter.author,
												node.frontmatter.project
											)}
										</Text>

										<Paragraph size={"large"} fill>
											{node.frontmatter.excerpt}
										</Paragraph>
									</Box>
								</PlainSectionLink>
							</Box>
						)
					})}
				</Box>
			</Box> */}
			</Box>
		</DefaultLayout>
	)
}

export const pageQuery = graphql`
query BlogPostsByTag {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        slug
        fileAbsolutePath
        frontmatter {
          name
          excerpt
          author
          project
          date
          tags
        }
      }
    }
  }
`