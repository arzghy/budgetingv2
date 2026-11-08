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
        <g className="whale-tail">
          <path
            d="M397 221C436 223 451 201 450 171C469 172 481 185 479 202C489 189 507 188 516 193C512 234 477 254 435 253L397 221Z"
            fill="var(--sage)"
            stroke="var(--mb-ink)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M455 219C464 215 473 210 479 202"
            stroke="var(--mb-ink)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M72 230C58 169 107 129 194 129C275 129 338 163 390 199C417 218 437 229 462 230C455 272 400 311 289 313C191 315 86 292 72 230Z"
          fill="var(--sage)"
          stroke="var(--mb-ink)"
          strokeWidth="3"
        />
        <path
          d="M91 257C142 290 240 280 293 274C350 268 393 270 424 267C387 297 340 311 283 311C187 312 121 293 91 257Z"
          fill="var(--cream)"
        />
        <path
          d="M228 244C237 262 257 286 282 278C288 264 273 247 258 240"
          fill="var(--sage)"
          stroke="var(--mb-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse cx="124" cy="231" rx="17" ry="10" fill="var(--peach)" />
        <ellipse cx="207" cy="235" rx="16" ry="9" fill="var(--peach)" />
        <g className="mascot-eyes" fill="var(--mb-ink)">
          <ellipse cx="137" cy="217" rx="5" ry="7" />
          <ellipse cx="198" cy="220" rx="5" ry="7" />
        </g>
        <path
          d="M159 230C164 239 173 239 179 231"
          stroke="var(--mb-ink)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M116 175C128 167 145 164 157 164"
          stroke="var(--cream)"
          strokeWidth="7"
          strokeLinecap="round"
        />
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
      <g stroke="var(--mb-ink)" strokeWidth="2" strokeLinecap="round">
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
