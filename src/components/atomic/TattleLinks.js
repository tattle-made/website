import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

/**
 * Styled link components used across the site for consistent theming and behavior.
 *
 * Exports:
 * - Link: Themed internal link.
 * - PlainLink: Internal link without decoration.
 * - PlainSectionLink: Internal section-based link with minimal styling.
 * - PlainHeavyLink: Bold or emphasized internal link.
 * - ExternalLink: Styled anchor tag for external navigation.
 * - PlainExternalLink: Minimal external link, opens in new tab.
 * - SmartPlainLink: Automatically chooses between internal and external link.
 */

const ThemedLink = styled(Link)`
  text-decoration: "none";
  box-shadow: "none";
  background-color: "red";
  :visited {
    color: inherit;
    text-decoration: "none";
  }
`

const ThemedPlainLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`

const ThemedPlainSectionLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
  &:hover {
    text-decoration: none;
  }
  &.active {
    color: red;
  }
`

const ThemedPlainHeavyLink = styled(Link)`
  font-family: "Bitter";
  font-weight: "900";
  color: inherit;
  :visited {
    color: inherit;
  }
  &:hover {
    text-decoration: none;
  }
  &.active {
    color: red;
  }
`

const ThemedExternalLink = styled.a`
  font-weight: "bold";
  text-decoration: none;
  :visited {
  }
`

const ThemedPlainExternalLink = styled.a`
  text-decoration: none;
  color: #514e80;
  :visited {
    color: #514e80;
    text-decoration: none;
  }
`

const SmartPlainLink = ({ linktype, target, children }) =>
  linktype === "external" ? (
    <ThemedPlainExternalLink href={target} target={"_blank"}>
      {children}
    </ThemedPlainExternalLink>
  ) : (
    <ThemedPlainLink to={target}>{children}</ThemedPlainLink>
  )

export {
  ThemedLink as Link,
  ThemedPlainLink as PlainLink,
  ThemedPlainSectionLink as PlainSectionLink,
  ThemedPlainHeavyLink as PlainHeavyLink,
  ThemedExternalLink as ExternalLink,
  ThemedPlainExternalLink as PlainExternalLink,
  SmartPlainLink,
}
