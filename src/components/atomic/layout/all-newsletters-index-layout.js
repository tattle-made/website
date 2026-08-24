import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Paragraph, Text } from "grommet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import AppShell from "../AppShell"
import { primaryNav, footerItems } from "../../../config/options"
import { PlainSectionLink } from "../TattleLinks"

export default function NewsletterIndex({ data }) {
  const newsletters = data.allMdx.nodes

  return (
    <AppShell
      headerLabel="Newsletters"
      footerItems={footerItems}
      primaryNav={primaryNav}
      pageTitle="Newsletters"
    >
      <Box pad="large">
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsletters.map(newsletter => (
            <Box
              key={newsletter.id}
              border={{ color: "visuals-3" }}
              round="xsmall"
              overflow="hidden"
              background="white"
              elevation="xsmall"
            >
              <PlainSectionLink
                to={`/newsletter/${newsletter.fields.slug}`}
              >
                {newsletter.frontmatter.cover && (
                  <Box height="220px">
                    <GatsbyImage
                      alt={newsletter.frontmatter.name}
                      image={getImage(newsletter.frontmatter.cover)}
                      objectFit="cover"
                      style={{ height: "100%" }}
                    />
                  </Box>
                )}

                <Box
                  pad={{
                    horizontal: "medium",
                    top: "medium",
                    bottom: "xsmall",
                  }}
                >
                  {newsletter.frontmatter.date && (
                    <Text size="xsmall" weight={600}>
                      {new Date(
                        newsletter.frontmatter.date
                      ).toDateString()}
                    </Text>
                  )}
                </Box>

                <Box
                  pad={{
                    horizontal: "medium",
                    bottom: "large",
                  }}
                >
                  <Heading
                    level={3}
                    weight={500}
                    color="brand"
                    margin={{
                      top: "small",
                      bottom: "small",
                    }}
                  >
                    {newsletter.frontmatter.name}
                  </Heading>

                  <Paragraph
                    size="small"
                    margin="none"
                    fill
                  >
                    {newsletter.frontmatter.excerpt}
                  </Paragraph>
                </Box>
              </PlainSectionLink>
            </Box>
          ))}
        </Box>
      </Box>
    </AppShell>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {
        internal: {
          contentFilePath: {
            regex: "/src/newsletter/"
          }
        }
      }
      sort: {
        frontmatter: {
          date: DESC
        }
      }
    ) {
      nodes {
        id

        fields {
          slug
        }

        frontmatter {
          name
          excerpt
          date

          cover {
            childImageSharp {
              gatsbyImageData(
                width: 600
                height: 350
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`