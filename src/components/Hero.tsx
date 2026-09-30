import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="scroll-mt-[70px] xs:scroll-mt-[80px] sm:scroll-mt-[95px] md:scroll-mt-[110px] pt-[70px] xs:pt-[80px] sm:pt-[95px] md:pt-[110px] w-full bg-[#171817] p-0 m-0"
    >
      {/* 
        Full-Width Responsive Hero Image:
        - <img> element with width: 100%; height: auto; display: block;
        - Spans the full viewport width from left to right edge with zero side margins.
        - Preserves the complete original aspect ratio with natural height.
        - No overflow: hidden, no max-height, no 100vh, no cropping, no zooming.
        - The complete architectural scene and all 5 bottom fields remain 100% visible.
      */}
      <img
        src="/main.png"
        alt="Elegant Architects Masterpiece"
        className="w-full h-auto block select-none pointer-events-none p-0 m-0"
      />
    </section>
  );
};
