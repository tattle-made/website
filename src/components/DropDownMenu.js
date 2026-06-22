import React, { useState, useRef } from "react"
import { ChevronDown, ExternalLink as ExternalLinkIcon } from "react-feather"
import { PlainLink, PlainExternalLink } from "./atomic/TattleLinks"
import { Theme } from "./atomic/core-style"

const MenuItem = ({ option, onClose }) => {
  const inner = (
    <div
      style={{ padding: "9px 12px", borderRadius: 6, transition: "background 0.12s ease" }}
      onMouseEnter={e => { e.currentTarget.style.background = "#f5f5f5" }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <span style={{ fontFamily: "Raleway", fontWeight: 600, fontSize: 13, color: "#252653" }}>
          {option.label}
        </span>
        {option.type === "external" && <ExternalLinkIcon size={11} color="#aaa" />}
      </div>
      {option.description && (
        <div style={{ fontSize: 11, color: "#999", marginTop: 2, lineHeight: 1.35 }}>
          {option.description}
        </div>
      )}
    </div>
  )

  if (option.type === "external") {
    return (
      <PlainExternalLink href={option.target} target="_blank" onClick={onClose}>
        {inner}
      </PlainExternalLink>
    )
  }
  return (
    <PlainLink to={option.target} onClick={onClose}>
      {inner}
    </PlainLink>
  )
}

const DropDownMenu = ({ options, title, textColor = Theme.text_color_light }) => {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)

  const openMenu = () => {
    clearTimeout(timer.current)
    setOpen(true)
  }

  const closeMenu = () => {
    timer.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div style={{ position: "relative" }} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <button
        style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
        aria-expanded={open}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontFamily: "Raleway", fontSize: 14, letterSpacing: "0.1em", color: textColor }}>
            {title}
          </span>
          <ChevronDown
            size={16}
            color={textColor}
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </div>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            background: "white",
            boxShadow: "0 8px 28px rgba(0,0,0,0.11)",
            borderRadius: 8,
            border: "1px solid #f0f0f0",
            zIndex: 100,
            width: 400,
            padding: "12px 8px",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 8px" }}>
            {options.map(option => (
              <MenuItem key={option.id} option={option} onClose={() => setOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropDownMenu
