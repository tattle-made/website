import React from 'react'

export const BlogFigure = ({ src, alt, caption }) => (
  <figure style={{ width: '100%', margin: '1rem 0' }}>
    <img
      src={src}
      alt={alt}
      style={{
        border: '2px solid #8B95A7',
        borderRadius: '10px',
        width: '100%',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
      }}
    />
    {caption && (
      <figcaption
        style={{
          marginTop: '0.75rem',
          fontSize: '0.80rem',
          color: '#6b7280',
          textAlign: 'center',
        }}
      >
        {caption}
      </figcaption>
    )}
  </figure>
)
