/* Direction 3 — "Kupuna": clinical & reassuring.
   Crisp, structured, credentials-forward. Denser info.
   Closer to a healthcare provider aesthetic — trust via rigor.
*/

const KUPUNA_INK = "#0f1419";
const KUPUNA_BORDER = "#d6d9dc";
const KUPUNA_BG = "#fafafa";
const KUPUNA_ACCENT = "#b65d3c";
const KUPUNA_BLUE = "#294866";

function KupunaNav({ active }) {
  const pages = ["Home", "About", "Care", "Gallery", "Team", "FAQ", "Pricing", "Contact"];
  return (
    <>
      {/* Utility bar */}
      <div style={{ background: KUPUNA_INK, color: "#cfd3d7", padding: "6px 48px", fontSize: 11, display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 16 }}>
          <span>✓ Licensed ARCH Hawai‘i Type II</span>
          <span>· DOH Inspected 2025</span>
          <span>· Family-owned since 2019</span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <span>(808) 200-1840</span>
          <span>kriss@casacolinacare.com</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px", background: "#fff", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, background: KUPUNA_BLUE, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontSize: 18 }}>C</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 20, letterSpacing: "-0.01em", color: KUPUNA_INK }}>Casa Colina Care</div>
        </div>
        <div style={{ display: "flex", gap: 22 }}>
          {pages.map(p => (
            <span key={p} style={{ fontSize: 12.5, color: p === active ? KUPUNA_INK : "#5a6470", fontWeight: p === active ? 600 : 400, borderBottom: p === active ? `2px solid ${KUPUNA_ACCENT}` : "2px solid transparent", paddingBottom: 4 }}>{p}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div className="btn ghost" style={{ padding: "8px 14px", fontSize: 12 }}>Refer a patient</div>
          <div className="btn" style={{ background: KUPUNA_ACCENT, borderColor: KUPUNA_ACCENT, padding: "8px 14px", fontSize: 12 }}>Request consultation</div>
        </div>
      </div>
    </>
  );
}

function KupunaFoot() {
  return (
    <div style={{ background: "#fff", borderTop: `1px solid ${KUPUNA_BORDER}` }}>
      <div style={{ padding: "48px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: KUPUNA_INK }}>Casa Colina Care</div>
          <div style={{ fontSize: 11.5, color: "#5a6470", marginTop: 10, lineHeight: 1.6, maxWidth: 280 }}>
            A licensed residential care home in Hawai‘i Kai. Six residents. Full spectrum of senior care, from assisted living to end-of-life comfort.
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["ARCH II", "DOH", "HIPAA"].map(t => (
              <div key={t} style={{ fontSize: 10, padding: "3px 8px", border: `1px solid ${KUPUNA_BORDER}`, color: "#5a6470", borderRadius: 2 }}>{t}</div>
            ))}
          </div>
        </div>
        {[
          ["The home", ["About", "Team", "Gallery", "Careers"]],
          ["Care", ["Services", "Daily life", "Medical partners"]],
          ["Families", ["FAQ", "Pricing", "Insurance", "Testimonials"]],
          ["Contact", ["(808) 200-1840", "Fax: (808) 670-1163", "kriss@casacolinacare.com", "189 Anapalau Street"]],
        ].map(([h, items]) => (
          <div key={h}>
            <div className="kicker" style={{ fontSize: 9, color: "#5a6470" }}>{h}</div>
            <div className="col gap-8" style={{ marginTop: 12 }}>
              {items.map(i => <div key={i} style={{ fontSize: 11.5, color: KUPUNA_INK }}>{i}</div>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "16px 48px", borderTop: `1px solid ${KUPUNA_BORDER}`, display: "flex", justifyContent: "space-between", fontSize: 10.5, color: "#5a6470" }}>
        <div>© 2026 Casa Colina Care LLC · All rights reserved</div>
        <div>Privacy · Accessibility · Notice of Privacy Practices</div>
      </div>
    </div>
  );
}

function KupunaStat({ n, l }) {
  return (
    <div style={{ padding: "20px 24px", background: "#fff", border: `1px solid ${KUPUNA_BORDER}` }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 36, color: KUPUNA_INK, lineHeight: 1 }}>{n}</div>
      <div className="kicker" style={{ fontSize: 9.5, marginTop: 8, color: "#5a6470" }}>{l}</div>
    </div>
  );
}

/* ───────────── KUPUNA · HOME ───────────── */
function KupunaHome() {
  return (
    <div className="wf wf-page" style={{ background: KUPUNA_BG }}>
      <KupunaNav active="Home" />

      {/* Hero — full-bleed, structured */}
      <div style={{ position: "relative", height: 580 }}>
        <div className="ph" style={{ position: "absolute", inset: 0, border: "none" }}>
          <span>HERO · clean exterior, Hawai‘i Kai hillside · full-bleed</span>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(15,20,25,0.75) 0%, rgba(15,20,25,0.25) 55%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: 60, left: 48, right: 48, color: "#fff", maxWidth: 620 }}>
          <div className="kicker" style={{ color: "#d6d9dc", fontSize: 10 }}>Licensed Residential Care · Hawai‘i Kai</div>
          <div className="display" style={{ fontSize: 56, color: "#fff", marginTop: 18 }}>
            Compassionate care,<br/>professionally delivered.
          </div>
          <div style={{ marginTop: 18, fontSize: 14.5, color: "#e3e5e7", lineHeight: 1.6, maxWidth: 520 }}>
            A six-resident care home serving Honolulu families. Licensed ARCH Type II. 24/7 caregivers. Partnered with local physicians and hospice.
          </div>
          <div style={{ marginTop: 28, display: "flex", gap: 10 }}>
            <div className="btn" style={{ background: KUPUNA_ACCENT, borderColor: KUPUNA_ACCENT }}>Request a consultation</div>
            <div className="btn alt" style={{ color: "#fff", borderColor: "#fff" }}>Download care brochure ↓</div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ padding: "0 48px", marginTop: -40, position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 1, background: KUPUNA_BORDER, border: `1px solid ${KUPUNA_BORDER}` }}>
          <KupunaStat n="6" l="Resident capacity" />
          <KupunaStat n="1:3" l="Caregiver ratio, 24/7" />
          <KupunaStat n="7 yrs" l="Serving Honolulu" />
          <KupunaStat n="4" l="Levels of care" />
          <KupunaStat n="98%" l="Family satisfaction" />
        </div>
      </div>

      {/* Services grid */}
      <div style={{ padding: "80px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 32 }}>
          <div>
            <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Services</div>
            <div className="display" style={{ fontSize: 40, marginTop: 10, color: KUPUNA_INK }}>
              Four levels of care, one home.
            </div>
          </div>
          <div style={{ fontSize: 13.5, color: "#3d4650", lineHeight: 1.65, alignSelf: "end" }}>
            Casa Colina serves a full spectrum of senior care needs — from light assistance with daily living through memory care and end-of-life comfort — delivered in a residential setting with consistent caregivers.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: KUPUNA_BORDER, border: `1px solid ${KUPUNA_BORDER}` }}>
          {[
            ["01", "Assisted Living", "Daily living support with independence preserved."],
            ["02", "Memory Care", "Structured environment for dementia & Alzheimer's."],
            ["03", "Respite Care", "Short-term stays for caregiver relief."],
            ["04", "End-of-Life Comfort", "Hospice-partnered comfort care."],
          ].map(([n, t, d]) => (
            <div key={n} style={{ padding: 28, background: "#fff" }}>
              <div className="kicker" style={{ fontSize: 10, color: KUPUNA_ACCENT }}>{n}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, marginTop: 10 }}>{t}</div>
              <div style={{ fontSize: 12, color: "#3d4650", marginTop: 10, lineHeight: 1.55 }}>{d}</div>
              <div style={{ fontSize: 11.5, color: KUPUNA_ACCENT, marginTop: 18 }}>View details →</div>
            </div>
          ))}
        </div>
      </div>

      {/* Split: credentials + tour CTA */}
      <div style={{ padding: "0 48px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, padding: 36 }}>
          <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Credentials</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 26, marginTop: 10, marginBottom: 24 }}>Licensed. Inspected. Accountable.</div>
          <div className="col gap-14">
            {[
              ["State of Hawai‘i", "Licensed ARCH Type II · License #HI-ARCH-01840"],
              ["Department of Health", "Most recent inspection: March 2025 · No deficiencies"],
              ["Staff training", "All caregivers: CPR, First Aid, dementia training current"],
              ["Medical partnerships", "Primary care · on-call RN · local pharmacy · hospice"],
            ].map(([t, d]) => (
              <div key={t} style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: 14, paddingBottom: 12, borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
                <div style={{ width: 18, height: 18, border: `1.5px solid ${KUPUNA_ACCENT}`, borderRadius: 999, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: KUPUNA_ACCENT }}>✓</div>
                <div>
                  <div style={{ fontSize: 13, color: KUPUNA_INK, fontWeight: 500 }}>{t}</div>
                  <div style={{ fontSize: 11.5, color: "#5a6470", marginTop: 3 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: KUPUNA_INK, color: "#fff", padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="kicker" style={{ color: "#b3b9bf" }}>Schedule a visit</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 32, marginTop: 14, lineHeight: 1.15 }}>Visit the home before making any decision.</div>
            <div style={{ fontSize: 13, color: "#cfd3d7", marginTop: 16, lineHeight: 1.6 }}>
              We offer private tours by appointment — one family at a time. Meet the team, see the rooms, ask every question.
            </div>
          </div>
          <div style={{ marginTop: 36, borderTop: "1px solid #2a3441", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
            <div>
              <div className="kicker" style={{ color: "#b3b9bf", fontSize: 9 }}>Direct line</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 24, marginTop: 6 }}>(808) 200-1840</div>
            </div>
            <div className="btn" style={{ background: KUPUNA_ACCENT, borderColor: KUPUNA_ACCENT }}>Book a tour →</div>
          </div>
        </div>
      </div>

      {/* Who we serve */}
      <div style={{ padding: "80px 48px", background: "#fff", borderTop: `1px solid ${KUPUNA_BORDER}`, borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT, marginBottom: 8 }}>Who we serve</div>
        <div className="display" style={{ fontSize: 34, marginBottom: 28, maxWidth: 620 }}>Designed for kupuna. Trusted by referrers.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            ["Families", "Adult children researching options for an aging parent.", "View family resources →"],
            ["Discharge planners", "Hospital & SNF case managers placing patients.", "Referral process →"],
            ["Physicians", "PCPs seeking residential care for long-term patients.", "Clinical partnership →"],
          ].map(([t, d, l]) => (
            <div key={t} style={{ border: `1px solid ${KUPUNA_BORDER}`, padding: 28 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22 }}>{t}</div>
              <div style={{ fontSize: 12.5, color: "#3d4650", marginTop: 10, lineHeight: 1.55 }}>{d}</div>
              <div style={{ fontSize: 11.5, color: KUPUNA_ACCENT, marginTop: 16 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial + founder */}
      <div style={{ padding: "80px 48px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48 }}>
        <div>
          <div className="kicker" style={{ color: KUPUNA_ACCENT }}>From a family</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 28, fontStyle: "italic", marginTop: 16, lineHeight: 1.35, color: KUPUNA_INK }}>
            "After the hospital discharged Mom, we had 72 hours to find a place. Casa Colina answered on the first ring, did an intake that evening, and welcomed her two days later. Seven months in, she's thriving."
          </div>
          <div style={{ marginTop: 20, fontSize: 13 }}>— R. Kawamoto, daughter</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, padding: 24, display: "flex", gap: 16, alignItems: "center" }}>
          <div className="ph" style={{ width: 100, height: 100, borderRadius: 999, flexShrink: 0 }}><span>Kriss</span></div>
          <div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 18 }}>Speak with Kriss directly</div>
            <div style={{ fontSize: 12, color: "#5a6470", marginTop: 4 }}>Owner & ARCH administrator</div>
            <div style={{ fontSize: 11.5, color: KUPUNA_ACCENT, marginTop: 10 }}>Schedule a call →</div>
          </div>
        </div>
      </div>

      <KupunaFoot />
    </div>
  );
}

/* ───────────── KUPUNA · ABOUT ───────────── */
function KupunaAbout() {
  return (
    <div className="wf wf-page" style={{ background: KUPUNA_BG }}>
      <KupunaNav active="About" />

      <div style={{ padding: "56px 48px 40px", borderBottom: `1px solid ${KUPUNA_BORDER}`, background: "#fff" }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT }}>About Casa Colina Care</div>
        <div className="display" style={{ fontSize: 52, marginTop: 14, maxWidth: 760 }}>A licensed residential care home.<br/>A family-run mission.</div>
      </div>

      {/* Overview */}
      <div style={{ padding: "64px 48px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48 }}>
        <div>
          <div className="ph" style={{ height: 380 }}><span>facility · wide exterior</span></div>
          <div style={{ marginTop: 24, padding: 20, background: "#fff", border: `1px solid ${KUPUNA_BORDER}` }}>
            <div className="kicker" style={{ fontSize: 9.5 }}>Facility at a glance</div>
            <div className="col gap-8" style={{ marginTop: 14 }}>
              {[["Capacity", "6 residents"], ["Staff ratio", "1:3 day & night"], ["Levels of care", "4"], ["Founded", "2019"], ["License", "ARCH II #HI-01840"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, paddingBottom: 8, borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
                  <span style={{ color: "#5a6470" }}>{k}</span><span style={{ color: KUPUNA_INK, fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Our mission</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 28, marginTop: 12, lineHeight: 1.25 }}>
            To provide professional, personalized residential care in an environment that feels like home — because dignity and rigor are not opposites.
          </div>
          <hr className="hr" style={{ margin: "32px 0" }} />
          <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Who we are</div>
          <div style={{ fontSize: 13.5, color: "#3d4650", marginTop: 12, lineHeight: 1.7 }}>
            <p>Casa Colina Care is a licensed Adult Residential Care Home (ARCH Type II) on Anapalau Street in Hawai‘i Kai, founded by Kriss after a personal experience that made the gap in senior care clear: facilities too large to know residents, and unlicensed homes too small to be trusted.</p>
            <p style={{ marginTop: 12 }}>We bridge that gap. Six residents. State-licensed. Professionally staffed. Family-run. Partnered with local physicians, a registered nurse, a pharmacy, and hospice providers.</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "64px 48px", background: "#fff", borderTop: `1px solid ${KUPUNA_BORDER}`, borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT, marginBottom: 28 }}>Milestones</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, borderLeft: `1px solid ${KUPUNA_BORDER}` }}>
          {[
            ["2018", "Planning begins"],
            ["2019", "ARCH II license · doors open"],
            ["2021", "Memory care program launched"],
            ["2023", "Hospice partnership established"],
            ["2025", "DOH inspection · no deficiencies"],
          ].map(([y, t]) => (
            <div key={y} style={{ padding: "20px 24px", borderRight: `1px solid ${KUPUNA_BORDER}` }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 26, color: KUPUNA_ACCENT }}>{y}</div>
              <div style={{ fontSize: 12.5, color: KUPUNA_INK, marginTop: 8 }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials deep dive */}
      <div style={{ padding: "64px 48px" }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT, marginBottom: 8 }}>Credentials & compliance</div>
        <div className="display" style={{ fontSize: 32, marginBottom: 28 }}>Everything you'd want to verify.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            ["State License", "HI ARCH Type II #HI-01840 · Active · Renewed annually"],
            ["DOH Inspections", "Most recent March 2025 · No deficiencies · Reports available on request"],
            ["Insurance", "General liability + professional liability, current"],
            ["Staff certification", "CPR, First Aid, dementia care — all current"],
            ["Background checks", "Every staff member, renewed annually"],
            ["HIPAA compliance", "Resident records handled per HIPAA guidelines"],
          ].map(([t, d]) => (
            <div key={t} style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, padding: 22 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 17 }}>{t}</div>
              <div style={{ fontSize: 12, color: "#5a6470", marginTop: 8, lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      <KupunaFoot />
    </div>
  );
}

/* ───────────── KUPUNA · CARE ───────────── */
function KupunaCare() {
  const tiers = [
    { n: "01", t: "Assisted Living", d: "For residents who need support with activities of daily living but retain meaningful independence.", inc: ["Personal care (bathing, dressing, grooming)", "Medication management", "Meals & nutrition monitoring", "Mobility assistance", "Housekeeping & laundry", "Social engagement"] },
    { n: "02", t: "Memory Care", d: "A predictable, structured environment designed for residents living with dementia or Alzheimer's disease.", inc: ["Dementia-trained caregivers", "Structured daily routines", "Secure environment", "Cognitive engagement activities", "Specialized meal & medication protocols", "Regular family updates"] },
    { n: "03", t: "Respite Care", d: "Short-term residential care providing relief for family caregivers, typically 3 nights to 4 weeks.", inc: ["Full assisted-living amenities", "Custom short-term care plans", "Flexible scheduling", "Daily updates to family", "Medication coordination", "No long-term commitment"] },
    { n: "04", t: "End-of-Life Comfort Care", d: "Gentle, dignified care in a familiar environment, coordinated with your hospice provider of choice.", inc: ["Hospice coordination", "24-hour comfort care", "Pain & symptom monitoring", "Family welcomed without restriction", "Spiritual / cultural accommodations", "Bereavement support"] },
  ];
  return (
    <div className="wf wf-page" style={{ background: KUPUNA_BG }}>
      <KupunaNav active="Care" />

      <div style={{ padding: "56px 48px 32px", background: "#fff", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Services</div>
        <div className="display" style={{ fontSize: 46, marginTop: 14, maxWidth: 720 }}>
          A full spectrum of residential senior care.
        </div>
      </div>

      {/* Comparison matrix header */}
      <div style={{ padding: "48px" }}>
        {tiers.map((tier, i) => (
          <div key={tier.n} style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, marginBottom: 16 }}>
            <div style={{ padding: "24px 28px", display: "grid", gridTemplateColumns: "60px 1.2fr 2fr auto", gap: 24, alignItems: "center", borderBottom: `1px solid ${KUPUNA_BORDER}`, background: KUPUNA_BG }}>
              <div className="kicker" style={{ fontSize: 10, color: KUPUNA_ACCENT }}>{tier.n}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 24 }}>{tier.t}</div>
              <div style={{ fontSize: 13, color: "#3d4650" }}>{tier.d}</div>
              <div className="btn ghost" style={{ padding: "8px 14px", fontSize: 11.5 }}>Learn more →</div>
            </div>
            <div style={{ padding: 28, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {tier.inc.map(x => (
                <div key={x} style={{ fontSize: 12.5, color: "#3d4650", display: "flex", gap: 10 }}>
                  <span style={{ color: KUPUNA_ACCENT, fontSize: 13 }}>✓</span>{x}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Care team */}
      <div style={{ padding: "64px 48px", background: "#fff", borderTop: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT, marginBottom: 8 }}>Clinical partnerships</div>
        <div className="display" style={{ fontSize: 32, marginBottom: 28 }}>Your existing care team, integrated.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[["Primary care", "Your PCP, or one of our partnering physicians."], ["On-call RN", "Clinical oversight 24/7."], ["Pharmacy", "Weekly delivery & medication review."], ["Hospice", "Partnered with multiple Honolulu providers."]].map(([t, d]) => (
            <div key={t} style={{ padding: 22, border: `1px solid ${KUPUNA_BORDER}` }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18 }}>{t}</div>
              <div style={{ fontSize: 11.5, color: "#5a6470", marginTop: 8, lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
      <KupunaFoot />
    </div>
  );
}

/* ───────────── KUPUNA · GALLERY ───────────── */
function KupunaGallery() {
  return (
    <div className="wf wf-page" style={{ background: KUPUNA_BG }}>
      <KupunaNav active="Gallery" />
      <div style={{ padding: "56px 48px 32px", background: "#fff", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Facility tour</div>
        <div className="display" style={{ fontSize: 46, marginTop: 14 }}>A virtual walkthrough.</div>
      </div>

      {/* Structured grid w/ captions */}
      <div style={{ padding: 48 }}>
        {[
          ["Exterior & grounds", ["front entrance", "driveway & parking", "back lanai", "garden beds"]],
          ["Living spaces", ["shared living room", "dining area", "family room / TV", "quiet sitting nook"]],
          ["Bedrooms", ["private room A", "private room B", "shared room (2 beds)", "accessible bath"]],
          ["Kitchen & dining", ["kitchen · wide", "pantry & storage", "meal prep", "table · set for six"]],
        ].map(([section, imgs]) => (
          <div key={section} style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
              <div className="kicker" style={{ fontSize: 10, color: KUPUNA_ACCENT }}>{section}</div>
              <div style={{ fontSize: 11, color: "#5a6470" }}>4 photos</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {imgs.map(img => (
                <div key={img}>
                  <div className="ph" style={{ height: 180 }}><span>{img}</span></div>
                  <div style={{ fontSize: 10.5, color: "#5a6470", marginTop: 6, fontFamily: "var(--mono)" }}>{img}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <KupunaFoot />
    </div>
  );
}

/* ───────────── KUPUNA · TEAM ───────────── */
function KupunaTeam() {
  const people = [
    ["Kriss", "Owner, Administrator", "ARCH-certified administrator. 8 years in residential care operations."],
    ["Leilani Nakata, RN", "Clinical Lead", "RN, 12 years in geriatric nursing. On-call clinical oversight."],
    ["Marco Silva, CNA", "Senior Caregiver", "CNA. 6 years at Casa Colina. Evening shift lead."],
    ["Liz Kealoha", "Weekend Caregiver", "Retired educator, trained caregiver, 4 years on team."],
    ["Dr. M. Nakamura, MD", "Partnering Physician", "Primary care, monthly on-site visits."],
    ["Pharmacy partner", "Hawai‘i Kai Pharmacy", "Weekly delivery, medication reconciliation."],
  ];
  return (
    <div className="wf wf-page" style={{ background: KUPUNA_BG }}>
      <KupunaNav active="Team" />
      <div style={{ padding: "56px 48px 32px", background: "#fff", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Team & partners</div>
        <div className="display" style={{ fontSize: 46, marginTop: 14 }}>Qualified. Consistent. Local.</div>
      </div>

      <div style={{ padding: 48 }}>
        <div style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 2fr 120px", gap: 20, padding: "16px 24px", borderBottom: `1px solid ${KUPUNA_BORDER}`, background: KUPUNA_BG }}>
            {["Name", "Role", "Background", ""].map(h => <div key={h} className="kicker" style={{ fontSize: 9 }}>{h}</div>)}
          </div>
          {people.map(([n, r, b], i) => (
            <div key={n} style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 2fr 120px", gap: 20, padding: "22px 24px", borderBottom: i === people.length - 1 ? "none" : `1px solid ${KUPUNA_BORDER}`, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div className="ph" style={{ width: 44, height: 44, borderRadius: 999 }}><span></span></div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 17 }}>{n}</div>
              </div>
              <div style={{ fontSize: 12, color: "#3d4650" }}>{r}</div>
              <div style={{ fontSize: 12, color: "#5a6470" }}>{b}</div>
              <div style={{ fontSize: 11, color: KUPUNA_ACCENT, textAlign: "right" }}>Full bio →</div>
            </div>
          ))}
        </div>
      </div>
      <KupunaFoot />
    </div>
  );
}

/* ───────────── KUPUNA · FAQ ───────────── */
function KupunaFAQ() {
  const qs = [
    ["Is Casa Colina state-licensed?", "Yes. We hold a Hawai‘i ARCH Type II license (#HI-01840), renewed annually, with most recent DOH inspection in March 2025 (no deficiencies)."],
    ["What is your staff-to-resident ratio?", "1:3 day and night, with an awake caregiver always on duty."],
    ["How do admissions work?", "Initial consultation (phone or in person), in-home assessment, care plan proposal, 1–2 week transition."],
    ["Do you accept long-term care insurance?", "Yes — we work with most LTC insurers and can coordinate billing directly with your administrator."],
    ["Do you accept Medicaid?", "Medicaid acceptance is in process. Please call for current status."],
    ["What's your cancellation policy?", "30 days written notice. No hidden fees or penalties."],
    ["How are medical needs handled?", "We coordinate with your PCP (or one of ours), an on-call RN, a local pharmacy, and hospice providers as needed."],
    ["Can residents bring personal furniture?", "Yes. We encourage personal belongings — they support comfort and orientation, especially for memory care."],
    ["Is the home secure for dementia residents?", "Yes. The home is equipped with memory-care-appropriate security, and staff are trained in dementia care protocols."],
    ["What happens if care needs change?", "We reassess collaboratively. Most transitions we can accommodate; for complex medical needs, we assist with placement."],
  ];
  return (
    <div className="wf wf-page" style={{ background: KUPUNA_BG }}>
      <KupunaNav active="FAQ" />
      <div style={{ padding: "56px 48px 32px", background: "#fff", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT }}>FAQ</div>
        <div className="display" style={{ fontSize: 46, marginTop: 14 }}>Frequently asked questions.</div>
      </div>

      <div style={{ padding: "40px 48px 60px", display: "grid", gridTemplateColumns: "220px 1fr", gap: 40 }}>
        <div className="col gap-8" style={{ position: "sticky", top: 20, alignSelf: "start" }}>
          <div className="kicker" style={{ fontSize: 9, color: KUPUNA_ACCENT }}>Jump to</div>
          {["Licensing", "Admissions", "Care", "Cost & insurance", "Daily life"].map(c => (
            <div key={c} style={{ fontSize: 12, color: KUPUNA_INK, padding: "6px 0", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>{c}</div>
          ))}
        </div>
        <div className="col">
          {qs.map(([q, a], i) => (
            <div key={q} style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, borderTop: i === 0 ? `1px solid ${KUPUNA_BORDER}` : "none", padding: "22px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: 18 }}>{q}</div>
                <div style={{ fontSize: 18, color: "#5a6470" }}>−</div>
              </div>
              <div style={{ fontSize: 12.5, color: "#3d4650", marginTop: 10, lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>
      </div>
      <KupunaFoot />
    </div>
  );
}

/* ───────────── KUPUNA · TESTIMONIALS ───────────── */
function KupunaTestimonials() {
  const cases = [
    { head: "Post-hospital discharge placement", body: "After Mom's stroke, we had 72 hours. Casa Colina did an intake that evening and welcomed her two days later.", a: "R. Kawamoto · daughter", tag: "Transition from acute care" },
    { head: "Memory care transition", body: "Dad's dementia progressed faster than we expected. They adapted his care plan every two weeks without ever making us feel rushed.", a: "J. Reyes · son", tag: "Memory care" },
    { head: "End-of-life at home", body: "Mom spent her last three weeks here with hospice. The staff treated her — and us — like family.", a: "The Tanaka family", tag: "End-of-life comfort" },
    { head: "Long-term assisted living", body: "Three years in, Dad is himself. He laughs, he sings, he complains about the coffee. All signs of life.", a: "A. Kekoa · daughter", tag: "Assisted living · 3 yrs" },
  ];
  return (
    <div className="wf wf-page" style={{ background: KUPUNA_BG }}>
      <KupunaNav active="Testimonials" />
      <div style={{ padding: "56px 48px 32px", background: "#fff", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Family stories</div>
        <div className="display" style={{ fontSize: 46, marginTop: 14 }}>Real cases. Real outcomes.</div>
      </div>

      <div style={{ padding: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {cases.map((c, i) => (
          <div key={i} style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, padding: 28 }}>
            <div style={{ display: "inline-block", padding: "3px 8px", background: KUPUNA_BG, border: `1px solid ${KUPUNA_BORDER}`, fontSize: 10, color: "#5a6470", fontFamily: "var(--mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.tag}</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, marginTop: 14 }}>{c.head}</div>
            <div style={{ fontSize: 13, color: "#3d4650", marginTop: 12, lineHeight: 1.6, fontStyle: "italic" }}>"{c.body}"</div>
            <div style={{ fontSize: 11.5, color: "#5a6470", marginTop: 18, paddingTop: 14, borderTop: `1px solid ${KUPUNA_BORDER}` }}>— {c.a}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: "20px 48px 80px" }}>
        <div style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, padding: 28, display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22 }}>Speak with a reference family</div>
            <div style={{ fontSize: 12, color: "#5a6470", marginTop: 6 }}>We'll connect you, with their permission, to a current or former family whose situation matches yours.</div>
          </div>
          <div className="btn" style={{ background: KUPUNA_ACCENT, borderColor: KUPUNA_ACCENT }}>Request reference</div>
        </div>
      </div>
      <KupunaFoot />
    </div>
  );
}

/* ───────────── KUPUNA · PRICING ───────────── */
function KupunaPricing() {
  return (
    <div className="wf wf-page" style={{ background: KUPUNA_BG }}>
      <KupunaNav active="Pricing" />
      <div style={{ padding: "56px 48px 32px", background: "#fff", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Cost & insurance</div>
        <div className="display" style={{ fontSize: 46, marginTop: 14, maxWidth: 760 }}>Transparent scope. Private quotes.</div>
        <div style={{ fontSize: 13.5, color: "#3d4650", marginTop: 14, maxWidth: 600, lineHeight: 1.6 }}>
          We publish exactly what's included and what isn't. Monthly rates depend on level of care and are quoted after a short consultation.
        </div>
      </div>

      {/* Matrix */}
      <div style={{ padding: 48 }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT, marginBottom: 14 }}>Scope matrix</div>
        <div style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 0, background: KUPUNA_BG, padding: "14px 20px", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
            {["", "Assisted Living", "Memory Care", "Respite", "End-of-Life"].map(h => <div key={h} className="kicker" style={{ fontSize: 9 }}>{h}</div>)}
          </div>
          {[
            ["Room & board", "✓", "✓", "✓", "✓"],
            ["24/7 awake caregivers", "✓", "✓", "✓", "✓"],
            ["Meals & snacks", "✓", "✓", "✓", "✓"],
            ["Medication management", "✓", "✓", "✓", "✓"],
            ["Housekeeping & laundry", "✓", "✓", "✓", "✓"],
            ["Structured memory programs", "—", "✓", "—", "—"],
            ["Hospice coordination", "—", "—", "—", "✓"],
            ["Physician visits", "billed", "billed", "billed", "billed"],
            ["Prescriptions", "billed", "billed", "billed", "billed"],
            ["Outside transport", "billed", "billed", "billed", "billed"],
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 0, padding: "12px 20px", borderBottom: i === 9 ? "none" : `1px solid ${KUPUNA_BORDER}`, alignItems: "center" }}>
              {row.map((cell, j) => (
                <div key={j} style={{ fontSize: 12, color: j === 0 ? KUPUNA_INK : cell === "✓" ? KUPUNA_ACCENT : "#9aa2ab", fontWeight: j === 0 ? 500 : 400 }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Payment sources */}
      <div style={{ padding: "0 48px 48px" }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT, marginBottom: 14 }}>Accepted payment sources</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {[
            ["Private pay", "Monthly billing"],
            ["Long-term care insurance", "Direct billing, most carriers"],
            ["VA Aid & Attendance", "Application assistance available"],
            ["Medicaid", "In process · call for status"],
          ].map(([t, s]) => (
            <div key={t} style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, padding: 22 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18 }}>{t}</div>
              <div style={{ fontSize: 11.5, color: "#5a6470", marginTop: 8 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "48px", background: KUPUNA_INK, color: "#fff", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32, alignItems: "center" }}>
        <div>
          <div className="kicker" style={{ color: "#b3b9bf" }}>Get a detailed quote</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 30, marginTop: 10 }}>One short call. One honest number.</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="btn" style={{ background: KUPUNA_ACCENT, borderColor: KUPUNA_ACCENT }}>Request quote →</div>
        </div>
      </div>
      <KupunaFoot />
    </div>
  );
}

/* ───────────── KUPUNA · CONTACT ───────────── */
function KupunaContact() {
  return (
    <div className="wf wf-page" style={{ background: KUPUNA_BG }}>
      <KupunaNav active="Contact" />
      <div style={{ padding: "56px 48px 32px", background: "#fff", borderBottom: `1px solid ${KUPUNA_BORDER}` }}>
        <div className="kicker" style={{ color: KUPUNA_ACCENT }}>Contact</div>
        <div className="display" style={{ fontSize: 46, marginTop: 14 }}>Request a consultation.</div>
      </div>

      <div style={{ padding: 48, display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32 }}>
        {/* Form */}
        <div style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, padding: 36 }}>
          <div style={{ display: "flex", gap: 6, fontSize: 11, color: "#5a6470", marginBottom: 24 }}>
            <span style={{ color: KUPUNA_ACCENT, fontWeight: 500 }}>01. Details</span>
            <span>→</span>
            <span>02. Situation</span>
            <span>→</span>
            <span>03. Schedule</span>
          </div>

          <div className="col gap-20">
            {[
              [["Full name", "Preferred contact"]],
              [["Email", "Phone"]],
            ].map((pair, pi) => (
              <div key={pi} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {pair[0].map(l => (
                  <div key={l}>
                    <div className="kicker" style={{ fontSize: 9.5 }}>{l}</div>
                    <div style={{ marginTop: 6, height: 40, background: KUPUNA_BG, border: `1px solid ${KUPUNA_BORDER}` }} />
                  </div>
                ))}
              </div>
            ))}

            <div>
              <div className="kicker" style={{ fontSize: 9.5 }}>Relationship to prospective resident</div>
              <div style={{ marginTop: 6, height: 40, background: KUPUNA_BG, border: `1px solid ${KUPUNA_BORDER}`, display: "flex", alignItems: "center", padding: "0 14px", fontSize: 12, color: "#5a6470" }}>Select...</div>
            </div>

            <div>
              <div className="kicker" style={{ fontSize: 9.5, marginBottom: 8 }}>Level of care needed</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                {["Assisted living", "Memory care", "Respite", "End-of-life"].map((c, i) => (
                  <div key={c} style={{ padding: "10px 14px", fontSize: 11.5, border: `1px solid ${i === 0 ? KUPUNA_ACCENT : KUPUNA_BORDER}`, background: i === 0 ? "#f8ede6" : "#fff", color: i === 0 ? KUPUNA_ACCENT : KUPUNA_INK }}>{c}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="kicker" style={{ fontSize: 9.5 }}>Urgency</div>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                {["Immediate (within 7 days)", "Within 30 days", "Researching"].map((c, i) => (
                  <div key={c} style={{ padding: "8px 14px", fontSize: 11.5, border: `1px solid ${KUPUNA_BORDER}`, borderRadius: 999 }}>{c}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="kicker" style={{ fontSize: 9.5 }}>Situation (optional)</div>
              <div style={{ marginTop: 6, height: 100, background: KUPUNA_BG, border: `1px solid ${KUPUNA_BORDER}` }} />
            </div>

            <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 11, color: "#5a6470" }}>Submissions are private · HIPAA-aware · never shared</div>
              <div className="btn" style={{ background: KUPUNA_ACCENT, borderColor: KUPUNA_ACCENT }}>Next →</div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col gap-16">
          <div style={{ background: KUPUNA_INK, color: "#fff", padding: 28 }}>
            <div className="kicker" style={{ color: "#b3b9bf" }}>Direct line</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 28, marginTop: 10 }}>(808) 200-1840</div>
            <div style={{ fontSize: 12, color: "#c9bda8", marginTop: 14 }}>Kriss answers Mon–Sat, 8a–7p.<br/>Urgent after hours: same number.</div>
          </div>

          <div style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, padding: 20 }}>
            <div className="kicker" style={{ fontSize: 9.5, color: KUPUNA_ACCENT }}>Location</div>
            <div className="ph" style={{ height: 140, marginTop: 12 }}><span>MAP · Hawai‘i Kai</span></div>
            <div style={{ fontSize: 12, marginTop: 12, lineHeight: 1.5 }}>189 Anapalau Street<br/>Hawai‘i Kai · Honolulu, HI 96825</div>
          </div>

          <div style={{ background: "#fff", border: `1px solid ${KUPUNA_BORDER}`, padding: 20 }}>
            <div className="kicker" style={{ fontSize: 9.5, color: KUPUNA_ACCENT }}>For healthcare referrers</div>
            <div style={{ fontSize: 12, marginTop: 10, color: "#3d4650", lineHeight: 1.55 }}>Hospital case managers and discharge planners: use the dedicated referral line for faster intake.</div>
            <div style={{ fontSize: 11.5, color: KUPUNA_ACCENT, marginTop: 12 }}>Referral packet →</div>
          </div>
        </div>
      </div>
      <KupunaFoot />
    </div>
  );
}

Object.assign(window, {
  KupunaHome, KupunaAbout, KupunaCare, KupunaGallery, KupunaTeam,
  KupunaFAQ, KupunaTestimonials, KupunaPricing, KupunaContact
});
