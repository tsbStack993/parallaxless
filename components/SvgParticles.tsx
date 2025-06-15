import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function SvgParticles() {
  // Define circle positions statically to avoid SSR mismatch
  const circles = [
    { cx: 50, cy: 50, r: 6 },
    { cx: 100, cy: 100, r: 8 },
    { cx: 150, cy: 80, r: 5 },
    { cx: 200, cy: 120, r: 7 },
    { cx: 250, cy: 60, r: 6 },
    { cx: 300, cy: 100, r: 9 },
    { cx: 350, cy: 150, r: 4 },
  ];
  useGSAP(() => {
    gsap.utils.toArray(".circle").forEach((cir, ind) => {
      gsap.fromTo(
        cir as SVGCircleElement,
        { 
          y: 100
        },
        {
          y: -400,
          duration: 3 + ind,
          repeat: -1,
        }
      )
    });
  }, []);

  return (
    <div className="relative w-[500px] h-[300px] bg-black flex items-center justify-center flex-col border border-gray-100">
      <svg width="400" height="400" className="absolute top-0 left-0 border-gray-200">
        {circles.map((circle, index) => (
          <circle
            key={index}
            className="animate-pulse  circle"
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
          fill="cyan"
          />
        ))}
      </svg>
      {/* <Circles /> */}
      <div className="bgRadient w-96 "></div>
      <div className="relative z-10">
        <h1 className="text-white text-4xl font-bold">SVG Particle Animation</h1>
      </div>
    </div>
  );
}
// useGSAP(() => {
//     gsap.fromTo(".circle", {
//       scale: 0,
//       opacity: 0,
//     }, {
//       scale: 1,
//       opacity: 1,
//       duration: 1,
//       stagger: 0.2,
//       ease: "back.out(1.7)",
//     });
//   }, []);