"use client";
import { useState, useRef } from "react";

const B = "#60a5fa";

const TABS = [
  { label: "Historia clínica",      color: B,         rgb: "96,165,250",   icon: "📋" },
  { label: "Planes de tratamiento", color: "#a78bfa", rgb: "167,139,250",  icon: "📅" },
  { label: "Agenda & Caja",         color: "#34d399", rgb: "52,211,153",   icon: "🗓️" },
];

function HistoriaContent() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="tab-grid">
      <div>
        <div style={{ display: "inline-block", background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, color: B, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 22 }}>Historia clínica</div>
        <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>La ficha de cada paciente, siempre disponible</h3>
        <p style={{ color: "#6b6b6b", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>
          Cada paciente tiene su ficha digital con antecedentes, diagnóstico inicial y toda la evolución registrada sesión a sesión. Nunca más buscás en cuadernos o en el celular.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {["Diagnóstico y motivo de consulta inicial", "Antecedentes médicos relevantes", "Evolución registrada sesión por sesión", "Búsqueda rápida por nombre o diagnóstico"].map(f => (
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
          <span style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#333", fontWeight: 600 }}>Flowix Salud — Historia clínica</span>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, padding: "10px 12px", background: "rgba(96,165,250,0.05)", borderRadius: 10, border: "1px solid rgba(96,165,250,0.1)" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(96,165,250,0.15)", border: "1px solid rgba(96,165,250,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: B }}>M</div>
            <div>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 700 }}>María González</p>
              <p style={{ margin: 0, fontSize: 10, color: "#555" }}>Lumbalgia L4-L5 · Paciente activa</p>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: "10px 12px", marginBottom: 10 }}>
            <p style={{ margin: "0 0 4px", fontSize: 9, color: "#444", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Antecedentes</p>
            <p style={{ margin: 0, fontSize: 11, color: "#666", lineHeight: 1.5 }}>Sin patologías previas. Trabajo sedentario 8hs/día. Rx: protrusión L4-L5.</p>
          </div>
          <p style={{ margin: "0 0 8px", fontSize: 9, color: "#444", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Últimas notas</p>
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
  );
}

function PlanesContent() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="tab-grid">
      <div>
        <div style={{ display: "inline-block", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, color: "#a78bfa", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 22 }}>Planes de tratamiento</div>
        <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Seguimiento automático de cada plan</h3>
        <p style={{ color: "#6b6b6b", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>
          Definís la cantidad de sesiones del plan y el sistema lleva el conteo solo. Sabés exactamente el progreso de cada paciente sin tener que recordarlo.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {["Cantidad de sesiones configurable por plan", "Barra de progreso visual en tiempo real", "Alerta cuando quedan pocas sesiones", "Historial de planes anteriores del paciente"].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: "#a78bfa", fontWeight: 700, fontSize: 13, marginTop: 1, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 14, color: "#777", lineHeight: 1.5 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "rgba(8,8,10,0.95)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, overflow: "hidden" }}>
        <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
          {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
          <span style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#333", fontWeight: 600 }}>Flowix Salud — Planes activos</span>
        </div>
        <div style={{ padding: 20 }}>
          {[
            { name: "María G.",  diag: "Lumbalgia L4-L5",    sessions: 7,  total: 12, color: B },
            { name: "Carlos R.", diag: "Cervicalgia crónica", sessions: 3,  total: 8,  color: "#a78bfa" },
            { name: "Laura M.",  diag: "Esguince tobillo",    sessions: 10, total: 10, color: "#34d399" },
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
  );
}

function AgendaContent() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="tab-grid">
      <div>
        <div style={{ display: "inline-block", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, color: "#34d399", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 22 }}>Agenda & Caja</div>
        <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Turnos y cobros, sin complicaciones</h3>
        <p style={{ color: "#6b6b6b", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>
          Gestioná la agenda de todos los profesionales desde un solo lugar. Cada turno se vincula automáticamente a la historia clínica del paciente. El cierre de caja es inmediato.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {["Vista diaria y semanal por profesional", "Alta de turno vinculada al paciente", "Registro de cobros particulares", "Cierre diario con resumen neto"].map(f => (
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
          <span style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#333", fontWeight: 600 }}>Flowix Salud — Agenda · Martes</span>
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
            { time: "09:00", name: "María G.",  diag: "Lumbalgia · Ses. 7",   color: B,         done: true  },
            { time: "10:30", name: "Carlos R.", diag: "Cervicalgia · Ses. 3",  color: "#a78bfa", done: false },
            { time: "12:00", name: "Laura M.",  diag: "Esguince · Ses. 10",   color: "#34d399", done: false },
            { time: "15:00", name: "Jorge P.",  diag: "Lumbalgia · Ses. 2",   color: "#f59e0b", done: false },
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
                <p style={{ margin: 0, fontSize: 10, color: "#555", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.diag}</p>
              </div>
              {a.done && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={B} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeatureTabs() {
  const [active, setActive]       = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [visible, setVisible]     = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleClick(i: number) {
    if (i === active) return;
    if (timer.current) clearTimeout(timer.current);
    setVisible(false);
    timer.current = setTimeout(() => {
      setDisplayed(i);
      setActive(i);
      setVisible(true);
    }, 200);
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 52, flexWrap: "wrap" }}>
        {TABS.map((tab, i) => (
          <button key={i} onClick={() => handleClick(i)} style={{
            background: active === i ? `rgba(${tab.rgb}, 0.1)` : "rgba(255,255,255,0.03)",
            border: `1px solid ${active === i ? `rgba(${tab.rgb}, 0.3)` : "rgba(255,255,255,0.08)"}`,
            color: active === i ? tab.color : "#555",
            padding: "10px 24px", borderRadius: 10, cursor: "pointer",
            fontSize: 14, fontWeight: active === i ? 700 : 500,
            fontFamily: "'Outfit', system-ui, sans-serif",
            transition: "all 0.2s ease",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}>
        {displayed === 0 && <HistoriaContent />}
        {displayed === 1 && <PlanesContent />}
        {displayed === 2 && <AgendaContent />}
      </div>
    </div>
  );
}
