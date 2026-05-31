import React from "react"
import TattleTheme from "./theme"

// All hex values taken directly from visuals-* colors in src/components/atomic/theme.js
const VISUALS = {
  "visuals-1": "#ffebcb",
  "visuals-2": "#fcbfa4",
  "visuals-3": "#f4c6d7",
  "visuals-4": "#f39695",
  "visuals-5": "#e99469",
  "visuals-6": "#f3a444",
  "visuals-7": "#e56d67",
  "visuals-8": "#815089",
  "visuals-9": "#4d5182",
  "visuals-10": "#020637",
}

/**
 * @param {string} label - Text displayed inside the chip
 */
const Chip = ({ label }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "0.2em 1.2em",
      borderRadius: "0.8em",
      background: VISUALS["visuals-2"],
      // color: VISUALS["visuals-2"],
      fontFamily: "Raleway, sans-serif",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "0.03em",
      border: `1.5px solid ${VISUALS["visuals-2"]}`,
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </span>
)

/**
 * Renders a wrapping row of Chip components from a list of skill strings.
 * @param {string[]} skills
 */
export const SkillChips = ({ skills = [] }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
    {skills.map((skill) => (
      <Chip key={skill} label={skill} />
    ))}
  </div>
)

export default Chip
