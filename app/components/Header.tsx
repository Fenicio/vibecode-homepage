export default function Header() {
    return (
            <div className="relative w-[500px] h-[250px]">
              {/* SVG Arched Text */}
              <svg className="absolute w-full h-full" viewBox="0 0 500 250">
                {/* Arched "VIBE" on left */}
                <path id="vibePath" d="M 50 150 A 200 200 0 0 1 250 50" fill="transparent"/>
                <text fill="black" fontSize="48" fontFamily="Arial">
                  <textPath href="#vibePath" startOffset="10%" textAnchor="start">
                    VIBE
                  </textPath>
                </text>
        
                {/* Arched "CODE" on right */}
                <path id="codePath" d="M 250 50 A 200 200 0 0 1 450 150" fill="transparent"/>
                <text fill="black" fontSize="48" fontFamily="Arial">
                  <textPath href="#codePath" startOffset="90%" textAnchor="end">
                    CODE
                  </textPath>
                </text>
              </svg>
        
              {/* Center Image */}
              <img
                src="/vibe-code-logo.png"
                alt="Vibe Code Logo"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-4 border-white shadow-xl"
              />
            </div>
        )
}