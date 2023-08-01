import React from 'react'
import PropTypes from "prop-types"
import { Box, Button, Heading, Text, Paragraph } from "grommet"
import { ExternalLink, Layout } from "react-feather"
import DefaultLayout from "../components/default-layout"
import NarrowSection from "../components/atomic/layout/narrow-section"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import TagBubble from "../components/atomic/TagBubble"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
// import { updates } from "../config/updates"
import { graphql } from 'gatsby'


const UpdateListItem = ({ item }) => {
    return (
        <Box direction={"column"} margin={{ top: "xsmall", bottom: "small" }}>
            <Box height={"7.324px"} />
            <Paragraph size={"small"} color={"dark-3"} margin={"none"}>
                {item.date}
            </Paragraph>
            <Box direction={"row-responsive"} justify={"stretch"}>
                <Box>
                    <Heading level={3} margin={{ bottom: "4.578px", top: "7.324px" }}>
                        {item.title}
                    </Heading>
                    <Box direction={"row-responsive"} gap={"xsmall"}>
                        {/* {item.tags.map(tag => (
                            <TagBubble data={{ label: tag }} />
                        ))} */}
                        {item.tags}
                    </Box>
                    <Paragraph size={"medium"}>{item.excerpt}</Paragraph>
                </Box>
                <Box flex={"grow"}></Box>

                {item.url && item.url.length != 0 ? (
                    <PlainExternalLink href={item.url} target={"_blank"}>
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
    )
}

export default function updates_new({ data }) {
    const updates = data.allMdx.nodes.frontmatter

    return (
        <Layout>
            <div>
                <h1>{updates.title}</h1>
            </div>
        </Layout>
    )
}

//export page query
export const query = graphql`
    query updatesPage {
        allMdx {
        nodes {
            frontmatter {
            url
            title
            excerpt
            date
            tags
            }
            id
            slug
            fileAbsolutePath
        }
        }
    }
`