---
version: alpha
colors:
  primary: "#293e32"
  rose: "#f6dbe2"
  sage: "#c2d772"
  cream: "#f6ffd3"
  peach: "#f6c5c1"
  ink: "#293e32"
  paper: "#fffdf7"
  whale-blue: "#8fc9ef"
  whale-belly: "#eaf7ff"
  whale-outline: "#356383"
  whale-shade: "#66b1df"
  cat-cream: "#fff7e7"
  cat-patch: "#f0c4a6"
  cat-outline: "#785b51"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
rounded:
  button: "100px"
  calculator: "20px"
omitted:
  - section: spacing
    reason: "Responsive editorial layout; geometry is owned by app/landing.css."
  - section: components
    reason: "Marketing components are documented below; authenticated application retains its existing primitives."
---

# Mibudge

## Overview

Indonesian personal budgeting for everyday spending, essentials and savings goals. The landing page is a brand surface: a personal money journal with original whale and cat companions, generous negative space, a playful typographic rhythm and practical examples. The signature is a round pastel blue whale and a seated cream-and-peach kitten, side by side near a paper budget sheet. They are independent characters with separate silhouettes and ground shadows; the cat must never sit on the whale. The user selected the four pastel colors and requested a feminine, appealing identity without template-like decoration.

## Colors

Runtime ownership: the four palette tokens (`--rose`, `--sage`, `--cream`, `--peach`) live in `app/globals.css`; `app/landing.css` consumes them and owns landing-only `--mb-ink`, `--mb-muted`, `--mb-paper`, and `--mb-line`. Mascot SVGs inherit these variables. At the user’s request, the whale uses an illustration-only blue palette owned by `--mb-whale-blue`, `--mb-whale-belly`, `--mb-whale-outline`, and `--mb-whale-shade` in `app/landing.css`. Its short, rounded body, pale belly, raised flukes, pink cheeks, bright eyes, open smile and small water spout keep the character gentle and recognizably a whale. The cat uses `--mb-cat-cream`, `--mb-cat-patch`, and `--mb-cat-outline` from the same stylesheet, with a rounded face, peach ear patch, green collar, small paws and a curled tail. `CatFace` is shared between the full kitten and smaller cat decorations; `WhaleDrawing` is shared between the scene and the compact, uncropped navigation icon. Pastels are surfaces; dark green carries legible text. App routes retain their existing ink tokens.

## Typography

Locally hosted Bricolage Grotesque for landing headings and numeric highlights; locally hosted Plus Jakarta Sans for body and app text. Licenses are in `public/fonts`. Headlines use compact tracking and sentence case. Short italic Bricolage notes suggest a personal journal without compromising legibility. No external font requests.

## Layout

Asymmetric two-column hero, followed by a quiet category ribbon, tabbed notebook demonstration, interactive budgeting example, three actual onboarding steps, native FAQ and closing invitation. Maximum content width 1200px. Below 800px, main sections stack; below 480px, onboarding steps become vertical. Indonesian copy and rupiah formatting throughout. Examples are clearly labeled and never imply real account data. The 50/30/20 calculator is an illustrative allocation, not a mandatory financial rule.

## Elevation & Depth

Shadows belong to paper artifacts only. Use a small offset on the notebook and calculator. Flat section surfaces; no gradients, glass panels, glow or blanket card shadows.

## Shapes

Pill buttons, irregular organic backdrop, handwritten underline, paper tape and notebook rings. Original inline SVG mascots support the brand story. Use Lucide for functional icons. Decorative vectors are hidden from assistive technology.

## Components

Primary actions navigate to existing `/register`; sign-in navigates to `/login`. Preserve authenticated redirect to `/dashboard`. Feature tabs support arrows/Home/End and display illustrative data only. Native range supports keyboard control; output updates in rupiah. FAQ uses native details/summary. Small-screen navigation is a non-modal disclosure with Escape support. Content remains visible if animation does not initialize.

Motion personality: calm and playful. GSAP orchestrates one hero entrance, restrained whale motion, one notebook reveal and 250ms tab transitions. Only the independent whale group floats, supported by a small tail movement; the seated cat remains grounded beside it. Lenis uses the existing shared provider synchronized with GSAP, with cleanup and native scrolling under reduced-motion preferences. Ambient motion pauses offscreen and has a visible pause control. Avoid repeated section reveals and pinned scrolling.

## Do's and Don'ts

Use warm, concrete, nonjudgmental Indonesian copy. Keep illustrated examples clearly distinct from account data. Honor reduced motion, visible focus and adequate tap targets. Do not add fabricated testimonials, user counts, unsupported privacy claims, technical stack promotions, autoplay text deletion or fake financial transactions. Further dashboard redesign is a separate scope.
