import React from 'react'
import { Box, Button, Heading, Text, Paragraph } from "grommet"
import { ExternalLink } from "react-feather"
import DefaultLayout from "../components/default-layout"
import NarrowSection from "../components/atomic/layout/narrow-section"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import TagBubble from "../components/atomic/TagBubble"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { graphql } from 'gatsby'

const UpdateListItem = ({ node }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${month}, ${year}`;
    };
    const formattedDate = formatDate(node.frontmatter.date);
    console.log(formattedDate)

    // const tags = Array.isArray(node.frontmatter.tags) ? node.frontmatter.tags : [];
    const tags = node.frontmatter.tags ? node.frontmatter.tags.split(',').map(tag => tag.trim()) : [];
    return (
        <Box direction={"column"} margin={{ top: "xsmall", bottom: "small" }}>
            <Box height={"7.324px"} />
            <Paragraph size={"small"} color={"dark-3"} margin={"none"}>
                {node.frontmatter.date}
            </Paragraph>
            <Box direction={"row-responsive"} justify={"stretch"}>
                <Box>
                    <Heading level={3} margin={{ bottom: "4.578px", top: "7.324px" }}>
                        {node.frontmatter.title}
                    </Heading>
                    <Box direction={"row-responsive"} gap={"xsmall"}>
                        {tags.map(tag => (
                            <TagBubble data={{ label: tag }} key={tag} />
                        ))}
                    </Box>
                    <Paragraph size={"medium"}>{node.frontmatter.excerpt}</Paragraph>
                </Box>
                <Box flex={"grow"}></Box>

                {node.frontmatter.url && node.frontmatter.url.length !== 0 ? (
                    <PlainExternalLink href={node.frontmatter.url} target={"_blank"}>
                        <Box
                            gap={"small"}
                            direction={"row"}
                            align={"center"}
                            margin={{ top: "xsmall" }}
                        >
                            <Text size={"small"}> Read More</Text>
                            <ExternalLink size={16} />
                        </Box>
                    </PlainExternalLink>
                ) : null}
            </Box>

            <Box height={"xxsmall"} />
        </Box>
    );
};

const updates_new = ({ data }) => {
    const updates = data.allMdx.nodes;

    return (
        <DefaultLayout>
            <NarrowContentWrapper>
                <NarrowSection>
                    <Box>
                        <Heading level={2}>Updates</Heading>
                        <NarrowSection>
                            {updates.map((node) => (
                                <UpdateListItem node={node} key={node.id} />
                            ))}
                        </NarrowSection>
                    </Box>
                </NarrowSection>
            </NarrowContentWrapper>
        </DefaultLayout>
    );
};

export default updates_new;

//export page query
export const query = graphql`
query updatesPage {
    allMdx(
        filter: {fileAbsolutePath: {regex: "/updates/"}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        nodes {
          frontmatter {
            url
            excerpt
            date
            tags
            title
          }
          id
          slug
          fileAbsolutePath
        }
      }
  }
`