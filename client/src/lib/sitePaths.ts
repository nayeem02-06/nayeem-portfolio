/**
 * Midnight Signal style reminder: internal navigation should feel invisible and dependable.
 * Keep route construction centralized so the experience survives repository hosting.
 */

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function sitePath(path = "/") {
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

const githubAssetBase = "https://raw.githubusercontent.com/nayeem02-06/nayeem-portfolio/main/github-assets";
const isGitHubPages = base === "/nayeem-portfolio";

export function assetPath(fileName: string) {
  return isGitHubPages ? `${githubAssetBase}/${fileName}` : `/manus-storage/${fileName}`;
}
