'use client';

import type { CSSProperties, MouseEvent, ReactNode } from 'react';

type SmoothLinkProps = {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function SmoothLink({ href, className, style, children }: SmoothLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (href.length > 1) {
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
        history.pushState(null, '', href);
      }
    }
  }

  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
}
