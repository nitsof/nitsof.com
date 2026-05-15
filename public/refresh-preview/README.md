# NITSOF — Brand refresh preview

A single-file directional concept exploring a refreshed NITSOF identity
around three values from the brief: **simplicity · confidence · future.**

Open `index.html` directly in any browser, or run the existing site
locally (`npm run dev`) and visit:

    http://localhost:3000/refresh-preview/

## What this is

A *visualisation*, not a build target. It's intentionally a single HTML
file so it can be reviewed without touching the React app, and so design
decisions can be evaluated before any production code is written.

## Aesthetic direction

| Token        | Value      | Why                                                                       |
|--------------|------------|---------------------------------------------------------------------------|
| Canvas       | `#F4EFE6`  | Warm cream parchment — confident, tactile, the opposite of generic dark   |
| Ink          | `#0A0908`  | Near-black with warmth — used for type and ink-block CTAs                 |
| Cobalt       | `#1740FF`  | Single saturated accent. Editorial, sharp, replaces the rainbow gradient  |
| Signal lime  | `#CAFF39`  | Status / "live" / motion accent — used very sparingly                     |

## Typography schemes

The preview supports four switchable typography schemes — toggle them
via the chip in the top-right corner, or append `?type=` to the URL.

| Key             | Scheme              | Display fonts            | Body / UI                  |
|-----------------|---------------------|--------------------------|----------------------------|
| _(default)_ / A | Editorial Bold      | Fraunces                 | Manrope                    |
| `editorial` / B | Editorial Calm      | Newsreader               | Inter Tight                |
| `newsstand` / C | Newsstand Contrast  | Instrument Serif         | Inter                      |
| `swiss` / D     | Swiss Modern        | General Sans             | Switzer                    |

Mono (JetBrains Mono) is shared across all schemes.

## Notes for review

- The hero replaces the rainbow gradient with a single typographic
  statement: *"Software, shipped at the speed of thought."*
- Every section is numbered (§ Capabilities, § Selected work, § How we
  work) — borrowed from editorial design to project confidence.
- Cards invert on hover (cream → ink) instead of glowing — a calmer
  interaction model.
- The live ticker and pulsing status dot are the only continuously
  moving elements; everything else animates only on scroll.
