import React from "react" 
import { Box, Heading, Text, Anchor } from "grommet"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import TwoColumnLayout from "../components/atomic/layout/TwoColumnLayout"
import RadarChart from "../components/atomic/RadarChart"
import { SkillChips } from "../components/atomic/Chip"

const SKILLS = [
  "Multilingual NLP",
  "Multimodal Data Pipelines",
  "AI Evaluation & Benchmarking",
  "Misinformation Research",
  "Safety & Bias Audits",
  "Data Collection from Closed Platforms",
  "Full-Stack Engineering",
  "Open Source Development",
  "UX Research",
  "Community-Centred Design",
  "Policy Research",
  "Data Visualisation",
]

const COLLABORATIONS = [
  {
    title: "Annotation Software for Archives at NCBS",
    description:
      "Annomilli is an archival annotation platform that helps archivists import, annotate, and export EAD-based collections while preserving open standards and interoperability.",
    radar: [
      { label: "UX Design", value: 0.2 },
      { label: "Software Development", value: 0.9 },
      { label: "Research", value: 0.1 },
      { label: "Project Management", value: 0.2 },
    ],
  },
  {
    title: "Software for Psychologists at Monk Prayogshala",
    description:
      "Monk Prayogshala designed a study on how monetary and vanity incentives affect social media sharing. We built the software and data pipeline to run this study with ~1,000 participants online.",
    radar: [
      { label: "UX Design", value: 0.3 },
      { label: "Software Development", value: 1.0 },
      { label: "Data Cleaning", value: 0.3 },
      { label: "Project Management", value: 0.2 },
      { label: "Grant Writing", value: 0.4 },
    ],
  },
  {
    title: "Investigative Reporting with Boom Live",
    description:
      "We collaborated with Boom Live on an investigative piece on nudify apps — combining OSINT, policy research, and security analysis to expose harms in the generative AI ecosystem.",
    radar: [
      { label: "OSINT", value: 0.8 },
      { label: "Policy Research", value: 1.0 },
      { label: "Security", value: 0.4 },
      { label: "Visual Design", value: 0.4 },
    ],
  },
]

export default function BuildWithUs() {
  return (
    <DefaultLayout>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Box background="#252653" pad={{ vertical: "xlarge" }}>
        <NarrowContentWrapper>
          <NarrowSection>
            <Box gap="medium" style={{ maxWidth: "640px" }}>
              <Heading
                level={1}
                margin="none"
                style={{
                  fontFamily: "Bitter",
                  color: "#edc9c4",
                  fontSize: "clamp(26px, 4vw, 40px)",
                  lineHeight: "1.25",
                  fontWeight: 800,
                }}
              >
                We build at the intersection of AI, misinformation research, and civic technology.
              </Heading>
              <Text
                style={{
                  fontFamily: "Raleway",
                  color: "#f4c6d7",
                  fontSize: "18px",
                  lineHeight: "1.75",
                }}
              >
                Tattle is a cross-functional team with deep expertise in machine learning,
                full-stack engineering, UX research, and policy. We take on paid collaborations
                and consultations that align with our mission.
              </Text>
            </Box>
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>

      {/* ── Skills ────────────────────────────────────────────────── */}
      <Box background="white" pad={{ vertical: "xlarge" }}>
        <NarrowContentWrapper>
          <NarrowSection>
            <Box gap="large">
              <Box gap="xsmall">
                <Heading
                  level={2}
                  margin="none"
                  style={{ fontFamily: "Bitter", color: "#252653" }}
                >
                  What we bring
                </Heading>
                <Text style={{ fontFamily: "Raleway", color: "#514E80", fontSize: "16px" }}>
                  A decade of applied work on information ecosystems gives us capabilities that are
                  hard to find in one team.
                </Text>
              </Box>
              <SkillChips skills={SKILLS} />
            </Box>
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>

      {/* ── Past Collaborations ───────────────────────────────────── */}
      <Box background="#fdf6f0" pad={{ vertical: "xlarge" }}>
        <NarrowContentWrapper>
          <NarrowSection>
            <Box gap="xlarge">
              <Box gap="xsmall">
                <Heading
                  level={2}
                  margin="none"
                  style={{ fontFamily: "Bitter", color: "#252653" }}
                >
                  Past collaborations
                </Heading>
                <Text
                  style={{
                    fontFamily: "Raleway",
                    color: "#514E80",
                    fontSize: "16px",
                    lineHeight: "1.7",
                    maxWidth: "580px",
                  }}
                >
                  We work with newsrooms, civil society organisations, researchers, and platforms
                  who need a technical partner with domain expertise — not just a vendor. Engagements
                  range from short consultations to multi-month builds.
                </Text>
              </Box>

              {COLLABORATIONS.map((c) => (
                <Box
                  key={c.title}
                  pad="medium"
                  style={{
                    borderLeft: "4px solid #E76D67",
                    background: "white",
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  <Heading
                    level={3}
                    margin={{ top: "none", bottom: "small" }}
                    style={{ fontFamily: "Bitter", color: "#252653" }}
                  >
                    {c.title}
                  </Heading>
                  <TwoColumnLayout
                    left={<RadarChart options={c.radar} />}
                    right={
                      <Text
                        size="small"
                        style={{ fontFamily: "Raleway", color: "#514E80", lineHeight: "1.75" }}
                      >
                        {c.description}
                      </Text>
                    }
                  />
                </Box>
              ))}
            </Box>
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <Box background="#E76D67" pad={{ vertical: "xlarge" }}>
        <NarrowContentWrapper>
          <NarrowSection>
            <Box gap="medium" style={{ maxWidth: "560px" }}>
              <Heading
                level={2}
                margin="none"
                style={{
                  fontFamily: "Bitter",
                  color: "#252653",
                  lineHeight: "1.3",
                }}
              >
                Have a project in mind?
              </Heading>
              <Text
                style={{
                  fontFamily: "Raleway",
                  color: "#252653",
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Tell us what you're working on. Whether it's a scoped consultation or a longer
                collaboration, we're happy to explore what's possible together.
              </Text>
              <Box>
                <Anchor
                  href="mailto:admin@tattle.co.in?subject=Collaboration enquiry"
                  style={{
                    display: "inline-block",
                    fontFamily: "Raleway",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    fontSize: "14px",
                    background: "#252653",
                    color: "#edc9c4",
                    padding: "12px 28px",
                    borderRadius: "1.2em",
                    textDecoration: "none",
                  }}
                >
                  Start a conversation →
                </Anchor>
              </Box>
            </Box>
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>

    </DefaultLayout>
  )
}
