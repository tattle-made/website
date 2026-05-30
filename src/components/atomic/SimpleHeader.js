import React, { useState } from "react"
import { ChevronDown, Menu, X, ExternalLink as ExternalLinkIcon } from "react-feather"
import TattleLogo from "./TattleLogo"
import { PlainLink, PlainExternalLink } from "./TattleLinks"
import { NavThemes } from "./core-style"
import DropDownMenu from "../DropDownMenu"


/**
 * Single source of truth for all navigation items.
 * Both desktop dropdowns and the mobile drawer are derived from this structure,
 * so there is no duplication between the two.
 */
const NAV_ITEMS = [
  {
    label: "Tools",
    children: [
      { label: "Uli", target: "/products/ogbv", description: "Online Gender Based Violence Mitigation" },
      { label: "Deepfake Analysis Unit", target: "/products/dau", description: "Collaborative Platform for Deepfake Assessment" },
      { label: "Viral Spiral", target: "/products/viral-spiral", description: "Digital Card Game for Media Literacy" },
      { label: "Feluda", target: "/products/feluda", description: "Multimedia and multimodal data analysis engine" },
      { label: "All Projects", target: "/products/", description: "" },
    ],
  },
  { label: "Blog", target: "/blog" },
  { label: "Research", target: "/research" },
  {
    label: "More",
    children: [
      {
        label: "Newsletter",
        target: "https://us19.campaign-archive.com/home/?u=a9af83af1f247ecc04f50ad46&id=4afc4a2c79",
        external: true,
      },
      { label: "Work With Us", target: "/join-us" },
      { label: "Build With Us", target: "/build-with-us" },
      { label: "Annual Reports", target: "/report/" },
      { label: "FAQ", target: "/faq" },
      { label: "Community", target: "/community" },
      { label: "Updates", target: "/updates" },
    ],
  },
]

/** Converts NAV_ITEMS children to the format DropDownMenu expects. */
const toDropdownOptions = (children) =>
  children.map((item, i) => ({
    id: i,
    label: item.label,
    target: item.target,
    description: item.description,
    type: item.external ? "external" : "internal",
  }))

// ─── Mobile components ────────────────────────────────────────────────────────

const MobileNavLink = ({ item, onClose, color }) => {
  if (item.external) {
    return (
      <PlainExternalLink href={item.target} target="_blank" onClick={onClose}>
        <div
          className="flex items-center gap-1 py-2 px-4 text-sm"
          style={{ color }}
        >
          {item.label}
          <ExternalLinkIcon size={12} />
        </div>
      </PlainExternalLink>
    )
  }
  return (
    <PlainLink to={item.target} onClick={onClose}>
      <div className="py-2 px-4 text-sm" style={{ color }}>
        {item.label}
      </div>
    </PlainLink>
  )
}

const MobileNavGroup = ({ item, onClose, color }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-3 px-4"
        onClick={() => setOpen(!open)}
        style={{ color, background: "transparent", border: "none", cursor: "pointer" }}
      >
        <span className="text-sm font-semibold tracking-widest">{item.label}</span>
        <ChevronDown
          size={16}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>
      {open && (
        <div
          className="ml-4 pl-3 mb-1"
          style={{ borderLeft: `1px solid ${color}40` }}
        >
          {item.children.map((child) => (
            <MobileNavLink key={child.label} item={child} onClose={onClose} color={color} />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * Responsive site header.
 *
 * Desktop: logo + nav links with dropdowns (lg and above).
 * Mobile: logo + hamburger that expands an inline drawer below the bar.
 *
 * Uses Tailwind responsive classes instead of Grommet's ResponsiveContext so
 * the correct layout is rendered on first paint with no hydration jank.
 */
const SimpleHeader = ({ navTheme = "light" }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobile = () => setMobileOpen(false)
  const theme = NavThemes[navTheme] ?? NavThemes.light

  return (
    <div style={{ width: "960px", maxWidth: "100%" }}>
      {/* Top bar */}
      <div className="flex items-center h-[77px] px-4 lg:px-0">
        <TattleLogo data={{ fill: theme.icon }} />

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto">
          <DropDownMenu title="Tools" options={toDropdownOptions(NAV_ITEMS[0].children)} textColor={theme.text} />
          <PlainLink to="/blog">
            <span style={{ fontFamily: "Raleway", fontSize: 14, letterSpacing: "0.1em", color: theme.text }}>Blog</span>
          </PlainLink>
          <PlainLink to="/research">
            <span style={{ fontFamily: "Raleway", fontSize: 14, letterSpacing: "0.1em", color: theme.text }}>Research</span>
          </PlainLink>
          <DropDownMenu title="More" options={toDropdownOptions(NAV_ITEMS[3].children)} textColor={theme.text} />
        </nav>

        {/* Hamburger — hidden on desktop */}
        <button
          className="lg:hidden ml-auto p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          {mobileOpen ? (
            <X size={24} color={theme.icon} />
          ) : (
            <Menu size={24} color={theme.icon} />
          )}
        </button>
      </div>

      {/* Mobile drawer — expands inline below the top bar */}
      {mobileOpen && (
        <nav
          className="lg:hidden pb-4"
          style={{ borderTop: `1px solid ${theme.text}30` }}
        >
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <MobileNavGroup key={item.label} item={item} onClose={closeMobile} color={theme.text} />
            ) : (
              <PlainLink key={item.label} to={item.target} onClick={closeMobile}>
                <div
                  className="py-3 px-4 text-sm font-semibold tracking-widest"
                  style={{ color: theme.text }}
                >
                  {item.label}
                </div>
              </PlainLink>
            )
          )}
        </nav>
      )}
    </div>
  )
}

export default SimpleHeader
