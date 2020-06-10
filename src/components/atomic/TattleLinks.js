import { Link } from "gatsby"
import styled from "styled-components"

const ThemedLink = styled(Link)`
  text-decoration: "none";
  box-shadow: "none";
  background-color: "red";
  :visited {
    color: inherit;
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

const ThemedExternalLink = styled.a`
  font-weight: "bold";
  text-decoration: none;
  :visited {
  }
`

const ThemedPlainExternalLink = styled.a`
  text-decoration: none;
  color: #000000;
  :visited {
    color: #000000;
    text-decoration: none;
  }
`

export {
  ThemedLink as Link,
  ThemedPlainLink as PlainLink,
  ThemedExternalLink as ExternalLink,
  ThemedPlainExternalLink as PlainExternalLink,
}
