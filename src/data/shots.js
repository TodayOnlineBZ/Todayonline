/* Screenshots per project: eerst uit Sanity, anders uit src/assets/work/<slug>-desktop.jpg en -mobile.jpg */
const files = import.meta.glob("../assets/work/*.{jpg,jpeg,png,webp}", { eager: true });
export function shotsFor(p) {
  const local = (kind) => files[`../assets/work/${p.slug}-${kind}.jpg`]?.default || null;
  return {
    desktop: p.shot ? { remote: p.shot } : local("desktop") ? { local: local("desktop") } : null,
    mobile: p.mobileShot ? { remote: p.mobileShot } : local("mobile") ? { local: local("mobile") } : null
  };
}
