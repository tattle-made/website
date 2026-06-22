import React from "react"
import { ArrowRight } from "react-feather"
import { PlainLink } from "./atomic/TattleLinks"

const ProductCard = ({ item, onClose }) => (
  <PlainLink to={item.target} onClick={onClose} style={{ textDecoration: "none" }}>
    <div
      style={{
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #eeeeee",
        transition: "box-shadow 0.18s ease, transform 0.18s ease",
        background: "white",
        height: "100%",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.10)"
        e.currentTarget.style.transform = "translateY(-3px)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "none"
        e.currentTarget.style.transform = "translateY(0)"
      }}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.label}
          style={{ width: "100%", height: 120, objectFit: "cover", display: "block" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: 120,
            background: "linear-gradient(135deg, #252653 0%, #514e80 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#edc9c4", fontFamily: "Raleway", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em" }}>
            {item.label}
          </span>
        </div>
      )}
      <div style={{ padding: "12px 14px 16px" }}>
        <div
          style={{
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: 13,
            color: "#252653",
            marginBottom: 5,
            letterSpacing: "0.02em",
          }}
        >
          {item.label}
        </div>
        <div style={{ fontSize: 12, color: "#777", lineHeight: 1.45 }}>
          {item.description}
        </div>
      </div>
    </div>
  </PlainLink>
)

const MegaMenuPanel = ({ items, onClose }) => {
  const products = items.filter(i => i.label !== "All Projects")
  const allProjects = items.find(i => i.label === "All Projects")

  return (
    <div style={{ padding: "28px 24px 22px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 18,
        }}
      >
        {products.map(item => (
          <ProductCard key={item.label} item={item} onClose={onClose} />
        ))}
      </div>

      {allProjects && (
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
          <PlainLink to={allProjects.target} onClick={onClose}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "Raleway",
                fontWeight: 600,
                fontSize: 12,
                color: "#E76D67",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              View all tools <ArrowRight size={13} />
            </div>
          </PlainLink>
        </div>
      )}
    </div>
  )
}

export default MegaMenuPanel
