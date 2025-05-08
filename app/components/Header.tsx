import Image from 'next/image';

import UserMenu from './UserMenu';

export default function Header() {
    return (
    <div className="relative w-[320px] h-[150px] mx-auto flex flex-col items-center justify-center mt-20">
      {/* SVG Arched Text */}
      <svg className="absolute w-full h-full" viewBox="0 0 320 150">
        {/* Arched "VIBE" on left */}
        <path id="vibePath" d="M 32 90 A 80 80 0 0 1 160 32" fill="transparent"/>
        <text fill="black" fontSize="28" fontFamily="Arial">
          <textPath href="#vibePath" startOffset="10%" textAnchor="start">
            VIBE
          </textPath>
        </text>
        {/* Arched "CODE" on right */}
        <path id="codePath" d="M 160 32 A 80 80 0 0 1 288 90" fill="transparent"/>
        <text fill="black" fontSize="28" fontFamily="Arial">
          <textPath href="#codePath" startOffset="90%" textAnchor="end">
            CODE
          </textPath>
        </text>
      </svg>
      {/* Center Image */}
      <Image
        src="/vibe-code-logo.png"
        alt="Vibe Code Logo"
        width={72}
        height={72}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-lg"
      />
      {/* CTA Button */}
      <a
        href="#main-action"
        className="relative mt-28 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all text-base font-semibold"
        style={{ zIndex: 10 }}
      >
        Start Vibe Coding
      </a>
    </div>
        )
}










