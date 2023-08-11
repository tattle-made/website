import { graphql } from 'gatsby'
import React, { useContext } from "react"
import { ResponsiveContext, Grid, Box, Heading, Text, Paragraph } from "grommet"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { ExternalLink } from "react-feather"

const ResponsiveGrid = ({ children }) => {
    const size = useContext(ResponsiveContext)
    return size === "small" ? (
        <Box direction={"column"} gap={"small"}>
            {children}
        </Box>
    ) : size === "medium" ? (
        <Grid columns={["1/2", "1/2"]} responsive={true} fill={"horizontal"}>
            {children}
        </Grid>
    ) : (
        <Grid columns={["1/3", "1/3", "1/3"]} responsive={true} fill={"horizontal"}>
            {children}
        </Grid>
    )
}

const CommunityMemberCard = ({ name, role, url }) => (
    <Box
        width={"medium"}
        direction={"column"}
        pad={"small"}
        onClick={() => { }}
        hoverIndicator={true}
        focusIndicator={false}
    >
        <PlainExternalLink href={url} target={"_blank"}>
            <Box direction={"row"} align={"center"}>
                <Heading level={3} margin={"none"} weight={500} color={"brand"}>
                    {name}
                </Heading>
                <Box flex={"grow"} />
                {url && url.length != 0 && <ExternalLink size={16} />}
            </Box>
            <Paragraph size={"small"}>{role}</Paragraph>
        </PlainExternalLink>
    </Box>
)


const community_new = ({ data }) => {
    // const contributors = data.allMdx.nodes;
    const currentContributors = data.allMdx.nodes.filter(contributor => contributor.frontmatter.isCurrentContributor);
    const pastContributors = data.allMdx.nodes.filter(contributor => !contributor.frontmatter.isCurrentContributor);

    return (
        <DefaultLayout>
            <NarrowContentWrapper>
                <NarrowSection>
                    <Heading level={2}> Community </Heading>
                    <Heading level={3}>Current Contributors and Staff</Heading>
                    <ResponsiveGrid>
                        {currentContributors.map((contributor) => (
                            <CommunityMemberCard
                                name={contributor.frontmatter.name}
                                role={contributor.frontmatter.role}
                                url={contributor.frontmatter.url}
                            />
                        ))}
                    </ResponsiveGrid>
                    <Heading level={3}> Past Contributors and Staff </Heading>
                    <ResponsiveGrid>
                        {pastContributors.map((contributor) => (
                            <CommunityMemberCard
                                name={contributor.frontmatter.name}
                                role={contributor.frontmatter.role}
                                url={contributor.frontmatter.url}
                            />
                        ))}
                    </ResponsiveGrid>
                    <Text size={"small"}>
                        <i>
                            Several other people have volunteered time and skills such as
                            writing, coding, and designing.{" "}
                        </i>
                    </Text>
                </NarrowSection>
            </NarrowContentWrapper>
        </DefaultLayout>
    )
}

export default community_new

export const query = graphql`
query communityPage {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/community/"}}
      sort: {fields: frontmatter___name, order: ASC}
    ) {
      nodes {
        frontmatter {
          name
          role
          url
          isCurrentContributor
        }
        id
        slug
      }
    }
  }   
`