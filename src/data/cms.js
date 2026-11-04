/* Inhoud uit Sanity, opgehaald tijdens het bouwen van de site.
   Lukt dat niet, of is de inhoud onvolledig, dan valt de site terug op src/data/site.js. */
import { SITE, STEPS, WORK, TOOLS, EXTRA_LOGOS } from "./site.js";

export const SANITY = { projectId: "iejh710k", dataset: "production", apiVersion: "2025-02-19" };

const QUERY = `{
  "settings": *[_type == "siteSettings"][0]{email, formEmail, phone},
  "steps": *[_type == "processStep"] | order(order asc){title, clientProvides, work, result, noteTitle, noteText},
  "projects": *[_type == "project"] | order(order asc){name, "slug": coalesce(imageKey, slug.current), services, website, year, tools, intro, about, colorDark, colorLight, colorAccent,
    "shot": screenshot.asset->{url, "w": metadata.dimensions.width, "h": metadata.dimensions.height},
    "mobileShot": mobileScreenshot.asset->{url, "w": metadata.dimensions.width, "h": metadata.dimensions.height}},
  "tools": *[_type == "tool"] | order(order asc){name, usage}
}`;

/* Webadres van een projectpagina: /werk/<id> */
export const slugify = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const hex = (c) => (/^#[0-9a-f]{6}$/i.test((c || "").trim()) ? c.trim() : null);
/* Logo voor een toolnaam, voor de chips op projectpagina's */
export const toolLogo = (name) => [...TOOLS, ...EXTRA_LOGOS].find((t) => t.name.toLowerCase() === (name || "").toLowerCase()) || null;

const host = (url) => { try { return new URL(url).host.replace(/^www\./, ""); } catch { return url; } };

const local = {
  source: "lokaal",
  settings: { email: SITE.mail, formEmail: SITE.formMail, phone: SITE.tel },
  steps: STEPS.map((s) => ({ title: s.t, clientProvides: s.jij, work: s.wij, result: s.res, note: s.gate || null })),
  projects: WORK.map((w) => ({ name: w.n, id: slugify(w.n), services: w.s, website: `https://${w.u}/`, host: w.u, slug: w.f, shot: null, mobileShot: null,
    year: w.year || null, tools: w.tools || [], intro: w.intro || null, about: w.about || null, colors: w.colors || null })),
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
      out.projects = r.projects.map((p) => {
        const dark = hex(p.colorDark);
        /* Velden die in Sanity nog leeg zijn, vallen terug op de lokale gegevens van hetzelfde project */
        const w = WORK.find((x) => x.n.toLowerCase() === (p.name || "").toLowerCase()) || {};
        return { name: p.name, id: slugify(p.name), services: p.services || "", website: p.website, host: host(p.website), slug: p.slug, shot: p.shot || null, mobileShot: p.mobileShot || null,
          year: p.year || w.year || null, tools: p.tools?.length ? p.tools : w.tools || [], intro: p.intro || w.intro || null, about: p.about || w.about || null,
          colors: dark ? [dark, hex(p.colorLight) || dark, hex(p.colorAccent) || "#FE6F24"] : w.colors || null };
      });
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
