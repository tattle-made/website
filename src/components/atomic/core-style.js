import styled from "styled-components"
import { PlainLink } from "./TattleLinks"

const NavigationLabel = styled.span`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1em;
  color: #514e80;
`

const FooterNavigationLabel = styled.span`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #514e80;
  text-decoration: "none";
`

const SectionLabels = styled.span`
  font-family: "Bitter";
  font-size: 1em;
  font-weight: 500;
`

const Theme = {
  text_color_dark: "#edc9c4",
  text_color_light: "#514e80",
}

const LandingPageHeading = styled.span`
  color: ${Theme.text_color_light};
  font-weight: 800;
  font-size: 30px;
  line-height: 44px;
  font-family: "Bitter";
`

const LandingPageSubHeading = styled.span`
  color: ${Theme.text_color_light};
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  font-family: "Bitter";
`

const LandingPageLink = styled(PlainLink)`
  color: ${Theme.text_color_light};
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  font-family: "Bitter";
`

const LandingPageParagraph = styled.span`
  color: ${Theme.text_color_light};
  font-size: 18px;
  line-height: 24px;
  font-family: "Bitter";
`

export {
  NavigationLabel,
  FooterNavigationLabel,
  SectionLabels,
  Theme,
  LandingPageHeading,
  LandingPageSubHeading,
  LandingPageLink,
  LandingPageParagraph,
}
