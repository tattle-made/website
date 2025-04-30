import { graphql } from "gatsby"
import React, { useContext } from "react"
import { ResponsiveContext, Grid, Box, Heading, Text, Paragraph } from "grommet"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { ExternalLink } from "react-feather"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ResponsiveGrid = ({ children }) => {
  const size = useContext(ResponsiveContext)
  return size === "small" ? (
    <Box direction={"column"} gap={"small"}>
      {children}
    </Box>
  ) : (
    //   : size === "medium" ? (
    //     <Grid
    //       columns={["1/2", "1/2"]}
    //       responsive={true}
    //       fill={"horizontal"}
    //       gap="medium"
    //     >
    //       {children}
    //     </Grid>
    //   )
    <Grid
      columns={["1/3", "1/3", "1/3"]}
      responsive={true}
      fill={"horizontal"}
      gap="medium"
    >
      {children}
    </Grid>
  )
}

const CommunityMemberCard = ({
  img,
  name,
  role,
  url,
  isCurrentContributor = false,
}) => (
  <Box
    width="medium"
    direction="column"
    align="center"
    justify="center"
    pad="small"
    gap="small"
    onClick={() => window.open(url, "_blank")}
    hoverIndicator
    focusIndicator={false}
    style={{ textAlign: "center", height: "auto" }}
  >
    {img && isCurrentContributor && (
      <Box
        width="140px"
        height="140px"
        round="full"
        overflow="hidden"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: "grayscale(100%)",
          transition: "filter 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
      >
        <GatsbyImage
          alt={`${name}'s photo`}
          image={getImage(img)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // borderRadius: "50%",
          }}
        />
      </Box>
    )}
    {(name?.trim() || role?.trim()) && (
      <PlainExternalLink href={url} target="_blank">
        <Box
          direction="row"
          align="center"
          alignContent="center"
          justify="center"
          gap={"xsmall"}
        >
          <Heading
            level={4}
            margin="none"
            weight={500}
            color="brand"
            textAlign="center"
          >
            {name}
          </Heading>
          {url && url.length !== 0 && (
            <Box>
              <ExternalLink size={16} />
            </Box>
          )}
        </Box>
        <Paragraph size="small" pad={{ left: "small", right: "small" }}>
          {role}
        </Paragraph>
      </PlainExternalLink>
    )}
  </Box>
)

const community = ({ data }) => {
  // const contributors = data.allMdx.nodes;
  const currentContributors = data.allMdx.nodes.filter(
    (contributor) => contributor.frontmatter.isCurrentContributor
  )
  const pastContributors = data.allMdx.nodes.filter(
    (contributor) => !contributor.frontmatter.isCurrentContributor
  )

  return (
    <DefaultLayout>
      <NarrowContentWrapper>
        <NarrowSection>
          <Heading level={2}> Community </Heading>
          <Heading level={3}>Current Contributors and Staff</Heading>
          <ResponsiveGrid>
            {currentContributors.map((contributor, key) => (
              <CommunityMemberCard
                key={key}
                img={contributor.frontmatter.img}
                name={contributor.frontmatter.name}
                role={contributor.frontmatter.role}
                url={contributor.frontmatter.url}
                isCurrentContributor={true}
              />
            ))}
          </ResponsiveGrid>
          <Heading level={3}> Past Contributors and Staff </Heading>
          <ResponsiveGrid>
            {pastContributors.map((contributor, key) => (
              <CommunityMemberCard
                key={key}
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
export default community

export const query = graphql`
  query communityPage {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "//community//" } } }
      sort: { frontmatter: { name: ASC } }
    ) {
      nodes {
        frontmatter {
          name
          img {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          role
          url
          isCurrentContributor
        }
        id
        fields {
          slug
        }
      }
    }
  }
`
