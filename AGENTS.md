# AGENTS.md — Markaz Alburhan website rebuild

Read this before every task in this repo. It applies to every page, every commit, every session — not just the first one.

## Source of truth
`docs/content-and-design-source.md` in this repo (the file `markaz-alburhan-redesign-prompt.md` you were given — rename it into `docs/` when you set up the repo) is the **only** source for facts, copy, numbers, and the design system. Read it fully before touching any page. Do not pull facts, prices, capacities, or claims from anywhere else, including your own general knowledge of similar organizations.

## Non-negotiable rules
- Never invent or alter a number, name, phone number, bank detail, or quote. If content is missing for a section, insert `[NEEDS CONTENT FROM CLIENT]` and move on — do not fill the gap yourself.
- Never add a payment gateway, "Pay Now" button, or checkout flow. Donations are bank transfer + WhatsApp receipt only.
- Never add Arabic Qur'an/Hadith text that isn't already in the source doc. The Hadith on the Donate page stays English-only with its Sahih Muslim attribution.
- Never generate synthetic "realistic" photos standing in for real construction/event photos. Use a neutral placeholder block until the real asset is supplied.
- Keep the two phone numbers (`+92 340 2439670` org-wide, and `0345 3073557` for Muhammad Muneeb Khan specifically) distinct — never merge them.
- Don't silently resolve the inconsistencies flagged in Section 4 of the source doc (EasyPaisa/JazzCash mention, "6 events" vs. 5 listed, dead social links). Leave them or flag them with a code comment — don't guess.

## Design tokens (from the client's logo — don't substitute a different palette)
```
navy-900:  #0A1050   /* deep navy — footer, dark sections */
navy-700:  #152E7E   /* primary brand — header, primary buttons */
blue-500:  #25489E   /* interactive — links, hover, secondary buttons */
silver-100:#E6E6E6
silver-400:#C6C6C6
silver-700:#9A9A9A
bg:        #F6F8FB   /* frost-white page background, not stark white */
surface:   #FFFFFF
ink:       #10131A   /* near-black body text */
ink-muted: #4A5164
```
Fonts: a serif/display face for headlines (Fraunces or Cormorant), a clean sans for body (Inter or Manrope), and **Noto Nastaliq Urdu** for the Urdu text (address, "مرکز البرہان") — it's Urdu Nastaliq script, not Arabic Naskh, so a generic Arabic web font will render it wrong. Set `dir="rtl" lang="ur"` on those spans only.

The logo is an SVG asset — drop it in as-is in the header/footer. Keep its glossy gradient exactly as supplied; don't recolor it and don't extend that glossy/gradient treatment into buttons or cards elsewhere on the site — everything else should be flat, modern navy.

## Workflow for this repo
1. First task of a session: propose the stack (recommend Vite + React + TypeScript + Tailwind unless told otherwise) and wire up the design tokens above into the Tailwind config / theme before writing any page markup. Show this for approval before proceeding.
2. Build one page at a time in this order: Home → About → Events → Projects → Donate/Contact. Stop after each page for review rather than generating all five in one pass.
3. Before marking a page done, run it against the QA checklist in Section 9 of the source doc.

## Stack notes
Don't assume a specific Tailwind or tooling version from training data — check what `npm create vite@latest` and the current Tailwind install docs actually produce right now, since config syntax has changed across versions.
