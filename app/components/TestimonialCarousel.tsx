'use client';

import { useEffect, useState } from 'react';

const quotes = [
  [
    "The staff treats every resident like family. Mom stopped asking when we were going home — because this became home.",
    "M. Tanaka · daughter of resident, Kaimuki",
  ],
  [
    "Kriss called me every evening for the first week, just to tell me how Dad was doing. I never had to ask.",
    "J. Reyes · son of resident, Kailua",
  ],
  [
    "She picked up the phone at eleven at night when my mother fell. She talked me through it for forty-five minutes.",
    "S. Wong · daughter of resident, Mānoa",
  ],
  [
    "My father is himself again here. He laughs. He sings. We hadn't heard him sing in two years.",
    "A. Kekoa · daughter of resident, Hawai'i Kai",
  ],
] as const;

export default function TestimonialCarousel() {
  const [activeQ, setActiveQ] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);

  function fadeTo(update: (prev: number) => number) {
    setQuoteVisible(false);
    setTimeout(() => {
      setActiveQ(update);
      setQuoteVisible(true);
    }, 350);
  }

  function goToQuote(i: number) {
    fadeTo(() => i);
  }

  useEffect(() => {
    const id = setInterval(() => {
      fadeTo((prev) => (prev + 1) % quotes.length);
    }, 7500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="testimonial">
      <div className="testimonial-inner reveal">
        <div className="eyebrow" style={{ color: 'rgba(245,240,230,0.5)', marginBottom: '32px' }}>From the families</div>
        <blockquote style={{ opacity: quoteVisible ? 1 : 0, transition: 'opacity .35s ease' }}>
          {quotes[activeQ][0]}
        </blockquote>
        <cite style={{ opacity: quoteVisible ? 1 : 0, transition: 'opacity .35s ease' }}>
          {quotes[activeQ][1]}
        </cite>
        <div className="testi-nav">
          {quotes.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${activeQ === i ? ' active' : ''}`}
              aria-label={`Quote ${i + 1}`}
              onClick={() => goToQuote(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
