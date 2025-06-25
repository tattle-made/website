import React from "react"
import styled from "styled-components"
import { Text, Paragraph } from "grommet"

/**
 * Reusable text style components for consistent typography.
 *
 * Exports:
 * - HeadingOne: Large heading text style.
 * - BodyOne: Standard body text style.
 */

const BodyOne = styled(Text)`
  font-family: "Bitter";
  font-size: "30px";
  line-height: "40px";
  font-weight: "400";
`

const HeadingOne = styled(Text)`
  font-family: "Bitter";
  font-size: "48px";
  line-height: "54px";
  color: "#514E80";
  font-weight: "700";
`

export { HeadingOne, BodyOne }
