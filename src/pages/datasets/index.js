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
import { PlainExternalLink } from "../../components/atomic/TattleLinks"

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
          fluid {
            src
          }
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
                  <Heading level={2} color={"#514E80"} margin={{ top: "none" }}>
                    Datasets
                  </Heading>
                  <Paragraph color={"#514E80"} margin={{ top: "none" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis et aliquam nulla, vitae volutpat lacus. Nullam non ante
                    a dui feugiat aliquet faucibus vitae justo. Ut nisi nulla,
                    elementum non felis sed, rutrum vestibulum ante.
                    Pellentesque pulvinar, sapien et malesuada ultricies, ante
                    elit pulvinar magna, in pretium neque velit at tellus.{" "}
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
              <Heading level={3} color={"#514E80"}>
                Released Datasets
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
                    description={""}
                    url={"https://arxiv.org/abs/2010.13387"}
                    publicationDate={"28-12-2020"}
                  ></DatasetPreview>
                  <DatasetPreview
                    previewImage={
                      "https://images.unsplash.com/photo-1548504769-900b70ed122e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    title={"Fact Checking Sites Dataset 2019"}
                    description={""}
                    url={"https://services.tattle.co.in/khoj/explore"}
                    publicationDate={"07-11-2020"}
                  ></DatasetPreview>
                  <DatasetPreview
                    previewImage={
                      "https://images.unsplash.com/photo-1607049582789-3b2dd51ac95e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    }
                    title={"Datasets we Love"}
                    description={""}
                    publicationDate={"13-11-2020"}
                    url={"https://tattle.co.in/datasets/datasets-we-love"}
                  ></DatasetPreview>
                </>
              </ResponsiveLayoutDatasets>
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
}) => {
  return (
    <PlainExternalLink href={url} target={"_blank"}>
      <Box direction="column" gap={"xsmall"} margin={{ top: "medium" }}>
        <Box
          width={"100%"}
          height={"160px"}
          round={"xsmall"}
          overflow={"hidden"}
        >
          <Image src={previewImage} fit="cover" fill={true} />
        </Box>

        <Box>
          <Paragraph size={"small"} color={"dark-3"} margin={"none"}>
            {publicationDate}
          </Paragraph>

          <Heading level={4} margin={{ bottom: "4.578px", top: "7.324px" }}>
            {title}
          </Heading>
          <Paragraph size={"small"} margin={{ top: "none" }}>
            {description}
          </Paragraph>
        </Box>
      </Box>
    </PlainExternalLink>
  )
}

const ResponsiveLayoutDatasets = ({ size, children }) => {
  return size !== "small" ? (
    <Grid columns={["flex", "flex", "flex"]} gap={"small"}>
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
