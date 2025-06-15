'use client'
import ParticleBackground from '@/components/ParticleBackground'
import Provider from '@/components/provider'
import SvgParticles from '@/components/SvgParticles'
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

const page = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center relative'>
      <SvgParticles/>
    </div>
  )
}

export default page