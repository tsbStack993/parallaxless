'use client';
import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";
import Image from "next/image";

const Provider = () => {
  const target = useRef<HTMLDivElement>(null);

  // Move train horizontally as user scrolls vertically
  const train = useParallax<HTMLDivElement>({
    translateX: [0, 500], // Move 0px to 500px to the right
    targetElement: target.current ?? undefined,
  });

  // Cloud moves vertically (default)
  const cloud = useParallax<HTMLDivElement>({
    //speed: -20,
    translateY: [0, 100], // Move from 0px to 100px down
    targetElement: target.current ?? undefined,
  });

  return (
    <div
      ref={target}
      style={{
        backgroundImage: "url('/Scene.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: '100vw',
        height: '200vh', // Tall for vertical scroll
        position: 'relative',
        overflow: 'hidden',
      }}
      className="relative"
    >
      <div className="fixed top-10 left-40 z-10">
        <Image src="/Sun.png" height={120} width={120} alt="Sun" />
      </div>
      <div
        ref={train.ref as React.RefObject<HTMLDivElement>}
        className="absolute"
        style={{
          top: '65vh',
          left: '-50vw', // Start further left for visible movement
          zIndex: 20,
        }}
      >
        <Image src="/Train.png" height={350} width={700} alt="Train" />
      </div>
      <div
        ref={cloud.ref as React.RefObject<HTMLDivElement>}
        className="absolute"
        style={{
          top: '10vh',
          left: '10vw',
          zIndex: 15,
        }}
      >
        <Image src="/Cloud.png" height={200} width={1000} alt="Cloud" />
      </div>
    </div>
  );
};

export default Provider;