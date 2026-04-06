import React from "react"

/**
 * CSS-driven responsive masonry layout using Tailwind column utilities.
 * No JS measurement needed — column count is determined by CSS breakpoints,
 * so the layout is correct on first paint with no hydration jank.
 *
 * Breakpoints mirror the previous JS thresholds:
 *   < 768px  → 1 column  (mobile)
 *   768px+   → 3 columns (tablet / small desktop)
 *   1280px+  → 4 columns (wide desktop)
 */
const MasonryLayoutResponsive = ({ children }) => (
  <div className="columns-1 md:columns-3 xl:columns-4 gap-7">
    {React.Children.map(children, (child, i) => (
      <div key={i} className="break-inside-avoid mb-7">
        {child}
      </div>
    ))}
  </div>
)

export default MasonryLayoutResponsive
