import React from "react"

const THEME_COLORS = {
  brand: "#E76D67",
  accent1: "#514E80",
  accent2: "#7F7AB0",
  accent3: "#252653",
  neutral3: "#EDC9C4",
  visuals1: "#ffebcb",
  visuals7: "#e56d67",
}

const RINGS = 5

/**
 * @param {Array<{label: string, value: number}>} options - each value in [0, 1]
 * @param {number} [size=400] - internal SVG coordinate size; rendered width is always 100% of parent
 */
const RadarChart = ({ options = [], size = 400 }) => {
  const cx = size / 2
  const cy = size / 2
  const maxRadius = size * 0.32
  const labelPadding = size * 0.08
  const fontSize = size * 0.04
  const n = options.length

  if (n < 3) return null

  const angle = (i) => (2 * Math.PI * i) / n - Math.PI / 2

  const point = (i, radius) => ({
    x: cx + radius * Math.cos(angle(i)),
    y: cy + radius * Math.sin(angle(i)),
  })

  const ringRadii = Array.from({ length: RINGS }, (_, i) =>
    maxRadius * ((i + 1) / RINGS)
  )

  const dataPoints = options.map((opt, i) =>
    point(i, Math.max(0, Math.min(1, opt.value)) * maxRadius)
  )

  const polygonPoints = dataPoints.map((p) => `${p.x},${p.y}`).join(" ")

  const labelPoint = (i) => {
    const r = maxRadius + labelPadding
    return { x: cx + r * Math.cos(angle(i)), y: cy + r * Math.sin(angle(i)) }
  }

  const textAnchor = (i) => {
    const cos = Math.cos(angle(i))
    if (cos > 0.2) return "start"
    if (cos < -0.2) return "end"
    return "middle"
  }

  const dominantBaseline = (i) => {
    const sin = Math.sin(angle(i))
    if (sin < -0.2) return "auto"
    if (sin > 0.2) return "hanging"
    return "middle"
  }

  // Generous padding around the chart area so long labels are never clipped.
  // The SVG renders at width=100% so everything scales proportionally.
  const padLeft = size * 0.32
  const padRight = size * 0.60
  const padVert = size * 0.18
  const vbX = -padLeft
  const vbY = -padVert
  const vbW = size + padLeft + padRight
  const vbH = size + padVert * 2

  return (
    <svg
      width="100%"
      viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
      aria-label="Radar chart"
      style={{ display: "block" }}
    >
      {ringRadii.map((r, ri) => (
        <circle
          key={ri}
          cx={cx}
          cy={cy}
          r={r}
          fill={ri % 2 === 0 ? THEME_COLORS.visuals1 : "#ffffff"}
          fillOpacity={0.4}
          stroke={THEME_COLORS.neutral3}
          strokeWidth={1}
        />
      ))}

      {options.map((_, i) => {
        const outer = point(i, maxRadius)
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={outer.x}
            y2={outer.y}
            stroke={THEME_COLORS.accent2}
            strokeWidth={1}
            strokeOpacity={0.6}
          />
        )
      })}

      <polygon
        points={polygonPoints}
        fill={THEME_COLORS.brand}
        fillOpacity={0.25}
        stroke={THEME_COLORS.brand}
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {dataPoints.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={5}
          fill={THEME_COLORS.visuals7}
          stroke={THEME_COLORS.accent3}
          strokeWidth={1}
        />
      ))}

      {options.map((opt, i) => {
        const lp = labelPoint(i)
        return (
          <text
            key={i}
            x={lp.x}
            y={lp.y}
            textAnchor={textAnchor(i)}
            dominantBaseline={dominantBaseline(i)}
            fontSize={fontSize}
            fontFamily="Raleway, sans-serif"
            fill={THEME_COLORS.accent1}
            fontWeight={600}
          >
            {opt.label}
          </text>
        )
      })}
    </svg>
  )
}

export default RadarChart
