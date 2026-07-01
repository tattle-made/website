import styled, { keyframes } from "styled-components"
import { PlainLink } from "./TattleLinks"

/**
 * Core styled components and theme definitions used throughout the application.
 *
 * Exports:
 * - NavigationLabel: Label used in primary navigation.
 * - FooterNavigationLabel: Label used in the site footer navigation.
 * - SectionLabels: Label styling for different page sections.
 * - Theme: Grommet theme configuration for consistent styling.
 * - LandingPageHeading: Styled heading for landing pages.
 * - LandingPageSubHeading: Styled subheading for landing pages.
 * - LandingPageLink: Styled link used on landing pages.
 * - LandingPageParagraph: Paragraph styling for landing content.
 */

const NavigationLabel = styled.span`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1em;
  color: #252653;
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
  text_color_light: "#252653",
}

/**
 * Named navbar themes. Each entry drives the header bar background and all
 * text/icon colours inside it — desktop and mobile alike.
 *
 * To use: pass navTheme="dark" (or any key below) to AppShell.
 */
const NavThemes = {
  light: {
    background: "#E76D67",
    text: "#252653",
    icon: "#252653",
  },
  dark: {
    background: "#252653",
    text: "#edc9c4",
    icon: "#edc9c4",
  },
  electric: {
    background: "#0d0d0d",
    text: "#00f0ff",
    icon: "#00f0ff",
  },
  neon: {
    background: "#0a0a0a",
    text: "#39ff14",
    icon: "#39ff14",
  },
  cerebral: {
    background: "#252653",
    text: "#f0ece2",
    icon: "#f0ece2",
  },
  celebratory: {
    background: "#FFE4BD",
    text: "#252653",
    icon: "#252653",
  },
}

const shimmerMove = keyframes`
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
`

const ShimmerNavLabel = styled.span`
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1em;
  display: inline-block;
  background: linear-gradient(
    90deg,
    ${props => props.color}70 30%,
    ${props => props.color} 50%,
    ${props => props.color}70 70%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmerMove} 2s ease-in-out infinite;
`

const LandingPageHeading = styled.span`
  color: ${Theme.text_color_light};
  font-weight: 800;
  font-size: 24px;
  line-height: 28.8px;
  font-family: "Bitter";
`

const LandingPageSubHeading = styled.span`
  color: ${Theme.text_color_light};
  font-weight: 400;
  font-size: 24px;
  line-height: 28.8px;
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
  NavThemes,
  ShimmerNavLabel,
  LandingPageHeading,
  LandingPageSubHeading,
  LandingPageLink,
  LandingPageParagraph,
}
