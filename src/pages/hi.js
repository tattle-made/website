import React, { Fragment } from "react"
import { Heading, Text, Paragraph } from "grommet"
import DefaultLayout from "../components/default-layout"
import { ResponsiveImage } from "../components/atomic/ResponsiveImage"
import { PlainLink, PlainExternalLink } from "../components/atomic/TattleLinks"

/**
 * @author
 * @function Hi
 **/

const Hi = props => {
  return (
    <DefaultLayout>
      <Fragment>
        <ResponsiveImage />
        <Heading level={2}>Accurate Information to the People</Heading>
        <Heading level={4}>
          Tattle is a civic tech project that aims to make accurate information
          more accessible to mobile first users, in languages that they are
          comfortable with.
        </Heading>
        <Text>
          To this end, Tattle is creating an open archive of content circulated
          on chat apps; and building open source data collection tools and APIs
          to index and query the multimedia archive.
        </Text>
        <Text>
          You can read more about the project{" "}
          <PlainLink to={"/faq"}>
            {" "}
            <Text>here</Text>{" "}
          </PlainLink>
          .
        </Text>
        <Text>
          Tattle was one of the winners of the [AI and the News Open
          Challenge](https://aiethicsinitiative.org/news/2019/3/12/announcing-the-winners-of-the-ai-and-the-news-open-challenge)
          which has enabled the project to scale faster.
        </Text>
      </Fragment>
    </DefaultLayout>
  )
}

export default Hi
