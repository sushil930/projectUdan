import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set('.letter', { 
      strokeDasharray: 600, 
      strokeDashoffset: 600,
      fill: 'transparent',
      opacity: 1
    });
    
    gsap.set('.shine', { 
      x: -200, 
      opacity: 0 
    });

    tl.to('.letter', {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power3.inOut',
      stagger: 0.15,
    })
    .to('.letter', {
      fill: '#111827', // gray-900
      stroke: 'transparent',
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .to('.shine', {
      opacity: 0.5,
      duration: 0.1
    }, '-=0.5')
    .to('.shine', {
      x: 500,
      duration: 1.2,
      ease: 'power2.inOut'
    }, '<')
    .to(svgRef.current, {
      scale: 1.1,
      duration: 1,
      ease: 'power2.out'
    }, '-=1')
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
      delay: 0.2
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] w-full h-full bg-[#FDFBF7] flex items-center justify-center">
      <svg ref={svgRef} id="udaan-logo" viewBox="0 0 361 89" width="280" fill="none" className="overflow-visible">
        <g className="letters" stroke="#111827" strokeWidth="2">
          <path className="letter" d="M0 0H67V33.5C67 52.0015 52.0015 67 33.5 67C14.9985 67 0 52.0015 0 33.5V0Z"/>
          <path className="letter" d="M75 0H108.5C127.002 0 142 14.9985 142 33.5C142 52.0015 127.002 67 108.5 67H75V0Z"/>
          <path className="letter" d="M147.158 66.75L180.5 0L213.842 66.75H147.158Z"/>
          <path className="letter" d="M219 66.75L252.342 0L285.684 66.75H219Z"/>
          <path className="letter" d="M294 0H327.5C346.002 0 361 14.9985 361 33.5V67H294V0Z"/>
        </g>

        {/* shine effect */}
        <rect className="shine" x="0" y="-20" width="60" height="150" fill="white" transform="rotate(20)" style={{ filter: 'blur(10px)' }} />
      </svg>
    </div>
  );
};

export default Loader;
