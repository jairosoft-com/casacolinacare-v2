/* Direction 1 — "Lanai": quiet, reverent, editorial.
   Asymmetric grids, lots of whitespace, serif-forward.
   Photos treated as artifacts — small, intentional, framed.
*/

function LanaiNav({ active }) {
  const pages = ["Home", "About", "Care", "Gallery", "Team", "FAQ", "Contact"];
  return (
    <div className="nav-row" style={{ padding: "22px 56px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 22, letterSpacing: "-0.01em" }}>
          Casa&nbsp;Colina
        </div>
        <div className="eyebrow" style={{ fontSize: 9 }}>Care · Hawai‘i Kai</div>
      </div>
      <div className="nav-links">
        {pages.map(p => <span key={p} className={p === active ? "active" : ""}>{p}</span>)}
      </div>
      <div className="eyebrow" style={{ fontSize: 9.5 }}>+1 808&nbsp;200&nbsp;1840</div>
    </div>
  );
}

function LanaiFoot() {
  return (
    <div className="foot" style={{ padding: "36px 56px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32 }}>
      <div className="col gap-8">
        <div style={{ fontFamily: "var(--serif)", fontSize: 18 }}>Casa Colina</div>
        <div style={{ fontSize: 11, color: "var(--ink-3)", maxWidth: 220 }}>
          189 Anapalau Street, Hawai‘i Kai · Honolulu, HI 96825
        </div>
      </div>
      <div className="col gap-6">
        <div className="kicker" style={{ fontSize: 9 }}>Visit</div>
        <div style={{ fontSize: 11.5 }}>Home</div>
        <div style={{ fontSize: 11.5 }}>About</div>
        <div style={{ fontSize: 11.5 }}>Care</div>
      </div>
      <div className="col gap-6">
        <div className="kicker" style={{ fontSize: 9 }}>Learn</div>
        <div style={{ fontSize: 11.5 }}>FAQ</div>
        <div style={{ fontSize: 11.5 }}>Gallery</div>
        <div style={{ fontSize: 11.5 }}>Pricing</div>
      </div>
      <div className="col gap-6">
        <div className="kicker" style={{ fontSize: 9 }}>Speak with us</div>
        <div style={{ fontSize: 11.5 }}>+1 808 200 1840</div>
        <div style={{ fontSize: 11.5 }}>kriss@casacolinacare.com</div>
        <div style={{ fontSize: 10.5, color: "var(--ink-4)" }}>© 2026 Casa Colina Care LLC</div>
      </div>
    </div>
  );
}

/* ───────────── LANAI · HOME ───────────── */
function LanaiHome() {
  return (
    <div className="wf wf-page">
      <LanaiNav active="Home" />

      {/* Hero — full-bleed photo, with one perfectly-placed serif line */}
      <div style={{ position: "relative", height: 620 }}>
        <div className="ph" style={{ position: "absolute", inset: 0, border: "none" }}>
          <span>HERO · courtyard, late afternoon light · full-bleed 16:9</span>
        </div>
        <div style={{
          position: "absolute", left: 56, bottom: 56, maxWidth: 640,
          background: "rgba(254,252,247,0.94)", padding: "32px 36px",
          borderLeft: "2px solid var(--accent)"
        }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>A family-style care home · est. Hawai‘i Kai</div>
          <div className="display" style={{ fontSize: 46 }}>
            A place where mom<br/>can feel <span className="i">at home</span>.
          </div>
          <div style={{ marginTop: 18, fontSize: 13.5, color: "var(--ink-2)", maxWidth: 460 }}>
            Six residents. One kitchen. Caregivers who know every name, every preference, and the story behind each one.
          </div>
          <div style={{ marginTop: 22, display: "flex", gap: 10 }}>
            <div className="btn accent">Request a consultation</div>
            <div className="btn alt">Read our story</div>
          </div>
        </div>
        <div style={{
          position: "absolute", right: 56, top: 40,
          display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4
        }}>
          <div className="ann" style={{ maxWidth: 180, textAlign: "right" }}>
            <span className="ann-arrow">↘</span> one photo, one<br/>promise — nothing more
          </div>
        </div>
      </div>

      {/* Essay block — founder's letter, newspaper-style */}
      <div style={{ padding: "96px 56px", display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 56, alignItems: "start" }}>
        <div>
          <div className="ph" style={{ height: 220 }}><span>KRISS · portrait 4:5</span></div>
          <div className="kicker" style={{ marginTop: 12, fontSize: 9 }}>Kriss · Owner & Director</div>
        </div>
        <div>
          <div className="eyebrow">A letter from our home</div>
          <div className="display" style={{ fontSize: 38, marginTop: 16, maxWidth: 520 }}>
            We opened Casa Colina because aloha<br/>shouldn't end at a hospital door.
          </div>
          <div style={{ marginTop: 28, columns: 2, columnGap: 32, fontSize: 13, lineHeight: 1.7, color: "var(--ink-2)" }}>
            <p style={{ margin: "0 0 12px" }}>My grandmother spent her last years in a place that felt like a waiting room. Fluorescent lights, shift changes, a TV nobody watched. I made a promise that day — if I ever cared for someone's kupuna, it would be different.</p>
            <p style={{ margin: "0 0 12px" }}>Casa Colina is a six-bed home, not a facility. We cook real meals. We sit on the lanai. We call families by their first names.</p>
            <p style={{ margin: 0 }}>If that sounds like what your mother, father, or spouse deserves — come visit. We'll put water on for tea.</p>
          </div>
          <div style={{ marginTop: 28, fontFamily: "var(--serif)", fontSize: 22, fontStyle: "italic" }}>— Kriss</div>
        </div>
        <div>
          <div className="ann" style={{ maxWidth: 160 }}>
            essay layout = trust.<br/>no stock phrases. <span className="ann-arrow">←</span>
          </div>
        </div>
      </div>

      <hr className="hr" style={{ margin: "0 56px" }} />

      {/* Four pillars — restrained, serif */}
      <div style={{ padding: "80px 56px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
          <div className="eyebrow">How we care</div>
          <div style={{ fontSize: 11.5, color: "var(--ink-3)" }}>Four commitments</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 48 }}>
          {[
            ["01", "Personal plans", "A plan built for her — not for a room number."],
            ["02", "24/7 presence", "Awake staff. Always. No exceptions."],
            ["03", "Real food", "Home-cooked, shaped by her tastes."],
            ["04", "Quiet grounds", "Tropical, tended, close to family."],
          ].map(([n, t, d]) => (
            <div key={n} className="col gap-10">
              <div className="kicker" style={{ fontSize: 10 }}>{n}</div>
              <div className="display" style={{ fontSize: 22 }}>{t}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial — single, given weight */}
      <div style={{ padding: "80px 56px", background: "var(--paper)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 30, fontStyle: "italic", lineHeight: 1.3, color: "var(--ink)" }}>
            "The staff treats every resident like family. Mom stopped asking when we were going home — because this became home."
          </div>
          <div className="eyebrow" style={{ marginTop: 24 }}>— M. Tanaka · daughter, resident's family</div>
        </div>
      </div>

      {/* CTA strip */}
      <div style={{ padding: "80px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <div className="display" style={{ fontSize: 34 }}>Come see the home.</div>
          <div style={{ marginTop: 12, fontSize: 13.5, color: "var(--ink-2)", maxWidth: 440 }}>
            Tours are by appointment, one family at a time. We'll walk you through, introduce you to the team, and answer anything.
          </div>
        </div>
        <div className="col gap-8">
          <div style={{ fontSize: 11, color: "var(--ink-3)" }}>Speak directly with Kriss</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 26 }}>+1 808 200 1840</div>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <div className="btn accent">Request consultation</div>
            <div className="btn ghost">Schedule a visit</div>
          </div>
        </div>
      </div>

      <LanaiFoot />
    </div>
  );
}

/* ───────────── LANAI · ABOUT ───────────── */
function LanaiAbout() {
  return (
    <div className="wf wf-page">
      <LanaiNav active="About" />
      <div style={{ padding: "80px 56px 40px" }}>
        <div className="eyebrow">About</div>
        <div className="display" style={{ fontSize: 54, marginTop: 18, maxWidth: 720 }}>
          A home first.<br/>A care home <span className="i">second</span>.
        </div>
      </div>

      {/* Two-col: photo + philosophy */}
      <div style={{ padding: "40px 56px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "start" }}>
        <div className="ph" style={{ height: 520 }}><span>LANAI · morning · 4:5</span></div>
        <div className="col gap-24" style={{ paddingTop: 40 }}>
          <div>
            <div className="kicker">Our philosophy</div>
            <div className="display" style={{ fontSize: 26, marginTop: 10 }}>Small on purpose.</div>
            <div style={{ marginTop: 10, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.65 }}>
              We cap at six residents because we believe care can't be scaled. Every meal is shared. Every name, known. Every preference, remembered.
            </div>
          </div>
          <div>
            <div className="kicker">Who we serve</div>
            <div className="display" style={{ fontSize: 26, marginTop: 10 }}>Kupuna, and the families walking beside them.</div>
            <div style={{ marginTop: 10, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.65 }}>
              From assisted living through memory care and end-of-life comfort — we are here for the whole arc, not just the easy parts.
            </div>
          </div>
          <div>
            <div className="kicker">What makes us different</div>
            <ul style={{ margin: "10px 0 0", paddingLeft: 18, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.8 }}>
              <li>Licensed ARCH — State of Hawai‘i Type II</li>
              <li>1:3 staff-to-resident ratio, day and night</li>
              <li>On-call RN and partnering physicians</li>
              <li>Family-owned, locally operated since 2019</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "80px 56px", borderTop: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 32 }}>Our history</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
          {[
            ["2018", "The promise", "Kriss begins planning a home after caring for her own grandmother."],
            ["2019", "Doors open", "Casa Colina welcomes its first family on Anapalau Street."],
            ["2022", "Memory care", "Dedicated program added in partnership with local physicians."],
            ["2026", "Still family-run", "Six residents. Same kitchen. Same aloha."],
          ].map(([y, t, d]) => (
            <div key={y} className="col gap-8" style={{ borderTop: "2px solid var(--ink)", paddingTop: 16 }}>
              <div className="kicker" style={{ fontSize: 10 }}>{y}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 20 }}>{t}</div>
              <div style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.55 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials strip */}
      <div style={{ padding: "40px 56px 80px" }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Credentials & accreditations</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
          {["State Licensed ARCH II", "DOH Inspected 2025", "Memory Care Certified", "CPR/First Aid — all staff", "Background Checks — all staff"].map(c => (
            <div key={c} className="blk" style={{ padding: "18px 14px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 28, height: 28, border: "1.5px solid var(--ink)", borderRadius: 999 }} />
              <div style={{ fontSize: 11, color: "var(--ink-2)" }}>{c}</div>
            </div>
          ))}
        </div>
      </div>
      <LanaiFoot />
    </div>
  );
}

/* ───────────── LANAI · CARE (SERVICES) ───────────── */
function LanaiCare() {
  const tiers = [
    { n: "01", t: "Assisted Living", d: "Help with daily living, bathing, medication, and meals — while preserving as much independence as possible.", inc: ["Personal care plan", "Medication management", "Daily meals & housekeeping", "Companionship"] },
    { n: "02", t: "Memory Care", d: "A quiet, structured environment for kupuna living with dementia or Alzheimer's. Familiar routines, patient caregivers.", inc: ["Structured daily routines", "Trained memory-care staff", "Secure environment", "Family check-ins"] },
    { n: "03", t: "Respite & Short-Stay", d: "Short-term stays — from a weekend to a few weeks — so family caregivers can rest, travel, or recover.", inc: ["Minimum 3-night stay", "Full amenities included", "Flexible scheduling", "Family updates"] },
    { n: "04", t: "End-of-Life Comfort", d: "Gentle, loving care in familiar surroundings, in partnership with your hospice provider of choice.", inc: ["Hospice partnership", "24-hour comfort care", "Family presence encouraged", "Spiritual support available"] },
  ];
  return (
    <div className="wf wf-page">
      <LanaiNav active="Care" />
      <div style={{ padding: "80px 56px 32px" }}>
        <div className="eyebrow">Care</div>
        <div className="display" style={{ fontSize: 54, marginTop: 18, maxWidth: 760 }}>
          Four kinds of care.<br/>One kind of <span className="i">presence</span>.
        </div>
      </div>

      <div style={{ padding: "24px 56px 80px" }}>
        {tiers.map((tier, i) => (
          <div key={tier.n} style={{
            display: "grid", gridTemplateColumns: "80px 1.1fr 2fr 1fr",
            gap: 32, padding: "36px 0",
            borderTop: "1px solid var(--rule)",
            borderBottom: i === tiers.length - 1 ? "1px solid var(--rule)" : "none"
          }}>
            <div className="kicker" style={{ fontSize: 11 }}>{tier.n}</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.1 }}>{tier.t}</div>
            <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 480 }}>{tier.d}</div>
            <div className="col gap-6">
              {tier.inc.map(x => (
                <div key={x} style={{ fontSize: 11.5, color: "var(--ink-2)", display: "flex", gap: 8 }}>
                  <span style={{ color: "var(--accent)" }}>—</span>{x}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Daily rhythm */}
      <div style={{ padding: "80px 56px", background: "var(--paper)" }}>
        <div className="eyebrow" style={{ marginBottom: 28 }}>A day at Casa Colina</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 16 }}>
          {[
            ["7:00", "Morning tea"],
            ["9:00", "Breakfast & meds"],
            ["11:00", "Lanai time"],
            ["12:30", "Lunch, family-style"],
            ["15:00", "Activities or rest"],
            ["18:00", "Dinner, then quiet"],
          ].map(([t, a]) => (
            <div key={t} className="col gap-6" style={{ padding: 16, background: "var(--white)", border: "1px solid var(--rule)" }}>
              <div className="kicker" style={{ fontSize: 10 }}>{t}</div>
              <div style={{ fontSize: 13, fontFamily: "var(--serif)" }}>{a}</div>
            </div>
          ))}
        </div>
      </div>
      <LanaiFoot />
    </div>
  );
}

/* ───────────── LANAI · GALLERY ───────────── */
function LanaiGallery() {
  return (
    <div className="wf wf-page">
      <LanaiNav active="Gallery" />
      <div style={{ padding: "80px 56px 32px" }}>
        <div className="eyebrow">Gallery</div>
        <div className="display" style={{ fontSize: 54, marginTop: 18 }}>
          The home, in daylight.
        </div>
        <div style={{ marginTop: 14, fontSize: 13.5, color: "var(--ink-2)", maxWidth: 520 }}>
          Real photos, real rooms. We don't stage. What you see is what your mother will wake up to.
        </div>
      </div>

      {/* Editorial asymmetric grid */}
      <div style={{ padding: "32px 56px 60px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}>
        <div className="ph" style={{ gridColumn: "1 / 8", height: 420 }}><span>LANAI · hero</span></div>
        <div className="ph" style={{ gridColumn: "8 / 13", height: 200 }}><span>kitchen · 4:3</span></div>
        <div className="ph" style={{ gridColumn: "8 / 13", height: 204 }}><span>garden corner</span></div>

        <div className="ph" style={{ gridColumn: "1 / 4", height: 220 }}><span>bedroom A</span></div>
        <div className="ph" style={{ gridColumn: "4 / 9", height: 320 }}><span>living room · wide</span></div>
        <div className="ph" style={{ gridColumn: "9 / 13", height: 220 }}><span>dining table</span></div>

        <div className="ph" style={{ gridColumn: "1 / 4", height: 200 }}><span>bathroom detail</span></div>
        <div className="ph" style={{ gridColumn: "4 / 7", height: 200 }}><span>hallway</span></div>
        <div className="ph" style={{ gridColumn: "9 / 13", height: 200 }}><span>entry</span></div>
      </div>

      <div style={{ padding: "60px 56px 80px", borderTop: "1px solid var(--rule)" }}>
        <div className="display" style={{ fontSize: 26, maxWidth: 560 }}>
          Photos can only say so much. Come see in person.
        </div>
        <div style={{ marginTop: 18 }}>
          <div className="btn accent">Schedule a private visit</div>
        </div>
      </div>
      <LanaiFoot />
    </div>
  );
}

/* ───────────── LANAI · TEAM ───────────── */
function LanaiTeam() {
  const people = [
    { n: "Kriss", r: "Owner & Director", y: "since 2019", bio: "Licensed ARCH administrator. Grew up in Hawai‘i Kai. Founded Casa Colina after caring for her grandmother." },
    { n: "Leilani", r: "Head Caregiver, RN", y: "since 2020", bio: "Twelve years in geriatric nursing. Known for her calm in hard moments and her lemon-ginger tea." },
    { n: "Marco", r: "Evening Caregiver", y: "since 2021", bio: "CNA and lifelong cook. Runs the kitchen most weeknights — dinner is his love language." },
    { n: "Auntie Liz", r: "Weekend Caregiver", y: "since 2022", bio: "Retired school aide. Plays ukulele on Sunday afternoons if anyone asks." },
  ];
  return (
    <div className="wf wf-page">
      <LanaiNav active="Team" />
      <div style={{ padding: "80px 56px 32px" }}>
        <div className="eyebrow">Team</div>
        <div className="display" style={{ fontSize: 54, marginTop: 18, maxWidth: 720 }}>
          The same faces,<br/>every day.
        </div>
        <div style={{ marginTop: 14, fontSize: 13.5, color: "var(--ink-2)", maxWidth: 560 }}>
          Low turnover is the hidden foundation of good care. Meet the people who'll know your mother by the end of week one.
        </div>
      </div>

      <div style={{ padding: "40px 56px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        {people.map(p => (
          <div key={p.n} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, alignItems: "start" }}>
            <div className="ph" style={{ height: 220 }}><span>{p.n}</span></div>
            <div className="col gap-8" style={{ paddingTop: 4 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 24 }}>{p.n}</div>
              <div className="kicker" style={{ fontSize: 10 }}>{p.r} · {p.y}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.6, marginTop: 4 }}>{p.bio}</div>
            </div>
          </div>
        ))}
      </div>
      <LanaiFoot />
    </div>
  );
}

/* ───────────── LANAI · FAQ ───────────── */
function LanaiFAQ() {
  const groups = [
    {
      h: "Getting started",
      qs: [
        ["How do we know if Casa Colina is the right fit?", "We begin with a conversation — in person if you can, by phone if you can't. If there's mutual fit, we schedule an in-home assessment."],
        ["What's the move-in process?", "Once accepted, we work with your family and any current care team to transition belongings, medications, and routines over 1–2 weeks."],
        ["Can we visit before deciding?", "Yes — and we encourage it. Tours are private, one family at a time."],
      ]
    },
    {
      h: "Care & daily life",
      qs: [
        ["What's the staff-to-resident ratio?", "1:3 during the day, 1:3 at night with an awake caregiver always on shift."],
        ["Can our loved one bring their own furniture?", "Absolutely. We encourage it — familiar belongings help immensely."],
        ["How are medical needs handled?", "We partner with your primary physician. We also have an on-call RN and local pharmacy service."],
      ]
    },
    {
      h: "Cost & logistics",
      qs: [
        ["How much does it cost?", "Monthly rates are based on level of care. Please request a consultation for a private quote."],
        ["Do you accept long-term care insurance?", "Yes. We can work with your insurance administrator directly."],
        ["What's your cancellation policy?", "30 days notice. No hidden fees."],
      ]
    },
  ];
  return (
    <div className="wf wf-page">
      <LanaiNav active="FAQ" />
      <div style={{ padding: "80px 56px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
        <div>
          <div className="eyebrow">FAQ</div>
          <div className="display" style={{ fontSize: 54, marginTop: 18 }}>
            Questions<br/>families ask.
          </div>
        </div>
        <div style={{ fontSize: 13.5, color: "var(--ink-2)", maxWidth: 420 }}>
          If your question isn't here, call us. Kriss picks up the phone herself most days.
        </div>
      </div>

      <div style={{ padding: "40px 56px 80px" }}>
        {groups.map(g => (
          <div key={g.h} style={{ borderTop: "2px solid var(--ink)", padding: "28px 0", display: "grid", gridTemplateColumns: "220px 1fr", gap: 32 }}>
            <div className="kicker" style={{ fontSize: 11 }}>{g.h}</div>
            <div className="col">
              {g.qs.map(([q, a], i) => (
                <div key={q} style={{ padding: "20px 0", borderBottom: i === g.qs.length - 1 ? "none" : "1px solid var(--rule)" }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 19, marginBottom: 8 }}>{q}</div>
                  <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 580 }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <LanaiFoot />
    </div>
  );
}

/* ───────────── LANAI · TESTIMONIALS ───────────── */
function LanaiTestimonials() {
  const quotes = [
    { q: "Mom stopped asking when we were going home. This became home.", a: "M. Tanaka · Kaimuki", r: "Daughter of resident, 2 years" },
    { q: "They sent me a photo of Dad on the lanai with his coffee. Small thing. It made my whole week.", a: "J. Reyes · Kailua", r: "Son of resident" },
    { q: "Kriss picked up when I called at 11pm after my mother fell. She talked me through it for forty-five minutes.", a: "S. Wong · Mānoa", r: "Daughter of resident" },
    { q: "My father is himself again here. He laughs. He sings.", a: "A. Kekoa · Hawai‘i Kai", r: "Daughter of resident" },
  ];
  return (
    <div className="wf wf-page">
      <LanaiNav active="Testimonials" />
      <div style={{ padding: "80px 56px 32px" }}>
        <div className="eyebrow">From the families</div>
        <div className="display" style={{ fontSize: 48, marginTop: 18, maxWidth: 680 }}>
          What we'd rather our families<br/>say than us.
        </div>
      </div>

      <div style={{ padding: "40px 56px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        {quotes.map((x, i) => (
          <div key={i} style={{ padding: "32px 0", borderTop: "1px solid var(--rule)" }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 26, fontStyle: "italic", lineHeight: 1.3, color: "var(--ink)" }}>
              "{x.q}"
            </div>
            <div style={{ marginTop: 20, display: "flex", gap: 12, alignItems: "center" }}>
              <div className="blk" style={{ width: 40, height: 40, borderRadius: 999 }} />
              <div>
                <div style={{ fontSize: 12, color: "var(--ink)" }}>{x.a}</div>
                <div className="kicker" style={{ fontSize: 9 }}>{x.r}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "60px 56px 80px", borderTop: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div className="display" style={{ fontSize: 28 }}>
          We'll gladly put you in touch with a family we care for — with their permission.
        </div>
        <div>
          <div className="btn accent">Request a reference</div>
        </div>
      </div>
      <LanaiFoot />
    </div>
  );
}

/* ───────────── LANAI · PRICING ───────────── */
function LanaiPricing() {
  return (
    <div className="wf wf-page">
      <LanaiNav active="Pricing" />
      <div style={{ padding: "80px 56px 32px" }}>
        <div className="eyebrow">Cost & coverage</div>
        <div className="display" style={{ fontSize: 54, marginTop: 18, maxWidth: 760 }}>
          Honest pricing,<br/>shared <span className="i">privately</span>.
        </div>
        <div style={{ marginTop: 16, fontSize: 13.5, color: "var(--ink-2)", maxWidth: 560 }}>
          We quote monthly rates privately because every plan is different. What we'll share openly is what's included — and what isn't.
        </div>
      </div>

      <div style={{ padding: "40px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ border: "1px solid var(--rule)", padding: "32px 28px" }}>
          <div className="kicker" style={{ fontSize: 10 }}>Always included</div>
          <div className="display" style={{ fontSize: 22, margin: "12px 0 20px" }}>In every monthly rate</div>
          <div className="col gap-10">
            {["Private or shared room", "Three meals + snacks, daily", "24/7 caregiver presence", "Medication management", "Personal laundry & housekeeping", "Activities, outings, companionship"].map(x => (
              <div key={x} style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", gap: 10 }}>
                <span style={{ color: "var(--accent)" }}>—</span>{x}
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: "1px solid var(--rule)", padding: "32px 28px" }}>
          <div className="kicker" style={{ fontSize: 10 }}>Billed separately</div>
          <div className="display" style={{ fontSize: 22, margin: "12px 0 20px" }}>Not included</div>
          <div className="col gap-10">
            {["Physician visits (covered by insurance)", "Prescription medications", "Hospice services (coordinated)", "Personal items & preferences", "Outside transportation", "Physical/occupational therapy"].map(x => (
              <div key={x} style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", gap: 10 }}>
                <span style={{ color: "var(--ink-4)" }}>—</span>{x}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "60px 56px 40px" }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Payment sources we work with</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {["Private pay", "Long-term care insurance", "VA benefits", "Medicaid (in process)"].map(x => (
            <div key={x} className="blk" style={{ padding: 20, fontSize: 13 }}>{x}</div>
          ))}
        </div>
      </div>

      <div style={{ padding: "40px 56px 80px" }}>
        <div style={{ background: "var(--paper)", padding: "36px 36px", border: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32, alignItems: "center" }}>
          <div>
            <div className="display" style={{ fontSize: 24 }}>Request a private quote.</div>
            <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 8, maxWidth: 420 }}>
              A short conversation, a one-page summary — no commitment, no hard sell.
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="btn accent">Start here</div>
          </div>
        </div>
      </div>
      <LanaiFoot />
    </div>
  );
}

/* ───────────── LANAI · CONTACT ───────────── */
function LanaiContact() {
  return (
    <div className="wf wf-page">
      <LanaiNav active="Contact" />
      <div style={{ padding: "80px 56px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        <div>
          <div className="eyebrow">Contact</div>
          <div className="display" style={{ fontSize: 54, marginTop: 18 }}>
            Let's talk.
          </div>
          <div style={{ marginTop: 16, fontSize: 13.5, color: "var(--ink-2)", maxWidth: 440 }}>
            Tell us a little about who you're caring for. Kriss or Leilani will follow up within one business day.
          </div>

          <div style={{ marginTop: 40 }}>
            <div className="kicker">Or call</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 34, marginTop: 6 }}>+1 808 200 1840</div>
            <div style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 4 }}>kriss@casacolinacare.com</div>
            <div style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 16 }}>
              189 Anapalau Street<br/>Hawai‘i Kai · Honolulu, HI 96825
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{ border: "1px solid var(--rule)", padding: 36 }}>
          <div className="kicker">Consultation request</div>
          <div className="display" style={{ fontSize: 22, marginTop: 10, marginBottom: 24 }}>A short form.</div>
          <div className="col gap-20">
            {[
              ["Your name", "text"],
              ["Email", "email"],
              ["Phone", "tel"],
              ["Who are you caring for?", "select"],
              ["Current situation (optional)", "textarea"],
            ].map(([l, k]) => (
              <div key={l} className="col gap-6">
                <div className="kicker" style={{ fontSize: 9.5 }}>{l}</div>
                {k === "textarea"
                  ? <div className="blk" style={{ height: 100 }} />
                  : <div style={{ height: 40, borderBottom: "1px solid var(--ink)" }} />
                }
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <div className="btn accent">Send</div>
              <div className="btn alt">Prefer to call?</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "60px 56px 80px" }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Getting here</div>
        <div className="ph" style={{ height: 280 }}><span>MAP · Hawai‘i Kai · 189 Anapalau Street</span></div>
      </div>
      <LanaiFoot />
    </div>
  );
}

Object.assign(window, {
  LanaiHome, LanaiAbout, LanaiCare, LanaiGallery, LanaiTeam,
  LanaiFAQ, LanaiTestimonials, LanaiPricing, LanaiContact
});
