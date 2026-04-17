"use client";

import { useState } from "react";

const C = {
  bg: "#f9f7f4", white: "#ffffff", dark: "#1c1c1a",
  accent: "#c94a1f", accentHover: "#a83c18",
  text: "#1c1c1a", muted: "#666560", border: "#dddbd6", light: "#f0ede8",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
  body { background: ${C.bg}; color: ${C.text}; font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.6; }
  a { text-decoration: none; color: inherit; }
  ::selection { background: ${C.accent}; color: #fff; }
  .serif { font-family: 'Playfair Display', Georgia, serif; }

  /* ── Buttons ── */
  .btn-primary {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    background: ${C.accent}; color: #fff; font-size: 16px; font-weight: 600;
    padding: 16px 28px; border: none; cursor: pointer; transition: background 150ms; text-decoration: none;
  }
  .btn-primary:hover { background: ${C.accentHover}; }
  .btn-secondary {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    background: transparent; color: ${C.dark}; font-size: 15px; font-weight: 600;
    padding: 14px 28px; border: 2px solid ${C.dark}; cursor: pointer; transition: all 150ms; text-decoration: none;
  }
  .btn-secondary:hover { background: ${C.dark}; color: #fff; }

  /* ── Service rows (mobile) ── */
  .svc-row { display: flex; align-items: flex-start; gap: 14px; padding: 16px 0; border-bottom: 1px solid ${C.border}; }
  .svc-row:last-child { border-bottom: none; }
  .svc-icon {
    width: 42px; height: 42px; flex-shrink: 0;
    background: ${C.light}; border: 1px solid ${C.border};
    display: flex; align-items: center; justify-content: center; font-size: 18px;
  }
  .svc-icon.featured { background: ${C.accent}; border-color: ${C.accent}; }
  .price-tag {
    display: inline-block; font-size: 12px; font-weight: 700;
    letter-spacing: 0.04em; color: ${C.accent};
    background: #fdf0ec; border: 1px solid #f5c4b0; padding: 3px 10px; margin-top: 4px;
  }

  /* ── Service cards (desktop) ── */
  .svc-card {
    background: ${C.white}; border: 1px solid ${C.border};
    padding: 24px; transition: border-color 200ms, transform 200ms;
  }
  .svc-card:hover { border-color: ${C.accent}; transform: translateY(-2px); }
  .svc-card.featured { border: 2px solid ${C.accent}; }

  /* ── Nav ── */
  .nav-link {
    font-size: 13px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
    color: ${C.muted}; padding: 6px 0; border-bottom: 2px solid transparent; transition: all 180ms;
  }
  .nav-link:hover { color: ${C.accent}; border-bottom-color: ${C.accent}; }

  /* ── Misc ── */
  .section-label {
    font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; color: ${C.accent}; margin-bottom: 10px; display: block;
  }
  .stat-box { flex: 1 1 0; padding: 20px 16px; background: ${C.white}; border: 1px solid ${C.border}; text-align: center; }
  .step-num {
    width: 36px; height: 36px; flex-shrink: 0;
    background: ${C.accent}; color: #fff;
    display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 700;
  }
  .faq-btn {
    width: 100%; display: flex; justify-content: space-between; align-items: center;
    padding: 18px 0; background: none; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600;
    color: ${C.text}; text-align: left; gap: 12px;
  }
  .faq-body { overflow: hidden; transition: max-height 300ms ease; }
  .tick { color: ${C.accent}; font-size: 15px; flex-shrink: 0; margin-top: 2px; }
  .pricing-card {
    background: ${C.white}; border: 1px solid ${C.border}; padding: 32px 28px;
    transition: transform 200ms;
  }
  .pricing-card:hover { transform: translateY(-3px); }
  .pricing-card.featured { background: ${C.dark}; border-color: ${C.accent}; border-width: 2px; }

  /* ── Marquee ── */
  .marquee-wrap { overflow: hidden; background: ${C.dark}; padding: 13px 0; }
  .marquee-track { display: flex; white-space: nowrap; animation: marquee 30s linear infinite; }
  @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }

  /* ── Desktop overrides ── */
  @media (min-width: 768px) {
    .mob-only { display: none !important; }
    .desk-only { display: flex !important; }

    /* Nav */
    .desk-nav { display: flex !important; }
    .mob-nav-toggle { display: none !important; }

    /* Hero */
    .hero-inner { max-width: 1180px; margin: 0 auto; padding: 80px 48px 0 !important; }
    .hero-h1 { font-size: clamp(3rem, 5vw, 5.2rem) !important; }
    .hero-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
    .hero-btns { flex-direction: row !important; }
    .hero-btns .btn-primary, .hero-btns .btn-secondary { width: auto !important; }
    .hero-trust { margin-top: 28px !important; }

    /* Stats */
    .stats-inner { max-width: 1180px; margin: 0 auto; padding: 28px 48px !important; }
    .stats-row { justify-content: flex-start !important; gap: 16px !important; }
    .stat-box { max-width: 220px !important; }

    /* Services */
    .services-inner { max-width: 1180px; margin: 0 auto; padding: 72px 48px !important; }
    .svc-grid { display: grid !important; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .svc-list { display: none !important; }
    .svc-show-more { display: none !important; }

    /* How it works */
    .how-inner { max-width: 1180px; margin: 0 auto; padding: 72px 48px !important; }
    .steps-grid { display: grid !important; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .steps-list { display: none !important; }

    /* Pricing */
    .pricing-inner { max-width: 1180px; margin: 0 auto; padding: 72px 48px !important; }
    .pricing-grid { display: grid !important; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .pricing-list { display: none !important; }

    /* Why us */
    .why-inner { max-width: 1180px; margin: 0 auto; padding: 72px 48px !important; }
    .why-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 20px; }
    .why-list { display: none !important; }

    /* FAQ */
    .faq-inner { max-width: 1180px; margin: 0 auto; padding: 72px 48px !important; }
    .faq-cols { display: grid !important; grid-template-columns: 1fr 1fr; gap: 0 64px; }

    /* Team */
    .team-inner { max-width: 1180px; margin: 0 auto; padding: 72px 48px !important; }
    .team-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
    .team-cards { display: flex !important; flex-direction: column; gap: 16px; }

    /* CTA */
    .cta-inner { max-width: 1180px; margin: 0 auto; padding: 80px 48px !important; }
    .cta-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
    .cta-btn-wrap { flex-direction: row !important; }

    /* Footer */
    .footer-inner { max-width: 1180px; margin: 0 auto; padding: 36px 48px !important; display: flex !important; justify-content: space-between; align-items: center; }
  }

  @media (max-width: 767px) {
    .desk-only { display: none !important; }
    .mob-only { display: block !important; }
    .desk-nav { display: none !important; }
    .steps-grid { display: none !important; }
    .svc-grid { display: none !important; }
    .pricing-grid { display: none !important; }
    .why-grid { display: none !important; }
    .faq-cols { display: block !important; }
    .team-grid { display: block !important; }
    .cta-grid { display: block !important; }
    .footer-inner { display: block !important; }
    .hero-grid { display: block !important; }
  }
`;

const services = [
  { icon: "🤖", featured: true, name: "Smart Operations Agent", tagline: "Replaces a full-time coordinator", desc: "Handles all communication between your team, your clients, and your staff — automatically. Schedules jobs, sends updates, confirms bookings, and keeps everyone in the loop without anyone lifting a finger.", example: "e.g. Pest control: technician gets job details, homeowner gets reminders, office gets updates — all on autopilot.", price: "$597–$1,197/mo" },
  { icon: "📞", featured: true, name: "AI Phone Receptionist", tagline: "Answers every call, 24/7", desc: "Never miss a call again. This AI picks up, answers questions, and books appointments — even at midnight on a Sunday.", price: "$697–$1,497/mo" },
  { icon: "⚡", featured: false, name: "Instant Lead Response", tagline: "Reply in 5 seconds, not 5 hours", desc: "The moment someone inquires, they get a reply. Qualify leads, answer questions, book calls — before your competitor even sees the notification.", price: "$497–$997/mo" },
  { icon: "💬", featured: false, name: "Automated Follow-Ups", tagline: "Most sales need 5+ touchpoints", desc: "Stop losing deals because nobody followed up. We send the right message at the right time — by text, email, or DM — until they're ready to buy.", price: "$497–$997/mo" },
  { icon: "🔄", featured: false, name: "Reactivate Old Customers", tagline: "Turn your contact list into cash", desc: "You have hundreds of past clients sitting in a spreadsheet doing nothing. We reach out on your behalf and bring them back — average return of $12 for every $1 spent.", price: "$497–$997/mo" },
  { icon: "⭐", featured: false, name: "5-Star Review Builder", tagline: "More reviews = more trust = more sales", desc: "After every job, happy customers automatically get a review request. Negative feedback is flagged privately before it hits Google.", price: "$297–$597/mo" },
  { icon: "🌐", featured: false, name: "Website Chat Agent", tagline: "Your website works while you sleep", desc: "Visitors land on your site at any hour. This AI chats with them, answers questions, and books them in — no human needed.", price: "$397–$897/mo" },
  { icon: "📄", featured: false, name: "Invoice & Document Autopilot", tagline: "Stop manual data entry forever", desc: "Invoices, receipts, and forms get read and filed automatically. What used to take 10 hours a week takes zero.", price: "$597–$1,497/mo" },
  { icon: "📊", featured: false, name: "Automated Reports & Alerts", tagline: "Know your numbers without asking", desc: "Every morning, your key business numbers land in your inbox or phone. No logging into dashboards. No chasing your team.", price: "$297–$797/mo" },
];

const plans = [
  { name: "Starter", from: "$797/mo", desc: "Stop losing leads to slow responses.", items: ["Instant Lead Response", "Automated Follow-Ups", "Automated Reports"] },
  { name: "Growth", from: "$1,497/mo", featured: true, desc: "Full revenue engine. Our most popular.", items: ["Instant Lead Response", "Follow-Ups", "Reactivate Old Customers", "Review Builder", "Website Chat Agent"] },
  { name: "Full Team", from: "$2,997/mo", desc: "Replace an entire department with AI.", items: ["Smart Operations Agent", "AI Phone Receptionist", "Lead Response", "Follow-Ups", "Reactivation", "Reviews", "Chat Agent", "Reports"] },
];

const faqs: [string, string][] = [
  ["Do I need to know anything about AI?", "Not at all. You don't need to understand how it works. You just need to tell us what problem you want solved, and we build the solution."],
  ["Will this work for my type of business?", "We work with service businesses, local businesses, and B2B companies. If your business involves leads, calls, appointments, or repeat customers — it will work."],
  ["What if I already have a CRM or booking system?", "We connect to most tools your business already uses — no need to switch anything. We build around what you have."],
  ["How soon will I see results?", "Most clients are live within 2 weeks. Faster lead response and more reviews often show up in the first month."],
  ["What does 'no contracts' really mean?", "You pay month to month. If you want to stop, give us 30 days' notice and that's it. No penalties, no fine print."],
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button className="faq-btn" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span style={{ fontSize: 22, color: C.accent, lineHeight: 1, flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform 200ms", display: "inline-block" }}>+</span>
      </button>
      <div className="faq-body" style={{ maxHeight: open ? 200 : 0 }}>
        <p style={{ paddingBottom: 18, fontSize: 15, lineHeight: 1.75, color: C.muted }}>{a}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 5);
  const marq = ["Smart Operations Agent","AI Receptionist","Lead Response","Follow-Ups","Reactivation","Review Builder","Website Chat","Document Autopilot","Reports & Alerts"];

  return (
    <div style={{ background: C.bg }}>
      <style>{css}</style>

      {/* ══ NAV ══ */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: C.white, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
            <a href="#" style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
              <span className="serif" style={{ fontSize: 22, fontWeight: 700 }}>Pivotix</span>
              <span style={{ fontSize: 22, color: C.accent, fontWeight: 700 }}>AI</span>
            </a>
            {/* Desktop nav */}
            <nav className="desk-nav" style={{ gap: 36, alignItems: "center" }}>
              {[["What We Do","#services"],["Pricing","#pricing"],["Questions","#faq"],["Talk to Us","#contact"]].map(([l,h]) => (
                <a key={l} href={h} className="nav-link">{l}</a>
              ))}
              <a href="#contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: 13 }}>Book Free Call →</a>
            </nav>
            {/* Mobile toggle */}
            <button className="mob-nav-toggle" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: C.dark, padding: "4px 0" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
          {menuOpen && (
            <div style={{ borderTop: `1px solid ${C.border}`, paddingBottom: 8 }}>
              {[["What We Do","#services"],["Pricing","#pricing"],["Questions","#faq"],["Talk to Us","#contact"]].map(([l,h]) => (
                <a key={l} href={h} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "13px 0", borderBottom: `1px solid ${C.border}`, fontSize: 15, fontWeight: 600 }}>{l}</a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{ background: C.white, borderBottom: `1px solid ${C.border}` }}>
        <div className="hero-inner" style={{ padding: "40px 20px 0" }}>
          <div className="hero-grid">
            {/* Left */}
            <div>
              <span className="section-label">AI Automation for Growing Businesses</span>
              <h1 className="serif hero-h1" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 16 }}>
                Run more of your business<br />
                <span style={{ color: C.accent }}>without more staff.</span>
              </h1>
              <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.75, marginBottom: 24 }}>
                We set up AI systems that respond to your leads, answer your phones, follow up with customers, and handle your team&apos;s back-and-forth — all automatically.{" "}
                <strong style={{ color: C.text }}>You get more done. You hire less. You earn more.</strong>
              </p>
              <div className="hero-trust" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28, padding: "12px 14px", background: "#fdf0ec", border: `1px solid #f5c4b0` }}>
                <span style={{ fontSize: 18 }}>✅</span>
                <span style={{ fontSize: 14, color: C.text, fontWeight: 500 }}>Most clients see results within the first 2 weeks.</span>
              </div>
              <div className="hero-btns" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="#contact" className="btn-primary">Book a Free 30-Min Call →</a>
                <a href="#services" className="btn-secondary">See What We Offer</a>
              </div>
              {/* Desktop trust strip */}
              <div className="desk-only" style={{ gap: 32, marginTop: 40, paddingTop: 28, borderTop: `1px solid ${C.border}` }}>
                {["No contracts","Results in 2 weeks","Talk to real people","No tech knowledge needed"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.muted, fontWeight: 500 }}>
                    <span style={{ color: C.accent, fontSize: 14 }}>✓</span>{t}
                  </div>
                ))}
              </div>
            </div>
            {/* Right — desktop feature preview */}
            <div className="desk-only" style={{ flexDirection: "column", gap: 12 }}>
              <div style={{ background: C.dark, padding: "28px 28px 24px", borderLeft: `4px solid ${C.accent}` }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, marginBottom: 14 }}>Live Right Now</div>
                {[["⚡ Lead replied to","0.2 seconds ago"],["📞 Call answered","AI Receptionist"],["⭐ Review request sent","after job #3841"],["🔄 Follow-up sent","Day 3 sequence"],["🤖 Job scheduled","Ops Agent → Team"]].map(([a,b]) => (
                  <div key={a} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.07)", fontSize: 13 }}>
                    <span style={{ color: "#fff", fontWeight: 500 }}>{a}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>{b}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                {[["5 sec","Response time"],["24/7","Always on"],["1,200%","Avg ROI"]].map(([v,l]) => (
                  <div key={l} className="stat-box" style={{ padding: "16px 12px" }}>
                    <div className="serif" style={{ fontSize: 24, fontWeight: 700, color: C.accent, lineHeight: 1 }}>{v}</div>
                    <div style={{ fontSize: 11, color: C.muted, marginTop: 5, lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Stats — mobile only */}
        <div className="stats-inner mob-only" style={{ padding: "24px 20px", borderTop: `1px solid ${C.border}` }}>
          <div className="stats-row" style={{ display: "flex", gap: 10 }}>
            {[["5 sec","Lead response time"],["24/7","Always on"],["1,200%","Avg. reactivation ROI"]].map(([v,l]) => (
              <div key={l} className="stat-box">
                <div className="serif" style={{ fontSize: 26, fontWeight: 700, color: C.accent, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 5, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marq,...marq,...marq,...marq].map((s,i) => (
            <span key={i} style={{ padding: "0 28px", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", borderRight: "1px solid rgba(255,255,255,0.1)" }}>{s}</span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section id="services" style={{ borderBottom: `1px solid ${C.border}` }}>
        <div className="services-inner" style={{ padding: "36px 20px 28px" }}>
          <span className="section-label">What We Build For You</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            <div>
              <h2 className="serif" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
                10 ways we save you<br />time and money
              </h2>
            </div>
            <p style={{ fontSize: 14, color: C.muted, maxWidth: 400, lineHeight: 1.65 }}>
              Each one is a system we set up and run for you — no technical knowledge needed on your end.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="svc-grid">
            {services.map((svc, i) => (
              <div key={i} className={`svc-card${svc.featured ? " featured" : ""}`}>
                {svc.featured && (
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, marginBottom: 10 }}>★ Featured</div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div className={`svc-icon${svc.featured ? " featured" : ""}`} style={{ width: 38, height: 38, fontSize: 16 }}>
                    <span style={{ filter: svc.featured ? "brightness(0) invert(1)" : "none" }}>{svc.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.25 }}>{svc.name}</div>
                    <div style={{ fontSize: 12, color: C.accent, fontWeight: 600 }}>{svc.tagline}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65, marginBottom: 10 }}>{svc.desc}</p>
                {svc.example && <p style={{ fontSize: 12, color: C.muted, fontStyle: "italic", lineHeight: 1.5, marginBottom: 10 }}>{svc.example}</p>}
                <div className="price-tag">{svc.price}</div>
              </div>
            ))}
          </div>

          {/* Mobile list */}
          <div className="svc-list">
            {visibleServices.map((svc, i) => (
              <div key={i} className="svc-row">
                <div className={`svc-icon${svc.featured ? " featured" : ""}`}>
                  <span style={{ filter: svc.featured ? "brightness(0) invert(1)" : "none" }}>{svc.icon}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>{svc.name}</div>
                  <div style={{ fontSize: 12, color: C.accent, fontWeight: 600, marginTop: 1 }}>{svc.tagline}</div>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, marginTop: 6 }}>{svc.desc}</p>
                  {svc.example && <p style={{ fontSize: 12, color: C.muted, fontStyle: "italic", marginTop: 5, lineHeight: 1.5 }}>{svc.example}</p>}
                  <div className="price-tag">{svc.price}</div>
                </div>
              </div>
            ))}
            {!showAll && (
              <button onClick={() => setShowAll(true)} className="svc-show-more" style={{ width: "100%", marginTop: 16, padding: "14px", background: C.light, border: `1px solid ${C.border}`, fontSize: 14, fontWeight: 600, cursor: "pointer", color: C.text }}>
                Show {services.length - 5} more services ↓
              </button>
            )}
            {showAll && (
              <div style={{ marginTop: 20, padding: "16px", background: "#fdf0ec", border: `1px solid #f5c4b0` }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 4 }}>Not sure which ones you need?</p>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>Book a free call. We&apos;ll look at your business and tell you exactly which 2–3 would make the biggest difference.</p>
                <a href="#contact" style={{ display: "inline-block", marginTop: 12, fontSize: 14, fontWeight: 700, color: C.accent }}>Book the call →</a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{ background: C.dark, borderBottom: `1px solid #333` }}>
        <div className="how-inner" style={{ padding: "36px 20px" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent, marginBottom: 10, display: "block" }}>How It Works</span>
          <h2 className="serif" style={{ fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 32, lineHeight: 1.25 }}>
            Up and running in under 2 weeks.
          </h2>

          {/* Desktop steps grid */}
          <div className="steps-grid">
            {[["1","Free 30-min call","You tell us about your business. We find where you're losing time and money."],["2","We build your system","Our team sets everything up. You don't touch any software."],["3","You go live","Leads get answered. Calls get picked up. Follow-ups go out automatically."],["4","We keep it running","We monitor and improve every month. You watch the results."]].map(([n,t,d]) => (
              <div key={n} style={{ padding: "28px 24px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="serif" style={{ fontSize: 40, fontWeight: 700, color: C.accent, lineHeight: 1, marginBottom: 16 }}>{n}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{t}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{d}</div>
              </div>
            ))}
          </div>

          {/* Mobile steps list */}
          <div className="steps-list">
            {[["1","Free 30-min call","You tell us about your business. We listen, ask questions, and figure out where you're losing time and money."],["2","We build your system","Our team sets everything up. You don't touch any software. We handle it all."],["3","You go live","Your AI systems start working. Leads get answered. Calls get picked up. Follow-ups go out."],["4","We keep it running","We monitor and improve your systems every month. You just watch the results."]].map(([n,t,d]) => (
              <div key={n} style={{ display: "flex", gap: 14, marginBottom: 22 }}>
                <div className="step-num">{n}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{t}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary" style={{ marginTop: 32, display: "inline-flex" }}>Get Started — It&apos;s Free →</a>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section id="pricing" style={{ borderBottom: `1px solid ${C.border}`, background: C.white }}>
        <div className="pricing-inner" style={{ padding: "36px 20px" }}>
          <span className="section-label">Simple Pricing</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            <h2 className="serif" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>Pick a starting point.</h2>
            <p style={{ fontSize: 14, color: C.muted, maxWidth: 360, lineHeight: 1.65 }}>No contracts. No hidden fees. Cancel any time. Most clients recoup their investment in the first month.</p>
          </div>

          {/* Desktop pricing grid */}
          <div className="pricing-grid">
            {plans.map((p, i) => (
              <div key={i} className={`pricing-card${p.featured ? " featured" : ""}`}>
                {p.featured && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, marginBottom: 10 }}>★ Most Popular</div>}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <div className="serif" style={{ fontSize: 22, fontWeight: 700, color: p.featured ? "#fff" : C.text }}>{p.name}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: p.featured ? "#fff" : C.accent }}>{p.from}</div>
                </div>
                <p style={{ fontSize: 14, color: p.featured ? "rgba(255,255,255,0.6)" : C.muted, marginBottom: 20, lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ marginBottom: 24 }}>
                  {p.items.map(item => (
                    <div key={item} style={{ display: "flex", gap: 8, padding: "7px 0", fontSize: 13, color: p.featured ? "rgba(255,255,255,0.8)" : C.text, borderBottom: `1px solid ${p.featured ? "rgba(255,255,255,0.08)" : C.border}` }}>
                      <span className="tick">✓</span>{item}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="btn-primary" style={{ background: p.featured ? C.accent : C.dark, width: "100%", justifyContent: "center" }}>Get Started →</a>
              </div>
            ))}
          </div>

          {/* Mobile pricing list */}
          <div className="pricing-list">
            {plans.map((p, i) => (
              <div key={i} style={{ background: p.featured ? C.dark : C.white, border: p.featured ? `2px solid ${C.accent}` : `1px solid ${C.border}`, padding: "24px 20px", marginBottom: 12 }}>
                {p.featured && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, marginBottom: 8 }}>★ Most Popular</div>}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <div className="serif" style={{ fontSize: 22, fontWeight: 700, color: p.featured ? "#fff" : C.text }}>{p.name}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: p.featured ? "#fff" : C.accent }}>{p.from}</div>
                </div>
                <p style={{ fontSize: 14, color: p.featured ? "rgba(255,255,255,0.6)" : C.muted, marginBottom: 14, lineHeight: 1.6 }}>{p.desc}</p>
                {p.items.map(item => (
                  <div key={item} style={{ display: "flex", gap: 8, padding: "6px 0", fontSize: 13, color: p.featured ? "rgba(255,255,255,0.8)" : C.text, borderBottom: `1px solid ${p.featured ? "rgba(255,255,255,0.08)" : C.border}` }}>
                    <span className="tick">✓</span>{item}
                  </div>
                ))}
                <a href="#contact" className="btn-primary" style={{ marginTop: 18, background: p.featured ? C.accent : C.dark, width: "100%", justifyContent: "center" }}>Get Started →</a>
              </div>
            ))}
          </div>

          <div style={{ padding: "16px", background: C.light, border: `1px solid ${C.border}`, marginTop: 16 }}>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.65 }}>
              <strong style={{ color: C.text }}>Need something custom?</strong> All services are also available individually. Just tell us what you need.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section style={{ borderBottom: `1px solid ${C.border}` }}>
        <div className="why-inner" style={{ padding: "36px 20px" }}>
          <span className="section-label">Why Pivotix AI</span>
          <h2 className="serif" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2, marginBottom: 28 }}>
            We make it simple<br />for business owners.
          </h2>

          {/* Desktop grid */}
          <div className="why-grid">
            {[
              ["✅","You don't need to be technical","We set everything up. You just tell us what your business does, and we handle the rest."],
              ["✅","You talk to the people building it","No account managers or middlemen. You work directly with the two of us."],
              ["✅","You see results fast","Most clients have systems live within 2 weeks and see a difference in the first month."],
              ["✅","You're not locked in","No long-term contracts. If it's not working, you can walk away. Simple."],
            ].map(([icon,t,d]) => (
              <div key={t} style={{ padding: "24px", background: C.white, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 22, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{t}</div>
                <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.65 }}>{d}</div>
              </div>
            ))}
          </div>

          {/* Mobile list */}
          <div className="why-list">
            {[["✅","You don't need to be technical","We set everything up. You just tell us what your business does, and we handle the rest."],["✅","You talk to the people building it","No account managers or middlemen. You work directly with the two of us."],["✅","You see results fast","Most clients have systems live within 2 weeks and see a difference in the first month."],["✅","You're not locked in","No long-term contracts. If it's not working, you can walk away. Simple."]].map(([icon,t,d]) => (
              <div key={t} style={{ display: "flex", gap: 12, marginBottom: 18 }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                <div><div style={{ fontSize: 15, fontWeight: 700, marginBottom: 3 }}>{t}</div><div style={{ fontSize: 14, color: C.muted, lineHeight: 1.65 }}>{d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" style={{ background: C.white, borderBottom: `1px solid ${C.border}` }}>
        <div className="faq-inner" style={{ padding: "36px 20px" }}>
          <span className="section-label">Common Questions</span>
          <h2 className="serif" style={{ fontSize: 26, fontWeight: 700, marginBottom: 28 }}>Good questions. Straight answers.</h2>
          <div className="faq-cols">
            {[faqs.slice(0, 3), faqs.slice(3)].map((group, gi) => (
              <div key={gi}>
                {group.map(([q,a]) => <FAQ key={q} q={q} a={a} />)}
                <div style={{ borderBottom: `1px solid ${C.border}` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section style={{ borderBottom: `1px solid ${C.border}` }}>
        <div className="team-inner" style={{ padding: "36px 20px" }}>
          <div className="team-grid">
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="serif" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2, marginBottom: 12 }}>Two people.<br />Fully committed.</h2>
              <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.75, marginBottom: 24 }}>
                We&apos;re not a big agency with 50 staff. We&apos;re a two-person team — one based in the US, one in India — who personally build and manage everything we deliver. You always know who&apos;s working on your account.
              </p>
              <a href="#contact" className="btn-primary" style={{ display: "inline-flex" }}>Talk to Us Directly →</a>
            </div>
            <div className="team-cards" style={{ marginTop: 24 }}>
              {[
                { init: "YP", name: "Your Partner's Name", role: "Business & Client Side — USA", desc: "Handles strategy, client relationships, and making sure the systems we build actually solve real business problems." },
                { init: "YN", name: "Your Name", role: "Systems & Builds — India", desc: "Designs and builds every automation and AI system. Has built solutions for businesses across multiple industries." },
              ].map(m => (
                <div key={m.name} style={{ display: "flex", gap: 14, padding: "20px", background: C.white, border: `1px solid ${C.border}` }}>
                  <div style={{ width: 48, height: 48, flexShrink: 0, background: C.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700 }}>{m.init}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>{m.name}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: C.accent, marginBottom: 6, letterSpacing: "0.03em" }}>{m.role}</div>
                    <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section id="contact" style={{ background: C.accent, borderBottom: `1px solid ${C.border}` }}>
        <div className="cta-inner" style={{ padding: "40px 20px" }}>
          <div className="cta-grid">
            <div>
              <h2 className="serif" style={{ fontSize: 32, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
                Let&apos;s look at your<br />business together.
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, marginBottom: 28 }}>
                Book a free 30-minute call. No pitch, no pressure. We&apos;ll find your biggest time and money leaks and tell you exactly what would fix them.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {["Free — no obligation","You talk directly to the team","We give you a clear plan, whether you work with us or not"].map(t => (
                  <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 16, flexShrink: 0, color: "#fff" }}>✓</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="mailto:hello@pivotixai.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#fff", color: C.accent, padding: "18px 24px", fontSize: 16, fontWeight: 700 }}>
                Book Your Free Call →
              </a>
              <a href="mailto:hello@pivotixai.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "transparent", color: "#fff", padding: "16px 24px", fontSize: 15, fontWeight: 600, border: "2px solid rgba(255,255,255,0.4)" }}>
                hello@pivotixai.com
              </a>
              <div style={{ padding: "18px", background: "rgba(0,0,0,0.15)" }}>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, textAlign: "center" }}>
                  Prefer to think first? <a href="#services" style={{ color: "#fff", fontWeight: 600, textDecoration: "underline" }}>Browse our services</a> and come back when you&apos;re ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: C.dark }}>
        <div className="footer-inner" style={{ padding: "28px 20px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 8 }}>
              <span className="serif" style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>Pivotix</span>
              <span style={{ fontSize: 20, color: C.accent, fontWeight: 700 }}>AI</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: 340 }}>AI systems for business owners who want to grow without hiring more people.</p>
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 12 }}>
              {[["What We Do","#services"],["Pricing","#pricing"],["Questions","#faq"],["Talk to Us","#contact"]].map(([l,h]) => (
                <a key={l} href={h} style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>{l}</a>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2026 Pivotix AI · No contracts · Results or we fix it</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
