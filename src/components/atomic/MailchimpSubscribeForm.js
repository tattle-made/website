import React, { useState, useEffect } from "react"
import { Box, Heading, Text, Button, TextInput } from "grommet"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const MAILCHIMP_URL =
  "https://app.us19.list-manage.com/subscribe/post?u=a9af83af1f247ecc04f50ad46&amp;id=4afc4a2c79"

/**
 * @author
 * @function MailchimpSubscribe
 **/

const SimpleForm = () => <MailchimpSubscribe url={MAILCHIMP_URL} />

const MailchimpSubscribeForm = () => {
  const [email, setEmail] = React.useState("")
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <Box direction={"column"}>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => {
          // status = "success"
          return (
            <Box direction={"column"}>
              {status !== "success" && (
                <>
                  <Heading level={4}>
                    {" "}
                    Join our mailing list for project updates{" "}
                  </Heading>
                  <Box direction={"row"} gap={"small"}>
                    <TextInput
                      placeholder="Email address"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      background={"#FFFFFF"}
                    />
                    <Button
                      primary
                      label={
                        status === "sending" ? "Submitting..." : "Subscribe"
                      }
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
                  animation={{ type: "fadeOut", duration: 3000 }}
                >
                  <Text size={"medium"}>
                    Thank you. We look forward to sharing our progress with you
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
