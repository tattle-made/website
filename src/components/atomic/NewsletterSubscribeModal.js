import React, { useState } from "react"
import { Box, Button, Layer, Text } from "grommet"
import { Close } from "grommet-icons"
import MailchimpSubscribeForm from "./MailchimpSubscribeForm"

const NewsletterSubscribeModal = ({ label = "Subscribe for updates" }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Text
        style={{ cursor: "pointer", textDecoration: "underline", fontSize: "inherit", fontFamily: "inherit"}}
        onClick={() => setOpen(true)}
      >
        {label}
      </Text>

      {open && (
        <Layer
          full
          modal
          onEsc={() => setOpen(false)}
          onClickOutside={() => setOpen(false)}
          background={{ color: "black", opacity: "medium" }}
          style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
        >
          <Box fill align="center" justify="center">
            <Box
              background="white"
              pad="large"
              round="small"
              width={{ max: "500px" }}
              style={{ position: "relative" }}
            >
              <Button
                icon={<Close />}
                plain
                onClick={() => setOpen(false)}
                style={{ position: "absolute", top: "12px", right: "12px" }}
              />
              <MailchimpSubscribeForm />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  )
}

export default NewsletterSubscribeModal
