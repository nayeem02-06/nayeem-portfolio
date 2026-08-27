/**
 * Midnight Signal style reminder: this is a guided night walk, not a résumé grid.
 * Use compact evidence, ember signals, pixel wayfinding, and mobile-first touch targets.
 */
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";

type Language = "en" | "ja";

const assets = {
  hero: "/manus-storage/nayeem-midnight-hero_e7fd2756.png",
  ventures: "/manus-storage/nayeem-ventures-scene_d8d89493.png",
  japan: "/manus-storage/nayeem-japan-postcard_55ea60de.png",
  mark: "/manus-storage/nayeem-pixel-head-true-alpha_3d54bd78.png",
};

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/nayeem__kun/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nayeem-002d/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/Nayeem.sus", icon: MoveUpRight },
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
      ["Signal", "#signal"],
      ["Ventures", "#ventures"],
      ["Notes", "#notes"],
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
    heroDetail: "Founder-led ideas, culture-led communities, and stories with a signal.",
    scroll: "SCROLL TO EXPLORE",
    missionLabel: "THE SIGNAL",
    missionTitle: "Not here to fill a screen.",
    missionCopy:
      "I turn curiosity into things people can enter: studios, communities, campaigns, and future chapters.",
    nowLabel: "CURRENT FREQUENCY",
    nowOne: "Growing creative worlds",
    nowTwo: "Finding underrated voices",
    nowThree: "Planning the next Japan chapter",
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
      ["PRECISION-DRIVEN", "Good enough is a draft. I keep going."],
    ],
    favoritesLabel: "OFFLINE INVENTORY",
    favorites: ["Anime & manga", "Late-night ideas", "Exploring", "Cake"],
    nextKicker: "NEXT CHAPTER / IN TRANSMISSION",
    nextTitle: "Japan is on the horizon.",
    nextCopy:
      "A new place, a future YouTube channel, and more stories waiting to become real. The signal stays open.",
    contactLabel: "DIRECT LINE",
    contactTitle: "Have an idea worth entering?",
    contactCopy: "Write to me. I read every meaningful message.",
    email: "SEND A SIGNAL",
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
      ["SIGNAL", "#signal"],
      ["活動", "#ventures"],
      ["NOTE", "#notes"],
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
    heroDetail: "創業者のアイデア、カルチャーのあるコミュニティ、そして物語にシグナルを。",
    scroll: "SCROLL TO EXPLORE",
    missionLabel: "THE SIGNAL",
    missionTitle: "画面を埋めるために、ここにいるのではない。",
    missionCopy:
      "好奇心を、人が入り込めるものへ変えていきます。スタジオ、コミュニティ、キャンペーン、そして次の章へ。",
    nowLabel: "CURRENT FREQUENCY",
    nowOne: "クリエイティブな世界を育てる",
    nowTwo: "まだ知られていない声を見つける",
    nowThree: "日本での次の章を準備する",
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
      ["こだわり", "「これでいい」は下書き。もっと先へ進みます。"],
    ],
    favoritesLabel: "OFFLINE INVENTORY",
    favorites: ["アニメとマンガ", "深夜のアイデア", "探索", "ケーキ"],
    nextKicker: "NEXT CHAPTER / IN TRANSMISSION",
    nextTitle: "日本が、地平線にある。",
    nextCopy:
      "新しい場所、未来のYouTubeチャンネル、そして現実になるのを待つ物語。シグナルは開いたままです。",
    contactLabel: "DIRECT LINE",
    contactTitle: "入りたくなるアイデアがありますか？",
    contactCopy: "メッセージを送ってください。意味のある言葉は、すべて読みます。",
    email: "SEND A SIGNAL",
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
  const [booted, setBooted] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("preview") === "main" || window.sessionStorage.getItem("nayeem-signal-entered") === "true";
  });
  const c = copy[language];

  const enterSite = () => {
    window.sessionStorage.setItem("nayeem-signal-entered", "true");
    setBooted(true);
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
      {!booted && (
        <section className="boot-screen" aria-label="Midnight Signal introduction">
          <div className="boot-grain" />
          <div className="boot-content">
            <div className="boot-status"><span className="status-dot" /> {c.bootKicker}</div>
            <img className="boot-mark" src={assets.mark} alt="" />
            <h1 className="boot-title">{c.bootTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="boot-copy"><span>{c.bootCopy}</span><span>{c.bootPrompt}</span></p>
            <button className="pixel-button pixel-button--hero" type="button" onClick={enterSite}>
              <span>{c.enter}</span><ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
            <button className="boot-skip" type="button" onClick={enterSite}>{c.skip}</button>
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

      <section className="hero" id="top" style={{ backgroundImage: `linear-gradient(90deg, #17120f 4%, rgb(23 18 15 / 92%) 34%, rgb(23 18 15 / 38%) 74%, rgb(23 18 15 / 64%)), linear-gradient(0deg, #17120f 2%, transparent 37%), url("${assets.hero}")` }}>
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
        <div className="venture-art"><img src={assets.ventures} alt="" loading="lazy" /><div className="venture-art__scan" /></div>
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
      </section>

      <section className="next-section section-frame">
        <div className="section-rail" aria-hidden="true"><span>04</span><i /></div>
        <div className="next-image"><img src={assets.japan} alt="A pixel-art traveler awaiting a train at night" loading="lazy" /></div>
        <div className="next-copy">
          <p className="section-kicker">{c.nextKicker}</p>
          <h2>{c.nextTitle}</h2>
          <p className="lede">{c.nextCopy}</p>
          <div className="next-code"><span>JP</span><i /><span>00:02</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <p className="section-kicker">{c.contactLabel}</p>
        <h2>{c.contactTitle}</h2>
        <p>{c.contactCopy}</p>
        <a className="pixel-button pixel-button--contact" href="mailto:nayeem002d@gmail.com"><span>{c.email}</span><Mail size={17} /></a>
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
