# Aspetto Beauty - Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by premium natural skincare brands (Aesop, Glossier, The Ordinary) that balance minimalism with warmth and trust. The design emphasizes product photography, clean layouts, and organic sophistication.

## Typography System

**Primary Font Pairing:** Playfair Display (headings) + Nunito Sans (body)
- **H1/Hero:** text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- **H2/Section:** text-3xl md:text-4xl lg:text-5xl, font-semibold
- **H3/Subsection:** text-2xl md:text-3xl, font-semibold
- **Body Large:** text-lg md:text-xl, font-normal, leading-relaxed
- **Body:** text-base md:text-lg, font-normal, leading-relaxed
- **Small/Caption:** text-sm md:text-base, font-light

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, mb-8, py-16, gap-12)

**Grid System:**
- Container: max-w-7xl mx-auto px-6 md:px-8 lg:px-12
- Content sections: max-w-6xl for full layouts, max-w-prose for text-heavy
- Multi-column: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for features/benefits

**Vertical Rhythm:**
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: mb-12 md:mb-16 between major elements
- Element spacing: gap-6 md:gap-8 within components

## Page Structure & Components

### Homepage

**Hero Section (100vh on desktop, auto on mobile):**
- Full-width background: Product lifestyle image (hands applying moisturizer, natural setting)
- Layout: Two-column grid (lg:grid-cols-2) with text left, visual emphasis right
- Content: Brand name, tagline "Natural. Halal. Radiant.", primary CTA with blurred backdrop
- Buttons: Blurred background treatment (backdrop-blur-md bg-white/20) for CTAs on images

**Product Showcase (multi-column):**
- 3-column grid (grid-cols-1 md:grid-cols-3) featuring:
  - Product jar close-up with ingredient detail
  - Texture/application shot
  - Packaging/brand presentation
- Each image: aspect-ratio-square, rounded-lg, shadow-lg

**Benefits Section:**
- 2-column alternating layout (image-text, text-image pattern)
- Feature blocks: Key benefits with icons (unscented, all skin types, natural)
- Generous whitespace between blocks (space-y-16)

**Ingredients Section:**
- Single column, centered, max-w-4xl
- Large typography for main ingredients
- Grid layout (grid-cols-2 md:grid-cols-4) for ingredient badges/icons

**Social Proof/Trust:**
- Single row with trust indicators (Halal certified, USDA Organic, Natural)
- Icon-text combinations, flex layout with gap-8

**CTA to Amazon:**
- Full-width section, py-20
- Centered content with prominent button
- Supporting text about where to purchase

### Product Detail Page

**Hero Product Image:**
- Large product photography (60vh), centered
- Product name overlay with subtle backdrop-blur

**Product Information Grid:**
- 2-column (lg:grid-cols-2): Left = image gallery, Right = details
- Sticky right column on desktop (lg:sticky lg:top-24)
- Details include: benefits list, ingredients, usage instructions, storage

**Deep Dive Sections:**
- Single column, rich content about tallow benefits
- Accordion/expandable sections for Vitamins A,D,E,K details
- Image breaks between text sections

### About/Brand Story Page

**Brand Story Hero:**
- Image: Natural landscape or tallow sourcing imagery (80vh)
- Overlay text with mission statement

**Values Grid:**
- 3-column (grid-cols-1 md:grid-cols-3): Natural, Halal, Organic
- Icon-heading-description cards with generous padding (p-8)

**Process Section:**
- Timeline or step-by-step visual (horizontal scroll on mobile)
- Alternating image-text explaining sourcing and creation

## Component Library

**Buttons:**
- Primary: rounded-full, px-8 py-4, text-lg font-semibold, shadow-lg
- Secondary: rounded-full, px-8 py-3, text-base, border-2
- On images: backdrop-blur-md with semi-transparent background

**Cards:**
- Product cards: rounded-2xl, shadow-xl, overflow-hidden, aspect-ratio-square for images
- Info cards: p-6 md:p-8, rounded-xl, shadow-md

**Navigation:**
- Sticky header (sticky top-0 z-50)
- Logo left, nav center, CTA right on desktop
- Mobile: Hamburger menu with full-screen overlay

**Footer:**
- 3-column grid (grid-cols-1 md:grid-cols-3)
- Sections: Brand info, Quick links, Newsletter signup
- Social icons, contact info, trust badges

## Images

**Required Images:**
1. **Hero**: Lifestyle shot of product in natural setting or hands applying moisturizer (full-width, 100vh desktop)
2. **Product shots**: Glass jar close-ups from multiple angles (3-4 images)
3. **Texture/detail**: Cream texture, ingredient close-ups
4. **Lifestyle**: Product in bathroom/skincare routine context
5. **Brand story**: Natural landscape, grass-fed cattle (if applicable), organic herbs
6. **Before/after**: Optional skin improvement demonstrations

**Image Treatment:**
- rounded-lg to rounded-2xl depending on prominence
- shadow-lg for elevation
- aspect-ratio constraints for consistency
- Lazy loading for performance

## Interactions

**Minimal Animations:**
- Fade-in on scroll for section reveals (subtle, once)
- Image hover: slight scale (scale-105) on product cards
- Button hover: Handled by Button component
- NO complex scroll-triggered animations

**Mobile Responsiveness:**
- All multi-column layouts stack to single column on mobile
- Touch-friendly tap targets (min 44x44px)
- Simplified navigation with hamburger menu
- Reduced padding/spacing on mobile (use responsive classes)