import Image from 'next/image';
import SmoothLink from '@/app/components/SmoothLink';
import TestimonialSection from '@/app/components/TestimonialSection';

export default function Page() {
  return (
    <div>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />
          <div className="nav-brand">
            Casa Colina Care
            <small>EST. 2026</small>
          </div>
          <div className="nav-links">
            <a href="#" className="active">Home</a>
            <SmoothLink href="#story">About</SmoothLink>
            <SmoothLink href="#care">Care</SmoothLink>
            <SmoothLink href="#place">The Home</SmoothLink>
            <SmoothLink href="#visit">Visit</SmoothLink>
          </div>
          <div className="nav-cta">
            <span className="phone">+1 (808) 444-1168</span>
            <SmoothLink href="#visit" className="btn btn-primary">
              Request a visit <span className="arr">→</span>
            </SmoothLink>
          </div>
          <label htmlFor="nav-toggle" className="nav-toggle-btn" aria-label="Menu">
            <span></span><span></span><span></span>
          </label>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-img">
          <Image
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=2400&q=80&auto=format&fit=crop"
            alt=""
            fill
            preload
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-tag">
          <span className="dot"></span> A care home in Hawaii Kai
        </div>
        <div className="hero-content">
          <h1>A place where mom <br />and dad can feel <br /><span className="i">at home.</span></h1>
          <div className="hero-meta">
            <p>Five residents. One kitchen. Caregivers who know every name, every preference, and the story behind each one.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <SmoothLink href="#visit" className="btn btn-accent">
                Request a consultation <span className="arr">→</span>
              </SmoothLink>
              <SmoothLink
                href="#story"
                className="btn btn-ghost"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}
              >
                Read our story
              </SmoothLink>
            </div>
          </div>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      {/* TRUST STRIP */}
      <div className="strip">
        <div className="strip-track">
          <span>
            Licensed ARCH I <span className="glyph">·</span> Registered Nurse Owned since 2022 <span className="glyph">·</span> 1:3 staff ratio <span className="glyph">·</span> Five residents, max <span className="glyph">·</span> Hawaii Kai · Honolulu <span className="glyph">·</span> Now accepting families · spring 2026 <span className="glyph">·</span>
          </span>
          <span>
            Licensed ARCH I <span className="glyph">·</span> Registered Nurse Owned since 2022 <span className="glyph">·</span> 1:3 staff ratio <span className="glyph">·</span> Five residents, max <span className="glyph">·</span> Hawaii Kai · Honolulu <span className="glyph">·</span> Now accepting families · spring 2026 <span className="glyph">·</span>
          </span>
        </div>
      </div>

      {/* ESSAY / WELCOME */}
      <section className="section" id="story">
        <div className="wrap">
          <div className="essay">
            <div className="essay-meta reveal">
              <div className="eyebrow accent">A letter from our home</div>
              <div className="essay-img">
                <Image
                  src="/assets/kriss-homepage-new2.png"
                  alt="Kriss, RN, owner and director of Casa Colina Care"
                  fill
                  sizes="(min-width: 1320px) 473px, 42vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
            <div className="reveal">
              <h2>We opened Casa Colina Care because aloha shouldn&apos;t end at a <span className="i">hospital door.</span></h2>
              <div className="essay-body">
                <p className="drop">My grandmother spent her last years in a place that felt like a waiting room. Fluorescent lights, shift changes, a TV nobody watched. I made a promise that day — if I ever cared for someone&apos;s kupuna, it would be different.</p>
                <p>Casa Colina Care is a five-bed home, not a facility. We cook real meals. We sit on the front lawn, go for a walk. We call families by their first names and we mean it.</p>
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
                  <div className="essay-sig-name">Kriss, RN</div>
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
            <p>How we care isn&apos;t a slogan. It&apos;s the rhythm of every day at Casa Colina Care — the small things, repeated, until they become the home.</p>
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
            <h2>Five bed home. One real kitchen.<br />Koko Head from the <span className="i">front lawn.</span></h2>
          </div>
          <div className="mosaic reveal">
            <div className="mosaic-img mosaic-img-1">
              <Image
                src="/assets/home-kokohead.jpg"
                alt="Koko Head crater seen from the home's back lawn"
                fill
                sizes="(min-width: 1320px) 708px, 58vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="mosaic-cap">Koko Head, from the lawn</div>
            </div>
            <div className="mosaic-img mosaic-img-2">
              <Image
                src="/assets/home-living-room-wide.jpg"
                alt="The living room, looking out to the garden"
                fill
                sizes="(min-width: 1320px) 502px, 42vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="mosaic-cap">The living room, garden side</div>
            </div>
            <div className="mosaic-img mosaic-img-3">
              <Image
                src="/assets/home-kitchen-island.jpg"
                alt="The kitchen island at midday"
                fill
                sizes="(min-width: 1320px) 502px, 42vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="mosaic-cap">The kitchen at midday</div>
            </div>
            <div className="mosaic-img mosaic-img-4">
              <Image
                src="/assets/home-lanai-chairs.jpg"
                alt="Chairs on the lanai in afternoon shade"
                fill
                sizes="(min-width: 1320px) 399px, 33vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="mosaic-cap">The lanai, afternoon shade</div>
            </div>
            <div className="mosaic-img mosaic-img-5">
              <Image
                src="/assets/home-bathroom-modern.jpg"
                alt="Walk-in shower in a resident bathroom"
                fill
                sizes="(min-width: 1320px) 399px, 33vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="mosaic-cap">Walk-in shower, every room</div>
            </div>
            <div className="mosaic-img mosaic-img-6">
              <Image
                src="/assets/home-dog-portrait.jpg"
                alt="The home's resident dog"
                fill
                sizes="(min-width: 1320px) 399px, 33vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
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
            <SmoothLink href="#visit" className="btn btn-quiet">
              Schedule a private visit <span className="arr">→</span>
            </SmoothLink>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <TestimonialSection />

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
              <h3>Special Diet Certified</h3>
              <p>Provide therapeutic or texture-modified diets. The PCP (Primary Care Physician) maintains signed orders, posts menus a month in advance, and strictly documents any food substitutions.</p>
              <div className="arrow">→</div>
            </div>
            <div className="care-row">
              <div className="num">iii.</div>
              <h3>Respite &amp; Short-Stay</h3>
              <p>Short-term stays with a minimum stay of two weeks — so family caregivers can rest, travel, or recover.</p>
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
              <h4>State Licensed ARCH I</h4>
              <p>License OHCA #1808-C · Reviewed and renewed by Hawaii Dept. of Health (OHCA), annually</p>
            </div>
            <div className="cred">
              <div className="seal">✓</div>
              <h4>DOH Inspected</h4>
              <p>March 2026 · no deficiencies</p>
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
                <div className="phone">+1 808 444 1168</div>
                <div className="email">kriss@casacolinacare.com</div>
              </div>
              <div className="addr">
                189 Anapalau Street<br />
                Honolulu, HI 96825
              </div>
              <div className="hours">
                <span>Mon–Sat · 8:00 AM – 7:00 PM</span>
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
            <div className="brand">Casa Colina Care</div>
            <p className="tag">A family-style care home in Hawaii Kai. Five residents. Real aloha. Open since 2026.</p>
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
              <li>+1 808 444 1168</li>
              <li>kriss@casacolinacare.com</li>
              <li>189 Anapalau Street</li>
              <li>Honolulu · 96825</li>
            </ul>
          </div>
        </div>
        <div className="wrap legal" style={{ display: 'flex', border: '0', paddingTop: '28px', paddingBottom: 0 }}>
          <div>© 2026 Casa Colina Care LLC · All rights reserved</div>
          <div>Licensed ARCH Hawaii Type I · Privacy · Accessibility</div>
        </div>
      </footer>

    </div>
  );
}
