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
/**
 * @author
 * @function Datasets
 **/

const Datasets = () => {
  const [fetching, setFetching] = useState(false)
  const size = React.useContext(ResponsiveContext)
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
        {size => {
          return (
            <Box
              width={size !== "small" ? "960px" : "100%"}
              alignSelf={"center"}
              margin={{ top: "large" }}
              pad={{ left: "large", right: "large" }}
            >
              <Box
                direction={"row"}
                overflow={"hidden"}
                margin={{ bottom: "large" }}
                round={"xsmall"}
              >
                <Box direction={"column"} flex="grow">
                  <Box
                    direction={"row"}
                    background={"#EDC9C4"}
                    wrap={size !== "small" ? false : true}
                  >
                    <Box
                      overflow={"hidden"}
                      width={size !== "small" ? "large" : "100%"}
                    >
                      <Image
                        src={cover_image.childImageSharp.fluid.src}
                        fit="cover"
                        fill={true}
                      />
                    </Box>

                    <Box pad={{ left: "small", right: "small" }}>
                      <Box>
                        <Heading level={1} color={"#514E80"}>
                          Datasets
                        </Heading>
                      </Box>
                      <Paragraph color={"#514E80"} margin={{ top: "none" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis et aliquam nulla, vitae volutpat lacus. Nullam non
                        ante a dui feugiat aliquet faucibus vitae justo. Ut nisi
                        nulla, elementum non felis sed, rutrum vestibulum ante.
                        Pellentesque pulvinar, sapien et malesuada ultricies,
                        ante elit pulvinar magna, in pretium neque velit at
                        tellus.{" "}
                      </Paragraph>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <ResponsiveLayoutDatasets size={size}>
                <>
                  <DatasetPreview
                    previewImage={
                      "https://images.unsplash.com/photo-1462556791646-c201b8241a94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
                    }
                    title={"Covid Dataset"}
                    description={""}
                    publicationDate={"28-12-2020"}
                  ></DatasetPreview>
                  <DatasetPreview
                    previewImage={
                      "https://images.unsplash.com/photo-1548504769-900b70ed122e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    title={"Fact Checking Articles 2019"}
                    description={""}
                    publicationDate={"07-11-2020"}
                  ></DatasetPreview>
                  <DatasetPreview
                    previewImage={
                      "https://images.unsplash.com/photo-1607049582789-3b2dd51ac95e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    }
                    title={"Third Dataset"}
                    description={""}
                    publicationDate={"13-11-2020"}
                  ></DatasetPreview>
                </>
              </ResponsiveLayoutDatasets>
            </Box>
          )
        }}
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
}) => {
  return (
    <Box direction="column" gap={"xsmall"} margin={{ top: "medium" }}>
      <Box width={"100%"} height={"160px"} round={"xsmall"} overflow={"hidden"}>
        <Image src={previewImage} fit="cover" fill={true} />
      </Box>
      <Box>
        <Heading level={4} margin={"none"} color={"#454545"}>
          {title}
        </Heading>
        <Box direction={"row"} margin={{ top: "xsmall" }} wrap>
          <Text size={"12px"} color={"#BFBFBF"} weight={600}>
            {" "}
            Published on &nbsp;{" "}
          </Text>
          <Text size={"12px"} color={"#BDBDBD"} weight={400}>
            {" "}
            {publicationDate}{" "}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

const ResponsiveLayoutDatasets = ({ size, children }) => {
  return size !== "small" ? (
    <Grid
      columns={{
        count: 3,
        size: "auto",
      }}
      gap="medium"
    >
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
