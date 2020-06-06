import React, { Fragment, useContext } from "react"
import { Box, Heading, Text, Paragraph, ResponsiveContext } from "grommet"
import DefaultLayout from "../components/default-layout"
import { ResponsiveImage } from "../components/atomic/ResponsiveImage"
import { Link, ExternalLink } from "../components/atomic/TattleLinks"

/**
 * @author
 * @function Index
 **/

const Index = props => {
  // const size = useContext(ResponsiveContext)
  // For some reason, this refuses to play nice with Gatsby, so I had to use ResponsiveContext.Consumer

  return (
    <DefaultLayout>
      <ResponsiveContext.Consumer>
        {size => (
          <Fragment>
            <Box wrap={true} direction={"row"}>
              {size !== "small" ? (
                <Box width={"40%"} pad={"small"}>
                  <ResponsiveImage />
                </Box>
              ) : (
                <Box
                  pad={"large"}
                  width={"100%"}
                  height={"medium"}
                  style={{ boxShadow: "none" }}
                >
                  <ResponsiveImage />
                </Box>
              )}

              <Box flex={true} pad={"small"}>
                <Heading level={2}>Accurate Information to the People</Heading>
                <Box direction={"column"} gap={"small"}>
                  <Text>
                    Tattle is a civic tech project that aims to make accurate
                    information more accessible to mobile first users, in
                    languages that they are comfortable with.
                  </Text>
                  <Text>
                    To this end, Tattle is creating an open archive of content
                    circulated on chat apps; and building open source data
                    collection tools and APIs to index and query the multimedia
                    archive.
                  </Text>
                  <Text>
                    You can read more about the project{" "}
                    <Link to={"/faq"}>
                      {" "}
                      <Text color={"brand"} weight={"bold"}>
                        here
                      </Text>{" "}
                    </Link>
                    .
                  </Text>
                  <Text>
                    Tattle was one of the winners of the{" "}
                    <ExternalLink
                      href={
                        "https://aiethicsinitiative.org/news/2019/3/12/announcing-the-winners-of-the-ai-and-the-news-open-challenge"
                      }
                      target="_blank"
                    >
                      <Text color={"brand"} weight={"bold"}>
                        AI and the News Open Challenge &nbsp;
                      </Text>
                    </ExternalLink>
                    which has enabled the project to scale faster.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Fragment>
        )}
      </ResponsiveContext.Consumer>
    </DefaultLayout>
  )
}

export default Index
