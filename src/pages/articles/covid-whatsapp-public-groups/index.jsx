import React, { useState } from "react"
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
} from "grommet"
import NarrowContentWrapper from "../../../components/atomic/layout/narrow-content-wrapper"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import StickyBox from "react-sticky-box"
import styled from "styled-components"
import CovidWhatsappTSNEMap from "../../../components/molecule/covid-whatsapp-tsne-map"

const ImageText = styled.div`
  img {
    width: 60%;
    float: left;
    margin-right: 1.2em;
  }
  p {
    display: inline;
  }
`

const Index = () => {
  return (
    <DefaultLayout>
      <Box background={"brand"} align={"center"}>
        <NarrowContentWrapper>
          <Box pad={{ top: "large", bottom: "large" }}>
            <Heading level={1}>WhatsApp: The Covid-19 Relief Helpline</Heading>
            <Heading level={3}>
              A Case Study in Information Management on Chat Apps
            </Heading>
            <Box direction={"row"}>
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
                round={"medium"}
              >
                <Button>Download Report</Button>
              </Box>
            </Box>
          </Box>
        </NarrowContentWrapper>
      </Box>

      <NarrowContentWrapper>
        <h2 id="executive-summary">Executive Summary</h2>
        <p>
          From April to June 2021, India was ravaged by the second wave of the
          Covid-19 pandemic. With a steep increase in the number of infections,
          cities ran out of drugs, medical oxygen, hospitals and other necessary
          medical supplies. The second wave also ravaged rural India that had
          weaker public health infrastructure than urban India.{" "}
        </p>
        <p>
          The second wave was a public health crisis, but also an information
          crisis. As cities ran out of medical aid, people turned to social
          media to request for resources outside their geographies and immediate
          networks. The circulation of leads for medical aid led to a
          concomitant increase in circulation of inaccurate leads. Fraudulent
          leads—of scamsters duping people of money in promise of medical
          supplies—were mixed in the pool of information leads on social media
          platforms. In addition, the status of medical leads changed
          rapidly—any available hospital beds or drugs were taken up within
          minutes of being available. Obsolete and fraudulent leads resulted in
          loss of critical time in medical care, money and ultimately lives.
          Moreover, phone numbers of individuals from marginalized identities,
          circulated for requesting or providing aid, were used for targeted
          harassment.
        </p>
        <p>
          The crisis thus resulted in spontaneous volunteering—individuals and
          groups played the role of intermediaries, connecting those in need to
          verified leads for medical aid. WhatsApp, the most widely used social
          media platform in India, emerged as a natural choice to organize
          volunteering energies. WhatsApp could be used to source requests for
          help, coordinate with other volunteers and connect people to adequate
          aid. But how was WhatsApp used to surface actionable information and
          push back on inaccurate leads when the platform eludes centralized
          takedowns and moderation? How did individuals filter credible leads
          from a glut of information leads?
        </p>
        <p>
          This report contends that the second wave of the pandemic in India
          showed a new facet of the Information Disorder. It was driven by a
          specific typology of information—of hyperlocal information leads
          shared during a crisis. While this category of information shares some
          features with the prototypical political and medical misinformation,
          it also merits unique attention.{" "}
        </p>
        <p>
          We present preliminary analysis from 8 weeks of conversations in 21
          Covid-19 relief WhatsApp groups that were operational during the
          second wave of the crisis, to shed light on the information chaos that
          ensued during that period. We use vector embedding based machine
          learning to aggregate images based on visual and semantic similarity,
          and language processing techniques to make sense of the multi-lingual
          content shared on these groups. Our preliminary analysis suggests
          that:
        </p>
        <ul>
          <li>
            Even on WhatsApp, people relied heavily on other social media
            platforms such as Twitter and Instagram to find verified leads.
            Screenshots of posts from these platforms were commonly used method
            to cross-post information. Twitter has fewer than 20 million users
            in India. People act as ‘go-betweens’ and connect WhatsApp users to
            information on Twitter and Instagram, giving content on these
            platforms greater reach.{" "}
          </li>
          <li>
            Volunteering groups asked for patient information in specific
            templates to make relief work more efficient. People shared doctor
            prescriptions, medical receipts and sensitive personal information
            (including the Biometric ID Aadhar) in these groups when requesting
            for help. Private information was circulated in groups of unknown
            persons who had come together for public oriented service. Public
            and private boundaries are more blurred in emergencies which demands
            greater attention to data deletion protocols by group admins.{" "}
          </li>
          <li>
            The frequency of conversations declined in these groups over time.
            Some groups were repurposed to share information unrelated to
            Covid-19 such as chartered accountancy related webinars reflecting
            the use of WhatsApp in digital marketing.
          </li>
          <li>
            We compared the phone leads shared in the 21 WhatsApp groups with a
            national level database of verified leads maintained by a
            fact-checking group and with a crowdsourced database of ‘scam’
            numbers. We found that less than 7% of the leads were common between
            the WhatsApp groups we were tracking and the databases. This
            indicates at the scale of information that was circulated and
            challenge of verifying content during the second wave of the
            pandemic.
          </li>
        </ul>
        <p>
          Taking note of the citizen and crowdsourced verification that sprung
          about during the second wave of the pandemic, we posit that the
          spontaneous increase in hyperlocal information demanded distributed
          but coordinated verification. While we have seen coordinated
          fact-checking operations around elections, we propose the possibility
          of similar coordination during sudden events such as natural disasters
          and wars.{" "}
        </p>
        <p>
          We note that the information chaos during the second wave in India
          eluded responses conceived around political and medical
          misinformation. ‘Leads for medical aid’ as a typology of information
          was hyperlocal and not created or propagated in coordination. This
          information did not have to be viral to be harmful. Leads about
          medical resources are concise units of information that don’t rely on
          or trigger cultural, social or political beliefs. People had strong
          incentives to seek out accurate information. Despite deliberate
          reasoning, the truth status of such information was not easy to
          discern. How platforms could have best intervened to reduce the
          circulation of such content is also unclear.{" "}
        </p>
        <p>
          A case study of relief work coordinated on chat apps during the second
          wave of Covid-19, this analysis highlights a facet of the information
          disorder that could emerge in any situation where the need for
          reliable actionable information is high but trusted and expected
          information channels fail. Accounting for such situations in emerging
          agendas for research and action could lead to more robust toolkits for
          dis/misinformation response.{" "}
        </p>
        <h2 id="the-analysis">The Analysis</h2>
        <p>
          Over the 8-week period we collected 13,524 text messages, 2,415 images
          (2,296 unique). We also collected over 200 videos during this time,
          but we did not undertake any video analysis in this study. At the time
          of joining, we were primarily targeting groups in English, Hindi and
          Marathi, since these were the languages understood by the team
          members. In addition, we also joined one group in Telugu. In the final
          sample of posts, we also found messages in Tamil, Telugu and Gujarati.{" "}
        </p>

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
                <Text size={"xsmall"}>13,524</Text>
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
        <p>
          We relied primarily on automated techniques for broad insights about
          the content on the platforms. These techniques allowed for at-scale
          analysis of social media content but also come with inherent
          limitations. Machine learning based techniques, be it
          vector-embeddings, language translation or computer vision based text
          extraction, are error-prone (Please see Methodology section). While we
          attempted some correction of known errors, a lot more can be done. The
          analysis presented here should be treated as indication of trends that
          merit further investigation, and not conclusive assertions.{" "}
        </p>
        <Text
          size={"small"}
          weight={700}
          id="section3_1"
          margin={{ bottom: "small" }}
        >
          Trend 1: Heavy Use of Information from Other Social Media Platforms
        </Text>
        <CovidWhatsappTSNEMap />

        <p>
          The biggest cluster in the vector embeddings based image grouping is
          of screenshots of posts from Twitter and Instagram. A scan of this
          cluster shows that majority of these screenshots are leads for medical
          oxygen suppliers, drugs, hospital and ICU facilities and other medical
          supplies, indicating heavy reliance on other social media platforms
          for finding medical aid. The cluster of web and mobile screenshot
          images is also similarly large. This cluster contains a greater
          diversity in the content of images—some are screenshots of WhatsApp
          and Facebook posts and some of apps and websites with resources of
          Covid-19 related information.
        </p>

        <ImageText>
          <img
            src="/covid-whatsapp-public-groups/report_images/Screen%20Shot%202021-07-14%20at%2010.00.34%20PM.png"
            alt="GraphLinks"
          />
          <p>
            At least 11% of the text messages (1,406 messages) contained links
            to other websites. Twitter was the most popular social media in
            these WhatsApp groups. We found that 21% of all external links (299
            messages) contained links to tweets. There were 36 messages with
            YouTube links; 39 with Instagram links; 169 messages contained links
            to other WhatsApp chat groups; and 25 contained links to Telegram
            groups.{" "}
          </p>
        </ImageText>
        <Text
          size={"small"}
          weight={700}
          id="section3_2"
          margin={{ bottom: "small", top: "medium" }}
        >
          Trend 2
        </Text>
        <Box width={"100%"}>
          <img
            src="/covid-whatsapp-public-groups/report_images/t-sne.png"
            alt="Trend2_T-Sne"
          />
        </Box>
        <p>
          Another big cluster in the image similarity grouping is of medicines,
          concentrators, medical prescriptions, receipts and other paper
          documentation. The images seem to parallel the demand (gaps) observed.
          For example, there are a number of images of the drug Amphotericin,
          the drug used in treatment of Mucormycosis (Black Fungus). Our data
          collection period coincided with the rise of Mucormycosis tied to
          Covid-19 treatment. The multiple instances of images of Amphotericin
          and concentrators indicate an interest in availing or correcting
          information about these specific medical resources.{" "}
        </p>

        <Text
          size={"small"}
          weight={700}
          id="section3_3"
          margin={{ bottom: "small" }}
        >
          Trend 3: Healing Does Not Imply Only Medical Treatment
        </Text>

        <p>
          In the image grouping, we also found two unexpected clusters of images
          of gods and of close-up of people’s faces. We tracked the images of
          people’s faces to a specific spiritual WhatsApp group which had the
          terms ‘Covid’ and ‘healing’ in the group name. The images of gods to a
          specific group which was sometimes used for sharing resources for
          Covid-19 relief, but was predominantly used for sharing images of
          different Indians gods.{" "}
        </p>
        <h3 id="trend-4-low-overlap-with-database-s-of-verified-leads-scams"></h3>
        <Text
          size={"small"}
          weight={700}
          id="section3_4"
          margin={{ bottom: "small" }}
        >
          Trend 4: Low Overlap with Database(s) of Verified Leads/ Scams
        </Text>
        <p>
          Through basic manual annotation of the text messages on the 21
          WhatsApp groups, we discovered at least 257 unique phone numbers
          shared as leads. We compared the phone numbers shared in the WhatsApp
          groups to a database of Covid-19 Helpline numbers verified by
          FactChecker.in, the oldest fact-checking group in India³. The
          fact-checking group has been verifying Covid-19 helpline numbers
          sourced through a tip line as well as through social media monitoring
          since the beginning of the second wave. As of July 4, 2021 the list
          had 510 ‘verified’ phone numbers.
          <br />
          We found that less than 7% of the leads shared in the WhatsApp text
          messages (17 of 257 leads) were captured by the FactChecker.in
          database. Accounting for the leads shared in images in these groups
          takes the tally of overlapping unique leads to 20. There were three
          leads in the images that were not contained in the text messages.{" "}
          <p>
            We also compared the phone leads in the text messages against a
            crowdsourced database of scam numbers called CoViD Scam Directory.
            The database is maintained by the volunteering group: Cov.Social⁴.
            Any individual could submit an entry for a ‘scam’ number. As of July
            4, 2021, the database had 812 phone records of which 647 were
            unique. The entire database of numbers is not open access, but the
            group shared the database with us on request. 16 phone numbers
            reported as ‘scams’ on the CoViD Scam Directory were found in the
            text messages. But only 2 of the numbers from the CoViD Scam
            Directory were shared in the WhatsApp groups as warnings. The
            remaining 14 were shared as genuine leads in the WhatsApp groups.
            Since the CoViD Scam Directory is crowdsourced, all numbers listed
            in the directory can&#39;t be assumed to be scam. It is however
            notable that even in this database the overlap of numbers is
            low—less than 6% of the leads shared in the 21 WhatsApp groups were
            captured in the CoViD Scam Directory.
          </p>
          <Text
            size={"small"}
            weight={700}
            id="section3_4"
            margin={{ bottom: "small" }}
          >
            Trend 5: Differences between Text Contained in Images and Text
            Contained in Text Messages
          </Text>
          <p>
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
          </p>
          <ImageTableToggle />
          <p>
            Absolute numbers of occurrence of terms across images and text can’t
            be directly compared since the volume of text messages is
            significantly higher than media messages. We thus compare the
            proportion or percentage of occurrence of terms (number of times a
            term is used divided by total number of words) in both these
            datasets.{" "}
          </p>
          <Box height={"60vh"}>
            <Image
              src="/covid-whatsapp-public-groups/report_images/2021July13word_frequency_comparison.png"
              alt="Comparison across Data sources"
              fit={"contain"}
              alignSelf={"start"}
            />
          </Box>
          <p>
            This figure shows the percentage frequency of terms in images
            against the percentage frequency of terms in text. The graph is
            restricted to the 30 most frequent words in images and text messages
            (a total of 39 words). Please see the Appendix for more details.
            This comparison shows that while words such as ‘available’, ‘blood’,
            ‘patient’, ‘oxygen’, had nearly equal representation in images and
            text messages (close to the y=x line), words such as ‘need’ and
            ‘help’ were significantly more common in text messages. This
            preliminary analysis suggests that while both text messages and
            images (which are screenshots of information from other platforms)
            were used to advertise for availability of oxygen or blood donors,
            the request for medical aid was circulated as text messages native
            to WhatsApp. This analysis relies on text extracted from images
            using Cloud vision techniques and automated language translation,
            both of which are prone to error. The claim presented here merits
            more in-depth research, with more manual scanning of individual
            messages.{" "}
          </p>
          <Text
            size={"small"}
            weight={700}
            id="section3_4"
            margin={{ bottom: "small" }}
          >
            Trend 6: Variation in Conversation Over Time and Across Groups
          </Text>
          <p>
            Since we had tracked only sixteen groups for the entire 8-week
            duration, we limited the temporal analysis to the sixteen groups.
            Furthermore, we discovered that text messages were missing for a few
            days of the first week. We thus discarded content from the first
            week and carried out temporal analysis over a 7-week period starting
            from 6th May 2021 and ending on 25th June 2021.
          </p>
          <Box height={"small"}>
            <Image
              src="/covid-whatsapp-public-groups/report_images/messages_over_time.png"
              alt="frequency_messages"
              fit={"contain"}
              alignSelf={"start"}
            />
          </Box>
          <p>
            To carry out the temporal analysis, we analyzed the prominent words
            uses in each of the 7 weeks. The aggregate analysis of word
            frequencies in text messages showed that words such as ‘hospitals’,
            ‘patient’, ‘oxygen’, ‘blood’ were prominent in text messages. Even
            in the list of 30 most frequently used, the frequency of usage of
            these terms is significantly higher than the frequency of other
            terms on the list.{" "}
          </p>
          <p>
            While recognizing that these words were important in the text
            messages during the 7 weeks, we wanted to capture the unique themes
            in a conversation in any week. For that, we used a technique called
            Term Frequency - Inverse Document Frequency (TF-IDF) which gives
            prominence to words in a week that are more salient compared to
            terms in other 6 weeks (please see Methodology section for more
            details). Words such as ‘hospital’ and ‘oxygen’ may still feature in
            a specific week, which would imply that their usage in that week was
            notably higher than the other weeks.{" "}
          </p>
          <p>
            Analyzing the most frequent words (adjusted for popularity across
            weeks) we see that the word ‘oxygen’ stops appearing in the frequent
            words list after 20th May 2021. The prominence of the words
            ‘hospital’ and ‘plasma’ also decline over the 7 weeks. Instead, we
            see words associated with hyperlinks like ‘https’, ‘com’ become more
            prominent. In the last week in particular, it seems that WhatsApp
            chat links were the prominent theme. Unexpectedly, we also see words
            such as ‘CA’, ‘income’ and ‘tax‘ feature in the last two weeks.{" "}
          </p>
          <p>
            We tracked these terms to a specific group that had started as a
            Covid-19 relief group but towards the end turned into a group for
            primarily sharing material related to chartered accountancy. A few
            links on chartered accountancy related webinars were shared on this
            group even in the last week of May. Towards late June, information
            about webinars on lung recovery and other health related topics was
            still shared on these groups, but its proportion relative to
            information about chartered accountancy declined.{" "}
          </p>
          <h2 id="key-takeaways">Key Takeaways</h2>
          <p>
            We summarize here the key takeaways from this analysis. Please read
            the full report for a more detailed discussion.{" "}
          </p>
          <h3 id="public-and-private-boundaries-are-more-blurred-in-emergencies">
            Public and Private Boundaries Are More Blurred in Emergencies
          </h3>
          <p>
            The analysis shows that in a state of crisis people willingly shared
            not only personally identifiable data but also sensitive personal
            data with a group of strangers. There were tangible harms from
            identification of people from the information shared in relief work.
            Enabling messages to disappear after a certain duration can minimize
            the duration for which an individual’s personal information is
            available to ill-intentioned actors on these groups. Admins might
            also consider deleting the groups altogether, if the group is no
            longer serving the purpose it was created for. In many of the
            groups, the frequency of conversation declined towards the end of
            the analysis period. In some cases, participants started posting
            information unrelated to the pandemic. Destruction of data is the
            final step in data life cycle management and one that WhatApp group
            admins could heed more carefully.
          </p>
          <h3 id="the-social-media-mix-and-match">
            The Social Media Mix-and-Match
          </h3>
          <p>
            WhatsApp, with 400 million users, is the most popular platform in
            India. Twitter has fewer than 20 million users. The media and text
            analysis indicated that despite the low user base, relief work, even
            on WhatsApp, relied heavily on Twitter. It appears that WhatsApp was
            the primary channel to collect requests for aid, but when it came to
            advertising availability of resources, people also sought
            information on Twitter and Instagram. These platforms could emerge
            as centralized, constantly updating repositories of information in a
            way that WhatsApp could not. This analysis reveals an important role
            for the ‘go-betweens’ who connect WhatsApp users to information on
            Twitter and Instagram, giving content on these platforms greater
            reach than that reflected by the engagement metrics on the
            platforms.{" "}
          </p>
          <h3 id="credibility-indicators-for-whatsapp">
            Credibility Indicators for WhatsApp
          </h3>
          <p>
            By definition, messaging apps are meant to be used for direct
            messaging between users. Origination information, be it of the
            person creating a message or the time stamp of creation, can’t be
            technically hard-coded in a message within the ambit of personal and
            secure messaging.{" "}
          </p>
          <Box height={"small"} gap={"small"} border={"all"} pad={"small"}>
            <Image
              src="/covid-whatsapp-public-groups/report_images/credibility_2.png"
              alt={"credibility_2"}
              fit={"contain"}
              alignSelf={"start"}
            />

            <Image
              src="/covid-whatsapp-public-groups/report_images/credibility_3.png"
              alt="credibility_3"
              fit={"contain"}
              alignSelf={"start"}
            />
          </Box>
          <p>
            The technical design of messaging apps notwithstanding, some
            credibility markers to assess whether a lead shared could be trusted
            were needed. In the groups we were tracking, we saw several messages
            being ‘signed’ with a time stamp and/or information about the
            originator of the information. While sharing the lead, people added
            a line about who had verified it and when the message was last
            verified. Since these credibility markers are user created, they can
            be spoofed. Scamsters could just as easily add such a line to their
            messages. But within a group, where a baseline level of trust
            between members can be assumed, the additional information is useful
            context. While recent regulatory, academic and media attention has
            focused on technical mechanisms for suppressing misinformation on
            chat apps these examples reveal social practices for information
            quality management, which also deserve more attention.{" "}
          </p>
          <h3 id="the-need-for-distributed-but-coordinated-verification">
            The Need for Distributed but Coordinated Verification
          </h3>
          <p>
            The phone numbers shared in the 21 Covid-19 relief groups, had low
            (less than 10\%) overlap not only with a database of verified leads,
            but also with a crowdsourced database of scam phone numbers— the
            majority of numbers shared in this small sample of 21 groups could
            not be or had not been verified. The second wave of the pandemic in
            India resulted in an unprecedented situation that challenged the
            process of verification. It resulted in spontaneous generation of
            hyperlocal information across India, simultaneously. All of this
            (mis)information could cause immediate harm and demanded localized
            verification efforts. But it also demonstrated the need for
            coordination of these efforts. Multiple verification calls
            distracted genuine aid providers from their work of attending to
            urgent needs. The implications of crowd-sourced verification work
            during the second wave also bear on more professional fact-checking
            work. Coordination across fact-checking groups has been attempted
            around planned events such as elections in Mexico, Brazil and India.
            Can similar coordination be attempted around sudden and unexpected
            events such as the second wave in India?
          </p>
          <h3 id="a-new-facet-of-the-information-disorder">
            A New Facet of The Information Disorder
          </h3>
          <p>
            The relief work during the second wave resulted in a new typology of
            (mis)information that eludes emerging conceptions of misinformation
            response that rely on enhancing human reasoning for misinformation
            resilience or suppressing content on platforms tied to inauthentic
            behaviour. Despite deliberate reasoning, the ‘truth status’ of
            medical leads was not easy to discern. On the supply side, the
            information was hyperlocal, not created or propagated in
            coordination and high in volume. Identifying inaccurate information
            was difficult, as was reducing its circulation. This phenomenon
            observed in India during the second wave of Covid-19 in India, is
            one that could occur in any location or situation where the need for
            reliable actionable information is high but trusted and expected
            information channels fail. This could be in subsequent waves of the
            pandemic, natural disasters, cyberattacks or wars. In such contexts,
            the harm from disinformation is immediate and tangible. Accounting
            for these less frequent, but extreme situations can strengthen our
            conceptions and agendas for misinformation response.
          </p>
          <h2 id="methodolody">Methodolody</h2>
          <h3 id="data-collection">Data Collection</h3>
          <p>
            We joined eighteen WhatsApp groups on 29th April 2021. We searched
            for WhatsApp group links shared on Twitter. Several of these groups
            had already reached the 256 limit, and we were thus unable to join
            them. Two groups had the ‘disappearing messages’ setting turned on.
            We took this to be an indication of intention to keep the
            communication on the group private and thus exited the groups
            immediately. In the second phase of data collection, we identified
            and joined another five groups on 9th June 2021. We have confined
            this analysis to an 8-week period from 29th April 2021 to 23rd June
            2021. From preliminary analysis, we realized that two groups in the
            first batch of groups we had joined (on 29th April 2021), were not
            Covid-19 relief groups but were run by media organizations to
            exclusively share content from their organization. We exited these
            groups and excluded them from the analysis. Thus, the final data
            that we analyzed came from a total of 21 groups, 16 of which we
            joined on 29th April 2021 and 5 of which we joined on 9th June.
          </p>
          <p>
            We used two parallel approaches to move data from the mobile device
            to a cloud service through which data could be analyzed. We used
            WhatsApp’s export chat feature to frequently back up the history of
            a chat on the cloud service Since WhatsApp&#39;s export chat feature
            fails to export media items reliably we resorted to using this
            method only for text messages. We used an in-house developed tool
            that handles redundancy in different exports from the same chat and
            accounts for the minor time fluctuations in the exported files.¹ For
            media items we used a complementary approach of saving the media
            items downloaded in the ‘WhatsApp Media Downloads’. Although
            WhatsApp is supposed to automatically download media items it
            receives if the ‘Auto Download Media’ setting is enabled, we were
            not able to reproduce this behavior on the Samsung Galaxy M10 we
            used. We resorted to manually clicking the media items to download
            them. We then backed up the media items download folder to a secure
            cloud service. Since we were using one phone exclusively for the
            purpose of data collection from the Covid-19 relief groups, the
            media items in the media downloads folder from this duration came
            only from these groups.{" "}
          </p>
          <h3 id="data-reporting">Data Reporting</h3>
          <p>
            All the analysis presented in this report was conducted on
            deidentified text messages and media items. We did not access
            original phone numbers of senders. During the second stage of
            joining groups (on 9th June 2021), we did scan through the original
            groups we had joined, on the mobile phone, to understand which ones
            to exit.
          </p>
          <p>
            All personal details in images used in this report and
            visualizations were obfuscated after the analysis. For images used
            in this report, we manually blacked out phone numbers and personally
            identifiable details. For images used in the visualizations, we
            followed four steps for obfuscation: we blurred the images; resized
            them; used a machine learning algorithm to detect faces and conceal
            them with black boxes; and finally, manually scanned all the images
            and concealed phone numbers and other personal information still
            visible after the first three steps. The Appendix contains more
            details on the technical aspects of anonymization.{" "}
          </p>
          <p>
            Prior to the publication of this report, we removed all
            non-anonymized data as well as original media items from any cloud
            service we had used.{" "}
          </p>
          <p>
            Despite our intentions and effort to scrub out phone numbers or
            personal information from the data, prior to reporting some media
            items may have escaped our attention. If any such media items or
            security vulnerabilities in our data management practices are
            discovered, please email us at tarunima@tattle.co.in. We will act on
            it immediately.{" "}
          </p>
          <h3 id="technical-methods">Technical Methods</h3>
          <p>
            <strong>Image Similarity Matching and Clustering Algorithm</strong>
            To be able to group images based on visual and semantic similarity,
            we use vector embeddings. Each image is represented as a
            512-dimensional vector embedding. These are extracted from the image
            using a pretrained ResNet model. These vector representations of the
            images are indexed in Elasticsearch which helps us query for similar
            images. To visualize these high dimensional vectors, we use a
            technique called t-Distributed Stochastic Neighbor Embedding
            (t-SNE)². It is a dimensionality reduction technique that represents
            high dimensional data (such as images) on a 2D plane as seen in this
            report. The labelling of the clusters was done manually by observing
            the data within the cluster closely. We hoped to provide a broad
            label that would help readers understand the dataset better and
            encourage exploration of relevant subset of the data.
          </p>
          <p>
            <strong>Textual Analysis</strong>
          </p>
          <p>
            <em>Language Translation : </em>
            We used two free python libraries—deep_detector and
            google_trans_new—to translate the text in the images and messages
            into images. Both these libraries support translation through the
            Google translate API and have in-built auto language detection.
          </p>
        </p>
        <p>
          <em>Word Frequency Analysis : </em>
          Between 29th April 2021, when we joined the first sixteen groups, and
          24th June 2021, when we stopped the data collection, we collected over
          14,000 text messages. We retrospectively realized that messages for
          some days for the first week were missing. We thus discarded text
          messages from the first week, resulting in 13,524 textual messages
          spanning seven weeks starting 6th May 2021 and ending on 24th June
          2021. There was no method to identify which images were shared in the
          first week. Thus, we included all images in the media downloads folder
          in this analysis.{" "}
        </p>
        <p>
          For word frequency analysis we undertook the following steps: •
          Tokenized all the sentences. • Lemmatized each of the words, that is
          converted words to their root form. • Removed stop words such as
          ‘the’, ‘will’. In addition to the stop words provided by the nltk
          corpus library in Python, we also added a few words specific to our
          data such as ‘media’ and ‘omitted’. ‘Media Omitted’ is a phrase
          generated by the Export Chat Feature on WhatsApp when it fails to
          export a media item from a chat. Since it occurs multiple times in any
          file, it gets caught in word frequency analysis but does not provide
          any insights about the data itself.
        </p>
        <p>
          <em>Word Clouds : </em>
          To generate word clouds, we used the WordCloud Python library that
          tokenizes the sentence and removes stop words, but does not lemmatize
          the tokens.{" "}
        </p>
        <p>
          <em>Comparing Word Frequencies of Images and Text : </em>
          To compare word frequencies of images and text, we calculate the
          proportion of occurrence of words in images and text messages. We then
          pull out the top 30 most frequent terms (measured by proportion of
          occurrence) and plot the percentage of occurrence of a word in both
          these corpus on a scatter plot. Since textual content typically
          follows Zipf’s law, we used a log scale. We generally followed the
          methodology described by Silge and Robinson (2017)⁴.{" "}
        </p>
        <p>
          <em>TF-IDF across Weeks : </em>
          Term Frequency - Inverse Document Frequency is a statistical measure
          that estimates how important a term is in a document, relative to
          other documents in a collection. Terms with high TF-IDF scores are the
          terms in a document that are distinctively frequent in a document,
          when that document is compared other documents. In our analysis, the
          text messages in each week comprise a document, resulting in seven
          documents. TF-IDF, then finds the words that are salient in a
          particular week.{" "}
        </p>
        <p>
          The code for textual analysis can be found on{" "}
          <a href="https://github.com/tattle-made/data-experiments/blob/master/whatsapp_groups_analysis/temporal_word_frequency_analysis.ipynb">
            Github
          </a>
        </p>
        <hr />
        <h2>Footnotes</h2>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li>
            <p>
              ¹{" "}
              <a
                href={
                  "https://github.com/tattle-made/whatsapp-scraper/tree/master/python_scraper"
                }
                target={"_blank"}
              >
                Whatsapp Scraper
              </a>
            </p>
          </li>
          <li>
            <p>
              ² L.J.P. van der Maaten and G.E. Hinton. ‘Visualizing
              High-Dimensional Data Using t-SNE’. Journal of Machine Learning
              Research 9(Nov):2579-2605, 2008.
            </p>
          </li>
          <li>
            <p>
              ³ FactChecker.in (2021, June 22). ‘FactChecker Called Up All
              COVID-19 Helplines’. FactChecker.in.{" "}
              <a
                href={
                  "https://www.factchecker.in/fact-check/factchecker-verified-covid-19-helplines-remdesivir-hospital-beds-oxygen-743175"
                }
                target={"_blank"}
              >
                Accessed on 6 July 2021
              </a>
            </p>
          </li>
          <li>
            <p>
              ⁴{" "}
              <a href={"https://cov.social/"} target={"_blank"}>
                Cov.Social
              </a>
            </p>
          </li>
          <li>
            <p>
              ⁵ Silge J., Robinson D., Section 1.5. Text Mining with R: A Tidy
              Approach. O Reilly. 2017.
              <a
                href={"https://www.tidytextmining.com/index.html"}
                target={"_blank"}
              >
                (link)
              </a>
            </p>
          </li>
        </ul>
      </NarrowContentWrapper>
    </DefaultLayout>
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
          <Box width={"small"} border={"all"} pad={"xsmall"}>
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
          <Box width={"small"} border={"all"} pad={"xsmall"}>
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

export default Index
