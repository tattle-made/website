import React, { useState, useEffect } from "react"
import { Box, Heading, Text, Button, TextInput } from "grommet"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const MAILCHIMP_URL =
  "https://app.us19.list-manage.com/subscribe/post?u=a9af83af1f247ecc04f50ad46&amp;id=4afc4a2c79"

/**
 * @author
 * @function MailchimpSubscribeForm
 **/

const SimpleForm = () => <MailchimpSubscribe url={MAILCHIMP_URL} />

const MailchimpSubscribeForm = () => {
  const [email, setEmail] = useState("")
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  }, [])

  return (
    <Box direction={"column"}>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => {
          return (
            <Box direction={"column"}>
              {status !== "success" && (
                <>
                  <Text size={"medium"} weight={600}>
                    Join an engaged community working on civic tech approaches
                    to tackling online harms on our mailing list
                  </Text>
                  <Box height={"xxsmall"} />
                  <Box
                    direction={"row-responsive"}
                    gap={"medium"}
                    width={"100%"}
                    alignSelf={"center"}
                  >
                    <TextInput
                      placeholder="Email address"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      background={"#FFFFFF"}
                    />
                    <Button
                      primary
                      label={status === "sending" ? "Submitting..." : "Subscribe"}
                      onClick={() => {
                        subscribe({ EMAIL: email })
                      }}
                    />
                  </Box>
                </>
              )}

              {status === "success" && (
                <Box
                  margin={{ top: "small" }}
                  animation={{ type: "fadeIn", duration: 1000 }}
                >
                  <Text size={"medium"}>
                    Thank you! We look forward to sharing our progress with you. You can view our past newsletters&nbsp;
                    <a
                      href="https://us19.campaign-archive.com/home/?u=a9af83af1f247ecc04f50ad46&id=4afc4a2c79"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0070f3", textDecoration: "underline" }}
                    >
                      here
                    </a>.
                  </Text>
                </Box>
              )}

              {status === "error" && (
                <Text size={"medium"} color={"status-error"}>
                  There was an error saving your email. Please try again later.
                </Text>
              )}
            </Box>
          )
        }}
      />
    </Box>
  )
}

export default MailchimpSubscribeForm
