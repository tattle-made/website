import React from "react"
import { Anchor, Box, Heading, Text } from "grommet"
import heroImage from "../images/hero-ai-safety.png"
import NarrowSection from "../components/atomic/layout/narrow-section"
import DefaultLayout from "../components/default-layout"
import NarrowContentWrapper from "../components/atomic/layout/narrow-content-wrapper"
import TwoColumnLayout from "../components/atomic/layout/TwoColumnLayout"


const CASE_STUDIES = [
  {
    title: "ML Commons Benchmark Dataset",
    description:
      "In 2024, Tattle built a dataset of prompts in Hindi for ML Common’s safety benchmark. We created 2000 prompts in Hindi on two hazard categories - hate and sex-related crimes. Following Uli’s participatory approach, these prompts were created by an expert group, consisting of individuals with expertise in journalism, social work, feminist advocacy, gender studies, fact-checking, political campaigning, education, psychology, and research.",
    tags: ["Red-Teaming", "Multilingual NLP", "Benchmarking"],
  },
  {
    title: "Guardrails for Kaapi Project",
    description:
      "We participated in Tech4Dev’s AI cohort program and helped them conceptualize and build safety guardrails for the participating NGOs. The first step in this process was to conduct manual evaluations of sample datasets from NGO AI use cases to determine critical risks and develop relevant guardrails. This led to the creation of the  Kaapi Guardrails, an API-first microservice for enforcing safety constraints in user-LLM interactions. This is available as an open source project for the community to self host and use in their AI solutions.",
    tags: ["Bias Audit", "Content Moderation", "Policy Research"],
  },
  {
    title: "Stress Testing IIT Madras Chatbot",
    description:
      "We were contracted by IIT Madras’ Online Bsc program to conduct a preliminary stress testing/red-teaming of their AI bot that answers questions for prospective applicants. As a comprehensive evaluation, we reviewed their gold dataset of question-answer pairs,  evaluated input-output pairs from the live data and did some red teaming.. We provided recommendations on implementation that might reduce misuse. We provided a report highlighting strengths and weaknesses of the bot, recommendations for fine tuning and safety improvements, and shared a customizable slur detection module guardrail with support for Hindi, English and Tamil. ",
    tags: ["Misinformation", "Risk Assessment", "OSINT"],
  },
]

const PUBLICATIONS = [
  {
    label: "Analysis of Indic Language Capabilities in LLMs",
    href: "Analysis of Indic Language Capabilities in LLMs",
  },
  {
    label: "Report for MLCommons: AI safety benchmark Datasets in Hindi",
    href: "https://drive.google.com/file/d/1OKpZ7qqT6hjbzaeUC7UnBF1oCTn7c70z/view",
  },
  {
    label: "AILuminate: Introducing v1.0 of the AI Risk and Reliability Benchmark from MLCommons: ",
    href: "https://arxiv.org/abs/2503.05731",
  },
  {
    label: "Participation in AI: Notes from the trenches",
    href: "https://www.taylorfrancis.com/chapters/oa-edit/10.1201/9781003663577-6/participation-ai-tarunima-prabhakar-cheshta-arora-arnav-arora",
  },
  {
    label: "Towards Functional Safety in AI in the Social Sector",
    href: "https://tattle.co.in/blog/2026-01-20-functional-ai-safety/",
  },
  {
    label: "Manual Evaluations of AI in the Social Sector",
    href: "https://tattle.co.in/blog/2026-05-28-how-to-do-manual-evaluations/",
  },
  {
    label: "What is AI safety?",
    href: "https://tattle.co.in/blog/2025-12-12-what-is-ai-safety/",
  },
]

export default function AISafety() {
  return (
    <DefaultLayout
      navTheme="celebratory"
      pageTitle="AI Safety"
      meta={{
        name: "AI Safety | Tattle",
        description:
          "Tattle's AI safety work spans red-teaming, bias audits, multilingual safety benchmarking, and policy consulting for AI systems in the Global South.",
        cover: "/aipolicy3.jpg",
      }}
    >

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Box background="#ffebcb" pad={{ vertical: "xlarge" }}>
        <NarrowContentWrapper>
          <NarrowSection>
            <TwoColumnLayout
              left={
                <Box gap="medium">
                  <Heading
                    level={1}
                    margin="none"
                    style={{
                      fontFamily: "Bitter",
                      color: "#252653",
                      fontSize: "clamp(26px, 4vw, 40px)",
                      lineHeight: "1.25",
                      fontWeight: 800,
                    }}
                  >
                    AI Safety research and consulting
                  </Heading>
                  <Text
                    style={{
                      fontFamily: "Raleway",
                      color: "#514E80",
                      fontSize: "18px",
                      lineHeight: "1.75",
                    }}
                  >
                    At Tattle we focus on investigation and mitigation of unanticipated outcomes in AI tools. Through collaborative/ cross-disciplinary approaches we identify contextual and emergent risks in multilingual/multicultural settings, especially in India. We create datasets, propose design recommendations and develop customizable tools to address emerging risks. We also produce original research and publications based on our AI safety work.
                  </Text>
                </Box>
              }
              right={
                <Box justify="center" align="center">
                  {/* <img
                    src={heroImage}
                    alt="AI Safety illustration"
                    style={{ width: "100%", maxWidth: "420px", display: "block" }}
                  /> */}
                </Box>
              }
            />
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>

      {/* ── Types of Services ─────────────────────────────────────── */}
      <Box background="white">
        <NarrowContentWrapper>
          <NarrowSection>
            <Box gap="large">
              <Box gap="xsmall">
                <Heading
                  level={2}
                  margin="none"
                  style={{
                    fontFamily: "Bitter",
                    color: "#252653",
                    fontSize: "clamp(26px, 4vw, 40px)",
                    lineHeight: "1.25",
                  }}
                >
                  Types of services
                </Heading>
                <Text
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "18px",
                    lineHeight: "1.75",
                  }}
                >
                  <ul>
                    <li>
                      Manual and automated evaluations of AI applications
                    </li>
                    <li>
                      Creating datasets, including benchmarks, for safety and socio-cultural evaluations 
                    </li>
                    <li>
                      Developing bespoke AI guardrails 
                    </li>
                  </ul>
                </Text>
              </Box>
            </Box>
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>

      {/* ── Methodology ───────────────────────────────────────────── */}
      <Box background="light-2">
        <NarrowContentWrapper>
          <NarrowSection>
            <Box gap="large">
              <Box gap="xsmall">
                <Heading
                  level={2}
                  margin="none"
                  style={{
                    fontFamily: "Bitter",
                    color: "#252653",
                    fontSize: "clamp(26px, 4vw, 40px)",
                    lineHeight: "1.25",
                  }}
                >
                  Methodology
                </Heading>
              </Box>

              {[
                {
                  title: "Manual Evaluation",
                  content: (
                    <Text style={{ fontFamily: "Raleway", fontSize: "15px", color: "#514E80", lineHeight: "1.5" }}>
                      Tattle has developed a four-step process for conducting human evaluations of LLM systems. This is an iterative research process that involves conducting repeated sequences of the following four steps on each dataset:
                      <ul style={{ margin: "6px 0 6px 20px", padding: 0 }}>
                        <li>Sampling data from human to LLM chats/interactions.</li>
                        <li>Annotating sampled data by paying attention to unique characteristics of each use case.</li>
                        <li>Expanding sample through targeted keyword searches.</li>
                        <li>Analysing annotations to identify categories of risks and errors emerging from the AI tool and prioritize safety issues.</li>
                      </ul>
                      For a detailed guide to our evaluation methodology you can read our{" "}
                      <Anchor href="https://tattle.co.in/blog/2026-05-28-how-to-do-manual-evaluations/" style={{ color: "#514E80" }}>
                        Guide for Manual Evals.
                      </Anchor>
                    </Text>
                  ),
                },
                {
                  title: "Technology Development",
                  content: (
                    <Text style={{ fontFamily: "Raleway", fontSize: "15px", color: "#514E80", lineHeight: "1.5" }}>
                      Tattle has been working on building open source datasets and software to tackle India specific challenges to online harms. Through our work on Feluda and Uli, we have built expertise in building solutions that operate on multimodal and multilingual data and are suited for the Indian context. We bring these learnings and experience to AI safety. Following our manual evaluation methodology, we co-create solutions in close collaboration with our partners.
                    </Text>
                  ),
                },
              ].map(item => (
                <Box
                  key={item.title}
                  pad={{ left: "medium", top: "small", bottom: "small" }}
                  style={{ borderLeft: "4px solid #ffebcb" }}
                  gap="xsmall"
                >
                  <Heading
                    level={3}
                    margin="none"
                    style={{ fontFamily: "Bitter", color: "#252653" }}
                  >
                    {item.title}
                  </Heading>
                  {item.content}
                </Box>
              ))}
            </Box>
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>

      {/* ── Case Studies ──────────────────────────────────────────── */}
      <Box background="white">
        <NarrowContentWrapper>
          <NarrowSection>
            <Box gap="xlarge">
              <Box gap="xsmall">
                <Heading
                  level={2}
                  margin="none"
                  style={{
                    fontFamily: "Bitter",
                    color: "#252653",
                    fontSize: "clamp(26px, 4vw, 40px)",
                    lineHeight: "1.25",
                  }}
                >
                  Case studies
                </Heading>
              </Box>

              {CASE_STUDIES.map(c => (
                <Box
                  key={c.title}
                  pad="medium"
                  style={{
                    border: "4px solid #ffebcb",
                    background: "white",
                    borderRadius: "0.4em",
                  }}
                >
                  <Heading
                    level={3}
                    margin={{ top: "none", bottom: "xsmall" }}
                    style={{ fontFamily: "Bitter", color: "#252653", fontSize: "20px" }}
                  >
                    {c.title}
                  </Heading>
                  <TwoColumnLayout
                    left={
                      <Box gap="xsmall" direction="row" wrap>
                        {/* {c.tags.map(tag => (
                          <Box
                            key={tag}
                            pad={{ horizontal: "small", vertical: "xsmall" }}
                            style={{
                              background: "#ffebcb",
                              borderRadius: "2em",
                              fontFamily: "Raleway",
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#514E80",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {tag}
                          </Box>
                        ))} */}
                      </Box>
                    }
                    right={
                      <Text
                        style={{ fontFamily: "Raleway", fontSize: "14px", color: "#514E80", lineHeight: "1.5" }}
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

      {/* ── Publications ──────────────────────────────────────────── */}
      <Box background="light-2">
        <NarrowContentWrapper>
          <NarrowSection>
            <Box gap="large">
              <Box gap="xsmall">
                <Heading
                  level={2}
                  margin="none"
                  style={{
                    fontFamily: "Bitter",
                    color: "#252653",
                    fontSize: "clamp(26px, 4vw, 40px)",
                    lineHeight: "1.25",
                  }}
                >
                  Publications
                </Heading>
              </Box>
              <Box gap="small" as="ul" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {PUBLICATIONS.map(p => (
                  <Box
                    key={p.label}
                    as="li"
                    pad={{ vertical: "small" }}
                    style={{ borderBottom: "1px solid #e0d5c9" }}
                  >
                    <Anchor
                      href={p.href}
                      style={{
                        fontFamily: "Raleway",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        color: "#514E80",
                        fontWeight: 600,
                      }}
                    >
                      {p.label}
                    </Anchor>
                  </Box>
                ))}
              </Box>
            </Box>
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>

      {/* ── Contact Us ────────────────────────────────────────────── */}
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
                Work with us on AI safety
              </Heading>
              <Text
                style={{
                  fontFamily: "Raleway",
                  color: "#252653",
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                If you would like to collaborate with us on or use our AI safety services please get in touch with us by emailing
              </Text>
              <Anchor
                href="mailto:admin@tattle.co.in?subject=AI Safety enquiry"
                style={{
                  display: "inline-block",
                  fontFamily: "Raleway",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  fontSize: "14px",
                  background: "#252653",
                  color: "#edc9c4",
                  padding: "12px 28px",
                  borderRadius: "0.6em",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                Get in touch →
              </Anchor>
            </Box>
          </NarrowSection>
        </NarrowContentWrapper>
      </Box>

    </DefaultLayout>
  )
}
