/**
 * Midnight Signal style reminder: this shared command bar is the constant point
 * of orientation across every route; it stays dark, precise, and touch-friendly.
 */
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { sitePath } from "../lib/sitePaths";

type Locale = "en" | "ja";

export default function GlobalHeader({
  active,
  language,
  onLanguageChange,
}: {
  active: "arc" | "beat";
  language: Locale;
  onLanguageChange: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const labels = language === "ja"
    ? { arc: "ARC STUDIO", beat: "BEAT OF DHAKA", contact: "連絡", language: "ENGLISH", menu: "メニュー" }
    : { arc: "Arc Studio", beat: "Beat of Dhaka", contact: "Contact", language: "日本語", menu: "MENU" };

  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="site-header global-header">
      <a className="brand-lockup" href={sitePath("/")} aria-label="Nayeem home"><span>NAYEEM<span className="brand-mark-dot">.</span></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href={sitePath("/arc-studio")} aria-current={active === "arc" ? "page" : undefined}>{labels.arc}</a>
        <a href={sitePath("/beat-of-dhaka")} aria-current={active === "beat" ? "page" : undefined}>{labels.beat}</a>
        <a href={`${sitePath("/")}#contact`}>{labels.contact}</a>
      </nav>
      <div className="header-actions">
        <button className="language-button" onClick={onLanguageChange} type="button" aria-label="Change language">{labels.language}</button>
        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} type="button" aria-label={labels.menu} aria-expanded={menuOpen}>{menuOpen ? <X size={19} /> : <Menu size={20} />}<span>{labels.menu}</span></button>
      </div>
    </header>
    <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
      <div className="mobile-menu__inner">
        <a href={sitePath("/arc-studio")} onClick={closeMenu} aria-current={active === "arc" ? "page" : undefined}>{labels.arc}</a>
        <a href={sitePath("/beat-of-dhaka")} onClick={closeMenu} aria-current={active === "beat" ? "page" : undefined}>{labels.beat}</a>
        <a href={`${sitePath("/")}#contact`} onClick={closeMenu}>{labels.contact}</a>
      </div>
    </div>
  </>;
}
