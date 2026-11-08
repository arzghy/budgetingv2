/** Original vector mascots; colors inherit the landing page's palette. */
export function WhaleCat({
  className = "",
  cat = true,
}: {
  className?: string;
  cat?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse
        cx="268"
        cy="321"
        rx="176"
        ry="17"
        fill="currentColor"
        opacity=".07"
      />
      <g className="mascot-float">
        <g
          className="whale-tail"
          stroke="var(--mb-whale-outline)"
          strokeWidth="2.8"
          strokeLinejoin="round"
        >
          <path
            d="M393 224C424 229 445 211 444 185C432 179 425 164 429 151C452 150 474 164 477 185C488 170 506 166 517 173C519 200 493 227 462 239C441 252 416 255 397 247Z"
            fill="var(--mb-whale-blue)"
          />
          <path d="M447 219C462 213 475 201 477 185" strokeLinecap="round" />
          <path
            d="M438 161C449 162 460 169 464 179"
            stroke="var(--mb-whale-belly)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M61 225C53 167 100 127 183 127C263 127 316 158 370 197C398 217 423 227 447 213C447 250 413 284 359 302C306 320 225 325 157 309C97 296 66 268 61 225Z"
          fill="var(--mb-whale-blue)"
          stroke="var(--mb-whale-outline)"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path
          d="M72 251C110 278 166 282 224 280C305 279 381 276 430 245C412 272 388 289 359 300C302 319 225 324 158 308C117 299 89 278 72 251Z"
          fill="var(--mb-whale-belly)"
        />
        <path
          d="M312 202C343 218 371 231 399 232"
          stroke="var(--mb-whale-shade)"
          strokeWidth="7"
          strokeLinecap="round"
          opacity=".55"
        />
        <path
          d="M218 246C239 242 265 257 273 276C278 287 272 294 261 291C242 287 222 271 218 257"
          fill="var(--mb-whale-blue)"
          stroke="var(--mb-whale-outline)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M232 255C244 259 255 269 260 277"
          stroke="var(--mb-whale-belly)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <ellipse cx="112" cy="235" rx="17" ry="10" fill="var(--peach)" />
        <ellipse cx="199" cy="238" rx="16" ry="9" fill="var(--peach)" />
        <g className="mascot-eyes" fill="var(--mb-whale-outline)">
          <ellipse cx="126" cy="218" rx="6" ry="8" />
          <ellipse cx="187" cy="220" rx="6" ry="8" />
          <circle cx="128" cy="215" r="2" fill="var(--mb-whale-belly)" />
          <circle cx="189" cy="217" r="2" fill="var(--mb-whale-belly)" />
        </g>
        <path
          d="M145 234C150 244 163 245 170 236"
          stroke="var(--mb-whale-outline)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M93 183C107 165 127 157 148 155"
          stroke="var(--mb-whale-belly)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="83" cy="197" r="3.5" fill="var(--mb-whale-belly)" />
        {cat && (
          <g
            fill="var(--mb-whale-blue)"
            stroke="var(--mb-whale-outline)"
            strokeWidth="2"
            strokeLinejoin="round"
          >
            <path d="M136 109C126 105 116 97 119 91C123 83 136 94 136 109Z" />
            <path d="M146 101C143 91 145 78 151 79C160 81 154 95 146 101Z" />
            <path d="M157 111C163 101 174 98 176 104C178 111 167 114 157 111Z" />
            <path d="M144 118L145 126" fill="none" strokeLinecap="round" />
          </g>
        )}
        {cat && (
          <g className="mascot-cat">
            <path
              d="M267 144C300 127 323 141 313 155C308 164 290 163 287 151"
              stroke="var(--mb-ink)"
              strokeWidth="19"
              strokeLinecap="round"
            />
            <path
              d="M267 144C300 127 323 141 313 155C308 164 290 163 287 151"
              stroke="var(--peach)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M188 115C180 137 181 159 199 162L258 162C278 160 280 136 269 114Z"
              fill="var(--mb-paper)"
              stroke="var(--mb-ink)"
              strokeWidth="3"
            />
            <path
              d="M178 80L176 38Q176 31 184 36L207 53C222 48 238 49 253 54L276 38Q284 33 282 43L278 83C288 116 264 137 232 137C197 137 170 117 178 80Z"
              fill="var(--mb-paper)"
              stroke="var(--mb-ink)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M184 48L186 72L200 59Z" fill="var(--peach)" />
            <path d="M273 49L256 60L273 73Z" fill="var(--peach)" />
            <path
              d="M224 51L225 68M236 52L236 66"
              stroke="var(--peach)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <g className="mascot-eyes" fill="var(--mb-ink)">
              <ellipse cx="208" cy="92" rx="4" ry="5.5" />
              <ellipse cx="252" cy="92" rx="4" ry="5.5" />
            </g>
            <ellipse cx="196" cy="105" rx="10" ry="6" fill="var(--rose)" />
            <ellipse cx="264" cy="105" rx="10" ry="6" fill="var(--rose)" />
            <path
              d="M225 103L231 108L237 103"
              fill="var(--peach)"
              stroke="var(--mb-ink)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M231 108C227 116 221 113 221 110M231 108C235 116 241 113 241 110M179 98L166 94M180 108L166 109M280 98L292 94M279 108L292 109"
              stroke="var(--mb-ink)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M201 143L200 159M254 143L255 160"
              stroke="var(--mb-ink)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M204 132Q229 142 255 132L253 144Q229 152 206 143Z"
              fill="var(--peach)"
            />
            <circle
              cx="231"
              cy="145"
              r="5"
              fill="var(--sage)"
              stroke="var(--mb-ink)"
              strokeWidth="1.5"
            />
          </g>
        )}
      </g>
      <g
        stroke="var(--mb-whale-outline)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".6"
      >
        <path d="M64 294Q78 299 91 294M382 331Q400 337 415 331M50 265Q55 269 62 266" />
      </g>
    </svg>
  );
}

export function Flower({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 18C11-9-9 18 18 32C-9 46 11 73 32 46C53 73 73 46 46 32C73 18 53-9 32 18Z"
        fill="currentColor"
      />
      <circle cx="32" cy="32" r="7" fill="var(--mb-paper)" />
    </svg>
  );
}

export function LittleCat({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 150"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M36 69L30 14L65 39Q90 31 115 39L150 14L144 69C165 122 127 143 90 143S15 122 36 69Z"
        fill="var(--peach)"
        stroke="var(--mb-ink)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M41 35L46 65L60 49M139 35L120 49L135 65" fill="var(--rose)" />
      <path
        d="M60 87Q67 79 74 87M106 87Q113 79 120 87M82 102Q90 114 98 102M32 99L15 94M34 109L17 112M148 99L165 94M146 109L163 112"
        stroke="var(--mb-ink)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="52" cy="101" rx="9" ry="5" fill="var(--rose)" />
      <ellipse cx="128" cy="101" rx="9" ry="5" fill="var(--rose)" />
      <path d="M86 96L90 100L94 96Z" fill="var(--mb-ink)" />
    </svg>
  );
}
