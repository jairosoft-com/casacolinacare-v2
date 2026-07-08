---
name: feedback-turbopack-css-stale
description: Turbopack does not hot-reload a CSS file written while the dev server was already running — touch the file to force recompile
metadata: 
  node_type: memory
  type: feedback
  originSessionId: fff978e9-5dba-4bdd-acb8-f1962f3654ab
---

# Turbopack CSS stale-cache after file write

When a CSS file is written (or overwritten) with the Write tool while `bun dev` / `next dev` is already running, Turbopack may not pick up the change via HMR. The old compiled CSS chunk continues to be served.

**Why:** Turbopack watches files for changes via inotify/kqueue. A programmatic `Write` sometimes doesn't trigger the watcher if the mtime update doesn't propagate immediately.

**How to apply:** After writing `globals.css` (or any CSS file), always run:

```sh
touch app/globals.css
```

This updates the mtime and reliably triggers Turbopack to reprocess the file. The compiled chunk will grow to reflect the new content; a browser hard-refresh then picks it up.

**Symptom:** Body background is the old value (`rgb(10,10,10)` from the starter), `fontFamily` is `Arial`, `.nav` is `position: static` — all signs the old CSS is still in use.
