import React, { Fragment, useContext } from "react"
import { Box, Heading, Text, Paragraph, ResponsiveContext } from "grommet"
import DefaultLayout from "../components/default-layout"
import { ResponsiveImage } from "../components/atomic/ResponsiveImage"
import { Link, ExternalLink } from "../components/atomic/TattleLinks"
import MailchimpSubscribeForm from "../components/atomic/MailchimpSubscribeForm"

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
                  Tattle is a group of technologists, researchers, journalists and artists. 
                  We build tools and datasets to better understand and respond to (mis)information trends on chat apps and regional language social media in India. 
                  Our work is geared towards:
                      * Journalists and fact checkers
                      * Researchers
                      * Motivated individuals who wish to do local fact-checking/debunking.
                  </Text>
                  <Text>
                    The backbone of this project is an archive of content circulating on chat apps and social media; and APIs for multi-lingual and multi-modal search.
                  </Text>
 
                  <Text>
                  We've adapted this core infrastructure for a variety of use cases such as an app that lets people explore if a content they received has been fact checked; and dashboards showing misinformation trends. The data itself has been used by other researchers and journalists studying misinformation.
                      
                  </Text>     

                  <Text>
                  All the code is open source and licensed under{" "}.
                  <ExternalLink
                      href={
                        "https://www.gnu.org/licenses/gpl-3.0.en.html"
                      }
                      target="_blank"
                    >
                      <Text color={"brand"} weight={"bold"}>
                        GPL 3.0;
                      </Text>
                    </ExternalLink>
                  </Text>
                  
                  <Text>
                    You can read more about our goal and mission{" "}
                    <Link to={"/faq"}>
                      {" "}
                      <Text color={"brand"} weight={"bold"}>
                        here.
                      </Text>{""}
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
                <MailchimpSubscribeForm />
              </Box>
            </Box>
          </Fragment>
        )}
      </ResponsiveContext.Consumer>
    </DefaultLayout>
  )
}

export default Index
