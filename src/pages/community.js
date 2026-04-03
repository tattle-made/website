import { graphql } from "gatsby"
import React from "react"
import { Box, Heading, Text, Paragraph } from "grommet"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import { PlainExternalLink } from "../components/atomic/TattleLinks"
import { ExternalLink } from "react-feather"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ResponsiveGrid = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {children}
  </div>
)
/**
 * A Card component that displays a community member's photo, name, role, and profile URL.
 * It also handles whether the member is a current contributor or not.
 *
 * @param {object} props
 * @param {string} props.img - The image URL of the member; shown only if isCurrentContributor is true
 * @param {string} props.name - The member's name used in alt text for accessibility
 * @param {string} props.role - The role of the member (e.g., Developer); used as fallback if name is missing
 * @param {string} props.url - The URL to open on click (e.g., LinkedIn or GitHub profile)
 * @param {boolean} [props.isCurrentContributor=false] - Whether the member is a current contributor
 *
 * @returns {JSX.Element}
 * 
 */

const CommunityMemberCard = ({
  img,
  name,
  role,
  url,
  slug,
  isCurrentContributor = false,
}) => (
  <Link to={`/people/${slug}`} style={{ textDecoration: "none" }}>
    <Box
      width="medium"
      direction="column"
      align="center"
      justify="center"
      pad="small"
      gap="small"
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
            }}
          />
        </Box>
      )}

      {(name?.trim() || role?.trim()) && (
        <Box>
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
        </Box>
      )}
    </Box>
  </Link>
)


/**
 * Renders the Community page with lists of current and past contributors.
 * 
 * Filters contributors from the received data based on their `isCurrentContributor` flag.
 * - Current contributors are displayed with name, role, image, and URL.
 * - Past contributors are displayed with name, role, and URL (without image).
 *
 * Each contributor is rendered inside a `CommunityMemberCard` within a responsive grid layout.
 *
 * @param {object} props
 * @param {object} props.data - The GraphQL data containing contributor details
 * @param {Array} props.data.allMdx.nodes - Array of MDX nodes, each representing a contributor
 * @param {object} props.data.allMdx.nodes[].frontmatter - Frontmatter fields of each contributor
 * @param {string} props.data.allMdx.nodes[].frontmatter.name - Contributor's name
 * @param {string} props.data.allMdx.nodes[].frontmatter.role - Contributor's role
 * @param {string} props.data.allMdx.nodes[].frontmatter.url - External URL for the contributor
 * @param {string} props.data.allMdx.nodes[].frontmatter.img - Contributor's image URL
 * @param {boolean} props.data.allMdx.nodes[].frontmatter.isCurrentContributor - True if contributor is currently active
 * 
 * Displays a note acknowledging contributions from other volunteers.
 * @returns {JSX.Element} The rendered Community page 
 */

const community = ({ data }) => {
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
                slug={contributor.fields.slug}
                isCurrentContributor={true}
              />
            ))}
          </ResponsiveGrid>
          <Heading level={3}> Past Contributors and Staff </Heading>
          <ResponsiveGrid>
            {pastContributors.map((contributor, key) => (
              <CommunityMemberCard
                key={key}
                img={contributor.frontmatter.img}
                name={contributor.frontmatter.name}
                role={contributor.frontmatter.role}
                url={contributor.frontmatter.url}
                slug={contributor.fields.slug}
                isCurrentContributor={true}
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
