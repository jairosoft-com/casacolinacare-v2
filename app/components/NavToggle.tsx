'use client';

import { useState } from 'react';

export default function NavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle-input"
        checked={open}
        onChange={() => setOpen((o) => !o)}
        aria-hidden="true"
        tabIndex={-1}
      />
      <button
        type="button"
        className="nav-toggle-btn"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span></span><span></span><span></span>
      </button>
    </>
  );
}
