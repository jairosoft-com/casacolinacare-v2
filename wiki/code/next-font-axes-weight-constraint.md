---
title: next/font — axes + weight constraint for variable fonts
type: code
tags: [next.js, next/font, fonts, variable-fonts, build-error]
created: 2026-06-21
updated: 2026-06-21
source_count: 1
aliases: [next font axes, fraunces opsz, variable font axes]
---

# next/font — axes + weight constraint for variable fonts

## Rule

When `axes` is specified in a `next/font/google` call, the `weight` property must be **omitted** — not an explicit array of weights. Combining `axes` with `weight: ["300","400","500"]` (or any explicit array) throws a build error.

## Error

```
Module not found: Can't resolve 'next/font/google/target.css'
Axes can only be defined for variable fonts when the weight property
is nonexistent or set to 'variable'.
```

## Correct pattern

```ts
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],   // weight omitted → full variable range 100–900
});
```

Omitting `weight` for a variable font loads the full weight range (e.g. 100–900 for Fraunces), which is what you want when also requesting a non-standard axis.

## Wrong pattern (throws)

```ts
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500"],  // ← incompatible with axes
  style: ["normal", "italic"],
  axes: ["opsz"],
});
```

## Context

Discovered in Next.js 16.2.9 while implementing the Casa Colina Care landing page with Fraunces (optical-size axis `opsz`).

## Related

- [[Next.js 16 Breaking Changes]]
- [[Wiki Gotchas Lack Code-Side Back-References]]

## Sources

- casacolinacare-v2 dev session 2026-06-21
