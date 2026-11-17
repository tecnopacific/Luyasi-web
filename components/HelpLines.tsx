"use client";

import { useState } from "react";

import catalog from "@/lib/help-lines.json";

type Line = { name: string; number: string; detail: string; dial?: string };

// Copia de backend/src/help/lines.json del repo de la app: la misma lista que
// muestra la app. Mantenerlas iguales.
const countries = catalog.countries;

function telHref(line: Line) {
  return `tel:${(line.dial ?? line.number).replace(/[^\d*+#]/g, "")}`;
}

export function HelpLines({ compact = false }: { compact?: boolean }) {
  const [code, setCode] = useState<string>(countries[0]!.code);
  const country = countries.find((c) => c.code === code) ?? countries[0]!;

  return (
    <div className={compact ? "help-lines help-lines-compact" : "help-lines"}>
      <fieldset className="country-picker">
        <legend>Tu país</legend>
        {countries.map((c) => (
          <label key={c.code} className="country-option">
            <input
              type="radio"
              name={compact ? "country-compact" : "country"}
              value={c.code}
              checked={c.code === code}
              onChange={() => setCode(c.code)}
            />
            <span>{c.name}</span>
          </label>
        ))}
      </fieldset>

      <ul className="call-list" aria-live="polite">
        {[country.emergency, ...country.lines].map((line: Line, i) => (
          <li key={line.name + line.number}>
            <a className={i === 0 ? "call call-primary" : "call"} href={telHref(line)}>
              <span className="call-name">{line.name}</span>
              <span className="call-number">{line.number}</span>
              <span className="call-detail">{line.detail}</span>
            </a>
          </li>
        ))}
      </ul>
      {!catalog.verified ? (
        <p className="help-note">
          Estamos verificando cada número antes del lanzamiento. Si una línea no responde, llama a emergencias.
        </p>
      ) : null}
    </div>
  );
}
