/**
 * Venture pages style reminder: each page is a focused brand portal with generous
 * space, direct evidence, and a visual system that belongs only to its venture.
 */
import { ArrowLeft, ArrowUpRight, Mail, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";

type Locale = "en" | "ja";
type VentureKey = "arc" | "beat";

type VentureCopy = {
  language: string;
  eyebrow: string;
  hero: string;
  summary: string;
  whoLabel: string;
  whoTitle: string;
  whoCopy: string;
  whatLabel: string;
  whatTitle: string;
  services: { title: string; copy: string }[];
  progressLabel: string;
  progressTitle: string;
  progress: string[];
  connectLabel: string;
  connectTitle: string;
  connectCopy: string;
  visit: string;
  email: string;
  back: string;
};

type VentureConfig = {
  name: string;
  shortName: string;
  href: string;
  mark?: string;
  markAlt?: string;
  copy: Record<Locale, VentureCopy>;
};

const ventures: Record<VentureKey, VentureConfig> = {
  arc: {
    name: "Arc Studio Production",
    shortName: "ARC STUDIO",
    href: "https://www.facebook.com/arcstudioproduction",
    mark: "/manus-storage/arc-studio-logo-new_fdbde81f.png",
    markAlt: "Arc Studio Production logo",
    copy: {
      en: {
        language: "日本語",
        eyebrow: "DHAKA, BANGLADESH / ORIGINAL MANGA & OBJECTS",
        hero: "Dark worlds, made from here.",
        summary: "Arc Studio Production is a Dhaka-based creative studio creating original Bangladeshi manga and collectible worlds in Bangla and English.",
        whoLabel: "01 / WHO WE ARE",
        whoTitle: "A home for Banga manga with a darker pulse.",
        whoCopy: "Founded and produced by Nayeem, Arc Studio builds a distinct identity for Bangladeshi manga through psychological, horror, and character-led storytelling.",
        whatLabel: "02 / WHAT WE DO",
        whatTitle: "Stories first. Worlds around them.",
        services: [
          { title: "ORIGINAL MANGA", copy: "Dark, psychological, and horror manga developed from a Bangladeshi point of view." },
          { title: "BANGA WORLD-BUILDING", copy: "Characters, worlds, and visual language with a local identity and a wider reach." },
          { title: "TERMINAL ZERO", copy: "Premium merchandise and collectables, including acrylic keychains, models, and apparel." },
        ],
        progressLabel: "03 / WORLDS IN MOTION",
        progressTitle: "Work that is finding its form.",
        progress: ["SHADOW LINER / ORIGINAL BANGLADESHI MANGA", "BIOLOTUS / ORIGINAL BANGLADESHI MANGA", "TERMINAL ZERO / COLLECTIBLE MERCHANDISE"],
        connectLabel: "OPEN A PORTAL",
        connectTitle: "Follow the next chapter.",
        connectCopy: "Visit Arc Studio Production for current releases, visual worlds, and news from the studio.",
        visit: "VISIT ARC STUDIO",
        email: "EMAIL NAYEEM",
        back: "BACK TO NAYEEM",
      },
      ja: {
        language: "ENGLISH",
        eyebrow: "DHAKA, BANGLADESH / ORIGINAL MANGA & OBJECTS",
        hero: "バングラデシュから、暗い世界を描く。",
        summary: "Arc Studio Productionは、バングラデシュ発のオリジナル漫画とコレクティブルな世界を、バングラ語と英語で制作するダッカのクリエイティブスタジオです。",
        whoLabel: "01 / 私たちは誰か",
        whoTitle: "より深い衝動を持つ、Banga mangaの拠点。",
        whoCopy: "Nayeemが創設・プロデュースするArc Studioは、心理的でホラー要素のある物語とキャラクター主導の表現を通して、バングラデシュ漫画の新しいアイデンティティを築きます。",
        whatLabel: "02 / 私たちがすること",
        whatTitle: "物語から始まり、世界へ広がる。",
        services: [
          { title: "ORIGINAL MANGA", copy: "バングラデシュの視点から生まれる、ダークで心理的、ホラーなオリジナル漫画。" },
          { title: "BANGA WORLD-BUILDING", copy: "ローカルなアイデンティティと広い届き方を持つ、キャラクター、世界、ビジュアル言語。" },
          { title: "TERMINAL ZERO", copy: "アクリルキーチェーン、モデル、アパレルなどを含むプレミアムなマーチャンダイズ。" },
        ],
        progressLabel: "03 / 動いている世界",
        progressTitle: "形になりつつある作品。",
        progress: ["SHADOW LINER / ORIGINAL BANGLADESHI MANGA", "BIOLOTUS / ORIGINAL BANGLADESHI MANGA", "TERMINAL ZERO / COLLECTIBLE MERCHANDISE"],
        connectLabel: "OPEN A PORTAL",
        connectTitle: "次の章を追いかける。",
        connectCopy: "現在のリリース、ビジュアルの世界、スタジオからのニュースはArc Studio Productionでご覧ください。",
        visit: "ARC STUDIOへ",
        email: "NAYEEMにメール",
        back: "NAYEEMへ戻る",
      },
    },
  },
  beat: {
    name: "Beat of Dhaka",
    shortName: "BEAT\nOF DHAKA",
    href: "https://www.facebook.com/beat.of.dhaka",
    copy: {
      en: {
        language: "日本語",
        eyebrow: "DHAKA, BANGLADESH / CREATOR DISCOVERY PLATFORM",
        hero: "A louder city for underrated talent.",
        summary: "Beat of Dhaka is a platform for discovering and promoting underrated artists, illustrators, and creators across the city.",
        whoLabel: "01 / WHO WE ARE",
        whoTitle: "A city platform with its ear to the ground.",
        whoCopy: "Chaired by Nayeem, Beat of Dhaka creates more room for the makers whose work deserves to be seen, heard, and connected.",
        whatLabel: "02 / WHAT WE DO",
        whatTitle: "We find the work before it becomes obvious.",
        services: [
          { title: "CREATOR DISCOVERY", copy: "Searching for underrated voices across Dhaka's creative landscape." },
          { title: "ARTIST PROMOTION", copy: "Giving artists, illustrators, and creators a stronger platform for visibility." },
          { title: "CITY CULTURE", copy: "Building conversations around the people and work shaping the city's creative pulse." },
        ],
        progressLabel: "03 / IN THE MIX",
        progressTitle: "A platform still gathering its rhythm.",
        progress: ["CREATOR SPOTLIGHTS / IN DEVELOPMENT", "LOCAL ARTIST DISCOVERY / ONGOING", "DHAKA CULTURE CONVERSATIONS / IN MOTION"],
        connectLabel: "STAY IN THE MIX",
        connectTitle: "Know an artist the city should hear?",
        connectCopy: "Follow Beat of Dhaka for creator discovery, updates, and the next names worth paying attention to.",
        visit: "VISIT BEAT OF DHAKA",
        email: "EMAIL NAYEEM",
        back: "BACK TO NAYEEM",
      },
      ja: {
        language: "ENGLISH",
        eyebrow: "DHAKA, BANGLADESH / CREATOR DISCOVERY PLATFORM",
        hero: "まだ知られていない才能のために、街をもっと大きく。",
        summary: "Beat of Dhakaは、ダッカの知られざるアーティスト、イラストレーター、クリエイターを発見し、紹介するためのプラットフォームです。",
        whoLabel: "01 / 私たちは誰か",
        whoTitle: "街の息づかいに耳を澄ますプラットフォーム。",
        whoCopy: "NayeemがChairpersonを務めるBeat of Dhakaは、見るべき、聞くべき、つながるべき表現者のために、より大きな場所をつくります。",
        whatLabel: "02 / 私たちがすること",
        whatTitle: "まだ明白になる前の作品を見つける。",
        services: [
          { title: "CREATOR DISCOVERY", copy: "ダッカのクリエイティブな景色にある、まだ知られていない声を探します。" },
          { title: "ARTIST PROMOTION", copy: "アーティスト、イラストレーター、クリエイターが届くための、より強い場をつくります。" },
          { title: "CITY CULTURE", copy: "街のクリエイティブな鼓動をつくる人と作品の会話を育てます。" },
        ],
        progressLabel: "03 / IN THE MIX",
        progressTitle: "まだリズムを集めているプラットフォーム。",
        progress: ["CREATOR SPOTLIGHTS / IN DEVELOPMENT", "LOCAL ARTIST DISCOVERY / ONGOING", "DHAKA CULTURE CONVERSATIONS / IN MOTION"],
        connectLabel: "STAY IN THE MIX",
        connectTitle: "街が知るべきアーティストを知っていますか？",
        connectCopy: "クリエイターの発見、更新、そして注目すべき次の名前はBeat of Dhakaで。",
        visit: "BEAT OF DHAKAへ",
        email: "NAYEEMにメール",
        back: "NAYEEMへ戻る",
      },
    },
  },
};

export default function VenturePage({ venture }: { venture: VentureKey }) {
  const [language, setLanguage] = useState<Locale>("en");
  const config = ventures[venture];
  const c = config.copy[language];

  return (
    <main className={`venture-page venture-page--${venture} ${language === "ja" ? "venture-page--ja" : ""}`}>
      <header className="venture-header">
        <a href="/" className="venture-back"><ArrowLeft size={17} /> <span>{c.back}</span></a>
        <nav className="venture-header-nav" aria-label="Portfolio navigation"><a href="/arc-studio" aria-current={venture === "arc" ? "page" : undefined}>ARC</a><a href="/beat-of-dhaka" aria-current={venture === "beat" ? "page" : undefined}>BEAT</a></nav>
        <button className="venture-language" type="button" onClick={() => setLanguage((current) => current === "en" ? "ja" : "en")}>{c.language}</button>
      </header>
      <div className="venture-station-rail" aria-hidden="true"><span>SIGNAL / 0{venture === "arc" ? "1" : "2"}</span><i /><span>23°48'N</span></div>

      <section className="venture-hero-panel">
        <div className="venture-index" aria-hidden="true">0{venture === "arc" ? "1" : "2"}</div>
        <div className="venture-moon-signal" aria-hidden="true"><i /><b /><b /><b /></div>
        <div className="venture-hero-copy">
          <p className="venture-eyebrow"><Sparkles size={14} /> {c.eyebrow}</p>
          <h1>{c.hero}</h1>
          <p className="venture-summary">{c.summary}</p>
        </div>
        <div className="venture-mark" aria-label={`${config.name} brand mark`}>
          {config.mark ? <img src={config.mark} alt={config.markAlt} /> : <span>{config.shortName.split("\n").map((line) => <b key={line}>{line}</b>)}</span>}
        </div>
      </section>

      <section className="venture-section venture-section--who">
        <p className="venture-kicker">{c.whoLabel}</p>
        <div className="venture-split">
          <h2>{c.whoTitle}</h2>
          <p>{c.whoCopy}</p>
        </div>
      </section>

      <section className="venture-section venture-section--work">
        <p className="venture-kicker">{c.whatLabel}</p>
        <h2>{c.whatTitle}</h2>
        <div className="venture-services">
          {c.services.map((service, index) => <article key={service.title} className="venture-service"><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.copy}</p></article>)}
        </div>
      </section>

      <section className="venture-section venture-section--progress">
        <p className="venture-kicker">{c.progressLabel}</p>
        <div className="venture-split">
          <h2>{c.progressTitle}</h2>
          <ol className="venture-progress">{c.progress.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
        </div>
      </section>

      <section className="venture-connect">
        <p className="venture-kicker">{c.connectLabel}</p>
        <h2>{c.connectTitle}</h2>
        <p>{c.connectCopy}</p>
        <div className="venture-actions">
          <a href={config.href} target="_blank" rel="noreferrer"><span>{c.visit}</span><ArrowUpRight size={18} /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nayeem002d%40gmail.com&su=Portfolio%20enquiry&body=Hi%20Nayeem%2C%0A%0A" target="_blank" rel="noreferrer"><span>{c.email}</span><Mail size={17} /></a>
        </div>
      </section>
      <footer className="venture-footer">
        <a href="/">NAYEEM<span>.</span></a>
        <p>{config.name}</p>
        <nav aria-label="Venture links"><a href="/arc-studio">ARC STUDIO</a><a href="/beat-of-dhaka">BEAT OF DHAKA</a><a href="https://discord.gg/MRyNmhHqa2" target="_blank" rel="noreferrer">DISCORD <MessageCircle size={12} /></a></nav>
      </footer>
    </main>
  );
}
