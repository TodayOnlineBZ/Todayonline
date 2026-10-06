/* Inhoud uit Sanity, opgehaald tijdens het bouwen van de site.
   Lukt dat niet, of is de inhoud onvolledig, dan valt de site terug op src/data/site.js. */
import { SITE, STEPS, WORK, TOOLS } from "./site.js";

export const SANITY = { projectId: "iejh710k", dataset: "production", apiVersion: "2025-02-19" };

const QUERY = `{
  "settings": *[_type == "siteSettings"][0]{email, formEmail, phone},
  "steps": *[_type == "processStep"] | order(order asc){title, clientProvides, work, result, noteTitle, noteText},
  "projects": *[_type == "project"] | order(order asc){name, "slug": coalesce(imageKey, slug.current), services, website,
    "shot": screenshot.asset->{url, "w": metadata.dimensions.width, "h": metadata.dimensions.height},
    "mobileShot": mobileScreenshot.asset->{url, "w": metadata.dimensions.width, "h": metadata.dimensions.height}},
  "tools": *[_type == "tool"] | order(order asc){name, usage}
}`;

const host = (url) => { try { return new URL(url).host.replace(/^www\./, ""); } catch { return url; } };

const local = {
  source: "lokaal",
  settings: { email: SITE.mail, formEmail: SITE.formMail, phone: SITE.tel },
  steps: STEPS.map((s) => ({ title: s.t, clientProvides: s.jij, work: s.wij, result: s.res, note: s.gate || null })),
  projects: WORK.map((w) => ({ name: w.n, services: w.s, website: `https://${w.u}/`, host: w.u, slug: w.f, shot: null, mobileShot: null })),
  tools: TOOLS
};

async function load() {
  try {
    const url = `https://${SANITY.projectId}.api.sanity.io/v${SANITY.apiVersion}/data/query/${SANITY.dataset}?perspective=published&query=${encodeURIComponent(QUERY)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`status ${res.status}`);
    const { result: r } = await res.json();
    const out = { ...local, source: "sanity" };

    if (r.settings?.email) {
      out.settings = { email: r.settings.email, formEmail: r.settings.formEmail || r.settings.email, phone: r.settings.phone || SITE.tel };
    }
    /* Bij elke stap hoort een vaste illustratie, dus alleen overnemen als het er precies vijf zijn */
    if (r.steps?.length === STEPS.length) {
      out.steps = r.steps.map((s) => ({ title: s.title, clientProvides: s.clientProvides, work: s.work, result: s.result, note: s.noteTitle && s.noteText ? [s.noteTitle, s.noteText] : null }));
    } else {
      console.warn(`[cms] ${r.steps?.length ?? 0} stappen in Sanity, ${STEPS.length} verwacht: lokale stappen gebruikt.`);
    }
    if (r.projects?.length) {
      out.projects = r.projects.map((p) => ({ name: p.name, services: p.services || "", website: p.website, host: host(p.website), slug: p.slug, shot: p.shot || null, mobileShot: p.mobileShot || null }));
    }
    /* Een tool verschijnt alleen als er een logo voor bestaat in public/tools/ */
    if (r.tools?.length) {
      const known = r.tools.map((t) => { const l = TOOLS.find((x) => x.name.toLowerCase() === t.name?.toLowerCase()); return l ? { ...l, name: t.name, use: t.usage } : null; }).filter(Boolean);
      if (known.length) out.tools = known;
    }
    return out;
  } catch (e) {
    console.warn(`[cms] Sanity niet bereikbaar (${e.message}): lokale inhoud gebruikt.`);
    return local;
  }
}

let cache;
export function getContent() { return (cache ??= load()); }
