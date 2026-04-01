import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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

  // Map slug → name
  const peopleMap = {};
  data.allPeople.nodes.forEach((p) => {
    peopleMap[p.frontmatter.slug] = p.frontmatter.name;
  });

  return (
    <div>
      <h2>Team</h2>
      <ul>
        {proj.frontmatter.people.map((slug) => (
          <li key={slug}>{peopleMap[slug] || slug}</li>
        ))}
      </ul>
    </div>
  );
}