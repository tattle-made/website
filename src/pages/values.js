import React from "react"
import { graphql } from "gatsby"
import { Box, Image, Heading, Paragraph } from "grommet"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"

const Section = ({ children }) => (
  <NarrowContentWrapper>
    <Box>{children}</Box>
  </NarrowContentWrapper>
)

export default function Values({ data }) {
  const {
    value_openness,
    value_accessibility,
    value_sustainability,
    value_humility,
    value_curiosity,
  } = data
  return (
    <DefaultLayout>
      <Section>
        <NarrowSection>
          <Heading level={2} margin={{ bottom: "none" }}>
            Our Values
          </Heading>
        </NarrowSection>
      </Section>

      <Section>
        <Heading level={3} margin={{ bottom: "xsmall" }}>
          Openness
        </Heading>

        <Box direction={"row-responsive"}>
          <Box
            width={"small"}
            height={"small"}
            flex={"grow"}
            margin={{ right: "small", bottom: "small" }}
          >
            <Image
              fit={"contain"}
              src={value_openness.childImageSharp.fluid.src}
            />
          </Box>
          <Box>
            <Paragraph fill>
              As long term beneficiaries of open source projects, we realize the
              value of tools that are community driven, community built and
              community managed. There are plenty of practical advantages of
              running an open source project, but we think it is especially
              important for what Tattle is trying to achieve. Misinformation is
              simultaneously a global and a local problem. It is bigger than any
              one platform or any one team. Any long lasting solution in this
              space will be participatory and multi-disciplinary. Openness is a
              commitment that anyone and everyone can use, change and share the
              tools made at Tattle for their unique purpose. But, openness is
              not restricted only to software released by Tattle (all software
              is licensed under GPL). It is also about being open in our
              communication and open to participation in all forms so that the
              project can evolve as a Commons.
            </Paragraph>
          </Box>
        </Box>
      </Section>

      <Section>
        <Heading level={3} margin={{ bottom: "xsmall" }}>
          Accessibility
        </Heading>
        <Box direction={"row-responsive"}>
          <Box
            width={"small"}
            height={"small"}
            flex={"grow"}
            margin={{ right: "small", bottom: "small" }}
          >
            <Image
              fit={"contain"}
              src={value_accessibility.childImageSharp.fluid.src}
            />
          </Box>
          <Box>
            <Paragraph fill>
              India is a diverse microcosm in an overwhelmingly diverse world.
              Our aim with Tattle is to embrace that diversity- of languages, of
              experiences and of styles of learning and communicating. We will
              aim for our work to be accessible to people of different
              backgrounds.
            </Paragraph>
          </Box>
        </Box>
      </Section>

      <Section>
        <Heading level={3} margin={{ bottom: "xsmall" }}>
          Sustainability
        </Heading>
        <Box direction={"row-responsive"}>
          <Box
            width={"small"}
            height={"small"}
            flex={"grow"}
            margin={{ right: "small", bottom: "small" }}
          >
            <Image
              fit={"contain"}
              src={value_sustainability.childImageSharp.fluid.src}
            />
          </Box>
          <Box>
            <Paragraph fill>
              At any point, we have to choose between multiple product ideas and
              potential future directions. Given the challenge Tattle is aiming
              to address, there is a space and need for unconventional
              socio-technical approaches. But the risk of untested ideas must be
              balanced against long term viability of ongoing projects and the
              organization as a whole. In conception of any idea or project, we
              will plan for its long term sustainability in all respects- be it
              the tech stack or the organizational structure.
            </Paragraph>
          </Box>
        </Box>
      </Section>

      <Section>
        <Heading level={3} margin={{ bottom: "xsmall" }}>
          Humility
        </Heading>
        <Box direction={"row-responsive"}>
          <Box
            width={"small"}
            height={"small"}
            flex={"grow"}
            margin={{ right: "small", bottom: "small" }}
          >
            <Image
              fit={"contain"}
              src={value_humility.childImageSharp.fluid.src}
            />
          </Box>
          <Box>
            <Paragraph fill>
              We realize that we are inhabiting a space with experienced
              veterans, who have a lot to teach us. Platform users have a lot to
              teach us! Building good tools is contingent on careful listening.
              Humility means that we always engage as listeners and learners. We
              put people's experiences first and our conceived ideas second.
            </Paragraph>
          </Box>
        </Box>
      </Section>

      <Section>
        <Heading level={3} margin={{ bottom: "xsmall" }}>
          Curiosity
        </Heading>
        <Box direction={"row-responsive"}>
          <Box
            width={"small"}
            height={"small"}
            flex={"grow"}
            margin={{ right: "small", bottom: "small" }}
          >
            <Image
              fit={"contain"}
              src={value_curiosity.childImageSharp.fluid.src}
            />
          </Box>
          <Box>
            <Paragraph fill>
              As stated earlier in the blog, Tattle was driven by curiosity. We
              started by wanting to learn more about the phenomenon of
              misinformation- about why people share what they share. One year
              down, we have a lot more questions and some hypotheses about what
              might work. We think wide eyed curiosity towards people, different
              ideas, technologies and new challenges, enables us to widen our
              canvas of intervention.
            </Paragraph>
          </Box>
        </Box>
      </Section>
      <Box height={"0.8em"} />
      <br />
      <Section>
        <Paragraph fill>
          We know these are lofty principles and that we will fall short of
          them. More than once. More than we would like to. But by beginning
          with a clear statement of values, we are setting our vision to the
          horizon- to standards that we would like to achieve even if that is
          not where we currently are. We hope that being transparent in our
          values will also serve as an accountability mechanism- that we will be
          called out when we fall short of these values; and will be advised on
          how to do better. *Shubharambh is a Sanskrit word with the root words
          Shubh and Aarambh that translate to good and beginnings.
        </Paragraph>
      </Section>
    </DefaultLayout>
  )
}

export const query = graphql`
  query ValuesImageQuery {
    value_openness: file(relativePath: { eq: "values-openness.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }
    value_accessibility: file(
      relativePath: { eq: "values-accessibility.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }
    value_sustainability: file(
      relativePath: { eq: "values-sustainability.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }
    value_humility: file(relativePath: { eq: "values-humility.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }
    value_curiosity: file(relativePath: { eq: "values-curiosity.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }
  }
`
