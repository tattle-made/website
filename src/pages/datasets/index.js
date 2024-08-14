import React, { useState, useEffect } from "react"
import DefaultLayout from "../../components/default-layout"
import {
  ResponsiveContext,
  Box,
  Grid,
  Layer,
  Heading,
  Text,
  Paragraph,
  Image,
} from "grommet"
import { graphql, useStaticQuery } from "gatsby"
import NarrowContentWrapper from "../../components/atomic/layout/narrow-content-wrapper"
import NarrowSection from "../../components/atomic/layout/narrow-section"
import {
  PlainExternalLink,
  SmartPlainLink,
} from "../../components/atomic/TattleLinks"

const ResponsiveGrid = ({ size, children }) => {
  return size !== "small" ? (
    <Grid columns={["flex", "flex"]} gap={"small"}>
      {children}
    </Grid>
  ) : (
    <Grid
      columns={{
        count: 1,
        size: "auto",
      }}
      gap="small"
    >
      {children}
    </Grid>
  )
}

/**
 * @author
 * @function Datasets
 **/

const Datasets = () => {
  const [fetching, setFetching] = useState(false)
  const size = React.useContext(ResponsiveContext)
  console.log("------", size)
  const { cover_image } = useStaticQuery(graphql`
    query {
      cover_image: file(relativePath: { eq: "datasets_cover.png" }) {
        childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
      }
    }
  `)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <DefaultLayout>
      <ResponsiveContext.Consumer>
        {size => (
          <NarrowContentWrapper>
            <NarrowSection>
              <ResponsiveGrid size={size}>
                <Box>
                  <Paragraph color={"#514E80"} margin={{ top: "none" }}>
                    This page lists Tattle Data that is vetted and safe to be
                    opened under open access. These datasets are snapshots of
                    the bigger archive. In the 'datasets we love' section we
                    also list non Tattle datasets that could be useful for
                    misinformation/ social media analysis in India.{" "}
                  </Paragraph>
                </Box>
                <Box>
                  <Box
                    overflow={"hidden"}
                    width={size !== "small" ? "large" : "100%"}
                    round={"xsmall"}
                  >
                    <Image
                      src={cover_image.childImageSharp.fluid.src}
                      fit="cover"
                      fill={true}
                    />
                  </Box>
                </Box>
              </ResponsiveGrid>
              <Box height={"1.6em"} />
              <Heading level={3} color={"#514E80"}>
                Our Datasets
              </Heading>
              <ResponsiveLayoutDatasets size={size}>
                <>
                  <DatasetPreview
                    previewImage={
                      "https://images.unsplash.com/photo-1462556791646-c201b8241a94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
                    }
                    title={
                      "CheckMate: Prioritizing User Generated Content for Fact Checking"
                    }
                    description={
                      "A novel dataset that can be used to prioritize check-worthy posts from multi-media content in Hindi. It is unique in its focus on user generated content, language and accommodation of multi-modality in social media posts."
                    }
                    url={"https://arxiv.org/abs/2010.13387"}
                    publicationDate={"28-12-2020"}
                    linktype="external"
                  ></DatasetPreview>
                  <DatasetPreview
                    previewImage={
                      "https://images.unsplash.com/photo-1548504769-900b70ed122e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    title={"Fact Checking Sites Dataset 2019"}
                    description={
                      "A dataset of fact check articles scraped from IFCN certified fact check organizations in India. The data contains text and images from the article along with metadata about the organization and author"
                    }
                    url={"https://services.tattle.co.in/khoj/explore"}
                    publicationDate={"07-11-2020"}
                    linktype="external"
                  ></DatasetPreview>
                </>
              </ResponsiveLayoutDatasets>
              <Heading level={3} color={"#514E80"}>
                Datasets We love
              </Heading>
              <SmartPlainLink
                linktype="internal"
                target="/datasets/datasets-we-love"
              >
                Please check out this selected list of datasets we find useful
              </SmartPlainLink>
            </NarrowSection>
          </NarrowContentWrapper>
        )}
      </ResponsiveContext.Consumer>
    </DefaultLayout>
  )
}

const DatasetPreview = ({
  previewImage,
  title,
  description,
  publicationDate,
  offset,
  url,
  linktype,
}) => {
  return (
    <SmartPlainLink linktype={linktype} target={url}>
      <Box direction="column" gap={"xsmall"} margin={{ top: "medium" }}>
        {/* <Box
          width={"100%"}
          height={"160px"}
          round={"xsmall"}
          overflow={"hidden"}
          background={`visuals-${Math.ceil(Math.random() * 7)}`}
        >
          <Image src={previewImage} fit="cover" fill={true} />
        </Box> */}

        <Box>
          {/*<Paragraph size={"small"} color={"dark-3"} margin={"none"}>
            {publicationDate}
      </Paragraph>*/}

          <Heading level={4} margin={{ bottom: "4.578px", top: "7.324px" }}>
            {title}
          </Heading>
          <Paragraph fill={true} size={"small"} margin={{ top: "none" }}>
            {description}
          </Paragraph>
        </Box>
      </Box>
    </SmartPlainLink>
  )
}

const ResponsiveLayoutDatasets = ({ size, children }) => {
  return size !== "small" ? (
    <Grid columns={["flex", "flex"]} gap={"small"}>
      {children}
    </Grid>
  ) : (
    <Grid
      columns={{
        count: 2,
        size: "auto",
      }}
      gap="small"
    >
      {children}
    </Grid>
  )
}

export default Datasets
