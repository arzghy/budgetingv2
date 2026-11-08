/** Original, independently drawn mascots. All colors come from landing tokens. */
function WhaleDrawing() {
  return (
    <g
      stroke="var(--mb-whale-outline)"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g className="whale-tail">
        <path
          d="M250 209C282 212 309 191 311 167C292 166 277 152 280 133C298 130 320 140 327 157C332 137 350 126 369 130C373 152 356 173 338 183C331 211 303 235 271 240Z"
          fill="var(--mb-whale-blue)"
        />
        <path
          d="M287 142C300 142 311 149 315 157"
          stroke="var(--mb-whale-belly)"
          strokeWidth="5"
        />
        <path d="M310 199C324 190 330 178 327 157" fill="none" />
      </g>
      <path
        d="M31 191C29 136 67 99 126 96C192 89 244 117 261 163C271 190 287 200 309 187C309 225 281 262 239 278C206 291 155 297 111 287C62 276 32 241 31 191Z"
        fill="var(--mb-whale-blue)"
      />
      <path
        d="M43 234C86 255 132 253 176 249C220 245 262 232 291 215C280 241 262 261 238 274C200 292 150 294 112 285C78 277 55 258 43 234Z"
        fill="var(--mb-whale-belly)"
        stroke="none"
      />
      <path
        d="M208 136C225 147 237 165 242 182"
        fill="none"
        stroke="var(--mb-whale-shade)"
        strokeWidth="7"
        opacity=".5"
      />
      <path
        d="M208 235C228 239 246 259 242 274C239 284 216 276 202 263C192 254 187 247 187 242"
        fill="var(--mb-whale-blue)"
      />
      <path
        d="M202 246C214 253 225 263 228 268"
        stroke="var(--mb-whale-belly)"
        strokeWidth="4"
      />
      <path
        d="M54 161C63 141 82 127 104 124"
        stroke="var(--mb-whale-belly)"
        strokeWidth="8"
      />
      <circle
        cx="49"
        cy="176"
        r="3"
        fill="var(--mb-whale-belly)"
        stroke="none"
      />
      <g stroke="none">
        <ellipse cx="72" cy="218" rx="17" ry="10" fill="var(--peach)" />
        <ellipse cx="174" cy="219" rx="17" ry="10" fill="var(--peach)" />
      </g>
      <g className="whale-eyes" stroke="none" fill="var(--mb-whale-outline)">
        <ellipse cx="88" cy="199" rx="7.5" ry="10" />
        <ellipse cx="159" cy="200" rx="7.5" ry="10" />
        <circle cx="90.5" cy="195.5" r="2.5" fill="var(--mb-whale-belly)" />
        <circle cx="161.5" cy="196.5" r="2.5" fill="var(--mb-whale-belly)" />
      </g>
      <path
        d="M111 218Q123 228 136 218C135 234 115 235 111 218Z"
        fill="var(--mb-whale-outline)"
        strokeWidth="2"
      />
      <path
        d="M117 227Q124 222 131 227Q125 233 117 227Z"
        fill="var(--peach)"
        stroke="none"
      />
      <g className="whale-spout" fill="var(--mb-whale-blue)" strokeWidth="2">
        <path d="M124 77C109 72 98 58 105 54C114 48 124 65 124 77Z" />
        <path d="M133 66C128 53 133 36 140 39C150 44 143 59 133 66Z" />
        <path d="M144 77C151 65 165 59 167 66C168 74 154 79 144 77Z" />
        <path d="M132 85V93" fill="none" />
      </g>
    </g>
  );
}

function CatFace() {
  return (
    <g
      stroke="var(--mb-cat-outline)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M27 81C20 66 17 44 22 24Q24 17 31 21L63 43C85 35 111 35 133 43L160 22Q167 17 170 25C176 43 175 67 169 82C181 99 177 123 158 138C142 151 115 156 97 156C72 156 47 150 32 136C12 120 12 98 27 81Z"
        fill="var(--mb-cat-cream)"
      />
      <path
        d="M24 25Q25 20 31 23L63 44Q80 63 69 82Q49 92 26 82C21 64 18 43 24 25Z"
        fill="var(--mb-cat-patch)"
        stroke="none"
      />
      <path d="M31 39Q27 53 31 67L48 54Z" fill="var(--peach)" stroke="none" />
      <path
        d="M159 40L143 55L165 68Q168 53 159 40Z"
        fill="var(--peach)"
        stroke="none"
      />
      <path
        d="M88 44L91 58M102 43L101 56"
        stroke="var(--mb-cat-patch)"
        strokeWidth="6"
      />
      <path
        d="M23 111L35 114M25 123L36 123M162 113L174 108M161 123L171 122"
        stroke="var(--mb-cat-patch)"
        strokeWidth="5"
      />
      <g className="cat-eyes" fill="var(--mb-cat-outline)" stroke="none">
        <ellipse cx="65" cy="101" rx="6.5" ry="9" />
        <ellipse cx="130" cy="101" rx="6.5" ry="9" />
        <circle cx="67" cy="98" r="2.3" fill="var(--mb-cat-cream)" />
        <circle cx="132" cy="98" r="2.3" fill="var(--mb-cat-cream)" />
      </g>
      <ellipse
        cx="48"
        cy="116"
        rx="12"
        ry="7"
        fill="var(--peach)"
        stroke="none"
      />
      <ellipse
        cx="147"
        cy="116"
        rx="12"
        ry="7"
        fill="var(--peach)"
        stroke="none"
      />
      <path
        d="M92 111Q97 108 102 111L97 117Z"
        fill="var(--mb-cat-outline)"
        strokeWidth="1.5"
      />
      <path
        d="M97 117C97 128 85 129 83 121M97 117C97 128 109 129 111 121"
        fill="none"
        strokeWidth="2.2"
      />
      <path
        d="M30 106L12 102M30 117L10 119M165 106L183 102M165 117L185 119"
        fill="none"
        strokeWidth="1.8"
      />
    </g>
  );
}

function CatDrawing() {
  return (
    <g
      stroke="var(--mb-cat-outline)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g className="cat-tail">
        <path
          d="M144 214C173 227 197 211 194 190C192 174 181 169 177 178C175 184 181 191 184 192"
          fill="none"
          strokeWidth="22"
        />
        <path
          d="M144 214C173 227 197 211 194 190C192 174 181 169 177 178C175 184 181 191 184 192"
          fill="none"
          stroke="var(--mb-cat-patch)"
          strokeWidth="17"
        />
      </g>
      <path
        d="M59 135C45 152 42 184 44 206C34 219 40 233 59 234H138C159 233 164 218 153 205C155 180 150 153 136 135Z"
        fill="var(--mb-cat-cream)"
      />
      <ellipse
        cx="99"
        cy="188"
        rx="28"
        ry="33"
        fill="var(--mb-paper)"
        stroke="none"
      />
      <path
        d="M51 178L64 181M49 190L62 192M138 178L150 175M140 188L152 185"
        stroke="var(--mb-cat-patch)"
        strokeWidth="6"
      />
      <path
        d="M74 182L72 214C57 213 54 225 61 232C69 238 86 236 92 231L95 202M123 182L125 214C140 213 143 225 136 232C128 238 111 236 105 231L102 202"
        fill="var(--mb-cat-cream)"
      />
      <path
        d="M70 225V231M78 225V232M119 225V232M127 225V231"
        strokeWidth="1.6"
      />
      <path
        d="M63 142Q98 158 137 142L132 156Q97 169 68 156Z"
        fill="var(--sage)"
      />
      <circle cx="100" cy="163" r="8" fill="var(--cream)" strokeWidth="1.6" />
      <path d="M97 166H103M100 163V166" strokeWidth="1.5" />
      <CatFace />
    </g>
  );
}

/** Each character occupies its own space and has its own ground shadow. */
export function MascotFriends({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 620 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse
        cx="167"
        cy="307"
        rx="137"
        ry="12"
        fill="var(--mb-whale-outline)"
        opacity=".08"
      />
      <ellipse
        cx="506"
        cy="307"
        rx="83"
        ry="10"
        fill="var(--mb-cat-outline)"
        opacity=".08"
      />
      <g className="mascot-whale">
        <WhaleDrawing />
      </g>
      <g transform="translate(411 80) scale(.94)">
        <g className="mascot-cat">
          <CatDrawing />
        </g>
      </g>
      <g
        stroke="var(--mb-whale-outline)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".5"
      >
        <path d="M16 273Q25 277 34 273M297 293Q309 297 319 293" />
      </g>
      <path
        d="M381 116C370 103 359 113 366 123L381 137L395 123C403 113 392 103 381 116Z"
        fill="var(--peach)"
      />
    </svg>
  );
}

/** A compact crop keeps the complete whale legible in the navigation logo. */
export function WhaleMascot({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="15 30 370 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <WhaleDrawing />
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
      viewBox="0 10 200 155"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <CatFace />
    </svg>
  );
}
