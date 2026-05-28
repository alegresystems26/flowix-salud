const B = "#60a5fa";
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const WA_EARLY   = `https://wa.me/5491126730927?text=Hola!%20Quiero%20anotarme%20al%20acceso%20anticipado%20de%20Flowix%20Salud.%20Soy%20kinesiólogo%2Fquiropráctico.`;
const WA_GENERAL = `https://wa.me/5491126730927?text=Hola!%20Me%20interesa%20Flowix%20Salud.%20%C2%BFMe%20pod%C3%A9s%20dar%20m%C3%A1s%20informaci%C3%B3n%3F`;
const WA_SOPORTE = `https://wa.me/5491133383949?text=Hola!%20Necesito%20ayuda%20con%20Flowix%20Salud.`;

const niches = [
  { emoji: "🦴", label: "Kinesiología" },
  { emoji: "🔧", label: "Quiropraxia" },
  { emoji: "🧠", label: "Psicología" },
  { emoji: "🥗", label: "Nutrición" },
  { emoji: "✨", label: "Estética médica" },
  { emoji: "💆", label: "Masajes terapéuticos" },
];

const features = [
  { tag: "Historial",  icon: "📋", title: "Historia clínica digital",   desc: "Ficha completa por paciente: antecedentes, diagnóstico, evolución sesión a sesión. Todo en un solo lugar." },
  { tag: "Sesiones",   icon: "📝", title: "Notas de sesión",            desc: "Registrás qué trabajaste en cada turno en segundos. El historial clínico se construye solo." },
  { tag: "Planes",     icon: "📅", title: "Planes de tratamiento",      desc: "Definís la cantidad de sesiones, el sistema lleva el seguimiento. Sabés exactamente el progreso de cada paciente." },
  { tag: "Agenda",     icon: "🗓️", title: "Agenda inteligente",         desc: "Vista diaria y semanal por profesional. Turnos sin solapamientos, en menos de 10 segundos." },
  { tag: "Caja",       icon: "💰", title: "Caja & cobros",              desc: "Registrá pagos particulares, emitís el cierre del día con el neto real. Sin calculadora ni planillas." },
  { tag: "Reportes",   icon: "📊", title: "Reportes en tiempo real",    desc: "Pacientes activos, sesiones completadas, ingresos del mes y rendimiento por profesional." },
];

const pains = [
  {
    title: "Fichas en papel o en el celular",
    sub: "perdés el historial de tus pacientes sin darte cuenta",
  },
  {
    title: "No sabés en qué sesión va cada paciente",
    sub: "ni qué trabajaste la vez anterior — lo manejás de memoria",
  },
  {
    title: "Sin control de sesiones restantes por plan",
    sub: "el paciente te pregunta cuántas le quedan y tenés que buscarlo",
  },
  {
    title: "Si falta el profesional, nadie sabe nada",
    sub: "sin sistema, el estado de cada tratamiento se va con él",
  },
];

export default function FlowixSaludLanding() {
  return (
    <main style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#fff", background: "#000", overflowX: "hidden" }}>

      {/* Grain */}
      <div aria-hidden style={{ position: "fixed", inset: 0, backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none", zIndex: 9999 }} />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 40px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 68,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ background: B, color: "#000", fontFamily: "monospace", fontWeight: 800, fontSize: 13, padding: "5px 11px", borderRadius: 9 }}>{"</>"}</div>
          <div>
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.5px" }}>
              <span style={{ color: "#fff" }}>Flo</span><span style={{ color: B }}>wix</span>
            </span>
            <span style={{ fontSize: 13, color: "#3b82f6", fontWeight: 600, marginLeft: 6 }}>Salud</span>
          </div>
        </div>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <a href="#funciones" className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>Funciones</a>
          <a href="#detalle"   className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>El sistema</a>
          <a href="#faq"       className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>FAQ</a>
        </div>
        <a href={WA_EARLY} target="_blank" rel="noopener noreferrer" style={{
          background: B, color: "#000", fontSize: 14, fontWeight: 700,
          textDecoration: "none", padding: "10px 24px", borderRadius: 10,
        }}>Acceso anticipado</a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section" style={{ padding: "110px 40px 90px", maxWidth: 1180, margin: "0 auto", position: "relative", overflow: "hidden" }}>

        {/* Glows */}
        <div aria-hidden style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 1000, height: 560,
          background: "radial-gradient(ellipse at 50% 0%, rgba(96,165,250,0.10) 0%, transparent 62%)",
          pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", bottom: "10%", right: "-8%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(96,165,250,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", position: "relative" }}>

          {/* Texto */}
          <div>
            <div className="anim-badge pulse-badge" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(96,165,250,0.07)", border: "1px solid rgba(96,165,250,0.2)",
              borderRadius: 20, padding: "6px 16px", marginBottom: 32,
              fontSize: 12, color: B, fontWeight: 600, letterSpacing: "0.02em",
            }}>
              <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: B, display: "inline-block" }} />
              En desarrollo activo · Acceso anticipado disponible
            </div>

            <h1 className="anim-up" style={{
              fontSize: "clamp(38px, 4.8vw, 68px)", fontWeight: 800,
              lineHeight: 1.04, letterSpacing: "-3px",
              margin: "0 0 28px", animationDelay: "0.1s",
            }}>
              Gestioná tus pacientes<br />como un{" "}
              <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: B, letterSpacing: "-1px" }}>profesional.</em>
            </h1>

            <p className="anim-up" style={{
              fontSize: "clamp(15px, 1.8vw, 17px)", color: "#6b6b6b", lineHeight: 1.75,
              maxWidth: 460, marginBottom: 40, animationDelay: "0.22s",
            }}>
              Historia clínica digital, planes de tratamiento y agenda en un solo lugar. Para kinesiólogos, quiroprácticos y más.
            </p>

            <div className="anim-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28, animationDelay: "0.32s" }}>
              <a href={WA_EARLY} target="_blank" rel="noopener noreferrer" style={{
                background: B, color: "#000", fontWeight: 700, fontSize: 15,
                textDecoration: "none", padding: "14px 28px", borderRadius: 12, letterSpacing: "-0.3px",
              }}>Quiero acceso anticipado →</a>
              <a href="#funciones" style={{
                background: "rgba(255,255,255,0.05)", color: "#e4e4e7", fontWeight: 600, fontSize: 15,
                textDecoration: "none", padding: "14px 28px", borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
              }}>Ver funciones</a>
            </div>

            <div className="anim-up" style={{ display: "flex", gap: 22, flexWrap: "wrap", animationDelay: "0.42s" }}>
              {["Precio especial de lanzamiento", "Sin contrato", "Datos seguros"].map(t => (
                <span key={t} style={{ color: "#444", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: B, fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Mockup — Ficha de paciente */}
          <div className="hero-preview anim-preview" style={{ position: "relative", animationDelay: "0.2s" }}>
            <div className="float hero-card-glow" style={{
              background: "rgba(6,6,6,0.97)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, padding: 20,
              backdropFilter: "blur(20px)",
              overflow: "hidden", position: "relative",
            }}>
              <div aria-hidden style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

              {/* Window chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                </div>
                <div style={{ flex: 1, textAlign: "center" as const, background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "4px 12px", fontSize: 11, color: "#444" }}>
                  <span style={{ color: "#fff" }}>Flo</span><span style={{ color: B }}>wix</span><span style={{ color: "#3b82f6", marginLeft: 4 }}>Salud</span> — Paciente
                </div>
              </div>

              {/* Patient header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, padding: "12px 14px", background: "rgba(96,165,250,0.05)", borderRadius: 12, border: "1px solid rgba(96,165,250,0.1)" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(96,165,250,0.15)", border: `1px solid rgba(96,165,250,0.25)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, color: B, flexShrink: 0 }}>M</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>María González</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#555" }}>Lumbalgia L4-L5 · 34 años</p>
                </div>
                <div style={{ background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)", borderRadius: 8, padding: "4px 10px", fontSize: 10, color: B, fontWeight: 600, flexShrink: 0 }}>Activa</div>
              </div>

              {/* Plan progress */}
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 14px", marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <p style={{ margin: 0, fontSize: 10, color: "#555", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Plan de tratamiento</p>
                  <p style={{ margin: 0, fontSize: 11, color: B, fontWeight: 700 }}>Sesión 7 de 12</p>
                </div>
                <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden", marginBottom: 6 }}>
                  <div style={{ width: "58%", height: "100%", background: B, borderRadius: 4 }} />
                </div>
                <p style={{ margin: 0, fontSize: 10, color: "#444" }}>Próxima: Lunes 02/06 · 10:30</p>
              </div>

              {/* Last session note */}
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 14px", marginBottom: 12 }}>
                <p style={{ margin: "0 0 6px", fontSize: 10, color: "#555", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Nota — sesión anterior</p>
                <p style={{ margin: 0, fontSize: 12, color: "#888", lineHeight: 1.6 }}>
                  Trabajo en zona lumbar baja. Mejora notable en flexión anterior. Continuar con ejercicios de estabilización core.
                </p>
              </div>

              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {[
                  { label: "Sesiones",    value: "7",       color: B },
                  { label: "Restantes",   value: "5",       color: "#fff" },
                  { label: "Próxima",     value: "Lun",     color: "#fff" },
                ].map(s => (
                  <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "10px 8px", textAlign: "center" as const, border: "1px solid rgba(255,255,255,0.05)" }}>
                    <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: s.color, letterSpacing: "-0.5px" }}>{s.value}</p>
                    <p style={{ margin: 0, fontSize: 10, color: "#444", marginTop: 2 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
        <div className="stats-grid sr" style={{ maxWidth: 1180, margin: "0 auto", padding: "30px 40px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" as const }}>
          {[
            { value: "2",      label: "Rubros en lanzamiento" },
            { value: "100%",   label: "Historia clínica digital" },
            { value: "∞",      label: "Sesiones por paciente" },
            { value: "ARG",    label: "Soporte local directo" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "0 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : undefined }}>
              <p style={{ margin: 0, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, letterSpacing: "-1px", color: B }}>{s.value}</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#444" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── NICHES ──────────────────────────────────────────── */}
      <section className="sr" style={{ padding: "72px 40px", maxWidth: 1180, margin: "0 auto" }}>
        <p style={{ textAlign: "center" as const, color: "#333", fontSize: 12, marginBottom: 20, textTransform: "uppercase" as const, letterSpacing: "0.12em", fontWeight: 700 }}>Adaptado a tu especialidad</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {niches.map((n, i) => (
            <div key={n.label} className="niche-chip" style={{
              display: "flex", alignItems: "center", gap: 8,
              background: i < 2 ? "rgba(96,165,250,0.05)" : "rgba(255,255,255,0.02)",
              border: i < 2 ? "1px solid rgba(96,165,250,0.18)" : "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12, padding: "10px 18px", fontSize: 14,
              color: i < 2 ? "#93c5fd" : "#555", cursor: "default",
            }}>
              <span style={{ fontSize: 18 }}>{n.emoji}</span>
              {n.label}
              {i < 2 && <span style={{ fontSize: 10, background: "rgba(96,165,250,0.15)", color: B, borderRadius: 5, padding: "1px 7px", fontWeight: 700, marginLeft: 4 }}>Lanzamiento</span>}
            </div>
          ))}
        </div>
      </section>

      {/* ── PAIN POINTS ─────────────────────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="pain-grid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          <div className="sr">
            <p style={{ color: B, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>El problema</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.05, marginBottom: 14 }}>
              ¿Tu centro<br />todavía funciona así?
            </h2>
            <p style={{ color: "#6b6b6b", fontSize: 16, lineHeight: 1.7, marginBottom: 40, maxWidth: 420 }}>
              La mayoría de los profesionales de la salud pierden tiempo valioso por no tener las herramientas digitales adecuadas.
            </p>

            <div style={{ display: "flex", flexDirection: "column" as const }}>
              {pains.map((pain, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "18px 0", borderBottom: i < pains.length - 1 ? "1px solid rgba(255,255,255,0.05)" : undefined }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 1,
                    background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <p style={{ margin: 0, fontSize: 14, color: "#888", lineHeight: 1.6 }}>
                    <strong style={{ color: "#bbb" }}>{pain.title}</strong>
                    {" "}— {pain.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card "Sin sistema" */}
          <div className="sr" style={{ transitionDelay: "0.15s" }}>
            <div style={{ background: "rgba(8,8,10,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
              <div style={{ padding: "12px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
                {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
                <span style={{ flex: 1, textAlign: "center" as const, fontSize: 10, color: "#333", fontWeight: 600, letterSpacing: "0.04em" }}>Sin sistema</span>
              </div>
              <div style={{ padding: 28 }}>
                <p style={{ fontSize: 10, color: "#333", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 8 }}>Tiempo perdido por semana</p>
                <p style={{ fontSize: 52, fontWeight: 900, color: "#ef4444", letterSpacing: "-3px", margin: 0, lineHeight: 1 }}>+6hs</p>
                <p style={{ fontSize: 13, color: "#444", marginTop: 6, marginBottom: 20 }}>buscando fichas, recordando tratamientos y cerrando la caja a mano</p>
                <div style={{ height: 4, background: "rgba(239,68,68,0.15)", borderRadius: 4, marginBottom: 20, overflow: "hidden" }}>
                  <div style={{ width: "65%", height: "100%", background: "#ef4444", borderRadius: 4 }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {["Fichas perdidas","Sin historial","Planes sin control","Caja manual"].map(t => (
                    <span key={t} style={{ fontSize: 11, color: "#555", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 6, padding: "4px 10px" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section id="funciones" className="section-pad" style={{ padding: "80px 40px 100px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="sr" style={{ maxWidth: 580, marginBottom: 64 }}>
            <p style={{ color: B, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Funcionalidades</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, margin: "0 0 18px" }}>
              Todo lo que necesitás,<br /><em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: B }}>en un solo lugar.</em>
            </h2>
            <p style={{ color: "#6b6b6b", fontSize: 16, lineHeight: 1.75, margin: 0 }}>
              Sin aprendizaje complicado, sin configuraciones eternas. Diseñado específicamente para el flujo de trabajo de un centro de salud.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
            {features.map((f, i) => (
              <div key={f.title} className="feat-card sr" style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18, padding: "28px", position: "relative", overflow: "hidden",
                transitionDelay: `${i * 0.07}s`,
              }}>
                <div style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.04)", borderRadius: 7, padding: "3px 10px", fontSize: 11, color: "#333", fontWeight: 600 }}>{f.tag}</div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 20 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.3px" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL SISTEMA EN DETALLE ────────────────────────────── */}
      <section id="detalle" className="section-pad" style={{ padding: "80px 40px 100px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>

          <div className="sr" style={{ maxWidth: 600, marginBottom: 80 }}>
            <p style={{ color: B, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>El sistema en detalle</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, margin: "0 0 18px" }}>
              Cada módulo resuelve<br /><em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: B }}>un problema real.</em>
            </h2>
            <p style={{ color: "#6b6b6b", fontSize: 16, lineHeight: 1.75, margin: 0 }}>
              No es software genérico con funciones de relleno. Cada parte de Flowix Salud fue diseñada con el flujo de trabajo real de un centro de salud en mente.
            </p>
          </div>

          {/* Historia clínica */}
          <div className="detail-row sr" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 80 }}>
            <div>
              <div style={{ display: "inline-block", background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, color: B, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: 22 }}>Historia clínica</div>
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>La ficha de cada paciente, siempre disponible</h3>
              <p style={{ color: "#6b6b6b", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>
                Cada paciente tiene su ficha digital con antecedentes, diagnóstico inicial y toda la evolución registrada sesión a sesión. Nunca más buscás en cuadernos o en el celular.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 11 }}>
                {["Diagnóstico y motivo de consulta inicial","Antecedentes médicos relevantes","Evolución registrada sesión por sesión","Búsqueda rápida por nombre o diagnóstico"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: B, fontWeight: 700, fontSize: 13, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#777", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(8,8,10,0.95)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, overflow: "hidden" }}>
              <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
                {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
                <span style={{ flex: 1, textAlign: "center" as const, fontSize: 10, color: "#333", fontWeight: 600 }}>Flowix Salud — Historia clínica</span>
              </div>
              <div style={{ padding: 20 }}>
                {/* Patient card */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, padding: "10px 12px", background: "rgba(96,165,250,0.05)", borderRadius: 10, border: "1px solid rgba(96,165,250,0.1)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(96,165,250,0.15)", border: "1px solid rgba(96,165,250,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: B }}>M</div>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700 }}>María González</p>
                    <p style={{ margin: 0, fontSize: 10, color: "#555" }}>Lumbalgia L4-L5 · Paciente activa</p>
                  </div>
                </div>
                {/* Antecedentes */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: "10px 12px", marginBottom: 10 }}>
                  <p style={{ margin: "0 0 4px", fontSize: 9, color: "#444", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Antecedentes</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#666", lineHeight: 1.5 }}>Sin patologías previas. Trabajo sedentario 8hs/día. Rx: protrusión L4-L5.</p>
                </div>
                {/* Notas recientes */}
                <p style={{ margin: "0 0 8px", fontSize: 9, color: "#444", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Últimas notas</p>
                {[
                  { date: "27/05", note: "Mejora en flexión. Trabajo lumbar + estabilización." },
                  { date: "22/05", note: "Primera sesión. Evaluación y movilidad inicial." },
                ].map((n, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.04)" : undefined }}>
                    <span style={{ fontSize: 10, color: "#3a3a3a", fontFamily: "monospace", flexShrink: 0, paddingTop: 1 }}>{n.date}</span>
                    <p style={{ margin: 0, fontSize: 11, color: "#666", lineHeight: 1.5 }}>{n.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Planes de tratamiento */}
          <div className="detail-row sr" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 80, direction: "rtl" as const }}>
            <div style={{ direction: "ltr" as const }}>
              <div style={{ display: "inline-block", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, color: "#a78bfa", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: 22 }}>Planes de tratamiento</div>
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Seguimiento automático de cada plan</h3>
              <p style={{ color: "#6b6b6b", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>
                Definís la cantidad de sesiones del plan y el sistema lleva el conteo solo. Sabés exactamente el progreso de cada paciente sin tener que recordarlo.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 11 }}>
                {["Cantidad de sesiones configurable por plan","Barra de progreso visual en tiempo real","Alerta cuando quedan pocas sesiones","Historial de planes anteriores del paciente"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: "#a78bfa", fontWeight: 700, fontSize: 13, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#777", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ direction: "ltr" as const, background: "rgba(8,8,10,0.95)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, overflow: "hidden" }}>
              <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
                {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
                <span style={{ flex: 1, textAlign: "center" as const, fontSize: 10, color: "#333", fontWeight: 600 }}>Flowix Salud — Planes activos</span>
              </div>
              <div style={{ padding: 20 }}>
                {[
                  { name: "María G.",  diag: "Lumbalgia L4-L5",      sessions: 7,  total: 12, color: B },
                  { name: "Carlos R.", diag: "Cervicalgia crónica",   sessions: 3,  total: 8,  color: "#a78bfa" },
                  { name: "Laura M.",  diag: "Esguince tobillo",      sessions: 10, total: 10, color: "#34d399" },
                ].map((p, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: "12px 14px", marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <div>
                        <p style={{ margin: 0, fontSize: 12, fontWeight: 700 }}>{p.name}</p>
                        <p style={{ margin: 0, fontSize: 10, color: "#555" }}>{p.diag}</p>
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: p.color }}>{p.sessions}/{p.total}</span>
                    </div>
                    <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ width: `${(p.sessions / p.total) * 100}%`, height: "100%", background: p.color, borderRadius: 4 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agenda + Caja */}
          <div className="detail-row sr" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-block", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, color: "#34d399", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: 22 }}>Agenda & Caja</div>
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Turnos y cobros, sin complicaciones</h3>
              <p style={{ color: "#6b6b6b", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>
                Gestioná la agenda de todos los profesionales desde un solo lugar. Cada turno se vincula automáticamente a la historia clínica del paciente. El cierre de caja es inmediato.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 11 }}>
                {["Vista diaria y semanal por profesional","Alta de turno vinculada al paciente","Registro de cobros particulares","Cierre diario con resumen neto"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: "#34d399", fontWeight: 700, fontSize: 13, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#777", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(8,8,10,0.95)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, overflow: "hidden" }}>
              <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
                {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
                <span style={{ flex: 1, textAlign: "center" as const, fontSize: 10, color: "#333", fontWeight: 600 }}>Flowix Salud — Agenda · Martes</span>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <div>
                    <p style={{ margin: 0, fontSize: 12, fontWeight: 700 }}>Martes, 27 de mayo</p>
                    <p style={{ margin: 0, fontSize: 10, color: "#444" }}>5 turnos · $72.000 proyectados</p>
                  </div>
                  <div style={{ background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)", borderRadius: 7, padding: "4px 10px", fontSize: 10, color: B, fontWeight: 600 }}>En curso</div>
                </div>
                {[
                  { time: "09:00", name: "María G.",   diag: "Lumbalgia · Ses. 7",   color: B,        done: true  },
                  { time: "10:30", name: "Carlos R.",  diag: "Cervicalgia · Ses. 3",  color: "#a78bfa", done: false },
                  { time: "12:00", name: "Laura M.",   diag: "Esguince · Ses. 10",   color: "#34d399", done: false },
                  { time: "15:00", name: "Jorge P.",   diag: "Lumbalgia · Ses. 2",   color: "#f59e0b", done: false },
                ].map((a, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "8px 10px", borderRadius: 10, marginBottom: 6,
                    background: a.done ? "rgba(96,165,250,0.04)" : "rgba(255,255,255,0.025)",
                    border: `1px solid ${a.done ? "rgba(96,165,250,0.12)" : "rgba(255,255,255,0.05)"}`,
                  }}>
                    <span style={{ fontSize: 10, color: "#444", width: 34, flexShrink: 0, fontFamily: "monospace" }}>{a.time}</span>
                    <div style={{ width: 3, height: 28, borderRadius: 3, background: a.color, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: 0, fontSize: 12, fontWeight: 600 }}>{a.name}</p>
                      <p style={{ margin: 0, fontSize: 10, color: "#555", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{a.diag}</p>
                    </div>
                    {a.done && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={B} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 52, textAlign: "center" as const }}>
            <p style={{ color: B, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04 }}>
              Preguntas frecuentes
            </h2>
          </div>
          <div className="sr" style={{ display: "flex", flexDirection: "column" as const }}>
            {[
              { q: "¿Cuándo está disponible?", a: "Estamos en desarrollo activo. Los primeros en sumarse al acceso anticipado tienen precio especial de lanzamiento y acceso prioritario cuando el sistema esté listo." },
              { q: "¿Puedo cancelar en cualquier momento?", a: "Sí. Sin contratos de permanencia. Podés cancelar cuando quieras, sin penalidades ni cargos adicionales." },
              { q: "¿Funciona para más de un profesional?", a: "Sí. El sistema soporta múltiples profesionales dentro del mismo centro, cada uno con su propia agenda y pacientes." },
              { q: "¿Qué pasa con mis datos si cancelo?", a: "Tus datos son tuyos. Podés exportarlos antes de cancelar. Nada se elimina sin tu autorización expresa." },
              { q: "¿Incluye obra social?", a: "Por ahora el sistema trabaja con pago particular únicamente. La integración con obras sociales está en el roadmap para una fase futura." },
              { q: "¿Necesito conocimientos técnicos?", a: "No. El sistema está diseñado para profesionales de la salud, no para técnicos. Si usás WhatsApp, podés usar Flowix Salud." },
            ].map((item, i) => (
              <details key={i} className="faq-item" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <summary style={{ padding: "20px 4px", fontSize: 16, fontWeight: 600, color: "#ccc", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  {item.q}
                  <span className="faq-arrow" style={{ color: B, fontSize: 22, fontWeight: 300, flexShrink: 0, lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ fontSize: 15, color: "#6b6b6b", lineHeight: 1.75, paddingBottom: 20, paddingLeft: 4, margin: 0 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(96,165,250,0.06) 0%, rgba(0,0,0,0) 60%)",
            border: "1px solid rgba(96,165,250,0.12)", borderRadius: 28,
            textAlign: "center" as const, padding: "90px 64px", position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(96,165,250,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
            <div className="sr" style={{ position: "relative" }}>
              <p style={{ color: B, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 20 }}>Acceso anticipado</p>
              <h2 style={{ fontSize: "clamp(26px, 4.5vw, 60px)", fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.02, marginBottom: 22 }}>
                Sé el primero en<br /><em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: B }}>usar Flowix Salud.</em>
              </h2>
              <p style={{ fontSize: 17, color: "#6b6b6b", lineHeight: 1.75, maxWidth: 460, margin: "0 auto 48px" }}>
                Los profesionales que se sumen ahora obtienen precio especial de lanzamiento y acompañamiento directo durante la implementación.
              </p>
              <div className="cta-buttons" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={WA_EARLY} target="_blank" rel="noopener noreferrer" style={{ background: B, color: "#000", fontWeight: 700, fontSize: 15, textDecoration: "none", padding: "16px 36px", borderRadius: 12 }}>
                  Quiero acceso anticipado →
                </a>
                <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.05)", color: "#ccc", fontWeight: 500, fontSize: 15, textDecoration: "none", padding: "16px 36px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
                  Tengo una pregunta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "64px 40px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 52, marginBottom: 52 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
                <div style={{ background: B, color: "#000", fontFamily: "monospace", fontWeight: 800, fontSize: 13, padding: "4px 10px", borderRadius: 8 }}>{"</>"}</div>
                <div>
                  <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.5px" }}>
                    <span style={{ color: "#fff" }}>Flo</span><span style={{ color: B }}>wix</span>
                  </span>
                  <span style={{ fontSize: 13, color: "#3b82f6", fontWeight: 600, marginLeft: 6 }}>Salud</span>
                </div>
              </div>
              <p style={{ color: "#444", fontSize: 14, lineHeight: 1.65, margin: "0 0 20px", maxWidth: 280 }}>
                Sistema de gestión para centros de salud y bienestar. Historia clínica, planes de tratamiento y agenda en un solo lugar.
              </p>
              <a href="https://www.instagram.com/flowixagency/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#555", fontSize: 13, textDecoration: "none", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 9, padding: "8px 14px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @flowixagency
              </a>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Producto</p>
              {[
                { label: "Funciones",          href: "#funciones" },
                { label: "El sistema",         href: "#detalle" },
                { label: "FAQ",                href: "#faq" },
                { label: "Acceso anticipado",  href: WA_EARLY },
              ].map(l => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined} className="footer-link" style={{ display: "block", color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 11 }}>{l.label}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Contacto</p>
              {[
                { label: "Consultas generales", href: WA_GENERAL },
                { label: "Soporte técnico",     href: WA_SOPORTE },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center", gap: 7, color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 13 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25d366", flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  {l.label}
                </a>
              ))}
              <a href="https://www.instagram.com/flowixagency/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center", gap: 7, color: "#444", fontSize: 14, textDecoration: "none" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#e1306c" }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "#333", fontSize: 13 }}>© 2026 Flowix Salud. Todos los derechos reservados.</span>
            <span style={{ color: "#222", fontSize: 13 }}>Hecho en Argentina 🇦🇷</span>
          </div>
        </div>
      </footer>

      {/* Scroll-reveal */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var io = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
            });
          },{ threshold: 0.1 });
          document.querySelectorAll('.sr').forEach(function(el){ io.observe(el); });
        })();
      ` }} />
    </main>
  );
}
