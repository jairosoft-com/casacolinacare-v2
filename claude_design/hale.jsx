/* Direction 2 — "Hale": warm, homey, photo-led story.
   Softer shapes, testimonials throughout, warmer paper feel.
   Larger photos. More color. Approachable, not clinical.
*/

const HALE_WARM = "#f5ede0";
const HALE_ACCENT = "#b65d3c";
const HALE_INK = "#2a231c";

function HaleNav({ active }) {
  const pages = ["Home", "About", "Care", "Gallery", "Team", "FAQ", "Contact"];
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center", padding: "20px 48px",
      background: HALE_WARM, borderBottom: "1px solid #e3d9c7"
    }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 22, letterSpacing: "-0.01em", color: HALE_INK }}>
        casa colina <span style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>care</span>
      </div>
      <div style={{ display: "flex", gap: 26 }}>
        {pages.map(p => (
          <span key={p} style={{
            fontSize: 12.5, color: p === active ? HALE_INK : "#6b5d4d",
            fontWeight: p === active ? 600 : 400,
            borderBottom: p === active ? "1px solid var(--accent)" : "none", paddingBottom: 2
          }}>{p}</span>
        ))}
      </div>
      <div style={{ justifySelf: "end", display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{ fontSize: 12, color: HALE_INK }}>📞 (808) 200-1840</div>
        <div className="btn accent" style={{ borderRadius: 999 }}>Say hello</div>
      </div>
    </div>
  );
}

function HaleFoot() {
  return (
    <div style={{ background: HALE_INK, color: "#e9dfd0", padding: "56px 48px 28px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.3fr", gap: 32, marginBottom: 40 }}>
        <div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 30, color: "#fff" }}>casa colina</div>
          <div style={{ marginTop: 12, fontSize: 12, color: "#c9bda8", maxWidth: 280, lineHeight: 1.6 }}>
            A family-style care home in Hawai‘i Kai. Six residents. Real aloha. Open since 2019.
          </div>
        </div>
        <div className="col gap-8">
          <div className="kicker" style={{ color: "#c9bda8", fontSize: 9 }}>The home</div>
          <div style={{ fontSize: 12 }}>Our story</div>
          <div style={{ fontSize: 12 }}>The team</div>
          <div style={{ fontSize: 12 }}>Gallery</div>
        </div>
        <div className="col gap-8">
          <div className="kicker" style={{ color: "#c9bda8", fontSize: 9 }}>Care</div>
          <div style={{ fontSize: 12 }}>Services</div>
          <div style={{ fontSize: 12 }}>Pricing</div>
          <div style={{ fontSize: 12 }}>FAQ</div>
        </div>
        <div className="col gap-8">
          <div className="kicker" style={{ color: "#c9bda8", fontSize: 9 }}>Visit</div>
          <div style={{ fontSize: 12 }}>189 Anapalau Street</div>
          <div style={{ fontSize: 12 }}>Hawai‘i Kai · 96825</div>
          <div style={{ fontSize: 12 }}>(808) 200-1840</div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #4a3d30", paddingTop: 18, fontSize: 10.5, color: "#968773", display: "flex", justifyContent: "space-between" }}>
        <div>© 2026 Casa Colina Care LLC · Licensed ARCH Hawai‘i Type II</div>
        <div>Made with aloha</div>
      </div>
    </div>
  );
}

/* ───────────── HALE · HOME ───────────── */
function HaleHome() {
  return (
    <div className="wf wf-page" style={{ background: HALE_WARM }}>
      <HaleNav active="Home" />

      {/* Hero — full-bleed photo w/ warm overlay */}
      <div style={{ position: "relative", height: 680 }}>
        <div className="ph" style={{ position: "absolute", inset: 0, border: "none" }}>
          <span>HERO · golden-hour lanai, family at a table · full-bleed</span>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(42,35,28,0) 40%, rgba(42,35,28,0.55) 100%)" }} />
        <div style={{ position: "absolute", top: 40, left: 48, right: 48, display: "flex", justifyContent: "space-between" }}>
          <div className="pill"><div className="dot" /> accepting new residents · spring 2026</div>
          <div className="pill">6 beds · 1 home</div>
        </div>
        <div style={{ position: "absolute", bottom: 48, left: 48, right: 48, color: "#fff", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40, alignItems: "end" }}>
          <div>
            <div className="display" style={{ fontSize: 76, color: "#fff", maxWidth: 780 }}>
              Where <span className="i" style={{ color: "#f5ede0" }}>aloha</span> is the care plan.
            </div>
            <div style={{ marginTop: 16, fontSize: 15, color: "#e9dfd0", maxWidth: 480, lineHeight: 1.55 }}>
              A warm, family-style care home in Hawai‘i Kai. Your loved one, treated like ours.
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
            <div className="btn accent" style={{ borderRadius: 999, padding: "14px 24px" }}>Request a visit →</div>
          </div>
        </div>
        <div style={{ position: "absolute", right: -8, top: 180, transform: "rotate(6deg)" }}>
          <div className="ann" style={{ background: "var(--white)", padding: "8px 14px", border: "1px solid var(--rule)", boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}>
            ← one big photo. let the<br/>home do the talking.
          </div>
        </div>
      </div>

      {/* Promise strip (warm, on paper) */}
      <div style={{ padding: "56px 48px", background: HALE_WARM }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {[
            ["🏡", "6 residents, max", "Small on purpose"],
            ["🌿", "0.4 acre lanai", "Tropical grounds"],
            ["🕊", "24/7 awake staff", "Day & night"],
            ["🍚", "Home-cooked meals", "Local, fresh"],
          ].map(([e, t, s]) => (
            <div key={t} style={{ padding: "20px 22px", background: "#fff", borderRadius: 6, border: "1px solid #e3d9c7" }}>
              <div style={{ fontSize: 22 }}>{e}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 20, marginTop: 8 }}>{t}</div>
              <div style={{ fontSize: 11.5, color: "#7a6e5c", marginTop: 4 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story — photo-led */}
      <div style={{ padding: "100px 48px", background: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div className="ph" style={{ height: 460, borderRadius: 8 }}><span>KRISS · working in kitchen</span></div>
            <div className="ph" style={{ position: "absolute", right: -24, bottom: -24, width: 180, height: 220, borderRadius: 8, border: "6px solid #fff" }}>
              <span>mother & daughter</span>
            </div>
          </div>
          <div>
            <div className="kicker" style={{ color: HALE_ACCENT }}>Our story</div>
            <div className="display" style={{ fontSize: 42, marginTop: 12 }}>
              This started with<br/>my grandmother.
            </div>
            <div style={{ marginTop: 20, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7 }}>
              I watched her spend her last years somewhere that felt like a waiting room. I couldn't change it for her — but I could build something different for the next family.
            </div>
            <div style={{ marginTop: 12, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7 }}>
              Casa Colina is six bedrooms, one kitchen, and a lanai that catches the trade winds. It's small because care can't be scaled.
            </div>
            <div style={{ marginTop: 24, display: "flex", gap: 12, alignItems: "center" }}>
              <div className="blk" style={{ width: 48, height: 48, borderRadius: 999 }} />
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontStyle: "italic" }}>Kriss</div>
                <div className="kicker" style={{ fontSize: 9 }}>Founder · Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services — warm cards */}
      <div style={{ padding: "100px 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 40 }}>
          <div>
            <div className="kicker" style={{ color: HALE_ACCENT }}>How we care</div>
            <div className="display" style={{ fontSize: 42, marginTop: 10 }}>Four ways. One promise.</div>
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-2)", maxWidth: 320 }}>
            From assisted living to end-of-life comfort — the same kindness, the same people.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {[
            ["Assisted Living", "Help with dressing, bathing, meds — while keeping independence where it matters."],
            ["Memory Care", "A quiet, structured home for those living with dementia."],
            ["Respite Stays", "Short stays so family caregivers can rest."],
            ["End-of-Life Comfort", "Gentle care, in partnership with hospice."],
          ].map(([t, d]) => (
            <div key={t} style={{ background: "#fff", border: "1px solid #e3d9c7", borderRadius: 8, padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="ph" style={{ height: 120, borderRadius: 6 }}><span>icon</span></div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22 }}>{t}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{d}</div>
              <div style={{ fontSize: 11.5, color: HALE_ACCENT, marginTop: 4 }}>Learn more →</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial carousel feel */}
      <div style={{ padding: "100px 48px", background: "#fff" }}>
        <div className="kicker" style={{ color: HALE_ACCENT, marginBottom: 12 }}>What families say</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {[
            ["Mom stopped asking when we were going home. This became home.", "— M. Tanaka, Kaimuki"],
            ["Kriss sent me a photo of Dad on the lanai with his coffee. It made my whole week.", "— J. Reyes, Kailua"],
            ["My father laughs here. That's all I needed to know.", "— A. Kekoa, Hawai‘i Kai"],
          ].map(([q, a], i) => (
            <div key={i} style={{ background: HALE_WARM, border: "1px solid #e3d9c7", borderRadius: 8, padding: 28 }}>
              <div style={{ fontSize: 24, color: HALE_ACCENT, fontFamily: "var(--serif)", marginBottom: 8 }}>"</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontStyle: "italic", lineHeight: 1.35 }}>{q}</div>
              <div className="kicker" style={{ fontSize: 9.5, marginTop: 16 }}>{a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div style={{ padding: "100px 48px", background: HALE_INK, color: "#fff", textAlign: "center" }}>
        <div className="kicker" style={{ color: "#c9bda8" }}>Come visit</div>
        <div className="display" style={{ fontSize: 52, color: "#fff", marginTop: 16, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          Put the kettle on,<br/>let's talk about your <span className="i" style={{ color: "#f5ede0" }}>mom</span>.
        </div>
        <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center" }}>
          <div className="btn accent" style={{ borderRadius: 999, padding: "14px 28px" }}>Request a consultation</div>
          <div className="btn alt" style={{ color: "#fff", borderColor: "#c9bda8", borderRadius: 999, padding: "14px 28px" }}>Call (808) 200-1840</div>
        </div>
      </div>

      <HaleFoot />
    </div>
  );
}

/* ───────────── HALE · ABOUT ───────────── */
function HaleAbout() {
  return (
    <div className="wf wf-page" style={{ background: HALE_WARM }}>
      <HaleNav active="About" />
      <div style={{ padding: "80px 48px 40px", textAlign: "center" }}>
        <div className="kicker" style={{ color: HALE_ACCENT }}>Our story</div>
        <div className="display" style={{ fontSize: 64, marginTop: 16, maxWidth: 820, margin: "16px auto 0" }}>
          A home built on one simple belief.
        </div>
      </div>

      <div style={{ padding: "40px 48px 80px" }}>
        <div className="ph" style={{ height: 520, borderRadius: 8 }}><span>HOUSE EXTERIOR · Hawai‘i Kai, wide</span></div>
      </div>

      {/* Narrative w/ pullquote */}
      <div style={{ padding: "80px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-2)" }}>
            <p>In 2019, Kriss opened the doors of a six-bedroom house on Anapalau Street, set against the hills of Hawai‘i Kai. It wasn't a facility. It didn't want to be.</p>
            <div style={{ padding: "28px 0", margin: "28px 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", fontFamily: "var(--serif)", fontSize: 30, fontStyle: "italic", color: HALE_INK, lineHeight: 1.3 }}>
              "Care can't be scaled. Every name matters. Every meal matters."
            </div>
            <p>Seven years on, Casa Colina still looks like a home because it is one. We cook, we garden, we sit with residents when the day is hard. We've grown, but never past six beds.</p>
          </div>
        </div>
      </div>

      {/* Values grid */}
      <div style={{ padding: "100px 48px" }}>
        <div className="kicker" style={{ color: HALE_ACCENT, marginBottom: 8 }}>What we stand for</div>
        <div className="display" style={{ fontSize: 40, marginBottom: 32 }}>Five values, held daily.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
          {[
            ["Aloha", "Warmth first, always."],
            ["Dignity", "Adults, not patients."],
            ["Presence", "Showing up, fully."],
            ["Honesty", "Hard truths, gently."],
            ["‘Ohana", "Family, by care."],
          ].map(([t, d]) => (
            <div key={t} style={{ background: "#fff", padding: 24, borderRadius: 8, border: "1px solid #e3d9c7" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 24 }}>{t}</div>
              <div style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 8, lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials row */}
      <div style={{ padding: "60px 48px 100px", background: "#fff" }}>
        <div className="kicker" style={{ color: HALE_ACCENT, marginBottom: 20 }}>Licensed & accredited</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 }}>
          {["ARCH Type II", "DOH Inspected", "Memory Care Trained", "CPR Certified", "Background Checks"].map(c => (
            <div key={c} style={{ padding: 20, border: "1px solid #e3d9c7", borderRadius: 6, display: "flex", alignItems: "center", gap: 12, background: HALE_WARM }}>
              <div style={{ width: 28, height: 28, borderRadius: 999, background: HALE_ACCENT, opacity: 0.2 }} />
              <div style={{ fontSize: 12 }}>{c}</div>
            </div>
          ))}
        </div>
      </div>
      <HaleFoot />
    </div>
  );
}

/* ───────────── HALE · CARE ───────────── */
function HaleCare() {
  const tiers = [
    { t: "Assisted Living", d: "Daily support while preserving the freedoms that matter.", inc: ["Meals, meds, mobility help", "Personal care plan", "Companionship", "Activities & outings"] },
    { t: "Memory Care", d: "A predictable, gentle home for those with dementia.", inc: ["Structured routines", "Trained caregivers", "Secure environment", "Family check-ins"] },
    { t: "Respite Care", d: "A soft landing while you rest, travel, or recover.", inc: ["3 nights to 4 weeks", "All amenities included", "Flexible scheduling", "Daily updates"] },
    { t: "End-of-Life Comfort", d: "Gentle care in partnership with your hospice of choice.", inc: ["24-hour comfort care", "Hospice coordination", "Family welcomed always", "Spiritual support"] },
  ];
  return (
    <div className="wf wf-page" style={{ background: HALE_WARM }}>
      <HaleNav active="Care" />
      <div style={{ padding: "80px 48px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
        <div>
          <div className="kicker" style={{ color: HALE_ACCENT }}>How we care</div>
          <div className="display" style={{ fontSize: 56, marginTop: 16 }}>Care that bends<br/>to the person.</div>
        </div>
        <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 460 }}>
          We don't offer "levels." We offer care — shaped by who your loved one is, and what they need today.
        </div>
      </div>

      <div style={{ padding: "40px 48px 80px" }}>
        {tiers.map((tier, i) => (
          <div key={tier.t} style={{ display: "grid", gridTemplateColumns: "300px 1fr 1fr", gap: 32, padding: "32px 0", borderTop: "1px solid #d8cdb9", borderBottom: i === tiers.length - 1 ? "1px solid #d8cdb9" : "none" }}>
            <div className="ph" style={{ height: 180, borderRadius: 6 }}><span>{tier.t.toLowerCase()}</span></div>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 30 }}>{tier.t}</div>
              <div style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 10, lineHeight: 1.6, maxWidth: 420 }}>{tier.d}</div>
              <div style={{ marginTop: 18, fontSize: 11.5, color: HALE_ACCENT }}>Read more →</div>
            </div>
            <div className="col gap-8">
              <div className="kicker" style={{ fontSize: 9.5 }}>Included</div>
              {tier.inc.map(x => (
                <div key={x} style={{ fontSize: 12.5, color: "var(--ink-2)", display: "flex", gap: 8 }}>
                  <span style={{ color: HALE_ACCENT }}>✓</span>{x}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* A day in the life */}
      <div style={{ padding: "80px 48px", background: "#fff" }}>
        <div className="kicker" style={{ color: HALE_ACCENT, marginBottom: 8 }}>A day at Casa Colina</div>
        <div className="display" style={{ fontSize: 40, marginBottom: 32 }}>Unhurried, by design.</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          {[
            { label: "Morning", items: [["7:00", "Morning tea on the lanai"], ["9:00", "Breakfast & medication"], ["10:30", "Walk, therapy, or rest"]] },
            { label: "Afternoon", items: [["12:30", "Lunch, family-style"], ["14:00", "Quiet / naps"], ["15:30", "Activities or visits"]] },
            { label: "Evening", items: [["18:00", "Dinner together"], ["19:30", "Music, TV, or ocean air"], ["21:00", "Wind down, evening care"]] },
          ].map(block => (
            <div key={block.label}>
              <div className="kicker" style={{ fontSize: 9.5 }}>{block.label}</div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                {block.items.map(([t, x]) => (
                  <div key={t} style={{ padding: "12px 16px", background: HALE_WARM, borderRadius: 6, display: "flex", gap: 14 }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: HALE_ACCENT, minWidth: 40 }}>{t}</div>
                    <div style={{ fontSize: 12.5, color: "var(--ink)" }}>{x}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <HaleFoot />
    </div>
  );
}

/* ───────────── HALE · GALLERY ───────────── */
function HaleGallery() {
  return (
    <div className="wf wf-page" style={{ background: HALE_WARM }}>
      <HaleNav active="Gallery" />
      <div style={{ padding: "80px 48px 32px", textAlign: "center" }}>
        <div className="kicker" style={{ color: HALE_ACCENT }}>Look around</div>
        <div className="display" style={{ fontSize: 56, marginTop: 16 }}>The home, in light.</div>
        <div style={{ marginTop: 16, fontSize: 13.5, color: "var(--ink-2)", maxWidth: 520, margin: "16px auto 0" }}>
          Real photos, taken on normal days. Come see it in person — we'll brew coffee.
        </div>
      </div>

      {/* Filter chips */}
      <div style={{ padding: "20px 48px", display: "flex", gap: 8, justifyContent: "center" }}>
        {["All", "Living spaces", "Bedrooms", "Lanai & gardens", "Kitchen", "Neighborhood"].map((c, i) => (
          <div key={c} style={{ padding: "8px 14px", borderRadius: 999, fontSize: 11.5, background: i === 0 ? HALE_INK : "#fff", color: i === 0 ? "#fff" : HALE_INK, border: "1px solid #e3d9c7" }}>{c}</div>
        ))}
      </div>

      {/* Mosaic */}
      <div style={{ padding: "32px 48px 80px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridAutoRows: "120px", gap: 12 }}>
        {[
          ["1/5", "1/3", "lanai morning"],
          ["5/9", "1/3", "living room"],
          ["9/13", "1/4", "kitchen"],
          ["1/4", "3/5", "bedroom"],
          ["4/9", "3/6", "family dinner"],
          ["9/13", "4/6", "garden"],
          ["1/5", "5/7", "detail · teapot"],
          ["5/9", "6/8", "hallway"],
          ["9/13", "6/8", "exterior dusk"],
        ].map(([col, row, lbl], i) => (
          <div key={i} className="ph" style={{ gridColumn: col, gridRow: row, borderRadius: 6 }}><span>{lbl}</span></div>
        ))}
      </div>

      <div style={{ padding: "0 48px 100px", textAlign: "center" }}>
        <div className="display" style={{ fontSize: 30, maxWidth: 560, margin: "0 auto" }}>
          Pictures only go so far.
        </div>
        <div style={{ marginTop: 20 }}>
          <div className="btn accent" style={{ borderRadius: 999, padding: "14px 26px" }}>Schedule a private visit</div>
        </div>
      </div>
      <HaleFoot />
    </div>
  );
}

/* ───────────── HALE · TEAM ───────────── */
function HaleTeam() {
  const people = [
    ["Kriss", "Owner & Director · since 2019", "Born and raised in Hawai‘i Kai. Licensed ARCH administrator. Opened Casa Colina after caring for her grandmother."],
    ["Leilani, RN", "Head Caregiver · since 2020", "Twelve years in geriatric nursing. Calm in hard moments. Makes tea for everyone."],
    ["Marco", "Evening Caregiver · since 2021", "CNA and home cook. Most weeknight dinners are his doing."],
    ["Auntie Liz", "Weekend Caregiver · since 2022", "Retired school aide. Brings her ukulele Sunday afternoons."],
    ["Dr. Nakamura", "Partnering Physician", "Primary care consultations & oversight, monthly visits on-site."],
    ["Pua", "Gardener & Handyman", "Keeps the lanai blooming and the house running."],
  ];
  return (
    <div className="wf wf-page" style={{ background: HALE_WARM }}>
      <HaleNav active="Team" />
      <div style={{ padding: "80px 48px 40px", textAlign: "center" }}>
        <div className="kicker" style={{ color: HALE_ACCENT }}>Who's here</div>
        <div className="display" style={{ fontSize: 56, marginTop: 16, maxWidth: 760, margin: "16px auto 0" }}>
          The same faces,<br/>every day.
        </div>
      </div>

      <div style={{ padding: "40px 48px 100px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {people.map(([n, r, b]) => (
          <div key={n} style={{ background: "#fff", borderRadius: 8, border: "1px solid #e3d9c7", overflow: "hidden" }}>
            <div className="ph" style={{ height: 260, borderRadius: 0 }}><span>{n}</span></div>
            <div style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 24 }}>{n}</div>
              <div className="kicker" style={{ fontSize: 9.5, marginTop: 4 }}>{r}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 12, lineHeight: 1.55 }}>{b}</div>
            </div>
          </div>
        ))}
      </div>
      <HaleFoot />
    </div>
  );
}

/* ───────────── HALE · FAQ ───────────── */
function HaleFAQ() {
  const qs = [
    ["How many residents do you have?", "Six, maximum. Always."],
    ["What is your staff-to-resident ratio?", "1:3 day and night, with an awake caregiver always on shift."],
    ["Can we visit before deciding?", "Please do. We host tours by appointment, one family at a time."],
    ["Do you accept long-term care insurance?", "Yes — we work with most insurers directly."],
    ["Can our mother bring her own furniture?", "Absolutely. Familiar belongings matter."],
    ["What happens if care needs change?", "We reassess together. For most changes we can adapt; for complex medical needs, we help coordinate."],
    ["Is the home secured for memory care?", "Yes — we have memory-care-appropriate security and trained caregivers."],
    ["What's your cancellation policy?", "30 days notice. No hidden fees."],
  ];
  return (
    <div className="wf wf-page" style={{ background: HALE_WARM }}>
      <HaleNav active="FAQ" />
      <div style={{ padding: "80px 48px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "end" }}>
        <div>
          <div className="kicker" style={{ color: HALE_ACCENT }}>Questions, answered</div>
          <div className="display" style={{ fontSize: 54, marginTop: 16 }}>Things families ask us.</div>
        </div>
        <div style={{ fontSize: 14, color: "var(--ink-2)", maxWidth: 420, lineHeight: 1.6 }}>
          Can't find what you're looking for? Call us. Kriss picks up herself most days.
        </div>
      </div>

      <div style={{ padding: "40px 48px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {qs.map(([q, a]) => (
          <div key={q} style={{ background: "#fff", borderRadius: 6, border: "1px solid #e3d9c7", padding: "22px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 19 }}>{q}</div>
              <div style={{ fontSize: 18, color: HALE_ACCENT }}>+</div>
            </div>
            <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.55, marginTop: 10 }}>{a}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: "0 48px 100px", textAlign: "center" }}>
        <div className="display" style={{ fontSize: 32, maxWidth: 560, margin: "0 auto" }}>
          Still unsure? Just call.
        </div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 40, color: HALE_ACCENT, marginTop: 12 }}>(808) 200-1840</div>
      </div>
      <HaleFoot />
    </div>
  );
}

/* ───────────── HALE · TESTIMONIALS ───────────── */
function HaleTestimonials() {
  const featured = { q: "Casa Colina didn't just care for my mother in her last year. They cared for us — every single day. We weren't clients. We were family.", a: "The Tanaka family", sub: "Mom lived at Casa Colina for 14 months · 2023-2024" };
  const more = [
    ["Mom stopped asking when we were going home.", "M. Tanaka"],
    ["Kriss called me every evening for the first week.", "J. Reyes"],
    ["My father is himself again here. He laughs.", "A. Kekoa"],
    ["The photo of Dad on the lanai with his coffee — I'll keep that forever.", "R. Chun"],
    ["They remember how she takes her tea.", "L. Silva"],
    ["After the stroke, this was the only place that felt right.", "B. Akana"],
  ];
  return (
    <div className="wf wf-page" style={{ background: HALE_WARM }}>
      <HaleNav active="Testimonials" />

      {/* Featured */}
      <div style={{ padding: "80px 48px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48, alignItems: "center" }}>
          <div className="ph" style={{ height: 420, borderRadius: 8 }}><span>Tanaka family portrait</span></div>
          <div>
            <div className="kicker" style={{ color: HALE_ACCENT }}>A family's story</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 34, fontStyle: "italic", marginTop: 16, lineHeight: 1.3 }}>
              "{featured.q}"
            </div>
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 14, color: HALE_INK }}>{featured.a}</div>
              <div className="kicker" style={{ fontSize: 9.5, marginTop: 4 }}>{featured.sub}</div>
            </div>
            <div style={{ marginTop: 24, fontSize: 12, color: HALE_ACCENT }}>Read their full story →</div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ padding: "80px 48px" }}>
        <div className="kicker" style={{ color: HALE_ACCENT, marginBottom: 8 }}>In their words</div>
        <div className="display" style={{ fontSize: 40, marginBottom: 32 }}>More from the families we've cared for.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {more.map(([q, a], i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 8, border: "1px solid #e3d9c7", padding: 24 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 20, lineHeight: 1.35, fontStyle: "italic" }}>"{q}"</div>
              <div className="kicker" style={{ fontSize: 9.5, marginTop: 16 }}>— {a}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 48px 100px", textAlign: "center" }}>
        <div className="btn accent" style={{ borderRadius: 999, padding: "14px 28px" }}>Request a reference family</div>
      </div>
      <HaleFoot />
    </div>
  );
}

/* ───────────── HALE · PRICING ───────────── */
function HalePricing() {
  return (
    <div className="wf wf-page" style={{ background: HALE_WARM }}>
      <HaleNav active="Pricing" />
      <div style={{ padding: "80px 48px 40px", textAlign: "center" }}>
        <div className="kicker" style={{ color: HALE_ACCENT }}>Cost & coverage</div>
        <div className="display" style={{ fontSize: 56, marginTop: 16, maxWidth: 760, margin: "16px auto 0" }}>
          Honest about cost.<br/>Quoted privately.
        </div>
        <div style={{ marginTop: 16, fontSize: 14, color: "var(--ink-2)", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.6 }}>
          Every family is different. We'll share a detailed quote after a short consultation — no hard sell, no commitment.
        </div>
      </div>

      {/* What's included */}
      <div style={{ padding: "40px 48px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e3d9c7", padding: 32 }}>
          <div className="kicker" style={{ color: HALE_ACCENT }}>Always included</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 26, marginTop: 8 }}>In every monthly rate</div>
          <div className="col gap-10" style={{ marginTop: 20 }}>
            {["Private or shared room", "Three home-cooked meals + snacks", "24/7 awake caregivers", "Medication management", "Laundry & housekeeping", "Activities & companionship"].map(x => (
              <div key={x} style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", gap: 10 }}>
                <span style={{ color: HALE_ACCENT }}>✓</span>{x}
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: HALE_WARM, borderRadius: 8, border: "1px solid #e3d9c7", padding: 32 }}>
          <div className="kicker" style={{ color: "var(--ink-3)" }}>Billed separately</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 26, marginTop: 8 }}>Not included</div>
          <div className="col gap-10" style={{ marginTop: 20 }}>
            {["Physician visits", "Prescriptions", "Hospice services (coordinated)", "Personal items", "Outside transportation", "Physical/occupational therapy"].map(x => (
              <div key={x} style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", gap: 10 }}>
                <span style={{ color: "var(--ink-4)" }}>○</span>{x}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment */}
      <div style={{ padding: "60px 48px", background: "#fff" }}>
        <div className="kicker" style={{ color: HALE_ACCENT, marginBottom: 8 }}>Ways to pay</div>
        <div className="display" style={{ fontSize: 34, marginBottom: 28 }}>We work with most sources.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[["Private pay", "Monthly billing"], ["LTC insurance", "Direct billing available"], ["VA benefits", "Aid & Attendance accepted"], ["Medicaid", "In process — call for details"]].map(([t, s]) => (
            <div key={t} style={{ padding: 20, borderRadius: 6, border: "1px solid #e3d9c7", background: HALE_WARM }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18 }}>{t}</div>
              <div style={{ fontSize: 11.5, color: "var(--ink-3)", marginTop: 4 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "80px 48px 100px", textAlign: "center" }}>
        <div className="display" style={{ fontSize: 36, maxWidth: 600, margin: "0 auto" }}>
          Ready for a detailed quote?
        </div>
        <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center" }}>
          <div className="btn accent" style={{ borderRadius: 999, padding: "14px 28px" }}>Request a quote</div>
          <div className="btn alt" style={{ borderRadius: 999, padding: "14px 28px" }}>Call us</div>
        </div>
      </div>
      <HaleFoot />
    </div>
  );
}

/* ───────────── HALE · CONTACT ───────────── */
function HaleContact() {
  return (
    <div className="wf wf-page" style={{ background: HALE_WARM }}>
      <HaleNav active="Contact" />
      <div style={{ padding: "80px 48px 40px", textAlign: "center" }}>
        <div className="kicker" style={{ color: HALE_ACCENT }}>Let's talk</div>
        <div className="display" style={{ fontSize: 64, marginTop: 16 }}>
          Tell us about your <span className="i">family</span>.
        </div>
      </div>

      <div style={{ padding: "40px 48px 80px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e3d9c7", padding: 40 }}>
          <div className="kicker" style={{ color: HALE_ACCENT }}>Consultation request</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 26, marginTop: 8, marginBottom: 24 }}>A short form. We'll call you.</div>

          <div className="col gap-16">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <div className="kicker" style={{ fontSize: 9.5 }}>Your name</div>
                <div style={{ marginTop: 6, height: 40, background: HALE_WARM, borderRadius: 6, border: "1px solid #e3d9c7" }} />
              </div>
              <div>
                <div className="kicker" style={{ fontSize: 9.5 }}>Your relationship</div>
                <div style={{ marginTop: 6, height: 40, background: HALE_WARM, borderRadius: 6, border: "1px solid #e3d9c7" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <div className="kicker" style={{ fontSize: 9.5 }}>Email</div>
                <div style={{ marginTop: 6, height: 40, background: HALE_WARM, borderRadius: 6, border: "1px solid #e3d9c7" }} />
              </div>
              <div>
                <div className="kicker" style={{ fontSize: 9.5 }}>Phone</div>
                <div style={{ marginTop: 6, height: 40, background: HALE_WARM, borderRadius: 6, border: "1px solid #e3d9c7" }} />
              </div>
            </div>

            <div>
              <div className="kicker" style={{ fontSize: 9.5, marginBottom: 8 }}>Care needed</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Assisted living", "Memory care", "Respite stay", "End-of-life", "Not sure yet"].map((c, i) => (
                  <div key={c} style={{ padding: "8px 14px", borderRadius: 999, fontSize: 11.5, background: i === 0 ? HALE_ACCENT : "#fff", color: i === 0 ? "#fff" : HALE_INK, border: "1px solid #e3d9c7" }}>{c}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="kicker" style={{ fontSize: 9.5 }}>A little about the situation (optional)</div>
              <div style={{ marginTop: 6, height: 120, background: HALE_WARM, borderRadius: 6, border: "1px solid #e3d9c7" }} />
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <div className="btn accent" style={{ borderRadius: 999, padding: "12px 24px" }}>Send →</div>
              <div style={{ fontSize: 11, color: "var(--ink-3)", alignSelf: "center" }}>We reply within 1 business day</div>
            </div>
          </div>
        </div>

        <div className="col gap-20">
          <div style={{ background: HALE_INK, color: "#fff", borderRadius: 12, padding: 28 }}>
            <div className="kicker" style={{ color: "#c9bda8" }}>Or call</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 32, marginTop: 10 }}>(808) 200-1840</div>
            <div style={{ fontSize: 12.5, color: "#c9bda8", marginTop: 16 }}>kriss@casacolinacare.com</div>
          </div>
          <div className="ph" style={{ height: 200, borderRadius: 8 }}><span>MAP · 189 Anapalau St</span></div>
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e3d9c7", padding: 20 }}>
            <div className="kicker" style={{ color: HALE_ACCENT }}>Visit</div>
            <div style={{ fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>189 Anapalau Street<br/>Hawai‘i Kai · Honolulu, HI 96825</div>
          </div>
        </div>
      </div>
      <HaleFoot />
    </div>
  );
}

Object.assign(window, {
  HaleHome, HaleAbout, HaleCare, HaleGallery, HaleTeam,
  HaleFAQ, HaleTestimonials, HalePricing, HaleContact
});
