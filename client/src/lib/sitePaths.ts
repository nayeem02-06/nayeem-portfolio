/**
 * Midnight Signal style reminder: internal navigation should feel invisible and dependable.
 * Keep route construction centralized so the experience survives repository hosting.
 */

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function sitePath(path = "/") {
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

const isGitHubPages = base === "/nayeem-portfolio";
const manuscriptNames: Record<string, string> = {
  "nayeem-red-mecha-hero-optimized.webp": "nayeem-red-mecha-hero-optimized_f49925e7.webp",
  "nayeem-pixel-car.png": "nayeem-pixel-car_5fa4f2ea.png",
  "nayeem-signal-mark.png": "nayeem-pixel-portrait-hat-mark_9a411193.png",
  "arc-studio-logo-new.png": "arc-studio-logo-new_fdbde81f.png",
  "beat-of-dhaka-logo-optimized.webp": "beat-of-dhaka-logo-transparent_a088e06e.png",
  "kintsugi-bangladesh-logo.png": "kintsugi-bangladesh-logo_3849f344.png",
  "darling-in-the-franxx-poster-optimized.webp": "darling-in-the-franxx-poster-optimized_2ad6bae1.webp",
  "one-piece-poster-optimized.webp": "one-piece-poster-optimized_5de132db.webp",
  "evangelion-poster-optimized.webp": "evangelion-poster-optimized_8b848c9b.webp",
  "nana-poster-optimized.webp": "nana-poster-optimized_950029f5.webp",
  "zero-two-portrait-optimized.webp": "zero-two-portrait-optimized_1bbce195.webp",
};

export function assetPath(fileName: string) {
  return isGitHubPages ? `${base}/github-assets/${fileName}` : `/manus-storage/${manuscriptNames[fileName] ?? fileName}`;
}
