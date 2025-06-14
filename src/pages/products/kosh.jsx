import React from "react"
import NarrowSection from "../../components/atomic/layout/narrow-section"
import DefaultLayout from "../../components/default-layout"
import NarrowContentWrapper from "../../components/atomic/layout/narrow-content-wrapper"
import { Anchor, Box, Heading, Image, List, Paragraph, Text } from "grommet"
import { LatestProductBlogsUpdates } from "../../components/LatestProductBlogsUpdates"
import { StaticImage } from "gatsby-plugin-image"

const DPGLogo = () => (
  <svg
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 90.9 69.1"
    style={{ enableBackground: "new 0 0 90.9 69.1;" }}
  >
    <style type="text/css"></style>
    <g>
      <g>
        <g>
          <path
            fill="#1F1887"
            d="M66.5,15c0-0.3,0.3-0.5,0.6-0.5c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.3,0.5-0.5,0.5C66.7,15.6,66.5,15.3,66.5,15z      M66.6,16.5h0.8v5.1h-0.8V16.5z"
          />
          <path
            fill="#1F1887"
            d="M74.3,16.5v5.5c0,1.5-1.2,2.6-2.6,2.6c-1.1,0-2.1-0.7-2.5-1.8l0.7-0.3c0.2,0.7,0.9,1.3,1.8,1.3     c1,0,1.9-0.8,1.9-1.9V21c-0.5,0.5-1.1,0.8-1.9,0.8c-1.5,0-2.6-1.2-2.6-2.6c0-1.5,1.2-2.6,2.6-2.6c0.7,0,1.4,0.3,1.8,0.7v-0.6     H74.3z M73.5,19.1c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9c0,1,0.8,1.9,1.9,1.9C72.7,20.9,73.5,20.1,73.5,19.1z"
          />
          <path
            fill="#1F1887"
            d="M76.1,15c0-0.3,0.3-0.5,0.6-0.5c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.3,0.5-0.5,0.5C76.4,15.6,76.1,15.3,76.1,15z      M76.3,16.5h0.8v5.1h-0.8V16.5z"
          />
          <path
            fill="#1F1887"
            d="M80,17.3v2.9c0,0.5,0.4,0.8,0.8,0.8h0.6v0.6c-0.1,0.1-0.4,0.2-0.7,0.2c-0.8,0-1.5-0.6-1.5-1.4v-3h-0.9v-0.8     h0.9v-2.2H80v2.2h1.4v0.8H80z"
          />
          <path
            fill="#1F1887"
            d="M87.8,21v0.7c-0.1,0.1-0.2,0.1-0.4,0.1c-0.6,0-1-0.4-1.2-0.9c-0.4,0.6-1.1,0.9-2,0.9c-1.1,0-1.7-0.6-1.7-1.4     c0-0.9,0.7-1.4,1.7-1.4h1.9v-0.4c0-0.8-0.6-1.2-1.4-1.2c-0.8,0-1.4,0.4-1.4,1.2h-0.8c0-1.2,1-2,2.2-2c1.2,0,2.2,0.8,2.2,2v1.9     c0,0.5,0.2,0.7,0.5,0.7H87.8z M86.1,19.9v-0.3h-1.8c-0.6,0-1,0.3-1,0.8c0,0.5,0.4,0.8,1,0.8C85.2,21,85.9,20.6,86.1,19.9z"
          />
          <path fill="#1F1887" d="M88.8,12.3h0.8v9.4h-0.8V12.3z" />
          <path
            fill="#1F1887"
            d="M64.9,30v-3.3h0.8v3.2c0,0.8,0.5,1.2,1.1,1.2c0.7,0,1.1-0.5,1.1-1.2v-3.2h0.8V30c0,1.2-0.8,1.9-1.9,1.9     C65.7,31.9,64.9,31.2,64.9,30z"
          />
          <path
            fill="#1F1887"
            d="M73.1,26.6c-0.7,0-1.4,0.3-1.9,0.8v-3.6c-0.3-0.1-0.5-0.1-0.8-0.2v8.3h0.8v-0.7c0.5,0.5,1.1,0.8,1.9,0.8     c1.5,0,2.6-1.2,2.6-2.6S74.5,26.6,73.1,26.6z M73.1,31.1c-1,0-1.9-0.8-1.9-1.9c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9     C74.9,30.3,74.1,31.1,73.1,31.1z"
          />
          <path fill="#1F1887" d="M77.2,22.4H78v9.4h-0.8V22.4z" />
          <path
            fill="#1F1887"
            d="M79.8,25.2c0-0.3,0.3-0.5,0.6-0.5c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.3,0.5-0.5,0.5     C80.1,25.8,79.8,25.5,79.8,25.2z M80,26.7h0.8v5.1H80V26.7z"
          />
          <path
            fill="#1F1887"
            d="M82.4,29.3c0-1.5,1.2-2.6,2.6-2.6c1.2,0,2.2,0.8,2.5,1.8h-0.8c-0.3-0.6-0.9-1-1.7-1c-1,0-1.9,0.8-1.9,1.9     s0.8,1.9,1.9,1.9c0.7,0,1.4-0.4,1.7-1h0.8c-0.3,1.1-1.3,1.8-2.5,1.8C83.5,31.9,82.4,30.7,82.4,29.3z"
          />
          <path
            fill="#1F1887"
            d="M66.8,37.1v0.2c0,2.2-1.8,3.9-3.9,3.9c-2.2,0-3.9-1.8-3.9-3.9c0-2.2,1.7-3.9,3.9-3.9c1.5,0,2.7,0.8,3.4,2     l-0.7,0.4c-0.5-0.9-1.5-1.6-2.7-1.6c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1c1.5,0,2.8-1.1,3.1-2.6h-3.1v-0.8H66.8z"
          />
          <path
            fill="#1F1887"
            d="M68,38.6c0-1.5,1.2-2.6,2.6-2.6c1.5,0,2.6,1.2,2.6,2.6c0,1.5-1.2,2.6-2.6,2.6C69.2,41.3,68,40.1,68,38.6z      M72.5,38.6c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9s0.8,1.9,1.9,1.9C71.7,40.5,72.5,39.7,72.5,38.6z"
          />
          <path
            fill="#1F1887"
            d="M74.4,38.6c0-1.5,1.2-2.6,2.6-2.6c1.5,0,2.6,1.2,2.6,2.6c0,1.5-1.2,2.6-2.6,2.6     C75.6,41.3,74.4,40.1,74.4,38.6z M78.9,38.6c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9s0.8,1.9,1.9,1.9     C78.1,40.5,78.9,39.7,78.9,38.6z"
          />
          <path
            fill="#1F1887"
            d="M86.2,31.8v9.4h-0.8v-0.7c-0.5,0.5-1.1,0.8-1.9,0.8c-1.5,0-2.6-1.2-2.6-2.6c0-1.5,1.2-2.6,2.6-2.6     c0.7,0,1.4,0.3,1.9,0.8v-4.9H86.2z M85.4,38.6c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9s0.8,1.9,1.9,1.9     C84.5,40.5,85.4,39.7,85.4,38.6z"
          />
          <path
            fill="#1F1887"
            d="M87.5,40.2l0.8-0.3c0.1,0.4,0.5,0.6,1,0.6c0.5,0,0.8-0.3,0.8-0.7c0-0.4-0.3-0.6-0.9-0.8     c-0.9-0.3-1.4-0.8-1.4-1.6c0-0.9,0.7-1.4,1.5-1.4c0.6,0,1.3,0.4,1.5,0.8L90,37.2c-0.1-0.3-0.4-0.4-0.8-0.4     c-0.4,0-0.7,0.2-0.7,0.6c0,0.4,0.3,0.6,0.9,0.9c0.7,0.3,1.4,0.6,1.4,1.5c0,0.9-0.7,1.5-1.6,1.5C88.5,41.3,87.7,40.8,87.5,40.2z"
          />
          <g>
            <path
              fill="#1F1887"
              d="M60.3,46.8L60.3,46.8l-0.7,1.7h-0.4l2-4.7l2,4.7h-0.4l-0.7-1.6l0-0.1l-0.9-2.2L60.3,46.8z M60.1,46.7h2.1      l0.1,0.3H60L60.1,46.7z"
            />
            <path fill="#1F1887" d="M64.1,43.5v5.1h-0.3v-5.1H64.1z" />
            <path fill="#1F1887" d="M65.4,43.5v5.1h-0.3v-5.1H65.4z" />
            <path
              fill="#1F1887"
              d="M66.5,44c0,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1c0,0,0.1,0.1,0.1,0.2c0,0.1,0,0.1-0.1,0.2      c0,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.2C66.5,44.1,66.5,44.1,66.5,44z M66.9,45.6v3h-0.3v-3H66.9z"
            />
            <path
              fill="#1F1887"
              d="M67.9,46.2c0.1-0.2,0.3-0.4,0.5-0.5c0.2-0.1,0.5-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2      c0.2,0.1,0.3,0.3,0.4,0.6c0.1,0.2,0.2,0.5,0.2,0.8c0,0.3-0.1,0.6-0.2,0.8c-0.1,0.2-0.3,0.4-0.4,0.6c-0.2,0.1-0.4,0.2-0.7,0.2      c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.1-0.4-0.3-0.5-0.5c-0.1-0.2-0.2-0.5-0.2-0.8C67.7,46.7,67.8,46.5,67.9,46.2z M68.2,47.7      c0.1,0.2,0.2,0.3,0.4,0.4c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4-0.1,0.5-0.2s0.3-0.3,0.4-0.4c0.1-0.2,0.1-0.4,0.1-0.6      s-0.1-0.5-0.1-0.6c-0.1-0.2-0.2-0.3-0.4-0.4c-0.2-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0-0.6,0.1c-0.2,0.1-0.3,0.2-0.4,0.4      c-0.1,0.2-0.2,0.4-0.2,0.7C68,47.3,68.1,47.5,68.2,47.7z M70.6,45.6v3h-0.3v-3H70.6z"
            />
            <path
              fill="#1F1887"
              d="M73.3,46c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0-0.5,0.1c-0.1,0.1-0.2,0.2-0.3,0.3      c-0.1,0.1-0.1,0.3-0.1,0.5v1.8h-0.3v-3h0.3v0.6c0.1-0.2,0.2-0.4,0.4-0.5c0.2-0.1,0.4-0.2,0.6-0.2c0.3,0,0.5,0.1,0.7,0.3      c0.2,0.2,0.2,0.5,0.2,0.8v2h-0.3v-1.9C73.5,46.4,73.4,46.2,73.3,46z"
            />
            <path
              fill="#1F1887"
              d="M75.1,47.7c0.1,0.2,0.2,0.3,0.4,0.4c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.3,0,0.4-0.1c0.1,0,0.3-0.1,0.4-0.2      c0.1-0.1,0.2-0.2,0.2-0.2v0.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.4,0.1-0.6,0.1c-0.3,0-0.6-0.1-0.8-0.2s-0.4-0.3-0.5-0.6      c-0.1-0.2-0.2-0.5-0.2-0.8c0-0.3,0.1-0.6,0.2-0.8c0.1-0.2,0.3-0.4,0.5-0.6c0.2-0.1,0.5-0.2,0.8-0.2c0.2,0,0.4,0,0.6,0.1      c0.2,0.1,0.3,0.2,0.4,0.3v0.4c0-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.4-0.2c-0.1,0-0.3-0.1-0.4-0.1c-0.2,0-0.4,0.1-0.6,0.2      c-0.2,0.1-0.3,0.3-0.4,0.4c-0.1,0.2-0.2,0.4-0.2,0.6S75,47.5,75.1,47.7z"
            />
            <path
              fill="#1F1887"
              d="M78.4,48.4c-0.2-0.1-0.4-0.3-0.5-0.6c-0.1-0.2-0.2-0.5-0.2-0.8s0.1-0.6,0.2-0.8c0.1-0.2,0.3-0.4,0.5-0.5      c0.2-0.1,0.5-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.2,0.2,0.5,0.2,0.8c0,0,0,0.1,0,0.1      c0,0,0,0.1,0,0.1H78v-0.3h2.3l-0.1,0.2c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.5c-0.1-0.2-0.2-0.3-0.4-0.4      c-0.2-0.1-0.3-0.1-0.5-0.1c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.2-0.4,0.4c-0.1,0.2-0.1,0.4-0.1,0.7c0,0.3,0,0.5,0.1,0.7      c0.1,0.2,0.2,0.3,0.4,0.4c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.1c0.2-0.1,0.3-0.3,0.5-0.5l0.3,0.2      c-0.2,0.3-0.4,0.5-0.6,0.6s-0.5,0.2-0.8,0.2C78.9,48.6,78.6,48.5,78.4,48.4z"
            />
          </g>
          <path
            fill="#1F1887"
            d="M59.1,14h2.1c2.1,0,3.8,1.7,3.8,3.8c0,2.1-1.7,3.8-3.8,3.8h-2.1V14z M61.2,20.8c1.7,0,3-1.3,3-3     c0-1.7-1.3-3-3-3h-1.3v6H61.2z"
          />
          <path
            fill="#1F1887"
            d="M63.9,26.3c0,1.2-0.9,2.1-2.1,2.1h-1.9v3.4h-0.8v-7.6h2.7C63,24.2,63.9,25.1,63.9,26.3z M63.1,26.3     c0-0.8-0.6-1.3-1.4-1.3h-1.8v2.7h1.8C62.5,27.6,63.1,27.1,63.1,26.3z"
          />
        </g>
      </g>
      <g>
        <path
          fill="#2A18A3"
          d="M33.4,0L0,15v45.6l13.1,8.4l33.3-15V8.5L33.4,0z M13.1,54.7V23.4l20.3-9.7v31.6L13.1,54.7z"
        />
        <polygon fill="#3128B3" points="33.4,0 33.4,13.8 13.1,23.4 0,15   " />
        <polygon fill="#1F1887" points="13.1,69.1 0,60.6 0,15 13.1,23.4   " />
        <polygon
          fill="#2A18A3"
          points="33.4,0 33.4,45.4 46.4,54.1 46.4,8.5   "
        />
        <polygon
          fill="#3128B3"
          points="13.1,69.1 46.4,54.1 33.4,45.4 13.1,54.7   "
        />
        <polygon fill="#87DAE1" points="33.5,45.4 46.5,54.1 46.5,39.4   " />
      </g>
    </g>
  </svg>
)

const Kosh = () => (
  <DefaultLayout>
    <NarrowContentWrapper>
      <NarrowSection>
        <Heading level={2}>Kosh</Heading>
        <Box direction={"row-responsive"} wrap={true}>
          <Box width={"medium"}>
            <StaticImage alt="img" src={"../../images/kosh-header-2.jpg"} />
          </Box>
          <Box width={"2em"}></Box>
          <Box>
            <Paragraph>
              Kosh is a suite of tools for analysing large amount of multimodal
              and multilingual data. It aims to address challenges specific to
              data prevalent on Indian Social Media.
            </Paragraph>

            <Box direction={"row-responsive"} align="center" gap={"xsmall"}>
              <Paragraph>
                Its analysis engine Feluda is a recognized DPG
              </Paragraph>
              <Box width={"2.4em"}>
                <a
                  href="https://app.digitalpublicgoods.net/a/10707"
                  target={"_blank"}
                >
                  <StaticImage alt="img" src="../../images/dpgicon.svg"/>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </NarrowSection>
      <NarrowSection>
        <Box gap={"small"}>
          <Heading level={3}>Highlights</Heading>
          <Box
            round={"xsmall"}
            pad={"small"}
            background={"visuals-1"}
            direction="row-responsive"
            wrap={"true"}
          >
            <Box width={"medium"} height={"small"} overflow="hidden">
              <iframe
                width="360em"
                height="360em"
                src="https://www.youtube.com/embed/ohCjIngQedI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
            <Box gap={"small"}>
              <Paragraph margin={"none"}>
                <Box width={"88px"} margin={{ bottom: "small" }}>
                  <DPGLogo />
                </Box>
                Feluda was featured by Digital Public Good Alliance amongst 10
                open source projects from around the world helping address
                misinformation
              </Paragraph>
              <Anchor
                href={"https://digitalpublicgoods.net/information-pollution/"}
              >
                <Text size={"small"}>Read Announcement</Text>
              </Anchor>
            </Box>
          </Box>
          <Box
            round={"xsmall"}
            pad={"small"}
            background={"visuals-2"}
            direction="row-responsive"
            wrap={true}
          >
            <Box width={"medium"} height={"small"}>
              <StaticImage alt="img" src={"../../images/covid-tsne.png"} objectFit="contain" />
            </Box>

            <Box gap={"small"}>
              <Paragraph margin={"none"}>
                A Case Study of the Information Chaos During India's Second
                Covid-19 Wave. A unique end to end exercise in collecting data
                from Whatsapp public groups and finding trends within the images
                shared.
              </Paragraph>
              <Anchor
                href={
                  "https://tattle.co.in/articles/covid-whatsapp-public-groups/"
                }
              >
                <Text size={"small"}>Read Report</Text>
              </Anchor>
            </Box>
          </Box>
        </Box>
      </NarrowSection>
      <NarrowSection>
        <Box
          width={"100%"}
          pad={"medium"}
          border={{ color: "visuals-2" }}
          overflow={"hidden"}
        >
          <StaticImage alt="img" src={"../../images/kosh-preview.png"} />
        </Box>
        <Text size={"xsmall"} margin={{ top: "xxsmall" }}>
          Preview of Kosh's UI for adding and viewing{" "}
          <Anchor href={"/datasets"}>datasets</Anchor>{" "}
        </Text>
      </NarrowSection>
      <NarrowSection>
        <Heading level={3}>Relevant Repositories</Heading>
        <List
          primaryKey="name"
          secondaryKey="description"
          data={[
            {
              name: "Kosh",
              description: "Store and Query datasets and media via APIs",
              url: "https://github.com/tattle-made/kosh-v2",
            },
            {
              name: "Feluda",
              description:
                "Analysis Engine for multimodal and multilingual data",
              url: "https://github.com/tattle-made/feluda",
            },
            {
              name: "Whatsapp Scraper",
              description: "",
              url: "https://github.com/tattle-made/whatsapp-scraper",
            },
            {
              name: "Telegram Scraper",
              description: "Telegram Bot for data crowdsourcing",
              url: "https://github.com/tattle-made/archive-telegram-bot",
            },
          ]}
        >
          {datum => (
            <Box>
              <Paragraph fill size={"small"}>
                <Anchor href={datum.url} target={"_blank"}>
                  <Text>{datum.name}</Text>
                </Anchor>
                <Text>{" " + datum.description}</Text>
              </Paragraph>
            </Box>
          )}
        </List>
      </NarrowSection>

      <NarrowSection>
      <LatestProductBlogsUpdates projects={["kosh"]}/>
      </NarrowSection>
    </NarrowContentWrapper>
  </DefaultLayout>
)

export default Kosh
