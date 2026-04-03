import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Heading, Text } from "grommet";
import { PlainSectionLink } from "./atomic/TattleLinks";

export default function TeamSection({ project }) {
  const data = useStaticQuery(graphql`
    query {
      allProjects: allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
        nodes {
          frontmatter {
            slug
            people
          }
        }
      }
      allPeople: allMdx(filter: { frontmatter: { type: { eq: "person" } } }) {
        nodes {
          frontmatter {
            slug
            name
            img {
              childImageSharp {
                gatsbyImageData(
                  width: 72
                  height: 72
                  layout: FIXED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `);

  // Find project by slug
  const proj = data.allProjects.nodes.find(
    (p) => p.frontmatter.slug === project
  );

  if (!proj || !proj.frontmatter.people) return null;

  // Map slug → { name, img }
  const peopleMap = {};
  data.allPeople.nodes.forEach((p) => {
    peopleMap[p.frontmatter.slug] = { name: p.frontmatter.name, img: p.frontmatter.img };
  });

  return (
    <Box margin={{ top: "medium" }}>
      
      <Heading level={3}>Team</Heading>
      <div className="flex flex-wrap gap-3">
        {proj.frontmatter.people.map((slug) => {
          const person = peopleMap[slug];
          const name = person?.name || slug;
          const img = person?.img ? getImage(person.img) : null;
          const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
          return (
            <Box key={slug} direction="row" align="center" gap="small">
              <Box
                width="36px"
                height="36px"
                round="full"
                overflow="hidden"
                background="visuals-1"
                align="center"
                justify="center"
                flex={false}
              >
                {img ? (
                  <GatsbyImage
                    alt={name}
                    image={img}
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  <Text size="xsmall" weight={600}>{initials}</Text>
                )}
              </Box>
              <PlainSectionLink to={`/people/${slug}`}>
                <Text size="small">{name}</Text>
              </PlainSectionLink>
            </Box>
          );
        })}
      </div>
    </Box>
  );
}