# Plan: Professional polish for the existing ARJ Soap website

## Goal
Polish the current ARJ Soap Detergent & Manufacturing website so it feels like a credible commercial manufacturing company site, without rebuilding it or changing the existing facts, routes, bilingual language switch, Formspree contact form, or static-site direction.

## What will stay unchanged
- Existing page structure and routes: Home, About, Brands, Products, Factory, Quality, Vision, Contact, and 404.
- ARJ company name, AMARD and ADWA brands, phone numbers, Sebeta location, establishment date, and existing factual content.
- English/Amharic language switch and stored language preference.
- Formspree contact form endpoint and current contact functionality.
- Existing green manufacturing brand direction, typography approach, animations, and real ARJ images.
- Static/prerender deployment approach.

## Site-wide polish
- Tighten the visual system in `src/styles.css` with more consistent section spacing, card styling, image framing, button sizing, focus states, and responsive rules.
- Keep colors semantic and token-based; no random hardcoded theme changes.
- Improve mobile handling for long labels, buttons, product cards, image grids, and contact details.
- Keep animations subtle and professional.

## Homepage
- Refine the hero layout so the first screen clearly states:
  - ARJ is a soap manufacturing company.
  - ARJ manufactures AMARD and ADWA laundry soaps.
  - ARJ is based in Sebeta, Ethiopia.
- Make the primary CTA more prominent and keep a strong secondary CTA to product details.
- Strengthen the product showcase immediately below the hero with better image hierarchy, product labels, benefits, and quote/product CTAs.
- Improve spacing and transitions between hero, brand showcase, manufacturing intro, Why ARJ, factory, vision, and product strip sections.

## Product and brand presentation
- Improve AMARD and ADWA product cards/sections with stronger image placement, clearer product names, descriptions, benefits, and CTAs.
- Keep existing product information only; no invented specifications.
- Make AMARD and ADWA visually distinct but clearly under ARJ.
- Use existing product/package/lifestyle images naturally, including current product views where available.

## Factory page
- Rework the existing sections into a clearer visual manufacturing story:
  - Manufacturing facility in Sebeta.
  - Machinery.
  - Production.
  - Packaging.
  - Storage.
  - Distribution.
- Use the existing machinery, cartons, warehouse, and product images in galleries/cards.
- Avoid unsupported claims.

## About page
- Improve the storytelling and layout around:
  - ARJ Soap Detergent & Manufacturing.
  - Established in 2022 G.C. / 2014 E.C.
  - Sebeta, Ethiopia.
  - Manufacturing focus.
  - AMARD and ADWA as ARJ products.
- Keep the current copy facts and polish presentation only.

## Quality page
- Convert the quality content into clearer visual sections/cards with better hierarchy.
- Keep existing quality-related information only.
- Do not add fake certifications, awards, standards, or claims.

## Vision page
- Improve the visual presentation of the existing vision statement with stronger typography, spacing, imagery, and layout.
- Preserve the current meaning.

## Contact page
- Make contact options easier to scan and use:
  - Separate clickable phone numbers.
  - Clear contact/request-a-quote form hierarchy.
  - Better spacing for WhatsApp/Telegram and map/directions.
  - Mobile-friendly form and contact cards.
- Preserve the Formspree submission behavior and endpoint.

## Navigation and links
- Review header, mobile menu, active states, logo home link, and CTAs.
- Confirm every internal navigation target exists and works.
- Keep the bilingual navigation intact.

## Final checks
- Inspect all pages: Home, About, Brands, Products, Factory, Quality, Vision, Contact, and 404.
- Check English and Amharic rendering.
- Check desktop and mobile layouts for overflow, clipped elements, image sizing, button sizing, and comfortable spacing.
- Verify no console errors from app code.
- Verify the contact form still targets Formspree.
- Verify the static build output remains server-free and uses no Lovable asset-runtime dependencies.
