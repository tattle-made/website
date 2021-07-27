import React, { useState, useContext } from "react"
import DefaultLayout from "../../../components/default-layout"
import {
  Box,
  Layer,
  Heading,
  Text,
  Paragraph,
  Button,
  Image,
  Table,
  TableRow,
  TableCell,
  TableBody,
  RadioButtonGroup,
  Stack,
  ResponsiveContext,
  ThemeContext,
} from "grommet"
import { MousePointer, X } from "react-feather"
import NarrowContentWrapper from "../../../components/atomic/layout/narrow-content-wrapper"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import StickyBox from "react-sticky-box"
import styled, { useTheme } from "styled-components"
import CovidWhatsappTSNEMap from "../../../components/molecule/covid-whatsapp-tsne-map"

const ImageText = styled.div`
  img {
    width: 40%;
    float: left;
    margin-right: 1.2em;
  }
  p {
    display: inline;
  }
`

const ExternalLink = styled.a`
  color: #E76D67
  &:visited {
    color: #e76d67;
  }
  &:link {
    color: #e76d67;
  }
  &:hover {
    color: #e76d67;
  }
  &:active {
    color: #e76d67;
  }

  text-decoration: none;
`
const SideBar = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
  }
  font-size: 0.8em;
  font-family: Raleway;
  font-weight: 400;
  p {
    font-weight: 800;
  }
`

const ClickableTSNE = ({ src, alt, onClick, caption }) => {
  const theme = useContext(ThemeContext)
  return (
    <Box>
      <Stack anchor="top-left">
        <Box
          width={Number.parseInt(theme.paragraph.large.maxWidth) + 180 + "px"}
          height={"32em"}
          onClick={() => onClick(true)}
          border={"all"}
          focusIndicator={false}
          overflow={"hidden"}
        >
          <Image src={src} alt={alt} fit={"contain"} fill={true} />
        </Box>
        <Box direction={"row"} align={"center"} gap={"xsmall"} pad={"small"}>
          <MousePointer size={12} color={"#e76d67"} />
          <Text size={"xsmall"} color={"#e76d67"}>
            Click to Interact
          </Text>
        </Box>
      </Stack>
      <Text
        color={"dark-4"}
        size={"xsmall"}
        weight={500}
        margin={{ top: "xsmall" }}
      >
        {caption}
      </Text>
    </Box>
  )
}

const TrendHeading = ({ head }) => (
  <ThemeContext.Consumer>
    {theme => (
      <Box margin={{ bottom: "medium" }} width={theme.paragraph.large.maxWidth}>
        <Text size={"small"} weight={600}>
          {head}
        </Text>
      </Box>
    )}
  </ThemeContext.Consumer>
)

const Sidebar = () => {
  const size = useContext(ResponsiveContext)
  return (
    size != "small" && (
      <StickyBox>
        <Box>
          <SideBar>
            <p>Index</p>
            <ul>
              <li>
                <ExternalLink href={"#executive-summary"}>
                  Executive Summary
                </ExternalLink>{" "}
              </li>
              <li>
                <ExternalLink href={"#the-analysis"}>
                  The Analysis{" "}
                </ExternalLink>{" "}
              </li>
              <li>
                <ExternalLink href={"#key-takeaways"}>
                  Key Takeaways{" "}
                </ExternalLink>{" "}
              </li>
              <li>
                <ExternalLink href={"#footnotes"}>Resources </ExternalLink>{" "}
              </li>
            </ul>
          </SideBar>
        </Box>
      </StickyBox>
    )
  )
}

const Content = () => {
  const [showTSNE, setShowTSNE] = useState(false)
  const size = useContext(ResponsiveContext)
  const theme = useContext(ThemeContext)

  console.log({ theme })

  function getWidth(size) {
    switch (size) {
      case "small":
        return "100%"
      case "medium":
        return "80vw"
      default:
        return Number.parseInt(theme.paragraph.large.maxWidth) + 280 + "px"
    }
  }

  return (
    <Box width={getWidth(size)} alignSelf={"center"}>
      <Box direction={"row-responsive"}>
        <Box width={"small"}>
          <Sidebar />
        </Box>

        <Box width={"100%"}>
          <h2 id="executive-summary">Executive Summary</h2>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            From April to June 2021, India was ravaged by the second wave of the
            Covid-19 pandemic. With a steep increase in the number of
            infections, cities ran out of drugs, medical oxygen, hospitals and
            other necessary medical supplies. The second wave also ravaged rural
            India that had weaker public health infrastructure than urban India.{" "}
          </Paragraph>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            The second wave was a public health crisis, but also an information
            crisis. As cities ran out of medical aid, people turned to social
            media to request for resources outside their geographies and
            immediate networks. The circulation of leads for medical aid led to
            a concomitant increase in circulation of inaccurate leads.
            Fraudulent leads—of scamsters duping people of money in promise of
            medical supplies—were mixed in the pool of information leads on
            social media platforms. In addition, the status of medical leads
            changed rapidly—any available hospital beds or drugs were taken up
            within minutes of being available. Obsolete and fraudulent leads
            resulted in loss of critical time in medical care, money and
            ultimately lives. Moreover, phone numbers of individuals from
            marginalized identities, circulated for requesting or providing aid,
            were used for targeted harassment.
          </Paragraph>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            The crisis thus resulted in spontaneous volunteering—individuals and
            groups played the role of intermediaries, connecting those in need
            to verified leads for medical aid. WhatsApp, the most widely used
            social media platform in India, emerged as a natural choice to
            organize volunteering energies. WhatsApp could be used to source
            requests for help, coordinate with other volunteers and connect
            people to adequate aid. But how was WhatsApp used to surface
            actionable information and push back on inaccurate leads when the
            platform eludes centralized takedowns and moderation? How did
            individuals filter credible leads from a glut of information leads?
          </Paragraph>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            This report contends that the second wave of the pandemic in India
            showed a new facet of the Information Disorder. It was driven by a
            specific typology of information—of hyperlocal information leads
            shared during a crisis. While this category of information shares
            some features with the prototypical political and medical
            misinformation, it also merits unique attention.{" "}
          </Paragraph>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            We present preliminary analysis from 8 weeks of conversations in 21
            Covid-19 relief WhatsApp groups that were operational during the
            second wave of the crisis, to shed light on the information chaos
            that ensued during that period. We use vector embedding based
            machine learning to aggregate images based on visual and semantic
            similarity, and language processing techniques to make sense of the
            multi-lingual content shared on these groups. Our preliminary
            analysis suggests that:
          </Paragraph>
          <ul style={{ padding: "0 0 0 1.2em" }}>
            <li>
              <Paragraph size={"large"}>
                Even on WhatsApp, people relied heavily on other social media
                platforms such as Twitter and Instagram to find verified leads.
                Screenshots of posts from these platforms were commonly used
                method to cross-post information. Twitter has fewer than 20
                million users in India. People act as ‘go-betweens’ and connect
                WhatsApp users to information on Twitter and Instagram, giving
                content on these platforms greater reach.{" "}
              </Paragraph>
            </li>
            <li>
              <Paragraph size={"large"}>
                A comparison of phone leads shared in the WhatsApp groups with a
                national level database of verified leads maintained by a
                fact-checking group and with a crowdsourced database of ‘scam’
                numbers revealed a low overlap. Less than 15% of the leads were
                common between the WhatsApp groups we were tracking and the
                databases. This indicates at the scale of information that was
                circulated and challenge of verifying content during the second
                wave of the pandemic in India.
              </Paragraph>
            </li>
            <li>
              <Paragraph size={"large"}>
                Volunteering groups asked for patient information in specific
                templates to make relief work more efficient. People shared
                doctor prescriptions, medical receipts and sensitive personal
                information (including the Biometric ID Aadhar) in these groups
                when requesting for help. Private information was circulated in
                groups of unknown persons who had come together for public
                oriented service. Public and private boundaries are more blurred
                in emergencies which demands greater attention to data deletion
                protocols by group admins.{" "}
              </Paragraph>
            </li>
            <li>
              <Paragraph size={"large"}>
                The frequency of conversations declined in these groups over
                time. Some groups were repurposed to share information unrelated
                to Covid-19 such as chartered accountancy related webinars
                reflecting the use of WhatsApp in digital marketing.
              </Paragraph>
            </li>
          </ul>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            Taking note of the citizen and crowdsourced verification that sprung
            about during the second wave of the pandemic, we posit that the
            spontaneous increase in hyperlocal information demanded distributed
            but coordinated verification. While we have seen coordinated
            fact-checking operations around elections, we propose the
            possibility of similar coordination during sudden events such as
            natural disasters, cyber attacks and wars.{" "}
          </Paragraph>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            We note that the information chaos during the second wave in India
            eluded emerging response mechanisms conceived around political and
            medical misinformation. ‘Leads for medical aid’ as a typology of
            information was hyperlocal and not created or propagated in
            coordination. This information did not have to be viral to be
            harmful. Leads about medical resources are concise units of
            information that don’t rely on or trigger cultural, social or
            political beliefs. People had strong incentives to seek out accurate
            information. Despite deliberate reasoning, the truth status of such
            information was not easy to discern. How platforms could have best
            intervened to reduce the circulation of such content is also
            unclear.{" "}
          </Paragraph>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            A case study of relief work coordinated on chat apps during the
            second wave of Covid-19, this analysis highlights a facet of the
            information disorder that could emerge in any situation where the
            need for reliable actionable information is high but trusted and
            expected information channels fail. Accounting for such situations
            in emerging agendas for research and action could lead to more
            robust toolkits for dis/misinformation response.{" "}
          </Paragraph>
          <h2 id="the-analysis">The Analysis</h2>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            Over the 8-week period we collected 16,6944 text messages, 2,415
            images (2,296 unique). We also collected over 200 videos during this
            time, but we did not undertake any video analysis in this study. At
            the time of joining, we were primarily targeting groups in English,
            Hindi and Marathi, since these were the languages understood by the
            team members. In addition, we also joined one group in Telugu. In
            the final sample of posts, we also found messages in Tamil, Telugu
            and Gujarati.{" "}
          </Paragraph>
          <Box width={theme.paragraph.large.maxWidth}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      {" "}
                      Total Number of Groups{" "}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>21</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      {" "}
                      Number of Text Messages{" "}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>16,694</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      {" "}
                      Total Number of Images{" "}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>2,415</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      {" "}
                      Number of Unique Images{" "}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>2,296</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      {" "}
                      Number of Unique Senders{" "}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>1,192</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Duration of Analysis{" "}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <ul style={{ listStyleType: "none", padding: "0" }}>
                      <li>
                        <Text size={"xsmall"}>
                          29 April 2021 – 24 June 2021 (for 16 groups)
                        </Text>
                      </li>
                      <li>
                        <Text size={"xsmall"}>
                          9 June 2021 – 24 June 2021 (for 5 groups)
                        </Text>
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            We relied primarily on automated techniques for broad insights about
            the content on the platforms. These techniques allowed for at-scale
            analysis of social media content but also come with inherent
            limitations. Machine learning based techniques, be it
            vector-embeddings, language translation or computer vision based
            text extraction, are error-prone (Please see the full report for a
            discussion on methodology and errors). While we attempted some
            correction of known errors, a lot more can be done. The analysis
            presented here should be treated as indication of trends that merit
            further investigation, and not conclusive assertions.{" "}
          </Paragraph>
          <TrendHeading
            head={
              "Trend 1 : Heavy Use of Information from Other Social Media Platforms"
            }
          />

          <ClickableTSNE
            src={"/covid-whatsapp-public-groups/report_images/T-Sne_2.png"}
            alt={
              "A visualization highlighting cluster of images of screenshots taken from Instagram and Twitter of posts about leads and help."
            }
            onClick={setShowTSNE}
            caption={"Image Clustering based on Visual and Semantic Meaning"}
          />

          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            The biggest cluster in the vector embeddings based image grouping is
            of screenshots of posts from Twitter and Instagram. A scan of this
            cluster shows that majority of these screenshots are leads for
            medical oxygen suppliers, drugs, hospital and ICU facilities and
            other medical supplies, indicating heavy reliance on other social
            media platforms for finding medical aid. The cluster of web and
            mobile screenshot images is also similarly large. This cluster
            contains a greater diversity in the content of images—some are
            screenshots of WhatsApp and Facebook posts and some of apps and
            websites with resources of Covid-19 related information.
          </Paragraph>
          <Box height={"10em"}>
            <Image
              src="/covid-whatsapp-public-groups/report_images/external-link-distribution.png"
              alt="GraphLinks"
              fit={"contain"}
              alignSelf={"start"}
            />
          </Box>

          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            At least 9% of the text messages (1,551 messages) contained links to
            other websites. Twitter was the most popular social media in these
            WhatsApp groups. We found that 21% of all external links (330
            messages) contained links to tweets. There were 168 messages with
            YouTube links; 47 with Instagram links; 190 messages contained links
            to other WhatsApp chat groups; and 30 contained links to Telegram
            groups.{" "}
          </Paragraph>
          <TrendHeading head={"Trend 2"} />

          <ClickableTSNE
            src="/covid-whatsapp-public-groups/report_images/t-sne.png"
            alt="A visualization highlighting cluster of images of medical supplies."
            caption={"Group of Images of Medical Supplies and Paper Documents"}
            onClick={setShowTSNE}
          />

          <Paragraph responsive={true} size={"large"} textAlign={"justify"}>
            Another big cluster in the image similarity grouping is of
            medicines, concentrators, medical prescriptions, receipts and other
            paper documentation. The images seem to parallel the demand (gaps)
            observed. For example, there are a number of images of the drug
            Amphotericin, the drug used in treatment of Mucormycosis (Black
            Fungus). Our data collection period coincided with the rise of
            Mucormycosis tied to Covid-19 treatment. The multiple instances of
            images of Amphotericin and concentrators indicate an interest in
            availing or correcting information about these specific medical
            resources.{" "}
          </Paragraph>
          <TrendHeading
            head={"Trend 3 : Healing Does Not Imply Only Medical Treatment"}
          />

          <ClickableTSNE
            src="/covid-whatsapp-public-groups/report_images/T_Sne_3.png"
            alt="A vizualization illustrating a cluster of religious images amongst all the other data"
            onClick={setShowTSNE}
            caption={"Cluster of Images of Indian Gods"}
          />

          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            In the image grouping, we also found two unexpected clusters of
            images of gods and of close-up of people’s faces. We tracked the
            images of people’s faces to a specific spiritual WhatsApp group
            which had the terms ‘Covid’ and ‘healing’ in the group name. The
            images of gods to a specific group which was sometimes used for
            sharing resources for Covid-19 relief, but was predominantly used
            for sharing images of different Indians gods.{" "}
          </Paragraph>
          <h3 id="trend-4-low-overlap-with-database-s-of-verified-leads-scams"></h3>
          <TrendHeading
            head={
              "Trend 4 : Low Overlap with Database(s) of Verified Leads and Scams"
            }
          />
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            Through basic manual annotation of the text messages on the 21
            WhatsApp groups, we discovered at least 257 unique phone numbers
            shared as leads. We compared the phone numbers shared in the
            WhatsApp groups to a database of Covid-19 Helpline numbers verified
            by FactChecker.in, the oldest fact-checking group in India
            <ExternalLink href={"#footnote_3"}>³</ExternalLink>. The
            fact-checking group has been verifying Covid-19 helpline numbers
            sourced through a tip line as well as through social media
            monitoring since the beginning of the second wave. As of July 4,
            2021 the list had 510 ‘verified’ phone numbers.
            <br />
            We found that less than 15% of the leads shared in the WhatsApp text
            messages (37 of 257 leads) were captured by the FactChecker.in
            database. Accounting for the leads shared in images in these groups
            takes the tally of overlapping unique leads to 42. There were five
            leads in the images that were not contained in the text messages.{" "}
            <Paragraph responsive={true} size={"large"} color={"accent-3"}>
              We also compared the phone leads in the text messages against a
              crowdsourced database of scam numbers called CoViD Scam Directory.
              The database is maintained by the volunteering group, CoViD Action
              Initiative: Cov.Social⁴. Any individual could submit an entry for
              a ‘scam’ number. As of July 4, 2021, the database had 812 phone
              records of which 647 were unique. The entire database of numbers
              is not open access, but the group shared the database with us on
              request. 16 phone numbers reported as ‘scams’ on the CoViD Scam
              Directory were found in the text messages. But only 2 of the
              numbers from the CoViD Scam Directory were shared in the WhatsApp
              groups as warnings. The remaining 14 were shared as genuine leads
              in the WhatsApp groups. Since the CoViD Scam Directory is
              crowdsourced, all numbers listed in the directory can&#39;t be
              assumed to be scam. It is however notable that even in this
              database the overlap of numbers is low—less than 6% of the leads
              shared in the 21 WhatsApp groups were captured in the CoViD Scam
              Directory.
            </Paragraph>
          </Paragraph>
          <TrendHeading head="Trend 5 : Differences between Text Contained in Images and Text Messages" />
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            We wanted to understand if the images contained similar information
            as text messages or if the information shared varied with the
            modality. We thus compared the textual content in the images with
            that of text messages. The word clouds of words in text messages and
            images hint that while the words used are common across text
            messages and images, they vary in their relative frequency. Words
            such as ‘hospital’, ‘patient’, ‘available’ are common to both text
            messages and images. But words such as ‘help’, ‘need’, ‘contact’,
            which are amongst the five most frequently used words in text
            messages, are not amongst even the ten most frequently used words in
            images.{" "}
          </Paragraph>
          <ImageTableToggle />
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            Absolute numbers of occurrence of terms across images and text can’t
            be directly compared since the volume of text messages is
            significantly higher than media messages. We thus compare the
            proportion or percentage of occurrence of terms (number of times a
            term is used divided by total number of words) in both these
            datasets.{" "}
          </Paragraph>

          <Box height={"28em"}>
            <Image
              src="/covid-whatsapp-public-groups/report_images/2021July13word_frequency_comparison.png"
              alt="Comparison across Data sources"
              fit={"contain"}
              alignSelf={"start"}
            />
          </Box>

          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            This figure shows the percentage frequency of terms in images
            against the percentage frequency of terms in text. The graph is
            restricted to the 30 most frequent words in images and text messages
            (a total of 38 words). This comparison shows that while words such
            as ‘available’, ‘blood’, ‘patient’, ‘oxygen’, had nearly equal
            representation in images and text messages (close to the y=x line),
            words such as ‘need’ and ‘help’ were significantly more common in
            text messages. This preliminary analysis suggests that while both
            text messages and images (which are screenshots of information from
            other platforms) were used to advertise for availability of oxygen
            or blood donors, the request for medical aid was more often
            circulated as text messages native to WhatsApp. This analysis relies
            on text extracted from images using Cloud vision techniques and
            automated language translation, both of which are prone to error.
            The claim presented here merits more in-depth research, with more
            manual scanning of individual messages.{" "}
          </Paragraph>

          <TrendHeading
            head={
              "Trend 6 : Variation in Conversation Over Time and Across Groups"
            }
          />

          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            Since we had tracked only sixteen groups for the entire 8-week
            duration, we limited the temporal analysis to the sixteen groups.
            Furthermore, we discovered that text messages were missing for a few
            days of the first week. We thus discarded content from the first
            week and carried out temporal analysis over a 7-week period starting
            from 6th May 2021 and ending on 25th June 2021.
          </Paragraph>
          <Box height={"12em"}>
            <Image
              src="/covid-whatsapp-public-groups/report_images/messages_over_time.png"
              alt="frequency_messages"
              fit={"contain"}
              alignSelf={"start"}
            />
          </Box>

          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            To carry out the temporal analysis, we analyzed the prominent words
            uses in each of the 7 weeks. The aggregate analysis of word
            frequencies in text messages showed that words such as ‘hospitals’,
            ‘patient’, ‘oxygen’, ‘blood’ were prominent in text messages. Even
            in the list of 30 most frequently used, the frequency of usage of
            these terms is significantly higher than the frequency of other
            terms on the list.
          </Paragraph>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            While recognizing that these words were important in the text
            messages during the 7 weeks, we wanted to capture the unique themes
            in a conversation in any week. For that, we used a technique called
            Term Frequency - Inverse Document Frequency (TF-IDF) which gives
            prominence to words in a week that are more salient compared to
            terms in other 6 weeks (please see Methodology section for more
            details). Words such as ‘hospital’ and ‘oxygen’ may still feature in
            a specific week, which would imply that their usage in that week was
            notably higher than the other weeks.{" "}
          </Paragraph>

          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            Analyzing the most frequent words (adjusted for popularity across
            weeks) we see that the word ‘oxygen’ stops appearing in the frequent
            words list after 20th May 2021. The prominence of the words
            ‘hospital’ and ‘plasma’ also decline over the 7 weeks. Instead, we
            see words associated with hyperlinks like ‘https’, ‘com’ become more
            prominent. In the last week in particular, it seems that WhatsApp
            chat links were the prominent theme. Unexpectedly, we also see words
            such as ‘CA’, ‘income’ and ‘tax‘ feature in the last two weeks.{" "}
          </Paragraph>
          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            We tracked these terms to a specific group that had started as a
            Covid-19 relief group but towards the end turned into a group for
            primarily sharing material related to chartered accountancy. A few
            links on chartered accountancy related webinars were shared on this
            group even in the last week of May. Towards late June, information
            about webinars on lung recovery and other health related topics was
            still shared on these groups, but its proportion relative to
            information about chartered accountancy declined.{" "}
          </Paragraph>
          <Box
            pad={"small"}
            round={"xsmall"}
            background={"visuals-1"}
            width={"fit-content"}
          >
            <h2 id="key-takeaways">Key Takeaways</h2>

            <Paragraph size={"large"}>
              <strong>
                Public and Private Boundaries Are More Blurred in Emergencies.{" "}
              </strong>
              In a state of crisis people willingly shared sensitive personal
              data with a group of strangers. Enabling messages to disappear
              after a certain duration can minimize access of such data to
              ill-intentioned actors on these groups. Admins might also consider
              deleting the groups altogether, if the group is no longer serving
              the purpose it was created for. Destruction of data is the final
              step in data life cycle management and one that WhatApp group
              admins could heed more carefully.
            </Paragraph>

            <Paragraph size={"large"}>
              <strong>The Social Media Mix-and-Match. </strong>
              It appears that WhatsApp was the primary channel to collect
              requests for aid, but when it came to advertising availability of
              resources, people also sought information on Twitter and
              Instagram. This analysis reveals an important role for the
              ‘go-betweens’ who connect WhatsApp users to information on Twitter
              and Instagram, giving content on these platforms greater reach
              than that reflected by the engagement metrics on the platforms.
            </Paragraph>

            <Paragraph size={"large"}>
              <strong>Credibility Indicators for WhatsApp. </strong>
              The technical design of messaging apps notwithstanding, some
              credibility markers to assess whether a lead shared could be
              trusted were needed. We saw several messages being ‘signed’ with a
              time stamp and/or information about the originator of the
              information. Since these credibility markers can be spoofed,
              Social practices for information quality management in closed
              messaging apps deserve more attention.
            </Paragraph>

            <Paragraph size={"large"}>
              <strong>
                The Need for Distributed but Coordinated Verification.{" "}
              </strong>
              The phone numbers shared in the Covid-19 relief groups, had low
              (less than 10%) overlap with an external database of verified
              leads, as well as with a crowdsourced database of scam phone
              numbers— the majority of numbers shared in this small sample of 21
              groups could not be or had not been verified. The second wave of
              the pandemic in India resulted in an unprecedented situation that
              challenged the process of verification. It resulted in spontaneous
              generation of hyperlocal information across India, simultaneously.
              This demanded localized verification efforts, but also
              demonstrated the need for coordination of these efforts.
            </Paragraph>

            <Paragraph size={"large"}>
              <strong>A New Facet of The Information Disorder. </strong>
              The relief work during the second wave resulted in a new typology
              of (mis)information that eludes emerging conceptions of
              misinformation response that rely on enhancing human reasoning for
              misinformation resilience or suppressing content on platforms tied
              to inauthentic behaviour. This phenomenon could repeat in any
              situation where the need for reliable actionable information is
              high but trusted and expected information channels fail such as
              natural disasters, cyberattacks or wars. Accounting for these less
              frequent, but extreme situations can strengthen our conceptions
              and agendas for misinformation response.
            </Paragraph>
          </Box>

          <Paragraph responsive={true} size={"large"} color={"accent-3"}>
            The code for textual analysis can be found on{" "}
            <ExternalLink
              target={"_blank"}
              href="https://github.com/tattle-made/data-experiments/blob/master/whatsapp_groups_analysis/temporal_word_frequency_analysis.ipynb"
            >
              Github
            </ExternalLink>
          </Paragraph>

          <h2 id={"footnotes"}>Resources</h2>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li>
              <Paragraph
                id="footnote_1"
                responsive={true}
                size={"medium"}
                color={"accent-3"}
              >
                ¹{" "}
                <ExternalLink
                  href={
                    "https://github.com/tattle-made/whatsapp-scraper/tree/master/python_scraper"
                  }
                  target={"_blank"}
                >
                  Whatsapp Scraper
                </ExternalLink>
              </Paragraph>
            </li>
            <li>
              <Paragraph
                id="footnote_2"
                responsive={true}
                size={"medium"}
                color={"accent-3"}
              >
                ² L.J.P. van der Maaten and G.E. Hinton. ‘Visualizing
                High-Dimensional Data Using t-SNE’. Journal of Machine Learning
                Research 9(Nov):2579-2605, 2008.
              </Paragraph>
            </li>
            <li id="footnote_3">
              <Paragraph responsive={true} size={"medium"} color={"accent-3"}>
                ³ FactChecker.in (2021, June 22). ‘FactChecker Called Up All
                COVID-19 Helplines’. FactChecker.in.{" "}
                <ExternalLink
                  href={
                    "https://www.factchecker.in/fact-check/factchecker-verified-covid-19-helplines-remdesivir-hospital-beds-oxygen-743175"
                  }
                  target={"_blank"}
                >
                  Accessed on 6 July 2021
                </ExternalLink>
              </Paragraph>
            </li>
            <li>
              <Paragraph
                id="footnote_4"
                responsive={true}
                size={"medium"}
                color={"accent-3"}
              >
                ⁴{" "}
                <ExternalLink href={"https://cov.social/"} target={"_blank"}>
                  Cov.Social
                </ExternalLink>
              </Paragraph>
            </li>
            <li>
              <Paragraph
                id="footnote_5"
                responsive={true}
                size={"medium"}
                color={"accent-3"}
                margin={{ top: "none" }}
              >
                ⁵ Silge J., Robinson D., Section 1.5. Text Mining with R: A Tidy
                Approach. O Reilly. 2017.
                <ExternalLink
                  href={"https://www.tidytextmining.com/index.html"}
                  target={"_blank"}
                >
                  (link)
                </ExternalLink>
              </Paragraph>
            </li>
          </ul>
          {showTSNE && (
            <Layer responsive={true} full animation={false}>
              <Box fill>
                <Stack anchor={"top-right"}>
                  <CovidWhatsappTSNEMap />
                  <Box width={"100%"}>
                    <Button
                      icon={<X size={40} color={"#e76d67"} />}
                      onClick={() => {
                        setShowTSNE(false)
                      }}
                    ></Button>
                  </Box>
                </Stack>
              </Box>
            </Layer>
          )}
          <Paragraph size={"large"}>
            For extensive references please see full report. The code used in
            analysis can be found at{" "}
            <ExternalLink
              href={
                "https://github.com/tattle-made/data-experiments/tree/master/whatsapp_groups_analysis"
              }
            >
              here
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink
              href={
                "https://github.com/tattle-made/data-experiments/blob/master/tSNE-clustering.ipynb"
              }
            >
              here
            </ExternalLink>
          </Paragraph>
          <Paragraph size={"large"}>
            For questions and feedback about this work, please email us at
            tarunima@tattle.co.in or denny@tattle.co.in
          </Paragraph>
        </Box>
      </Box>
    </Box>
  )
}

const ImageTableToggle = () => {
  const [value, setValue] = React.useState("Text Messages")
  return (
    <Box width={"100%"} gap={"small"}>
      <RadioButtonGroup
        direction={"row"}
        name="selection"
        options={["Text Messages", "Image Messages"]}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      {value === "Text Messages" && (
        <Box width={"100%"} gap={"small"} direction={"row"} wrap={true}>
          <Box width={"small"}>
            <img
              src="/covid-whatsapp-public-groups/report_images/text_wordcloud_13July.png"
              alt="text_wordcloud"
            />
          </Box>
          <Box>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Need
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>890</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Patient
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>748</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Contact
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>659</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Help
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>595</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      )}
      {value === "Image Messages" && (
        <Box width={"100%"} gap={"small"} direction={"row"} wrap={true}>
          <Box width={"small"}>
            <img
              src="/covid-whatsapp-public-groups/report_images/image_wordcloud_26June.png"
              alt="image_wordcloud"
            />
          </Box>
          <Box>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Patient
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>1,332</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Hospital
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>1,290</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Available
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>1,270</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Day
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>682</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <Text size={"xsmall"} weight={600}>
                      Report
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text size={"xsmall"}>648</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      )}
    </Box>
  )
}

const Index = () => {
  return (
    <DefaultLayout>
      <Box background={"brand"} align={"center"}>
        <NarrowContentWrapper>
          <Box pad={{ top: "large", bottom: "large" }}>
            <Box>
              <Heading level={1} margin={"none"}>
                Crowdsourcing Aid :
              </Heading>

              <span
                style={{
                  fontWeight: 600,
                  fontSize: "2.6em",
                  margin: "0.2em 0 0 0",
                  lineHeight: "1.2em",
                }}
              >
                A Case Study of the Information Chaos
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "0.6em",
                    lineHeight: "0.2em",
                  }}
                >
                  {" "}
                  during India's Second Covid-19 Wave
                </span>
              </span>
              <Text size={"small"}>25 July 2021</Text>
            </Box>
            <Box height={"2em"}></Box>
            <Box direction={"row-responsive"} gap={"medium"}>
              <Box>
                <Text size={"small"}>Tarunima Prabhakar</Text>
                <Text size={"small"}>Swair Shah</Text>
                <Text size={"small"}>Denny George</Text>
              </Box>
              <Box flex={"grow"}></Box>
              <Box
                background={"accent-1"}
                height={"fit-content"}
                pad={"small"}
                round={"small"}
                width={"fit-content"}
              >
                <Button>
                  <Text size={"small"}>Download Report</Text>
                </Button>
              </Box>
            </Box>
            <Box height={"2em"}></Box>
            <Text size={"small"} weight={300} style={{ fontStyle: "italic" }}>
              We'd like to thank Connie Moon Sehat, CoViD Action Initiative:
              cov.social, Scott Rogowski, Tanima Saha, Saakshita Prabhakar and
              all those who have contributed to Tattle's code base.
            </Text>
          </Box>
        </NarrowContentWrapper>
      </Box>
      <Content />
    </DefaultLayout>
  )
}

export default Index
