import ScrollReveal from "./components/ScrollReveal";
import FeatureTabs from "./components/FeatureTabs";

const B = "#60a5fa";
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const WA_EARLY   = `https://wa.me/5491126730927?text=Hola!%20Quiero%20anotarme%20al%20acceso%20anticipado%20de%20Flowix%20Salud.%20Soy%20kinesiólogo%2Fquiropráctico.`;
const WA_GENERAL = `https://wa.me/5491126730927?text=Hola!%20Me%20interesa%20Flowix%20Salud.%20%C2%BFMe%20pod%C3%A9s%20dar%20m%C3%A1s%20informaci%C3%B3n%3F`;
const WA_SOPORTE = `https://wa.me/5491133383949?text=Hola!%20Necesito%20ayuda%20con%20Flowix%20Salud.`;

const SYSTEM_URL      = "https://flowix-salud-production.up.railway.app";
const SYSTEM_LOGIN    = `${SYSTEM_URL}/login`;
const SYSTEM_REGISTER = `${SYSTEM_URL}/register`;
const DOWNLOAD_URL    = "https://github.com/alegresystems26/flowix-salud-desktop/releases/download/v1.0.0/Flowix.Salud.Setup.1.0.0.exe";

const niches = [
  { emoji: "🦴", label: "Kinesiología" },
  { emoji: "🙆", label: "Quiropraxia" },
  { emoji: "🦷", label: "Odontología" },
  { emoji: "🧠", label: "Psicología" },
  { emoji: "🥗", label: "Nutrición" },
  { emoji: "🏥", label: "Otros centros" },
];

const features = [
  { tag: "Historial",  icon: "📋", title: "Historia clínica digital",   desc: "Ficha completa por paciente: antecedentes, diagnóstico, evolución sesión a sesión. Todo en un solo lugar." },
  { tag: "Sesiones",   icon: "📝", title: "Notas de sesión",            desc: "Registrás qué trabajaste en cada turno en segundos. El historial clínico se construye solo." },
  { tag: "Planes",     icon: "📅", title: "Planes de tratamiento",      desc: "Definís la cantidad de sesiones, el sistema lleva el seguimiento. Sabés exactamente el progreso de cada paciente." },
  { tag: "Agenda",     icon: "🗓️", title: "Agenda inteligente",         desc: "Vista diaria y semanal por profesional. Turnos sin solapamientos, en menos de 10 segundos." },
  { tag: "Caja",       icon: "💰", title: "Caja & cobros",              desc: "Registrá pagos particulares, emitís el cierre del día con el neto real. Sin calculadora ni planillas." },
  { tag: "Reportes",   icon: "📊", title: "Reportes en tiempo real",    desc: "Pacientes activos, sesiones completadas, ingresos del mes y rendimiento por profesional." },
];

export default function FlowixSaludLanding() {
  return (
    <main style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#fff", background: "#050508", overflowX: "hidden" }}>

      {/* Grain */}
      <div aria-hidden style={{ position: "fixed", inset: 0, backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none", zIndex: 9999 }} />

      {/* Glow fijo — top */}
      <div aria-hidden style={{ position: "fixed", top: 0, left: 0, right: 0, height: "90vh", background: "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(96,165,250,0.18) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      {/* Glow fijo — ambient */}
      <div aria-hidden style={{ position: "fixed", bottom: 0, right: "-10%", width: "55vw", height: "55vh", background: "radial-gradient(ellipse, rgba(0,150,255,0.04) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 40px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 68,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 22, color: B, textShadow: "0 0 5px rgba(96,165,250,0.55), 0 0 12px rgba(96,165,250,0.25)", letterSpacing: "-1px" }}>{"</>"}</span>
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#fff" }}>Flo</span><span style={{ color: B }}>wix</span>
            <span style={{ color: "#fff", fontWeight: 700, marginLeft: 8 }}>Salud</span>
          </span>
        </div>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <a href="#funciones" className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>Funciones</a>
          <a href="#detalle"   className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>Sistema</a>
          <a href="#nichos"   className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>Para quién</a>
          <a href="#contacto" className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>Contacto</a>
        </div>
        <a href={WA_EARLY} target="_blank" rel="noopener noreferrer" style={{
          background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)", color: "#000", fontSize: 14, fontWeight: 700,
          textDecoration: "none", padding: "10px 24px", borderRadius: 10,
        }}>Quiero probarlo</a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section" style={{ padding: "110px 40px 90px", maxWidth: 1180, margin: "0 auto", position: "relative", overflow: "hidden" }}>

        {/* Glows */}
        <div aria-hidden style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 1000, height: 560,
          background: "radial-gradient(ellipse at 50% 0%, rgba(96,165,250,0.12) 0%, transparent 62%)",
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
          backgroundImage: "linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)",
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

            <div className="anim-up cta-buttons" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28, animationDelay: "0.32s" }}>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{
                background: B, color: "#000", fontWeight: 700, fontSize: 15,
                textDecoration: "none", padding: "14px 28px", borderRadius: 12, letterSpacing: "-0.3px",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                Quiero probarlo →
              </a>
              <a href={SYSTEM_LOGIN} style={{
                background: "rgba(255,255,255,0.05)", color: "#e4e4e7", fontWeight: 600, fontSize: 15,
                textDecoration: "none", padding: "14px 28px", borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
              }}>Ya tengo cuenta →</a>
            </div>
            <p className="anim-up" style={{ fontSize: 12, color: "#3a3a3a", animationDelay: "0.38s" }}>
              Sin costo inicial · Sin contrato
            </p>

            <div className="anim-up" style={{ display: "flex", gap: 22, flexWrap: "wrap", animationDelay: "0.42s" }}>
              {["Sin contrato", "Datos seguros", "Soporte directo"].map(t => (
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
                  { label: "Sesiones",  value: "7",   color: B },
                  { label: "Restantes", value: "5",   color: "#fff" },
                  { label: "Próxima",   value: "Lun", color: "#fff" },
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
            { value: "2",    label: "Rubros activos" },
            { value: "100%", label: "Historia clínica digital" },
            { value: "∞",    label: "Sesiones por paciente" },
            { value: "ARG",  label: "Soporte local directo" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "0 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : undefined }}>
              <p style={{ margin: 0, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, letterSpacing: "-1px", color: B }}>{s.value}</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#444" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PAIN POINTS ─────────────────────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="sr" style={{ maxWidth: 560, marginBottom: 52 }}>
            <p style={{ color: "#ef4444", fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>El problema</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.08, margin: "0 0 16px" }}>
              Así gestionan la mayoría<br />de los centros hoy.
            </h2>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Cuadernos, WhatsApp y memoria. Funciona hasta que deja de funcionar — y cuando falla, te cuesta tiempo, plata o un paciente.
            </p>
          </div>
          <div className="pain-grid sr" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              {
                tag: "Historial clínico en papel",
                pain: "Buscás en cuadernos o en fotos del celular qué hiciste en la sesión anterior. Si el paciente vuelve después de meses, perdiste el contexto.",
              },
              {
                tag: "Turnos por WhatsApp",
                pain: "Coordinás todo por mensaje, el paciente se olvida, vos también. Sin registro centralizado, los cruces y los huecos son inevitables.",
              },
              {
                tag: "Plan de tratamiento de memoria",
                pain: "Sabés más o menos en qué sesión está cada paciente, pero no exactamente. Cuando son 15 o 20, la cabeza no alcanza.",
              },
              {
                tag: "Caja sin cierre real",
                pain: "Al final del día no sabés cuánto entraste, quién pagó, quién debe y qué método usó cada uno. El control financiero es un estimado.",
              },
            ].map((p, i) => (
              <div key={i} style={{
                background: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.1)",
                borderRadius: 16, padding: "28px 32px",
              }}>
                <div style={{
                  display: "inline-block", background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8,
                  padding: "4px 12px", fontSize: 11, color: "#ef4444", fontWeight: 700,
                  letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: 16,
                }}>{p.tag}</div>
                <p style={{ fontSize: 15, color: "#777", lineHeight: 1.75, margin: 0 }}>{p.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADORES ─────────────────────────────────── */}
      <section className="section-pad sr" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 560, marginBottom: 56 }}>
            <p style={{ color: B, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Por qué Flowix Salud</p>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.08, margin: "0 0 14px" }}>
              No es lo mismo que<br />lo que ya tenés.
            </h2>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Excel y Google Calendar no fueron hechos para gestionar un centro de salud. Flowix Salud sí.
            </p>
          </div>
          <div style={{ overflowX: "auto" as const }}>
            <table style={{ width: "100%", borderCollapse: "separate" as const, borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: "28%", padding: "12px 20px", textAlign: "left" as const, fontSize: 12, color: "#333", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}></th>
                  {[
                    { label: "Excel / Sheets",   muted: true  },
                    { label: "Google Calendar",  muted: true  },
                    { label: "Flowix Salud",     muted: false },
                  ].map((col, ci) => (
                    <th key={ci} style={{
                      width: "24%", padding: "12px 20px", textAlign: "center" as const,
                      fontSize: 13, fontWeight: 700,
                      color: col.muted ? "#444" : B,
                      background: col.muted ? "transparent" : "rgba(96,165,250,0.04)",
                      borderRadius: ci === 2 ? "12px 12px 0 0" : undefined,
                      border: ci === 2 ? "1px solid rgba(96,165,250,0.2)" : undefined,
                      borderBottom: ci === 2 ? "none" : undefined,
                    }}>{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Historia clínica digital",       excel: false, gcal: false, flowix: true },
                  { feature: "Planes de tratamiento",          excel: false, gcal: false, flowix: true },
                  { feature: "Notas de sesión por paciente",   excel: false, gcal: false, flowix: true },
                  { feature: "Agenda vinculada al paciente",   excel: false, gcal: true,  flowix: true },
                  { feature: "Caja y cobros integrados",       excel: false, gcal: false, flowix: true },
                  { feature: "Reportes automáticos",           excel: false, gcal: false, flowix: true },
                  { feature: "Sin fórmulas ni configuración",  excel: false, gcal: false, flowix: true },
                  { feature: "Soporte local en Argentina",     excel: false, gcal: false, flowix: true },
                ].map((row, ri) => {
                  const isLast = ri === 7;
                  const cell = (val: boolean, isFlowix: boolean) => (
                    <td style={{
                      padding: "14px 20px", textAlign: "center" as const,
                      background: isFlowix ? "rgba(96,165,250,0.04)" : "transparent",
                      borderLeft:   isFlowix ? "1px solid rgba(96,165,250,0.2)" : undefined,
                      borderRight:  isFlowix ? "1px solid rgba(96,165,250,0.2)" : undefined,
                      borderBottom: isFlowix && isLast ? "1px solid rgba(96,165,250,0.2)" : isFlowix ? "1px solid rgba(96,165,250,0.08)" : "1px solid rgba(255,255,255,0.04)",
                      borderRadius: isFlowix && isLast ? "0 0 12px 12px" : undefined,
                    }}>
                      {val
                        ? <span style={{ color: isFlowix ? B : "#555", fontSize: 16, fontWeight: 700 }}>✓</span>
                        : <span style={{ color: "#2a2a2a", fontSize: 16 }}>✕</span>
                      }
                    </td>
                  );
                  return (
                    <tr key={ri}>
                      <td style={{ padding: "14px 20px", fontSize: 14, color: "#777", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{row.feature}</td>
                      {cell(row.excel,  false)}
                      {cell(row.gcal,   false)}
                      {cell(row.flowix, true)}
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
                <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, padding: "3px 10px", fontSize: 11, color: "#666", fontWeight: 600, letterSpacing: "0.04em" }}>{f.tag}</div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 20 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.3px" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ───────────────────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p className="sr" style={{ textAlign: "center" as const, color: B, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Cómo funciona</p>
          <h2 className="sr" style={{ textAlign: "center" as const, fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", margin: "0 0 72px", lineHeight: 1.04 }}>
            Arrancás en <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: B }}>3 pasos.</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const }}>
            {[
              { n: "01", title: "Registrate y configurá tu centro", desc: "Creás tu cuenta, agregás tus profesionales y especialidades. Sin configuraciones complejas ni conocimientos técnicos." },
              { n: "02", title: "Cargá tus pacientes y sus planes", desc: "Creás la historia clínica digital de cada paciente, definís su diagnóstico y establecés el plan de tratamiento con la cantidad de sesiones." },
              { n: "03", title: "Gestioná desde el primer día", desc: "Agendá turnos, registrá notas de sesión al instante y seguí el progreso de cada plan en tiempo real. El sistema hace el resto." },
            ].map((s, i) => (
              <div key={s.n} className="sr" style={{ display: "flex", gap: 32, paddingBottom: 48, position: "relative", transitionDelay: `${i * 0.12}s` }}>
                {i < 2 && <div style={{ position: "absolute", left: 23, top: 48, bottom: 0, width: 1, background: "rgba(255,255,255,0.05)" }} />}
                <div style={{
                  width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                  background: i === 0 ? B : "rgba(255,255,255,0.03)",
                  border: `1px solid ${i === 0 ? B : "rgba(255,255,255,0.08)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, color: i === 0 ? "#000" : "#444",
                }}>{s.n}</div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.5px" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NICHES ──────────────────────────────────────────── */}
      <section id="nichos" className="section-pad sr" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" as const }}>
          <p style={{ color: B, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Para tu especialidad</p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.08, margin: "0 0 14px" }}>
            ¿Tu especialidad está acá?
          </h2>
          <p style={{ color: "#666", fontSize: 15, lineHeight: 1.75, maxWidth: 480, margin: "0 auto 44px" }}>
            Flowix Salud está pensado para centros que trabajan con pacientes, sesiones y planes de tratamiento.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 28 }}>
            {niches.map((n, i) => (
              <div key={n.label} className="niche-chip" style={{
                display: "flex", alignItems: "center", gap: 8,
                background: i < 2 ? "rgba(96,165,250,0.05)" : "rgba(255,255,255,0.04)",
                border: i < 2 ? "1px solid rgba(96,165,250,0.2)" : "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "10px 18px", fontSize: 14,
                color: i < 2 ? "#93c5fd" : "#aaa", cursor: "default",
              }}>
                <span style={{ fontSize: 17 }}>{n.emoji}</span>
                {n.label}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#444" }}>
            ¿No ves tu especialidad?{" "}
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{ color: B, textDecoration: "none", fontWeight: 600 }}>Igual puede funcionar →</a>
          </p>
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

          <div className="sr">
            <FeatureTabs />
          </div>

        </div>
      </section>

      {/* ── ACCESO ANTICIPADO ────────────────────────────────── */}
      <section id="contacto" className="section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="download-grid sr" style={{
            background: "linear-gradient(135deg, rgba(96,165,250,0.06) 0%, rgba(0,0,0,0) 55%)",
            border: "1px solid rgba(96,165,250,0.12)", borderRadius: 24,
            padding: "64px 64px", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center",
          }}>
            <div>
              <p style={{ color: B, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Empezá hoy</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", margin: "0 0 16px", lineHeight: 1.04 }}>
                Tu centro organizado<br /><em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: B }}>desde mañana.</em>
              </h2>
              <p style={{ color: "#6b6b6b", fontSize: 16, lineHeight: 1.75, margin: "0 0 32px", maxWidth: 420 }}>
                Sin implementaciones largas ni consultores. Flowix Salud se adapta a tu flujo de trabajo en menos de 24 horas.
              </p>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {["Implementación en 24hs", "Sin contrato", "Datos seguros", "Soporte directo"].map(t => (
                  <span key={t} style={{ color: "#444", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: B }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="download-cta" style={{ textAlign: "center" as const, display: "flex", flexDirection: "column" as const, gap: 12 }}>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: B, color: "#000", fontWeight: 700, fontSize: 16,
                textDecoration: "none", padding: "16px 36px", borderRadius: 14,
                whiteSpace: "nowrap" as const, letterSpacing: "-0.3px",
              }}>Quiero probarlo →</a>
              <a href={SYSTEM_LOGIN} style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                color: "#555", fontSize: 14, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12,
                padding: "12px 28px", background: "rgba(255,255,255,0.03)",
                whiteSpace: "nowrap" as const,
              }}>Ya tengo cuenta · Ingresar →</a>
              <p style={{ color: "#333", fontSize: 12, margin: 0 }}>Sin costo inicial · Sin contrato · Kinesiología · Quiropraxia · Odontología</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "64px 40px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 52, marginBottom: 52 }}>
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
                { label: "Funciones",    href: "#funciones" },
                { label: "El sistema",   href: "#detalle" },
                { label: "Quiero probarlo", href: WA_EARLY },
                { label: "Ingresar",     href: SYSTEM_LOGIN },
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
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Especialidades</p>
              {niches.map(n => (
                <p key={n.label} style={{ color: "#444", fontSize: 13, marginBottom: 9 }}>{n.emoji} {n.label}</p>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "#333", fontSize: 13 }}>© 2026 Flowix Salud. Todos los derechos reservados.</span>
            <span style={{ color: "#222", fontSize: 13 }}>Hecho en Argentina 🇦🇷</span>
          </div>
        </div>
      </footer>

      <ScrollReveal />
    </main>
  );
}
