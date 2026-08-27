/**
 * Midnight Signal style reminder: this is a guided night walk, not a résumé grid.
 * Use compact evidence, ember signals, pixel wayfinding, and mobile-first touch targets.
 */
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MoveUpRight,
  X,
} from "lucide-react";

type Language = "en" | "ja";

const assets = {
  hero: "/manus-storage/nayeem-red-mecha-hero-optimized_f49925e7.webp",
  introCar: "/manus-storage/nayeem-pixel-car_5fa4f2ea.png",
  mark: "/manus-storage/nayeem-pixel-portrait-hat-mark_9a411193.png",
};

const ventureLogos = [
  { name: "Arc Studio Production", source: "/manus-storage/arc-studio-logo-new_fdbde81f.png", tone: "arc" },
  { name: "Beat of Dhaka", source: "/manus-storage/beat-of-dhaka-logo-transparent_a088e06e.png", tone: "beat" },
  { name: "Kintsugi Bangladesh", source: "/manus-storage/kintsugi-bangladesh-logo_3849f344.png", tone: "kintsugi" },
];

const animeCards = [
  { title: "Darling in the Franxx", label: "FAVOURITE ANIME / 01", source: "/manus-storage/darling-in-the-franxx-poster-optimized_2ad6bae1.webp", alt: "Darling in the Franxx poster" },
  { title: "One Piece", label: "FAVOURITE ANIME / 02", source: "/manus-storage/one-piece-poster-optimized_5de132db.webp", alt: "One Piece poster" },
  { title: "Evangelion", label: "FAVOURITE ANIME / 03", source: "/manus-storage/evangelion-poster-optimized_8b848c9b.webp", alt: "Neon Genesis Evangelion poster" },
  { title: "Nana", label: "FAVOURITE ANIME / 04", source: "/manus-storage/nana-poster-optimized_950029f5.webp", alt: "Nana poster" },
  { title: "Zero Two", label: "FAVOURITE CHARACTER", source: "/manus-storage/zero-two-portrait-optimized_1bbce195.webp", alt: "Zero Two from Darling in the Franxx" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/nayeem__kun/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nayeem-002d/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/Nayeem.sus", icon: Facebook },
  { label: "Creator Page", href: "https://www.facebook.com/naymur911", icon: Facebook },
];

const ventures = [
  {
    id: "01",
    name: "Arc Studio Production",
    type: "Creative studio · Founder & Producer",
    href: "https://www.facebook.com/arcstudioproduction",
  },
  {
    id: "02",
    name: "Beat of Dhaka",
    type: "Creative discovery platform · Chairperson",
    href: "https://www.facebook.com/beat.of.dhaka",
  },
  {
    id: "03",
    name: "Kintsugi Bangladesh",
    type: "Founder & CEO",
    href: "https://www.facebook.com/KintsugiBangladesh",
  },
];

const copy = {
  en: {
    language: "日本語",
    menu: "MENU",
    nav: [
      ["Arc Studio", "/arc-studio"],
      ["Beat of Dhaka", "/beat-of-dhaka"],
      ["Contact", "#contact"],
    ],
    bootKicker: "PERSONAL PORTFOLIO / 01",
    bootTitle: "Enter\nNAYEEM.exe",
    bootCopy: "An experience of how I think, create, and build.",
    bootPrompt: "Enter if you're ready to explore.",
    enter: "START JOURNEY",
    skip: "Skip intro",
    heroEyebrow: "TRANSMISSION 01 · DHAKA, BD",
    heroTitle: ["I BUILD", "WORLDS", "PEOPLE", "REMEMBER."],
    heroNote: "Creative marketer. Content creator. Entrepreneur.",
    heroDetail: "Founder & Producer at Arc Studio. Chairperson of Beat of Dhaka. Founder & CEO of Kintsugi Bangladesh.",
    scroll: "SCROLL TO EXPLORE",
    missionLabel: "THE SIGNAL",
    missionTitle: "Not here to fill a screen.",
    missionCopy:
      "I am Nayeem—a professional marketer, part-time content creator, and entrepreneur from Dhaka. I turn curiosity into studios, communities, campaigns, and stories people can enter.",
    nowLabel: "CURRENT FREQUENCY",
    nowOne: "Leading Arc Studio Production",
    nowTwo: "Championing local creators through Beat of Dhaka",
    nowThree: "Growing Kintsugi Bangladesh",
    profileFacts: [["NAME", "NAYEEM"], ["BORN", "06 FEB 2006"], ["HOME", "DHAKA, BANGLADESH"], ["MODE", "MARKETER / CREATOR / ENTREPRENEUR"]],
    venturesLabel: "VENTURES / LIVE LINKS",
    venturesTitle: "Three ideas in motion.",
    venturesCopy:
      "A studio, a city platform, and a company built around progress—each one is a different doorway into my work.",
    visit: "OPEN SIGNAL",
    notesLabel: "FIELD NOTES",
    notesTitle: "The person behind the work.",
    notes: [
      ["CURIOUS", "I explore first, then make meaning from what I find."],
      ["ROMANTIC", "I believe small details can carry a whole feeling."],
      ["FUN", "A little play makes the work—and the process—better."],
      ["PRECISION-DRIVEN", "Good enough is a draft. I keep going."],
    ],
    favoritesLabel: "OFFLINE INVENTORY",
    favorites: ["Anime & manga", "Late-night ideas", "Exploring", "Cake"],
    animeLabel: "INSPIRATION LOG / 02",
    animeTitle: "Stories that teach me to build with feeling.",
    animeCopy: "Darling in the Franxx, One Piece, Evangelion, Nana, and Monster stay in my creative orbit. Zero Two is the character I return to most.",
    animeFavorites: ["Darling in the Franxx", "One Piece", "Evangelion", "Nana", "Monster", "ZERO TWO"],
    contactLabel: "DIRECT LINE",
    contactTitle: "Have an idea worth entering?",
    contactCopy: "Write to me. I read every meaningful message.",
    email: "SEND A SIGNAL",
    whatsapp: "MESSAGE ON WHATSAPP",
    footer: "NAYEEM / ALL SIGNALS ACTIVE",
    role: "CREATIVE MARKETER · FOUNDER",
    available: "OPEN TO A GOOD CONVERSATION",
    ventureTypes: [
      "Creative studio · Founder & Producer",
      "Creative discovery platform · Chairperson",
      "Founder & CEO",
    ],
  },
  ja: {
    language: "ENGLISH",
    menu: "メニュー",
    nav: [
      ["ARC STUDIO", "/arc-studio"],
      ["BEAT OF DHAKA", "/beat-of-dhaka"],
      ["連絡", "#contact"],
    ],
    bootKicker: "PERSONAL PORTFOLIO / 01",
    bootTitle: "Enter\nNAYEEM.exe",
    bootCopy: "私がどう考え、創り、築くかを体験する場所。",
    bootPrompt: "準備ができたら、旅を始めよう。",
    enter: "START JOURNEY",
    skip: "イントロをスキップ",
    heroEyebrow: "TRANSMISSION 01 · DHAKA, BD",
    heroTitle: ["記憶に", "残る世界を", "つくって", "います。"],
    heroNote: "クリエイティブマーケター。コンテンツ制作者。起業家。",
    heroDetail: "Arc StudioのFounder & Producer。Beat of DhakaのChairperson。Kintsugi BangladeshのFounder & CEO。",
    scroll: "SCROLL TO EXPLORE",
    missionLabel: "THE SIGNAL",
    missionTitle: "画面を埋めるために、ここにいるのではない。",
    missionCopy:
      "私はダッカ出身のプロフェッショナルマーケター、パートタイムのコンテンツ制作者、そして起業家であるナイームです。好奇心を、人が入り込めるスタジオ、コミュニティ、キャンペーン、物語へ変えていきます。",
    nowLabel: "CURRENT FREQUENCY",
    nowOne: "Arc Studio Productionを率いる",
    nowTwo: "Beat of Dhakaで地元のクリエイターを応援する",
    nowThree: "Kintsugi Bangladeshを育てる",
    profileFacts: [["NAME", "NAYEEM"], ["BORN", "2006年2月6日"], ["HOME", "DHAKA, BANGLADESH"], ["MODE", "MARKETER / CREATOR / ENTREPRENEUR"]],
    venturesLabel: "VENTURES / LIVE LINKS",
    venturesTitle: "動き続ける、三つのアイデア。",
    venturesCopy:
      "スタジオ、都市のプラットフォーム、そして前進のための会社。それぞれが僕の仕事につながる入口です。",
    visit: "OPEN SIGNAL",
    notesLabel: "FIELD NOTES",
    notesTitle: "仕事の向こう側にいる人。",
    notes: [
      ["好奇心", "まず探索し、見つけたものに意味を与えます。"],
      ["ROMANTIC", "小さなディテールには、ひとつの感情を運ぶ力があると思う。"],
      ["FUN", "少しの遊び心が、作品も制作過程も良くします。"],
      ["こだわり", "「これでいい」は下書き。もっと先へ進みます。"],
    ],
    favoritesLabel: "OFFLINE INVENTORY",
    favorites: ["アニメとマンガ", "深夜のアイデア", "探索", "ケーキ"],
    animeLabel: "INSPIRATION LOG / 02",
    animeTitle: "感情を持って創ることを教えてくれた物語。",
    animeCopy: "Darling in the Franxx、One Piece、Evangelion、Nana、Monsterは、いつも僕の創作の軌道にあります。最も心に残るキャラクターはZero Twoです。",
    animeFavorites: ["Darling in the Franxx", "One Piece", "Evangelion", "Nana", "Monster", "ZERO TWO"],
    contactLabel: "DIRECT LINE",
    contactTitle: "入りたくなるアイデアがありますか？",
    contactCopy: "メッセージを送ってください。意味のある言葉は、すべて読みます。",
    email: "SEND A SIGNAL",
    whatsapp: "WHATSAPPで連絡",
    footer: "NAYEEM / ALL SIGNALS ACTIVE",
    role: "CREATIVE MARKETER · FOUNDER",
    available: "OPEN TO A GOOD CONVERSATION",
    ventureTypes: [
      "クリエイティブスタジオ · Founder & Producer",
      "クリエイター発見プラットフォーム · Chairperson",
      "Founder & CEO",
    ],
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [entryAnimating, setEntryAnimating] = useState(false);
  const [booted, setBooted] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview");
    if (preview === "entry") return false;
    return preview === "main" || window.sessionStorage.getItem("nayeem-signal-entered") === "true";
  });
  const c = copy[language];

  const finishEntry = () => {
    window.sessionStorage.setItem("nayeem-signal-entered", "true");
    setBooted(true);
  };

  const enterSite = () => {
    if (entryAnimating) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      finishEntry();
      return;
    }
    setEntryAnimating(true);
    window.setTimeout(finishEntry, 940);
  };

  const changeLanguage = () => {
    setLanguage((active) => (active === "en" ? "ja" : "en"));
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (event: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    const section = document.querySelector<HTMLElement>(href);
    if (!section) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const headerOffset = 76;
    const destination = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: destination, behavior: reducedMotion ? "auto" : "smooth" });
    window.history.replaceState(null, "", href);
    setMenuOpen(false);
  };

  return (
    <main className={`signal-shell ${language === "ja" ? "is-japanese" : ""}`}>
      <svg className="portrait-alpha-defs" aria-hidden="true" focusable="false">
        <defs>
          <filter id="portrait-alpha-mask" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -0.333 -0.333 -0.333 0 1" result="inverseLuminance" />
            <feComponentTransfer in="inverseLuminance" result="portraitAlpha">
              <feFuncA type="table" tableValues="0 0 0.25 0.9 1" />
            </feComponentTransfer>
            <feComposite in="SourceGraphic" in2="portraitAlpha" operator="in" />
          </filter>
          <filter id="venture-color-alpha" colorInterpolationFilters="sRGB">
            <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1 0 -1 0 0" result="colorSignal" />
            <feComposite in="SourceGraphic" in2="colorSignal" operator="in" />
          </filter>
        </defs>
      </svg>
      {!booted && (
        <section className={`boot-screen ${entryAnimating ? "boot-screen--exit" : ""}`} aria-label="Midnight Signal introduction">
          <div className="boot-grain" />
          <div className="boot-car-stage" aria-hidden="true">
            <svg className="boot-road" viewBox="0 0 600 520" preserveAspectRatio="none">
              <path d="M300 28 C95 94 106 266 238 387 C269 415 292 435 300 466" />
              <path d="M300 28 C95 94 106 266 238 387 C269 415 292 435 300 466" />
            </svg>
            <img className="boot-mark boot-mark--car" src={assets.introCar} alt="" />
          </div>
          <div className="boot-content">
            <div className="boot-status"><span className="status-dot" /> {c.bootKicker}</div>
            <h1 className="boot-title">{c.bootTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="boot-copy"><span>{c.bootCopy}</span><span>{c.bootPrompt}</span></p>
            <button className={`pixel-button pixel-button--hero ${entryAnimating ? "pixel-button--hit" : ""}`} type="button" onClick={enterSite} disabled={entryAnimating}>
              <span className="boot-impact" aria-hidden="true" />
              <span>{c.enter}</span><ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
            <button className="boot-skip" type="button" onClick={finishEntry} disabled={entryAnimating}>{c.skip}</button>
          </div>
          <div className="boot-corners" aria-hidden="true"><i /><i /><i /><i /></div>
        </section>
      )}

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Nayeem home">
          <img src={assets.mark} alt="" />
          <span>NAYEEM<span className="brand-mark-dot">.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {c.nav.map(([label, href]) => <a key={href} href={href} onClick={(event) => scrollToSection(event, href)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="language-button" onClick={changeLanguage} type="button" aria-label="Change language">{c.language}</button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} type="button" aria-label={c.menu} aria-expanded={menuOpen}>
            {menuOpen ? <X size={19} /> : <Menu size={20} />}<span>{c.menu}</span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__inner">
          {c.nav.map(([label, href], index) => <a key={href} style={{ "--menu-index": index } as React.CSSProperties} href={href} onClick={(event) => scrollToSection(event, href)}>{label}<ArrowUpRight size={18} /></a>)}
          <div className="mobile-menu__social">{socials.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</div>
        </div>
      </div>

      <section className="hero" id="top" style={{ backgroundImage: `linear-gradient(90deg, #130b0b 0%, rgb(19 11 12 / 96%) 36%, rgb(19 11 12 / 62%) 55%, rgb(19 11 12 / 14%) 78%, rgb(19 11 12 / 54%) 100%), linear-gradient(0deg, #17120f 2%, transparent 40%), url("${assets.hero}")` }}>
        <div className="hero-rail hero-rail--left" aria-hidden="true"><span>001</span><i /><span>DH</span></div>
        <div className="hero-copy">
          <p className="section-kicker"><span className="pulse-square" /> {c.heroEyebrow}</p>
          <h2 className="hero-title">{c.heroTitle.map((line, index) => <span className={index === 1 ? "hero-title--accent" : ""} key={line}>{line}</span>)}</h2>
          <div className="hero-intro">
            <p>{c.heroNote}</p><span>{c.heroDetail}</span>
          </div>
        </div>
        <a className="scroll-prompt" href="#signal"><span>{c.scroll}</span><ArrowDown size={16} /></a>
        <div className="hero-coordinates" aria-hidden="true">23°48'N<br />90°24'E</div>
      </section>

      <section className="signal-section section-frame" id="signal">
        <div className="section-rail" aria-hidden="true"><span>01</span><i /></div>
        <div className="signal-intro">
          <p className="section-kicker">{c.missionLabel}</p>
          <h2>{c.missionTitle}</h2>
          <p className="lede">{c.missionCopy}</p>
          <div className="profile-facts" aria-label="Nayeem profile facts">{c.profileFacts.map(([label, value]) => <div className="profile-fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        </div>
        <div className="frequency-card">
          <div className="frequency-card__head"><span>{c.nowLabel}</span><span className="live-dot" /> LIVE</div>
          <ul>
            {[c.nowOne, c.nowTwo, c.nowThree].map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}
          </ul>
          <div className="frequency-card__meter"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
      </section>

      <section className="ventures-section section-frame" id="ventures">
        <div className="section-rail" aria-hidden="true"><span>02</span><i /></div>
        <div className="venture-art venture-art--logos" aria-label="Venture brand logos">
          {ventureLogos.map((logo) => <div className={`venture-logo venture-logo--${logo.tone}`} key={logo.name}><img src={logo.source} alt={`${logo.name} logo`} loading="lazy" decoding="async" /></div>)}
        </div>
        <div className="ventures-copy">
          <p className="section-kicker">{c.venturesLabel}</p>
          <h2>{c.venturesTitle}</h2>
          <p className="lede">{c.venturesCopy}</p>
        </div>
        <div className="venture-list">
          {ventures.map((venture, index) => <a className="venture-row" key={venture.name} href={venture.href} target="_blank" rel="noreferrer" aria-label={`${c.visit}: ${venture.name}`}>
            <span className="venture-number">{venture.id}</span>
            <span className="venture-name"><strong>{venture.name}</strong><small>{c.ventureTypes[index]}</small></span>
            <span className="venture-visit">{c.visit}<ArrowUpRight size={17} /></span>
          </a>)}
        </div>
      </section>

      <section className="notes-section section-frame" id="notes">
        <div className="section-rail" aria-hidden="true"><span>03</span><i /></div>
        <div className="notes-head">
          <p className="section-kicker">{c.notesLabel}</p>
          <h2>{c.notesTitle}</h2>
        </div>
        <div className="notes-list">
          {c.notes.map(([title, description], index) => <article className="note-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}
        </div>
        <div className="inventory"><p>{c.favoritesLabel}</p><div>{c.favorites.map((favorite) => <span key={favorite}>{favorite}</span>)}</div></div>
        <div className="anime-signal">
          <div className="anime-signal__intro">
            <p className="section-kicker">{c.animeLabel}</p>
            <h3>{c.animeTitle}</h3>
            <p>{c.animeCopy}</p>
          </div>
          <div className="anime-gallery" aria-label="Nayeem's favourite anime and character posters">
            {animeCards.map((anime) => <article className="anime-card" key={anime.title}>
              <img src={anime.source} alt={anime.alt} loading="lazy" decoding="async" />
              <div className="anime-card__caption"><span>{anime.label}</span><h4>{anime.title}</h4></div>
            </article>)}
          </div>
          <div className="anime-tags">{c.animeFavorites.map((title) => <span key={title}>{title}</span>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <p className="section-kicker">{c.contactLabel}</p>
        <h2>{c.contactTitle}</h2>
        <p>{c.contactCopy}</p>
        <div className="contact-actions">
          <a className="pixel-button pixel-button--contact" href="https://mail.google.com/mail/?view=cm&fs=1&to=nayeem002d%40gmail.com&su=Portfolio%20enquiry&body=Hi%20Nayeem%2C%0A%0A" target="_blank" rel="noreferrer" aria-label="Compose an email to Nayeem in Gmail"><span>{c.email}</span><Mail size={17} /></a>
          <a className="pixel-button pixel-button--whatsapp" href="https://wa.me/8801609223775?text=Hi%20Nayeem%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noreferrer" aria-label="Message Nayeem on WhatsApp"><span>{c.whatsapp}</span><MessageCircle size={17} /></a>
        </div>
        <div className="contact-meta"><span>{c.role}</span><span><i className="live-dot" /> {c.available}</span></div>
      </section>

      <footer className="site-footer">
        <a className="brand-lockup" href="#top"><img src={assets.mark} alt="" /><span>NAYEEM<span className="brand-mark-dot">.</span></span></a>
        <p>{c.footer}</p>
        <div className="footer-socials">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17} /></a>)}</div>
      </footer>
    </main>
  );
}
