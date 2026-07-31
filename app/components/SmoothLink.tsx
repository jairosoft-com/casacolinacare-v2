'use client';

import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import { trackEvent } from '@/app/lib/gtag';

type SmoothLinkProps = {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  trackEvent?: { name: string; params?: Record<string, unknown> };
};

export default function SmoothLink({ href, className, style, children, trackEvent: trackEventProp }: SmoothLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (trackEventProp) trackEvent(trackEventProp.name, trackEventProp.params);
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
