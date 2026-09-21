import React, { useEffect, useMemo, useRef, useState } from "react";

const NAV = [
  ["HOME", "/"],
  ["ABOUT", "/about"],
  ["PROJECTS", "/projects"],
  ["EXPERIENCE", "/experience"],
  ["EDUCATION", "/education"],
  ["WRITING", "/writing"],
  ["CONTACT", "/contact"],
];

const PROJECTS = [
  { title: "Creative", slug: "creative", image: "/assets/project-creative.png", alt: "shape" },
  { title: "App", slug: "app", image: "/assets/project-app.png", alt: "symbol" },
  { title: "Logo Design", slug: "logo-design", image: "/assets/project-logo.png", alt: "example" },
  { title: "Monogram", slug: "monogram", image: "/assets/project-monogram.png", alt: "abstract" },
  { title: "Branding", slug: "branding", image: "/assets/project-branding.png", alt: "shape" },
  { title: "Experimental", slug: "experimental", image: "/assets/project-experimental.png", alt: "image" },
];

const EXPERIENCE = [
  {
    title: "Senior UX/UI Designer",
    company: "SuperCo",
    date: "2019 — Present",
    text: "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
  },
  {
    title: "UI/UX Designer",
    company: "BlendXYZ",
    date: "2016 — 2017",
    text: "Collaborated with the development team to implement a responsive design approach, improving the mobile user experience and increasing mobile app engagement.",
  },
  {
    title: "Lead Product Designer",
    company: "CocoBasic",
    date: "2017 — 2019",
    text: "Designed and implemented creative solutions such as wellness app and high-traffic e-commerce websites for various clients and increase overall client bussines to his satisfaction.",
  },
  {
    title: "Junior Designer",
    company: "Internistum",
    date: "2015 — 2016",
    text: "Internship and starting position in creative team as Junior Designer. Focused on creating wireframes, styleguides, presentations and prototypes for web and mobile applications.",
  },
];

const EDUCATION = [
  {
    title: "Master of Arts in Interaction Design",
    school: "Stanford University",
    date: "2012 — 2014",
    text: "Specialized in user research, interaction design, user interface, digital and graphic design.",
  },
  {
    title: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    date: "2008 — 2012",
    text: "Gained a solid foundation in software development overall. Focused on building mobile applications.",
  },
  {
    title: "Diploma in Graphic Design",
    school: "San Francisco Design Institute",
    date: "2007 — 2008",
    text: "Focused on typography and digital design skills. Acquired fundamental knowledge of UI/UX.",
  },
  {
    title: "Art School",
    school: "San Francisco Design Institute",
    date: "2006 — 2007",
    text: "Acquired fundamental graphic design skills. Gained basic knowledge of design in general.",
  },
];

const POSTS = [
  ["Abstract concept in design", "May 28, 2025", "DESIGN", "abstract-concept-in-design"],
  ["Our illustration process", "May 20, 2025", "ART", "our-illustration-process"],
  ["Animation in web design", "Apr 14, 2025", "DESIGN", "animation-in-web-design"],
  ["Color theory in design", "Mar 12, 2025", "DESIGN", "color-theory-in-design"],
  ["Sandwiches and lemon juice", "Feb 20, 2025", "FOOD", "sandwiches-and-lemon-juice"],
  ["My awesome daily routine", "Feb 10, 2025", "LIFESTYLE", "my-awesome-daily-routine"],
  ["Relaxing sounds of nature", "Jan 24, 2025", "MUSIC", "relaxing-sounds-of-nature"],
  ["Building portfolio website", "Jan 12, 2025", "DESIGN", "building-portfolio-website"],
];

const TOOLS = [
  ["Framer", "No code website builder tool", "92%"],
  ["Illustrator", "Professional graphic software", "74%"],
  ["Slack", "User interface design tool", "80%"],
  ["Figma", "User interface design tool", "83%"],
  ["Photoshop", "Professional graphic software", "62%"],
  ["Notion", "Note taking and reminder tool", "54%"],
];

const SKILLS = [
  ["80%", "User Interface Design"],
  ["86%", "Interaction Design"],
  ["76%", "User Research"],
  ["72%", "Project Management"],
  ["92%", "Design Leadership"],
  ["78%", "Centered Design"],
];

function normalizePath(value) {
  const path = value.replace(/\/+$/, "") || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function usePathname() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const go = (href) => {
    const next = normalizePath(href);
    if (next !== path) window.history.pushState({}, "", next);
    setPath(next);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return [path, go];
}

function Link({ href, go, className = "", children, onClick, ...props }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (
          !event.defaultPrevented &&
          event.button === 0 &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          !event.altKey &&
          href.startsWith("/")
        ) {
          event.preventDefault();
          go(href);
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 87 69" aria-hidden="true">
      <path
        d="M85 41.727c-9.011 0-11.514-6.823-14.017-13.908-1.501 3.478-4.505 13.908-10.011 13.908-5.447 0-7.059-9.777-9.011-13.906-5.369 6.881-11.013 14.779-19.022 13.906C22.358 40.573 24.929 2 37.945 2 50.96 2 22.816 56.984 14.887 65.872 6.844 74.891-5.763 27 8.407 21.863"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spark({ size = 48, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M22.75 48C20.903 37.41 10.483 27.457 0 25.25v-2.625C10.549 20.105 20.686 10.941 22.75 0h2.625C27.169 10.66 37.542 20.343 48 22.625v2.625C37.735 27.377 27.106 37.364 25.375 48Z" fill="currentColor" />
    </svg>
  );
}

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (event) => {
      if (ref.current) ref.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <span className="cursor-glow" ref={ref} aria-hidden="true" />;
}

function Header({ path, go, dark, setDark }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const active = (href) => (href === "/" ? path === "/" : path.startsWith(href));
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className={`menu-shell ${open ? "is-open" : ""}`}>
          <button className="menu-trigger" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
            <span />
            <span />
            <span />
          </button>
          <nav className="menu-links" aria-hidden={!open}>
            {NAV.map(([label, href]) => (
              <Link key={href} href={href} go={go} className={active(href) ? "active" : ""} tabIndex={open ? 0 : -1}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <Link href="/" go={go} className="site-logo" aria-label="Villo home">
          <LogoMark />
        </Link>
        <div className="header-actions">
          <button className={`theme-switch ${dark ? "is-dark" : ""}`} aria-label="Toggle color theme" onClick={() => setDark((value) => !value)}>
            <span />
          </button>
          <a className="remix-button" href="https://cocobasic.lemonsqueezy.com/buy/4ac33a29-fed8-453f-b936-555009b97f2f" target="_blank" rel="noreferrer">
            Remix
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const items = ["FB", "TW", "INS", "FB", "TW", "INS"];
  return (
    <footer className="site-footer">
      <div className="social-marquee">
        {[...items, ...items].map((item, index) => (
          <a key={`${item}-${index}`} href={item === "FB" ? "https://facebook.com" : item === "TW" ? "https://twitter.com" : "https://instagram.com"} target="_blank" rel="noreferrer">
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}

function SectionTitle({ title, href, go }) {
  const content = (
    <>
      <h2>{title}</h2>
      <span className="title-line"><i /></span>
    </>
  );
  return href ? <Link href={href} go={go} className="section-title">{content}</Link> : <div className="section-title">{content}</div>;
}

function PageHero({ title }) {
  return (
    <div className="page-hero reveal">
      <h1>{title}</h1>
      <Spark />
    </div>
  );
}

function ToolCards({ all = false }) {
  const data = all ? TOOLS : TOOLS.slice(0, 3);
  return (
    <div className={`tool-grid ${all ? "all-tools" : ""}`}>
      {data.map(([title, description, score]) => (
        <article className="tool-card" key={title}>
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <span />
          <strong>{score}</strong>
        </article>
      ))}
    </div>
  );
}

function ProjectGrid({ limit, go }) {
  const projects = typeof limit === "number" ? PROJECTS.slice(2, 2 + limit) : PROJECTS;
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} go={go} className="project-card" key={project.slug}>
          <img src={project.image} alt={project.alt} />
          <span className="project-label">{project.title}</span>
        </Link>
      ))}
    </div>
  );
}

function TimelineGrid() {
  return (
    <div className="timeline-grid">
      {EXPERIENCE.map((item) => (
        <article className="timeline-item" key={item.title}>
          <h3>{item.title}</h3>
          <p className="muted compact">{item.company}</p>
          <p className="muted compact">{item.date}</p>
          <p className="timeline-copy">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function Stats() {
  return (
    <div className="stats-grid">
      {[ ["380+", "Projects Completed"], ["420+", "Satisfied Clients"], ["2K+", "Positive Reviews"] ].map(([value, label]) => (
        <div className="stat" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function Marquee() {
  const row = ["FRAMER", "PHOTOSHOP", "FIGMA", "ILLUSTRATOR"];
  return (
    <div className="skills-marquee" aria-hidden="true">
      {[false, true].map((reverse) => (
        <div className={`marquee-row ${reverse ? "reverse" : ""}`} key={String(reverse)}>
          {[...row, ...row, ...row].map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <span>{item}</span>
              <Spark size={32} />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

function EducationGrid() {
  return (
    <div className="education-grid">
      {EDUCATION.map((item) => (
        <article className="education-item" key={item.title}>
          <h3>{item.title}</h3>
          <p className="muted compact">{item.school}</p>
          <p className="muted compact">{item.date}</p>
          <p className="education-copy">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function PostsList({ limit = POSTS.length, go }) {
  return (
    <div className="posts-list">
      {POSTS.slice(0, limit).map(([title, date, category, slug]) => (
        <Link href={`/writing/${slug}`} go={go} className="post-row" key={slug}>
          <h3>{title}</h3>
          <span className="muted">{date}</span>
          <span className="category">{category}</span>
        </Link>
      ))}
    </div>
  );
}

function SkillStats() {
  return (
    <div className="skill-stats">
      {SKILLS.map(([value, label]) => (
        <div className="stat" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function ContactBlock() {
  const [sent, setSent] = useState(false);
  return (
    <div className="contact-block">
      <div className="contact-copy">
        <p className="contact-lede">Looking to start a project or you need consultation? Feel free to contact me.</p>
        <div className="contact-details">
          <p>San Francisco, CA, USA</p>
          <a href="mailto:lucas@yourwebsite.com">lucas@email.com</a>
          <a href="https://cocobasic.com" target="_blank" rel="noreferrer">www.cocobasic.com</a>
        </div>
      </div>
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <div className="form-row">
          <input aria-label="Name" placeholder="Jane Smith" required />
          <input aria-label="Email" type="email" placeholder="jane@framer.com" required />
        </div>
        <textarea aria-label="Message" placeholder="Message..." required />
        <button type="submit">{sent ? "Message sent" : "Send"}</button>
      </form>
    </div>
  );
}

function PortraitCard() {
  return (
    <div className="portrait-card">
      <div className="portrait-backdrop">
        <div className="portrait-socials"><span>◎</span><span>◉</span><span>f</span><span>in</span></div>
      </div>
      <img src="/assets/portrait-about.png" alt="Lucas Miller" />
      <span className="portrait-signature"><LogoMark /></span>
    </div>
  );
}

function HomePage({ go }) {
  return (
    <main className="page-body home-page">
      <section className="home-intro reveal">
        <p className="eyebrow">CRAFTING DIGITAL GOODS SINCE — Y:2017</p>
        <div className="hero-name">
          <h1>LUCAS</h1>
          <h1>MILLER</h1>
          <img className="hero-portrait" src="/assets/portrait-home.png" alt="Lucas Miller" />
        </div>
        <Spark className="hero-spark" />
        <p className="hero-lede">I’m Lucas Miller — a senior product designer passionately creating digital experiences and solutions for over 10 years</p>
        <div className="scroll-cue"><span><i /></span><small>SCROLL</small></div>
      </section>

      <section className="home-section about-section">
        <SectionTitle title="ABOUT" href="/about" go={go} />
        <div className="about-home-grid">
          <p className="about-lede muted">My passion lies in the intersection of art and technology, creating visually captivating interfaces and elevating overall user digital experiences.</p>
          <div className="about-home-right">
            <p>I hold a Bachelor of Technology in Computer Science from the esteemed Art University and a Master of Fine Arts in Interactive Design. This academic foundation has equipped me with a solid understanding of the principles that underpin effective interaction design, providing me with the knowledge to create designs that seamlessly blend aesthetics and functionality.</p>
            <ToolCards />
          </div>
        </div>
      </section>

      <section className="home-section projects-section">
        <SectionTitle title="PROJECTS" href="/projects" go={go} />
        <ProjectGrid limit={4} go={go} />
      </section>

      <section className="home-section experience-section">
        <SectionTitle title="EXPERIENCE" href="/experience" go={go} />
        <TimelineGrid />
        <Stats />
      </section>

      <Marquee />

      <section className="home-section education-section">
        <SectionTitle title="EDUCATION" href="/education" go={go} />
        <EducationGrid />
      </section>

      <section className="home-section writing-section">
        <SectionTitle title="WRITING" href="/writing" go={go} />
        <PostsList limit={5} go={go} />
        <SkillStats />
      </section>

      <section className="home-section contact-section">
        <SectionTitle title="CONTACT" href="/contact" go={go} />
        <ContactBlock />
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-body sub-page about-page">
      <PageHero title="ABOUT" />
      <section className="about-profile">
        <PortraitCard />
        <div className="about-profile-copy">
          <p className="about-lede muted">My passion lies in the intersection of art and technology, creating visually captivating interfaces and elevating overall user digital experiences.</p>
          <p>I hold a Bachelor of Technology in Computer Science from the esteemed Art University and a Master of Fine Arts in Interactive Design. This academic foundation has equipped me with a solid understanding of the principles that underpin effective interaction design, providing me with the knowledge to create designs that seamlessly blend aesthetics and functionality.</p>
        </div>
      </section>
      <ToolCards all />
      <ContactBlock />
    </main>
  );
}

function ProjectsPage({ go }) {
  return (
    <main className="page-body sub-page projects-page">
      <PageHero title="PROJECTS" />
      <ProjectGrid go={go} />
      <ContactBlock />
    </main>
  );
}

function ExperiencePage() {
  return (
    <main className="page-body sub-page experience-page">
      <PageHero title="EXPERIENCE" />
      <TimelineGrid />
      <Stats />
      <ContactBlock />
    </main>
  );
}

function EducationPage() {
  return (
    <main className="page-body sub-page education-page">
      <PageHero title="EDUCATION" />
      <EducationGrid />
      <Marquee />
      <ContactBlock />
    </main>
  );
}

function WritingPage({ go }) {
  return (
    <main className="page-body sub-page writing-page">
      <PageHero title="WRITING" />
      <PostsList go={go} />
      <ContactBlock />
    </main>
  );
}

function ContactPage() {
  return (
    <main className="page-body sub-page contact-page">
      <PageHero title="CONTACT" />
      <ContactBlock />
    </main>
  );
}

function ProjectDetail({ slug, go }) {
  const project = PROJECTS.find((item) => item.slug === slug) || PROJECTS[2];
  const exact = project.slug === "logo-design";
  const related = PROJECTS.filter((item) => item.slug !== project.slug).slice(0, 2);
  return (
    <main className="page-body detail-page project-detail">
      <div className="detail-title"><h1>{project.title}</h1></div>
      <div className="project-meta">
        <dl>
          <div><dt>Industry</dt><dd>{exact ? "Architecture" : "Creative"}</dd></div>
          <div><dt>Client</dt><dd>{exact ? "Adiloriuse" : "CocoBasic"}</dd></div>
          <div><dt>Service</dt><dd>{exact ? "Graphic Design" : "Product Design"}</dd></div>
          <div><dt>Date</dt><dd>April 2025</dd></div>
        </dl>
        <p>A logo serves as a graphic symbol, badge, or insignia executed to elevate and foster public appreciation and recognition. It could take on a symbolic or artistic form or may include the term it represents, as seen in a logotype.</p>
      </div>
      <div className="detail-images">
        <img src={project.image} alt={project.alt} />
        <img src={exact ? "/assets/project-logo-detail.png" : project.image} alt={`${project.title} detail`} />
      </div>
      <div className="related-header"><span>RELATED PROJECTS</span><Link href="/projects" go={go}>VIEW ALL PROJECTS</Link></div>
      <div className="related-grid">
        {related.map((item) => <Link href={`/projects/${item.slug}`} go={go} key={item.slug}><img src={item.image} alt={item.alt} /></Link>)}
      </div>
    </main>
  );
}

function ArticleDetail({ slug, go }) {
  const post = POSTS.find((item) => item[3] === slug) || POSTS[0];
  return (
    <main className="page-body detail-page article-detail">
      <div className="article-title">
        <p>{post[1]}</p>
        <h1>{post[0]}</h1>
        <span>{post[2]}</span>
      </div>
      <img className="article-image" src="/assets/article-abstract.png" alt="abstract" />
      <article className="article-copy">
        <p>In the sphere of pictorial depictions and inked masterpieces, the phrase avant-garde denotes a genre of art, an innovative success, and the creative painter, typically characterized by its visual novelty, although often meeting with swift rejection from the prevailing art community of the era.</p>
        <blockquote>Creative painter, typically characterized by its visual novelty</blockquote>
        <p>Within the realm of artistic illustrations and penned creations, the term avant-garde represents a category of art, a pioneering triumph, and the imaginative artist, generally marked by its visual originality, albeit frequently encountering immediate disapproval from the dominant art society of the time.</p>
      </article>
      <section className="recent-posts">
        <div className="related-header"><span>RECENT POSTS</span><Link href="/writing" go={go}>VIEW ALL POSTS</Link></div>
        <div className="recent-grid">
          {POSTS.slice(1, 3).map(([title, date, category, itemSlug], index) => (
            <Link href={`/writing/${itemSlug}`} go={go} className={index ? "align-right" : ""} key={itemSlug}>
              <h2>{title}</h2><p>{date}</p><span>{category}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function NotFound({ go }) {
  return (
    <main className="page-body sub-page not-found">
      <PageHero title="404" />
      <div className="not-found-copy"><p>This page took a wrong turn.</p><Link href="/" go={go}>BACK HOME</Link></div>
    </main>
  );
}

export default function App() {
  const [path, go] = usePathname();
  const [dark, setDark] = useState(false);
  const page = useMemo(() => {
    if (path === "/") return <HomePage go={go} />;
    if (path === "/about") return <AboutPage />;
    if (path === "/projects") return <ProjectsPage go={go} />;
    if (path === "/experience") return <ExperiencePage />;
    if (path === "/education") return <EducationPage />;
    if (path === "/writing") return <WritingPage go={go} />;
    if (path === "/contact") return <ContactPage />;
    if (path.startsWith("/projects/")) return <ProjectDetail slug={path.split("/").pop()} go={go} />;
    if (path.startsWith("/writing/")) return <ArticleDetail slug={path.split("/").pop()} go={go} />;
    return <NotFound go={go} />;
  }, [path]);
  return (
    <>
      <CursorGlow />
      <Header path={path} go={go} dark={dark} setDark={setDark} />
      <div key={path} className="route-view">{page}</div>
      <Footer />
    </>
  );
}
