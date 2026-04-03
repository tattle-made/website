import { StaticImage } from "gatsby-plugin-image"
import React from 'react'

/**
 * Renders a landing page image, switching between narrow and wide variants
 * based on screen size using CSS (Tailwind) rather than JS-driven context.
 *
 * @returns {JSX.Element} Responsive image component.
 */

export const ResponsiveImage = () => (
  <>
    <div className="block sm:hidden w-full overflow-hidden" style={{ height: "96px" }}>
      <StaticImage
        alt="landing page image"
        objectFit="contain"
        style={{ height: "100%" }}
        src="../../images/landing-page-narrow.png"
      />
    </div>
    <div className="hidden sm:block" style={{ width: "40%", boxShadow: "none" }}>
      <StaticImage
        alt="landing page image"
        objectFit="contain"
        imgStyle={{ fill: true, alignSelf: "start" }}
        src="../../images/landing-page-wide.png"
      />
    </div>
  </>
)
