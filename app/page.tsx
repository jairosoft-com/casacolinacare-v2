'use client';

import { useState, useEffect, useRef } from 'react';

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

export default function Page() {
  const [activeQ, setActiveQ] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);
  const activeQRef = useRef(0);

  function goToQuote(i: number) {
    setQuoteVisible(false);
    setTimeout(() => {
      setActiveQ(i);
      activeQRef.current = i;
      setQuoteVisible(true);
    }, 350);
  }

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    if (id.length > 1) {
      const el = document.getElementById(id.replace('#', ''));
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      }
    }
  }

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
          });
        },
        { threshold: 0.05 }
      );
      revealEls.forEach((el) => io.observe(el));
      requestAnimationFrame(() => {
        revealEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
        });
      });
      setTimeout(() => {
        const anyHidden = Array.from(revealEls).some((el) => !el.classList.contains('in'));
        if (anyHidden && window.scrollY < 50) {
          revealEls.forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.top < window.innerHeight + 200) el.classList.add('in');
          });
        }
      }, 1500);
      return () => io.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add('in'));
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      goToQuote((activeQRef.current + 1) % quotes.length);
    }, 7500);
    return () => clearInterval(id);
  }, []);

  return (
    <div>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            Casa Colina
            <small>CARE · EST. 2026</small>
          </div>
          <div className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#story" onClick={(e) => handleAnchorClick(e, '#story')}>About</a>
            <a href="#care" onClick={(e) => handleAnchorClick(e, '#care')}>Care</a>
            <a href="#place" onClick={(e) => handleAnchorClick(e, '#place')}>The Home</a>
            <a href="#visit" onClick={(e) => handleAnchorClick(e, '#visit')}>Visit</a>
          </div>
          <div className="nav-cta">
            <span className="phone">+1 (808) 200-1840</span>
            <a href="#visit" className="btn btn-primary" onClick={(e) => handleAnchorClick(e, '#visit')}>
              Request a visit <span className="arr">→</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div
          className="hero-img"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=2400&q=80&auto=format&fit=crop')" }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-tag">
          <span className="dot"></span> A care home in Hawaiʻi Kai
        </div>
        <div className="hero-content">
          <h1>A place where mom <br />can feel <span className="i">at home.</span></h1>
          <div className="hero-meta">
            <p>Six residents. One kitchen. Caregivers who know every name, every preference, and the story behind each one.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#visit" className="btn btn-accent" onClick={(e) => handleAnchorClick(e, '#visit')}>
                Request a consultation <span className="arr">→</span>
              </a>
              <a
                href="#story"
                className="btn btn-ghost"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}
                onClick={(e) => handleAnchorClick(e, '#story')}
              >
                Read our story
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      {/* TRUST STRIP */}
      <div className="strip">
        <div className="strip-track">
          <span>
            Licensed ARCH II <span className="glyph">·</span> Family-owned since 2019 <span className="glyph">·</span> 1:3 staff ratio <span className="glyph">·</span> Six residents, max <span className="glyph">·</span> Hawaiʻi Kai · Honolulu <span className="glyph">·</span> Now accepting families · spring 2026 <span className="glyph">·</span>
          </span>
          <span>
            Licensed ARCH II <span className="glyph">·</span> Family-owned since 2019 <span className="glyph">·</span> 1:3 staff ratio <span className="glyph">·</span> Six residents, max <span className="glyph">·</span> Hawaiʻi Kai · Honolulu <span className="glyph">·</span> Now accepting families · spring 2026 <span className="glyph">·</span>
          </span>
        </div>
      </div>

      {/* ESSAY / WELCOME */}
      <section className="section" id="story">
        <div className="wrap">
          <div className="essay">
            <div className="essay-meta reveal">
              <div className="eyebrow accent">A letter from our home</div>
              <div
                className="essay-img"
                style={{ backgroundImage: "url('/assets/caregiver-resident.png')" }}
              ></div>
            </div>
            <div className="reveal">
              <h2>We opened Casa Colina because aloha shouldn&apos;t end at a <span className="i">hospital door.</span></h2>
              <div className="essay-body">
                <p className="drop">My grandmother spent her last years in a place that felt like a waiting room. Fluorescent lights, shift changes, a TV nobody watched. I made a promise that day — if I ever cared for someone&apos;s kupuna, it would be different.</p>
                <p>Casa Colina is a six-bed home, not a facility. We cook real meals. We sit on the lanai. We call families by their first names and we mean it.</p>
                <p>If that sounds like what your mother, father, or spouse deserves — come visit. We&apos;ll put water on for tea.</p>
              </div>
              <div className="essay-sig">
                <div style={{
                  width: '56px', height: '56px', borderRadius: '999px',
                  background: 'var(--terracotta)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
                  fontSize: '30px', lineHeight: '1', letterSpacing: '-0.02em',
                }}>K</div>
                <div>
                  <div className="essay-sig-name">Kriss</div>
                  <div className="essay-sig-meta">Owner &amp; Director · ARCH-licensed administrator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars" id="care">
        <div className="wrap">
          <div className="pillars-head reveal">
            <h2>Four commitments,<br />held <span className="i">daily.</span></h2>
            <p>How we care isn&apos;t a slogan. It&apos;s the rhythm of every day at Casa Colina — the small things, repeated, until they become the home.</p>
          </div>
          <div className="pillar-grid">
            <div className="pillar reveal">
              <div className="num">i.</div>
              <h3>Personal plans</h3>
              <p>A care plan built for her — not a room number. Updated as needs change, with family at the table.</p>
              <div className="more">Read about care →</div>
            </div>
            <div className="pillar reveal">
              <div className="num">ii.</div>
              <h3>24/7 presence</h3>
              <p>Awake staff, always. A 1:3 caregiver ratio, day and night, with an on-call RN.</p>
              <div className="more">Meet the team →</div>
            </div>
            <div className="pillar reveal">
              <div className="num">iii.</div>
              <h3>Real food</h3>
              <p>Home-cooked meals, shaped by her tastes. Lemon-ginger tea on the lanai if she&apos;d like it.</p>
              <div className="more">A day at the home →</div>
            </div>
            <div className="pillar reveal">
              <div className="num">iv.</div>
              <h3>Quiet grounds</h3>
              <p>Tropical, tended, and close to family. Trade winds through the lanai most afternoons.</p>
              <div className="more">See the home →</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLACE / MOSAIC */}
      <section className="place" id="place">
        <div className="wrap">
          <div className="place-head reveal">
            <div className="eyebrow accent">The home</div>
            <h2>Six bedrooms. One real kitchen.<br />Koko Head from the <span className="i">back lawn.</span></h2>
          </div>
          <div className="mosaic reveal">
            <div
              className="mosaic-img"
              style={{ gridColumn: '1/8', gridRow: '1/4', backgroundImage: "url('/assets/home-kokohead.jpg')" }}
            >
              <div className="mosaic-cap">Koko Head, from the lawn</div>
            </div>
            <div
              className="mosaic-img"
              style={{ gridColumn: '8/13', gridRow: '1/3', backgroundImage: "url('/assets/home-living-room-wide.jpg')" }}
            >
              <div className="mosaic-cap">The living room, garden side</div>
            </div>
            <div
              className="mosaic-img"
              style={{ gridColumn: '8/13', gridRow: '3/5', backgroundImage: "url('/assets/home-kitchen-island.jpg')" }}
            >
              <div className="mosaic-cap">The kitchen at midday</div>
            </div>
            <div
              className="mosaic-img"
              style={{ gridColumn: '1/5', gridRow: '4/6', backgroundImage: "url('/assets/home-lanai-chairs.jpg')" }}
            >
              <div className="mosaic-cap">The lanai, afternoon shade</div>
            </div>
            <div
              className="mosaic-img"
              style={{ gridColumn: '5/9', gridRow: '4/6', backgroundImage: "url('/assets/home-bathroom-modern.jpg')" }}
            >
              <div className="mosaic-cap">Walk-in shower, every room</div>
            </div>
            <div
              className="mosaic-img"
              style={{ gridColumn: '9/13', gridRow: '5/6', backgroundImage: "url('/assets/home-dog-portrait.jpg')" }}
            >
              <div className="mosaic-cap">Our resident-in-chief</div>
            </div>
          </div>
          <div style={{
            marginTop: '48px', display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', borderTop: '1px solid var(--rule)', paddingTop: '32px',
          }}>
            <p style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: '22px', fontStyle: 'italic', color: 'var(--ink-2)' }}>
              Photos can only say so much.
            </p>
            <a href="#visit" className="btn btn-quiet" onClick={(e) => handleAnchorClick(e, '#visit')}>
              Schedule a private visit <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
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

      {/* CARE LEVELS */}
      <section className="care">
        <div className="wrap">
          <div className="care-head reveal">
            <div>
              <div className="eyebrow accent" style={{ marginBottom: '18px' }}>How we care</div>
              <h2>Four kinds of care.<br />One kind of <span className="i">presence.</span></h2>
            </div>
            <p style={{ color: 'var(--ink-2)', maxWidth: '440px', fontSize: '15.5px', lineHeight: '1.6', paddingBottom: '14px' }}>
              From assisted living through end-of-life comfort — the same kindness, the same people. We don&apos;t transfer care between buildings; we adapt around the resident.
            </p>
          </div>
          <div className="care-list reveal">
            <div className="care-row">
              <div className="num">i.</div>
              <h3>Assisted Living</h3>
              <p>Help with daily living, bathing, medication, and meals — while preserving as much independence as possible.</p>
              <div className="arrow">→</div>
            </div>
            <div className="care-row">
              <div className="num">ii.</div>
              <h3>Memory Care</h3>
              <p>A quiet, structured environment for kupuna living with dementia or Alzheimer&apos;s. Familiar routines, patient caregivers, secure surroundings.</p>
              <div className="arrow">→</div>
            </div>
            <div className="care-row">
              <div className="num">iii.</div>
              <h3>Respite &amp; Short-Stay</h3>
              <p>Short-term stays — from a weekend to a few weeks — so family caregivers can rest, travel, or recover.</p>
              <div className="arrow">→</div>
            </div>
            <div className="care-row">
              <div className="num">iv.</div>
              <h3>End-of-Life Comfort</h3>
              <p>Gentle, loving care in familiar surroundings, in partnership with your hospice provider of choice.</p>
              <div className="arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="credentials">
        <div className="wrap">
          <div
            className="reveal"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '36px' }}
          >
            <div>
              <div className="eyebrow accent" style={{ marginBottom: '14px' }}>Credentials &amp; accreditations</div>
              <h2 className="serif" style={{ fontWeight: 300, fontSize: '36px', lineHeight: '1.05', letterSpacing: '-0.015em' }}>
                Licensed. Inspected. Accountable.
              </h2>
            </div>
            <a href="#" className="btn btn-quiet">View all documents <span className="arr">→</span></a>
          </div>
          <div className="cred-grid reveal">
            <div className="cred">
              <div className="seal">★</div>
              <h4>State Licensed ARCH II</h4>
              <p>License #HI-01840 · renewed annually</p>
            </div>
            <div className="cred">
              <div className="seal">✓</div>
              <h4>DOH Inspected</h4>
              <p>March 2025 · no deficiencies</p>
            </div>
            <div className="cred">
              <div className="seal">✦</div>
              <h4>Memory Care Certified</h4>
              <p>Dementia-trained caregivers</p>
            </div>
            <div className="cred">
              <div className="seal">+</div>
              <h4>CPR &amp; First Aid</h4>
              <p>All staff, current</p>
            </div>
            <div className="cred">
              <div className="seal">●</div>
              <h4>Background Checks</h4>
              <p>Every staff member, annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT / CTA */}
      <section className="visit" id="visit">
        <div className="wrap">
          <div className="visit-inner">
            <div className="reveal">
              <div className="eyebrow accent" style={{ marginBottom: '20px' }}>Come see the home</div>
              <h2>Tours are private,<br />one family <span className="i">at a time.</span></h2>
              <p>We&apos;ll walk you through the home, introduce you to the team, and answer everything. No hard sell. No fluorescent lights. Just a real conversation about your family.</p>
              <div className="visit-actions">
                <a href="#" className="btn btn-accent">Request a consultation <span className="arr">→</span></a>
                <a href="#" className="btn btn-ghost">Schedule a visit</a>
              </div>
            </div>
            <div className="visit-card reveal">
              <div>
                <div className="label">Speak directly with Kriss</div>
                <div className="phone">+1 808 200 1840</div>
                <div className="email">kriss@casacolinacare.com</div>
              </div>
              <div className="addr">
                189 Anapalau Street<br />
                Hawaiʻi Kai · Honolulu, HI 96825
              </div>
              <div className="hours">
                <span>Mon–Sat · 8a–7p</span>
                <span>Urgent: same number, anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div>
            <div className="brand">Casa Colina</div>
            <p className="tag">A family-style care home in Hawaiʻi Kai. Six residents. Real aloha. Open since 2019.</p>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Care</li>
              <li>The home</li>
            </ul>
          </div>
          <div>
            <h4>Learn</h4>
            <ul>
              <li>FAQ</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>For referrers</li>
            </ul>
          </div>
          <div>
            <h4>Speak with us</h4>
            <ul>
              <li>+1 808 200 1840</li>
              <li>kriss@casacolinacare.com</li>
              <li>189 Anapalau Street</li>
              <li>Hawaiʻi Kai · 96825</li>
            </ul>
          </div>
        </div>
        <div className="wrap legal" style={{ display: 'flex', border: '0', paddingTop: '28px', paddingBottom: 0 }}>
          <div>© 2026 Casa Colina Care LLC · All rights reserved</div>
          <div>Licensed ARCH Hawaiʻi Type II · Privacy · Accessibility</div>
        </div>
      </footer>

    </div>
  );
}
