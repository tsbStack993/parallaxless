'use client'
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Bg = () => {
  return (
    <div>
      {/* Parallax section fills the viewport and scrolls */}
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <Parallax pages={1.5} style={{ width: '100%', height: '100%' }}>
          {/* Background Layer */}
          <ParallaxLayer
            offset={0}
            speed={0.2}
            style={{
              backgroundImage: `url('/bg.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              width: '100%',
              height: '100%',
            }}
          />
          {/* Foreground Layer */}
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              backgroundImage: `url('/Group 1 (2).png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          />
          {/* Optional: Content Layer */}
          <ParallaxLayer
            offset={0.2}
            speed={1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <h1 style={{ color: '#fff', fontSize: '3rem', textShadow: '0 2px 8px #000' }}>text</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default Bg