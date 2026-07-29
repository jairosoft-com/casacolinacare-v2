'use client';

import { useEffect, useState } from 'react';
import SmoothLink from './SmoothLink';

const LINKS = [
  { href: '#', sectionId: 'top', label: 'Home' },
  { href: '#story', sectionId: 'story', label: 'About' },
  { href: '#care', sectionId: 'care', label: 'Care' },
  { href: '#place', sectionId: 'place', label: 'The Home' },
  { href: '#visit', sectionId: 'visit', label: 'Visit' },
];

export default function NavLinks() {
  const [activeSectionId, setActiveSectionId] = useState('top');

  useEffect(() => {
    const sections = LINKS
      .map(({ sectionId }) => document.getElementById(sectionId))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-links">
      {LINKS.map(({ href, sectionId, label }) => (
        <SmoothLink
          key={sectionId}
          href={href}
          className={activeSectionId === sectionId ? 'active' : undefined}
        >
          {label}
        </SmoothLink>
      ))}
    </div>
  );
}
