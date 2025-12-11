# Design Tokens & Tailwind Refactoring Guide

## Overview
This project has been refactored to use centralized Tailwind design tokens instead of hardcoded values. All colors, spacing, typography, and layout patterns are now managed through semantic naming conventions.

## Design Token Structure

### Colors
```js
// Brand Colors
brand.primary: "#39D373"    // Primary green
brand.dark: "#005F24"       // Dark green

// Text Colors  
text.primary: "#ffffff"     // White text
text.muted: "#939393"       // Gray text
text.dark: "#000000"        // Black text

// Surface Colors
surface.card: "#171717"     // Card backgrounds
surface.badge: "#3B3B3B"    // Badge backgrounds
surface.dark: "#080808"     // Dark surfaces

// Border Colors
border.DEFAULT: "#292929"   // Default borders
border.light: "rgba(255,255,255,0.05)" // Light borders
```

### Typography
```js
// Semantic Font Sizes
text-hero: 3.75rem (60px)   // Main headings
text-subhero: 2.75rem  // Main subhero
text-heading: 1.875rem (30px) // Section headings  
text-subheading: 1.125rem (18px) // Descriptions
text-stat: 2.25rem (36px)   // Stat numbers
text-nav: 0.9375rem (15px)  // Navigation
text-micro: 0.75rem (12px)  // Small text
```

### Spacing & Layout
```js
// Container Widths
max-w-container: "1123px"   // Main container
max-w-content: "320px"      // Content blocks
max-w-hero: "64rem"         // Hero sections
max-w-text: "32rem"         // Text blocks

// Component Spacing
h-navbar: "87px"            // Navigation height
h-card: "235px"             // Card height
w-icon: "46px"              // Icon dimensions
h-icon: "46px"
```

### Border Radius
```js
rounded-card: "0.75rem"     // Cards and containers
rounded-button: "0.75rem"   // Buttons
rounded-badge: "9999px"     // Badges (fully rounded)
rounded-navbar: "52.5px"    // Navigation specific
```

### Background Gradients
```js
bg-gradient-brand           // Brand gradient (green)
bg-gradient-button          // Button gradient
bg-gradient-badge           // Badge gradient
bg-gradient-glow            // Glow effect
```

## Utility Classes

### Layout Patterns
```css
.section-container          // Max-width container with padding
.section-padding           // Standard section vertical padding
.hero-layout              // Hero section layout pattern
.card-container           // Card background and padding
.stats-grid               // Statistics layout grid
.stat-item                // Individual stat item layout
.icon-container           // Icon wrapper with gradient
```

### Text Patterns
```css
.gradient-text            // Brand gradient text effect
.text-hero               // Hero heading styles
.text-description        // Description text styles
.text-stat-number        // Statistic number styles
.text-stat-label         // Statistic label styles
```

### Navigation Patterns
```css
.nav-container           // Navigation wrapper
.nav-inner              // Navigation inner container
.nav-links              // Navigation links container
.nav-link               // Individual navigation link
```

### Button Patterns
```css
.btn-base               // Base button styles
.btn-primary            // Primary button variant
.btn-secondary          // Secondary button variant
.btn-outline            // Outline button variant
```

### Effects
```css
.glow-background        // Radial glow effect background
```

## Usage Examples

### Before (Hardcoded)
```jsx
<div className="max-w-[1123px] mx-auto px-8 py-24">
  <h1 className="text-6xl font-bold text-center">
    <span className="bg-gradient-to-r from-[#39D373] to-[#005F24] bg-clip-text text-transparent">
      Title
    </span>
  </h1>
  <p className="text-lg text-[#939393] max-w-2xl">Description</p>
</div>
```

### After (Semantic Tokens)
```jsx
<div className="section-container section-padding">
  <h1 className="text-hero">
    <span className="gradient-text">Title</span>
  </h1>
  <p className="text-description">Description</p>
</div>
```

## Maintenance Guidelines

### Adding New Colors
1. Add to `tailwind.config.ts` under appropriate semantic category
2. Use descriptive names: `brand.accent`, `surface.elevated`, etc.
3. Avoid color names: use `primary` not `green`

### Adding New Spacing
1. Add to spacing section with semantic names
2. Use consistent naming: `component.elementPadding`
3. Consider reusability across components

### Creating New Utilities
1. Add to `src/styles/tw-utilities.css`
2. Use `@layer utilities` for proper cascade
3. Follow naming convention: `.pattern-purpose`

### Future Development Rules
1. **Never use hardcoded hex colors** - always use design tokens
2. **Never use arbitrary values** like `px-[24px]` - use semantic spacing
3. **Prefer utility classes** for repeated patterns
4. **Update tokens first** before adding new hardcoded values
5. **Use semantic naming** - describe purpose, not appearance

## File Structure
```
src/
├── styles/
│   └── tw-utilities.css     // Utility class definitions
├── app/
│   └── globals.css          // Global styles + utility imports
└── tailwind.config.ts       // Design token definitions
```

## Benefits Achieved
- ✅ Centralized design system management
- ✅ Consistent spacing and typography
- ✅ Easy theme customization
- ✅ Reduced code duplication
- ✅ Maintainable component styles
- ✅ Corporate-ready naming conventions
- ✅ Future-proof architecture