# MARKAZ ALBURHAN — WEBSITE REDESIGN BUILD PROMPT

## HOW TO USE THIS DOCUMENT — PLAN FIRST, THEN BUILD

Don't paste the whole thing in and hit go. For a 5-page content-heavy rebuild like this, **plan first** — it costs you two minutes and saves you from Lovable/Replit generating 5 pages in a direction you then have to unwind.

**Stage 1 — Plan (paste this short block first, on its own):**

> I'm rebuilding a charity/masjid website called Markaz Alburhan. Before writing any code, show me a plan first — no full page code yet:
> 1. A sitemap of the 5 pages (Home, About, Events, Projects, Donate/Contact) with the sections each page will contain.
> 2. A color system using **navy blue as the primary brand color** (I'll give you the exact hex values and logo next), one lighter interactive-blue accent, a silver/platinum neutral for dividers and borders, a soft off-white background, and a near-black ink for text — modern, Islamic institutional, not a glossy corporate SaaS look and not a bright "charity template" look.
> 2b. Here are the exact colors, extracted directly from our logo — use these, don't invent your own:
>    - Deep navy (dark sections, footer): `#0A1050`
>    - Primary brand navy (main buttons, header, headlines): `#152E7E`
>    - Interactive blue (links, hover states, secondary buttons): `#25489E`
>    - Silver/platinum (dividers, card borders, fine linework): `#C6C6C6` (light: `#E6E6E6`, deep: `#9A9A9A`)
>    - Background: `#F6F8FB` (soft frost-white, not stark white)
>    - Ink/text: `#10131A` (near-black, not pure black)
> 3. A font pairing recommendation for headlines + body (Latin) and for the Urdu text on the site (Nastaliq script, not Arabic Naskh).
> 4. A short description of how you'd bring in a modern, restrained Islamic geometric motif (not a busy ornate border) as an accent.
>
> Don't build any pages yet — just show me the system so I can approve it.

Look at what it proposes. Push back on anything that feels off (too glossy, too corporate, wrong font weight, etc.) **before** it touches all 5 pages. Once you're happy with the plan:

**Stage 2 — Build (paste everything below, Sections 0–9, as your next message):**
Tell it explicitly: *"Now build all 5 pages using this exact design system and the locked content below — nothing invented."*

---
**Paste the rest of this document as your build message once the plan is approved.**

---

## 0. ROLE

You are a senior web designer/developer building a **premium, professional redesign** of an existing charity website for **Markaz Alburhan**, an under-construction masjid/madrasa/community-welfare complex in Taiser Town, Karachi, Pakistan, operated under **Alburhan International Welfare Trust**.

The live site being redesigned is: **https://www.markazalburhan.org/**

---

## 1. HARD RULE — SOURCE OF TRUTH (READ FIRST, NEVER BREAK)

The **only** source of truth for facts, numbers, names, quotes, addresses, phone numbers, prices, and claims is:
1. The live site at https://www.markazalburhan.org/ (browse it yourself if you have live internet access), and
2. The **verbatim content extraction in Section 3 of this document**, which was pulled directly from that site.

**You MUST NOT:**
- Invent, estimate, or "round" any number (capacity figures, unit price, square footage, phone numbers, event counts, dates).
- Invent testimonials, donor names, staff bios, founding dates, registration numbers, or statistics that are not in Section 3.
- Invent Arabic Qur'an or Hadith text that is not already present on the source site. The site currently shows the Sahih Muslim hadith **only in English translation** — do not add an Arabic original for it, since that text does not appear on the source site.
- Add a fake/simulated payment gateway, "Pay Now" checkout, or credit card form. The organization's **only** real donation methods are direct bank transfer + sharing a receipt on WhatsApp. Do not imply a payment processor exists that isn't documented in Section 3.
- Generate synthetic/AI "fake" photos of the mosque, construction, staff, or events. This is a real charity representing real people and real construction progress — use the real image files the client supplies (see Section 8), and use neutral placeholder blocks (not fabricated photoreal scenes) anywhere a real photo isn't yet available.
- Silently "fix" the inconsistencies flagged in Section 4. If something looks inconsistent, keep it as-is or add an inline `<!-- TODO: confirm with client -->` comment. Do not resolve it by guessing.

If any section of the new site needs content that isn't in Section 3, output a clearly marked placeholder like `[NEEDS CONTENT FROM CLIENT]` instead of writing something new.

You may **rewrite sentence structure, reorder, shorten, or restyle copy for clarity and flow** — that is encouraged. You may **not** change what is being claimed (numbers, capacities, prices, names, relationships between entities).

---

## 2. GLOBAL SITE ELEMENTS (present on every page — rebuild as shared header/footer components)

**Top utility bar:** `+92 340 2439670` · `Sector 79, Taiser Town, Karachi` · a WhatsApp icon linking to `https://wa.me/923402439670`

**Header/logo lockup:** "**Markaz Alburhan**" (English) + "**مرکز البرہان**" (Urdu, right next to it). Logo image is the client's existing mark — reuse it if supplied, or ask for a vector version.

**Primary navigation:** Home · About · Events · Projects · Contact · Donation
(Contact currently links to `donate.html#contact` — i.e., Contact is an anchor/section on the Donate page, not a separate page. Preserve this structure or make Contact its own route — either is fine, just don't lose the content.)

**Persistent header CTA:** "Donate Now" button, always visible.

**Global footer, present on all 5 pages, identical content:**
- "**Markaz Alburhan** — A center for knowledge, dawah, worship and community service in Taiser Town, Karachi."
- "Project Under Alburhan International Welfare Trust"
- **Contact block:** مرکز البرہان، سیکٹر 79، تیسر ٹاؤن، کراچی (Urdu address) · +92 340 2439670 · "Masool Muntazima Karachi: Muhammad Muneeb Khan — 0345 3073557"
- **Follow:** social icons (currently placeholder `#` links — no real social URLs exist yet, see Section 4) + WhatsApp link
- Copyright line: "© Markaz Alburhan. All rights reserved."

**Sticky/floating WhatsApp button** on `+923402439670` should persist across the whole site (it already functions this way).

---

## 3. VERBATIM CONTENT BY PAGE (the locked source of truth)

### 3.1 — HOME (`index.html`)
- Eyebrow: "A Sadaqah Jariyah Project"
- H1 (Urdu): "زیر تعمیر مسجد البرہان" — meaning "Masjid Alburhan (under construction)"
- Subtitle (Urdu): "تیسر ٹاؤن، کراچی" — "Taiser Town, Karachi"
- CTAs: phone `+92 340 2439670` · "Donate Now"

**Donation section — "Donate Now!"**
> Support the construction of **Markaz Alburhan** — a center for knowledge, dawah, worship, and community service. Your contribution becomes a continuous reward (*sadaqah jariyah*) for as long as the masjid stands.
> **Current campaign:** Building the **first roof** of Masjid Alburhan.
- 1 Unit = PKR 3,500
- Support Bricks, Cement & Labor
- Help Build Markaz Alburhan
- Donate Today for a Lasting Reward
- Buttons: "Donate Now" · "WhatsApp Us"

**Vision section — "The Vision" / "Markaz Alburhan — The Complete Model"**
> A scale model of the completed markaz — the masjid, the six-storey madrasa and the community facilities together on one campus, in sha Allah.
- Image: scale model of the completed campus.

**"Future-Ready Facilities" / "A complete center for the community"** (4-card grid):
1. **Masjid Construction** — "A spacious masjid where the community can pray, learn and connect."
2. **Community Kitchen** — "Food support for the needy in the surrounding neighborhood."
3. **Education & Dawah** — "Quran, deeni education and dawah programs for all ages."
4. **Free Medical Facility** — "A modern shifa khana offering free basic treatment." — tag: **"Place reserved — not yet operational."**

**Gallery — "Construction Progress"** (6 images, captions/alt text):
- Masjid Alburhan — arched facade under construction
- Masjid Alburhan — structure and arches taking shape
- Markazi hall — congregation offering salah in the main hall
- Construction progress (×3 generic captions)
- Link: "View All Projects" → Projects page

**Closing CTA band:**
> Be a part of this Sadaqah Jariyah — Every brick laid is a reward that continues, in sha Allah, long after our time.
- Button: "Donate Now"

---

### 3.2 — ABOUT (`about.html`)
- H1: "About Markaz Alburhan"
- Subtitle: "A comprehensive Islamic center for worship, learning, welfare, and community service."

**Governing body block:**
> Markaz Alburhan is built and operated under the supervision of **Alburhan International Welfare Trust** — every contribution is received and utilised through the trust.
- "Masool Muntazima Karachi — Muhammad Muneeb Khan" — `0345 3073557` — WhatsApp link → `wa.me/923453073557`
  *(Note: this is a different number/WhatsApp link from the site-wide `+92 340 2439670`. Keep both distinct — see Section 4.)*

**About intro:**
> Markaz Alburhan is being designed as more than a masjid or madrasa. It is a complete community-focused Islamic center. From large prayer capacity and student facilities to free medical care, food service, and dedicated arrangements for women, every feature has been planned to make the markaz a lasting source of benefit for deen and society.
- Buttons: "Read More" (anchors to Facilities section) · "Donate Now"

**About — full description (two paragraphs, verbatim facts, do not alter numbers):**
> Markaz Alburhan is being envisioned as a **comprehensive Islamic center** that brings together worship, learning, welfare, and community service under one roof. The project includes a **large-scale kitchen with the capacity to prepare meals for 1,000 people**, a **modern shifa khana for free medical care**, and a **fully equipped deeni institute** for students from across the country with essential living and educational facilities.
>
> The markaz is further planned as a **six-storey madrasa with one basement**, supported by **wudu and washroom facilities for 1,200 people**, a **separate entrance and dedicated prayer space for women**, a **6,000 sq. ft. rooftop area**, and a **3,000 sq. ft. mezzanine floor**. Altogether, it is designed to **accommodate up to 5,000 worshippers across two floors and one basement**, making it a large-scale center for salah, tarbiyah, education, and public benefit.

**"Facilities & Features" / "Everything Designed for the Ummah"** (10-item grid — exact figures, keep all):
1. Masjid & Prayer Hall — "A spacious, well-lit prayer hall designed as the spiritual heart of the markaz."
2. Six-Storey Madrasa — "A six-storey deeni institute with classrooms, hifz halls and residential facilities."
3. Basement Facility — "A full basement floor for additional prayer capacity and operational support."
4. Community Kitchen for 1,000 People — "A large-scale kitchen with capacity to prepare meals for up to 1,000 people daily."
5. Wudu & Washroom Facilities for 1,200 — "Capacity-grade wudu khana and washroom facilities accommodating 1,200 people."
6. Separate Women's Entrance & Prayer Space — "A dedicated entrance and private prayer area planned for our sisters in deen."
7. Rooftop Area: 6,000 sq. ft. — "A 6,000 sq. ft. rooftop area for overflow prayers, gatherings and Ramadan events."
8. Mezzanine Floor: 3,000 sq. ft. — "A 3,000 sq. ft. mezzanine floor expanding usable capacity for classes and prayer."
9. Capacity for up to 5,000 Worshippers — "Designed to accommodate up to 5,000 worshippers across two floors and one basement."
10. Free Medical Facility / Shifa Khana — "A modern shifa khana planned to offer free consultations, medicines and basic treatment." — tag: **"Place reserved — not yet operational."**

**Closing CTA:**
> Help Build Markaz Alburhan — Your contribution can become a means of *sadaqah jariyah* by supporting a center dedicated to salah, Quran, tarbiyah, dawah, food service, medical care, and community welfare.
- Buttons: "Donate Now" · "Contact on WhatsApp"

---

### 3.3 — EVENTS (`events.html`)
- Eyebrow: "Programs & Gatherings"
- H1: "Events At Markaz Alburhan"
- Subtitle: "Spiritual gatherings, Islahi Bayans, educational sessions, Aitekaaf, and community programs organized at Markaz Alburhan."

**Stat band:** "6" — Total Events Conducted · "3100+" — People Gathered · tags: "Educational & Islahi Programs", "Community Engagement"
> Markaz Alburhan has conducted 6 events till now in which over 3,100 people gathered.

**Event 1 — "Ghiza ur Rooh" / غذاء الروح** *(Series)*
> A series of spiritual gatherings and "Islahi Bayans" — reformative lectures hosted by Al-Burhan, an Islamic educational and spiritual institution based in Karachi.
- 3 photos of the Ijtima gathering.

**Event 2 — "Aitekaaf 2026"** *(Spiritual Retreat)*
> A spiritually uplifting Aitekaaf gathering arranged at Markaz Alburhan, bringing participants together for worship, zikr, learning, and collective iftar / sehri arrangements.
- Photos: worship session, collective dua, learning circle.

**Event 3 — "Seerat Murabbiyeen Camp" / اجتماعِ مربیین** *(Training Camp)*
> A dedicated training camp for murabbiyeen (mentors and trainers), focused on the Seerat of the Prophet ﷺ — combining tarbiyah sessions, group discussions and practical guidance for those who lead and teach within the community.
- 3 photos (bayan session, presentation session, participants gathered).

**Event 4 — "Dopamine Detox"** *(Tarbiyah Session)*
> A special tarbiyati and self-development session focused on discipline, digital control, focus, and reconnecting with Islamic values.
- Media: video file (`dopamine.mp4`).

**Event 5 — "Ilm e Deen Batch Closing"** *(Ceremony)*
> Closing Ceremony Of Batch 9 & 2 Basic Ilm e Deen Course.
- 2 photos.

**Closing CTA:**
> Be Part of Markaz Alburhan Programs — Support the construction and development of a center where salah, Quran, tarbiyah, dawah, community service, and educational programs continue for years.
- Buttons: "Donate Now" · "Contact on WhatsApp"

---

### 3.4 — PROJECTS (`projects.html`)
- Eyebrow: "Future-Ready Facilities"
- H1: "Our Projects"
- Subtitle: "Building a center for the ummah."
- Intro image + caption: "Markaz Alburhan — The Complete Model" — "The masjid, the six-storey madrasa and the community facilities together on one campus — the facilities below are the parts that make it up."

**Facility 01 — Community Kitchen**
> A dedicated kitchen facility to provide warm meals and food support for the surrounding community — especially the needy, orphans and travelers.
- 2 photos · Button: "Support This"

**Facility 02 — Masjid Construction Progress**
> Track the ongoing construction of **Masjid Alburhan** — your contribution funds bricks, cement and the labor that brings this masjid to life.
- 3 photos · Button: "Donate Now"

**Facility 03 — Education & Dawah Center**
> Quran classes, Islamic studies and dawah programs for children and adults — building a generation grounded in knowledge and good character.
- 4 photos · Button: "Support This"

**Facility 04 — Free Medical Facility** — tag: **"Place reserved — not yet operational"**
> A dedicated space has been **reserved within Markaz Alburhan for the free medical facility**. This shifa khana is not operational yet — once established, it will provide free consultations, medicines and basic treatment for those who cannot afford it, in sha Allah.
- 1 photo (reserved space) · Button: "Support This"

**Closing CTA:**
> Help us complete these facilities — 1 Unit = PKR 3,500 — every contribution counts as *sadaqah jariyah*.
- Buttons: "Donate Now" · "Chat on WhatsApp"

---

### 3.5 — DONATE + CONTACT (`donate.html`, contact is an anchor `#contact` on this page)
- Eyebrow: "Sadaqah Jariyah"
- H1: "Be Part of a Lasting Reward"
- Subtitle (Urdu): "زیر تعمیر مسجد البرہان"
- Intro: "Your donation helps build Markaz Alburhan — a masjid, a kitchen, a clinic, and a center for the community."

**"Donate Directly" — Bank Account Details (exact, do not alter a single character):**
- Account Title: **Alburhan Trust International**
- Account No: **03040107135992**
- IBAN: **PK59MEZN0003040107135992**
- Bank: **Meezan Bank**
- Donation unit: **PKR 3,500 per unit** — bricks, cement & labor
- Instruction: "After your transfer, please share the receipt with us on WhatsApp."
- Buttons: "Send Receipt on WhatsApp" (`wa.me/923402439670`) · "Call +92 340 2439670"

**Hadith quote block (English translation only — do not add an Arabic original, it is not on the source site):**
> "When a person dies, their deeds end except for three: a continuing charity, beneficial knowledge, or a righteous child who prays for them."
> — Sahih Muslim

**Supporting paragraph:**
> Every brick you sponsor, every bag of cement, every hour of labor — becomes a part of a place where Allah's name will be remembered for generations. We are currently raising funds for the **first roof of Masjid Alburhan**. **1 Unit = PKR 3,500.** Be part of this *sadaqah jariyah*.

**"How to Donate" section:**
- "Current Campaign: First Roof of the Masjid" — "This fundraising drive is dedicated to constructing the **first roof** of Masjid Alburhan — your contribution directly funds the slab, beams, bricks, cement and labor for this stage."
- "Unit Amount — PKR 3,500 per unit (bricks + cement + labor)"
- "Bank Account" card pointing back up to the bank details block
- Buttons: "WhatsApp: +92 340 2439670" · "Call: +92 340 2439670"

**"Get in Touch" / Contact section:**
- Address: مرکز البرہان، سیکٹر 79، تیسر ٹاؤن، کراچی
- Phone / WhatsApp: +92 340 2439670
- Masool Muntazima Karachi: Muhammad Muneeb Khan — 0345 3073557

**Governing body block** (same content as About page, repeated here — keep both).

---

## 4. FLAGGED INCONSISTENCIES — DO NOT SILENTLY RESOLVE, ASK THE CLIENT

These are things found on the live site that don't line up. Preserve the ambiguity or surface it — never invent an answer:

1. **Two different phone/WhatsApp numbers exist and mean different things** — the org-wide number `+92 340 2439670` (general donations/WhatsApp/receipts) and Muhammad Muneeb Khan's personal number `0345 3073557` / WhatsApp `wa.me/923453073557` (labeled "Masool Muntazima Karachi"). Keep them clearly separate and correctly labeled — don't merge into one contact.
2. **The Donate page's meta description mentions "EasyPaisa, JazzCash"** as donation channels, but the visible page content only shows Meezan Bank transfer + WhatsApp. If the client has EasyPaisa/JazzCash account numbers, ask them for the real numbers to add — do not fabricate account numbers or QR codes.
3. **Events page claims "6 Total Events Conducted"** but only 5 named event entries are listed (Ghiza ur Rooh is described as a recurring *series*, which may account for the 6th). Keep the "6" stat as-is since it's the client's own reported number, and don't invent a 6th named event to make the list match.
4. **Follow/social icons** across the site are placeholder `#` links with no real destination — leave them as inactive/hidden until the client provides real social profile URLs, rather than linking to guessed or generic social platforms.
5. **No functional donation form or payment gateway exists** on the current site — donations are 100% manual (bank transfer, then WhatsApp the receipt). The redesign should preserve this exact flow unless the client explicitly asks for a real payment integration.

---

## 5. DESIGN DIRECTION — "PREMIUM, NOT AI SLOP"

### Reference benchmarks (for feel and interaction patterns — do not copy layouts or copy text, and do not reuse anyone else's branding)
- **charity: water** (charitywater.org) — the standard-bearer for restrained nonprofit design: one confident accent color, large documentary-style photography, generous whitespace, short confident headlines, radical clarity about where money goes. Use this as the benchmark for *overall restraint and trustworthiness* — the opposite of a cluttered, gradient-heavy, stock-icon "charity template" look.
- **LaunchGood** campaign pages — the most relevant *interaction-pattern* reference for this specific niche (Muslim community crowdfunding, sadaqah jariyah framing, unit-based giving, milestone/goal framing, a sticky donate action). Reference this only for UX patterns (progress toward a goal, a persistent donate action, warm trustworthy tone) — not for its business model or as a platform to use.
- **Islamic Relief Worldwide / Muslim Hands** — useful for how established Islamic charities balance bilingual (Arabic/Urdu + English) typography, editorial photography of real facilities, and a multi-program structure (masjid + education + medical + food) similar to Markaz Alburhan's four pillars.

### Visual system — colors extracted directly from the client's own logo (do not substitute a different palette)

The client's logo (a circular navy medallion with white Thuluth calligraphy and a silver filigree ring) is the actual brand identity — the palette below was sampled directly from it, not invented:

| Token | Hex | Use |
|---|---|---|
| Navy 900 (deepest) | `#0A1050` | Footer, dark section backgrounds, hero overlay |
| Navy 700 (primary brand) | `#152E7E` | Header bar, primary buttons, headline accents |
| Blue 500 (interactive) | `#25489E` | Links, hover states, secondary buttons — a touch brighter than the logo's core tone so it reads as "clickable" without going neon |
| Silver light | `#E6E6E6` | Fine dividers, card borders |
| Silver mid | `#C6C6C6` | Icon strokes, secondary borders, quiet ornamental linework |
| Silver deep | `#9A9A9A` | Muted captions, inactive states |
| Background | `#F6F8FB` | Page background — a soft frost-white, not stark `#FFFFFF`, so navy doesn't feel harsh against it |
| Surface | `#FFFFFF` | Cards, content panels sitting on top of the background |
| Ink | `#10131A` | Body text — near-black, not pure `#000000`, easier on the eye at length |
| Muted ink | `#4A5164` | Secondary text, captions |

This gives you the "not too sharp, not too soft" balance the client asked for: a saturated, confident navy (not a washed-out pastel blue) set against a gentle frost-white (not a glaring pure white), with silver doing quiet structural work rather than loud decoration.

- **Do not recreate the logo's glossy 3D orb/gradient-sphere effect as a UI pattern** — that glossy-button, drop-shadow, inner-glow look is a dated 2008-era web trend. Keep the logo itself exactly as supplied (flat-mounted in the header/footer, untouched), but build the *surrounding UI* flat and modern: solid navy buttons, flat cards, no gradients-on-everything.
- **Avoid:** purple "generic SaaS" gradients unrelated to this palette, neon/electric blue, emoji as icons, stock crescent-and-dome clipart, heavy drop shadows, and default Bootstrap-looking components — these are the biggest tells of a low-effort AI-generated site.
- **Photography-led, not icon-led.** The client has real construction photos, real event photos, and a real scale-model render — foreground those (large, well-cropped, consistent aspect ratios) rather than relying on generic flat icons to represent facilities.
- **Modern Islamic geometric accent, used sparingly:** take a cue from the logo's filigree ring, but modernize it — a single-weight thin-line 8-point-star or arabesque geometric pattern (silver-mid on frost-white, or navy-on-white at 4–6% opacity) as a quiet section-divider, a hero background watermark, or a card-corner detail. One or two appearances per page is enough — the goal is "refined Islamic institution," not "border on every element." Do not use the ornate baroque filigree from the logo itself as a repeating UI border; it will look busy and dated at web scale.

### Typography
- **Latin/English:** pair a confident serif or high-contrast display face for headlines with a clean grotesque for body text — e.g. **"Fraunces" or "Cormorant"** (headlines, editorial and dignified) + **"Inter" or "Manrope"** (body, highly legible at small sizes). Avoid default system fonts and avoid trendy rounded fonts (Poppins/Quicksand) — they read casual, not premium.
- **Urdu text on this site (the address, "مرکز البرہان", "زیر تعمیر مسجد البرہان") is Urdu in Nastaliq-style Perso-Arabic script, not classical Arabic** — use a proper Nastaliq/Naskh-capable font such as **"Noto Nastaliq Urdu"** (Google Fonts, free, good web support) rather than a generic Arabic web font, or it will render awkwardly for Urdu readers.
- Set `dir="rtl"` and `lang="ur"` on any Urdu text blocks so it renders correctly, and keep the surrounding page `dir="ltr"` — don't flip the whole layout.
- If any genuine Qur'an ayat or Hadith Arabic text is added *later by the client themselves* (not by you), pair it with the English translation underneath in a lighter/smaller weight — but do not add this pairing speculatively for content that doesn't currently include an Arabic original.

### Tone/motion
- Calm, editorial pacing. Subtle fade/slide-in on scroll is fine; avoid busy parallax, particle backgrounds, or auto-playing carousels with distracting motion — this is a place of worship and charity, not a product landing page.

---

## 6. SITE STRUCTURE FOR THE REBUILD

Keep the same 5-page structure (or Contact as its own route if you prefer — just don't lose content):
- `/` — Home
- `/about` — About
- `/events` — Events
- `/projects` — Projects
- `/donate` — Donate (with a `#contact` section, or split into `/donate` and `/contact`)

Shared components: Header/Nav, Sticky WhatsApp button, Footer — build these once, reuse everywhere.

---

## 7. TECHNICAL CONSTRAINTS

- **Stack:** React + Tailwind CSS (or plain semantic HTML/CSS/JS if you prefer a simpler static build) — either works well in Replit or Lovable. Keep it a static/content site — **do not scaffold authentication, a CMS backend, a database, user accounts, dark mode, or a payment gateway** unless explicitly asked. This is a content + donation-info site, not an app.
- Fully responsive (mobile-first — most visitors will arrive via WhatsApp links on a phone).
- Preserve the existing per-page meta descriptions and titles (Section 3 headers) for SEO continuity, correcting only the EasyPaisa/JazzCash meta line per the flag in Section 4 once the client confirms.
- Real `tel:`, `wa.me`, and (if added) `mailto:` links — keep all existing phone numbers exactly as formatted in Section 3.
- Images: use the real photos/logo the client uploads into the project's asset folder. Where a real photo isn't available yet, use a simple neutral placeholder (solid color block or subtle pattern) — never a fabricated "realistic" scene standing in for an actual event or building.
- Accessibility: proper alt text (the existing alt text in Section 3 is a good starting point), sufficient color contrast, keyboard-navigable menu.

---

## 8. BEFORE YOU START — ASSETS NEEDED FROM THE CLIENT

Ask the user (not the AI) to supply, or confirm reuse of the originals from markazalburhan.org/assets/images/:
- Logo file — an SVG version of the navy/silver circular medallion logo will be uploaded directly into the Lovable/Replit project. Use it as-is in the header and footer; don't recolor, flatten, or redraw it — it's the one place the full gradient/filigree treatment stays exactly as designed.
- All construction, facility, event, and gallery photos referenced in Section 3
- The `dopamine.mp4` event video, if it should carry over
- Real EasyPaisa/JazzCash account details, if the client wants those added (per Section 4, item 2)
- Real social media URLs, if any exist (per Section 4, item 4)

---

## 9. FINAL QA CHECKLIST (run this before calling the build done)

- [ ] Every number in the new site (PKR 3,500, 1,000 meals, 1,200 wudu capacity, 6,000 sq ft, 3,000 sq ft, 5,000 worshippers, 6 events, 3,100+ people) matches Section 3 exactly.
- [ ] Both phone numbers appear correctly and are not merged or swapped.
- [ ] The IBAN, account number, account title, and bank name are copied character-for-character.
- [ ] No payment gateway, checkout, or "Pay Now" button was added.
- [ ] No new testimonial, staff bio, statistic, or Arabic scripture text appears anywhere that wasn't in Section 3.
- [ ] The Hadith is shown only in English with "— Sahih Muslim" attribution, exactly as sourced.
- [ ] All 5 pages' content is present somewhere in the new build — nothing from Section 3 was dropped.
- [ ] Design reads calm, editorial, and dignified — not templated, not gradient-heavy, not stock-icon-driven.

---

**Done when:** all 5 pages are rebuilt with the exact content above in a premium editorial layout, fully responsive, with the flagged items in Section 4 either left untouched or clearly marked for the client to resolve — and nothing has been invented.
