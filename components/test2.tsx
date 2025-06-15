'use client'
import Bg from '@/components/bg'
import Text from '@/components/text'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0.25}>
          <div style={{
            backgroundImage: `url('/bg.jpg')`
          }} className='parallax'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div style={{
            backgroundImage: `url('/Group 1 (2).png')`,
            
          }} className='parallax'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}>
            <h1 style={{ color: '#fff', fontSize: '3rem', textShadow: '0 2px 8px #000' }}>text</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <Text/>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Page