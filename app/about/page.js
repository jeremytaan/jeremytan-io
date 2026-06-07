import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Jeremy Tan · About',
  description: 'Australian Born Chinese. Product Designer. FinTech Founder. The story behind 两个世界.',
}

export default function About() {
  return (
    <main style={{ background: '#111010', minHeight: '100vh', color: '#F0EDE8', fontFamily: 'Space Grotesk, sans-serif' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid rgba(240,237,232,0.08)', background: 'rgba(17,16,16,0.85)', backdropFilter: 'blur(12px)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#F0EDE8', letterSpacing: '-0.02em' }}>Jeremy Tan</span>
          <span style={{ fontFamily: 'Noto Sans SC, sans-serif', fontSize: 12, fontWeight: 300, color: '#E8342A', letterSpacing: '0.08em' }}>陈勇流</span>
        </Link>
        <ul style={{ display: 'flex', gap: 20, listStyle: 'none', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <li className="nav-link-item"><Link href="/#journal" style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A7268', textDecoration: 'none' }}>Journal</Link></li>
          <li className="nav-link-item"><Link href="/#projects" style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A7268', textDecoration: 'none' }}>Projects</Link></li>
          <li className="nav-link-item"><Link href="/#work" style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A7268', textDecoration: 'none' }}>Work</Link></li>
          <li className="nav-link-item"><Link href="/about" style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E8342A', textDecoration: 'none' }}>About</Link></li>
          <li><Link href="https://www.linkedin.com/in/jeremytan42/" style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F0EDE8', background: '#E8342A', padding: '8px 14px', textDecoration: 'none', whiteSpace: 'nowrap' }}>Follow →</Link></li>
        </ul>
      </nav>

      {/* HERO - Two column */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #2C2825', paddingTop: 72 }} className="hero-section">

        {/* Left — Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px 48px 60px 24px', position: 'relative', overflow: 'hidden' }} className="hero-left">
          <div style={{ position: 'absolute', width: 300, height: 300, background: 'radial-gradient(circle, rgba(232,52,42,0.10) 0%, transparent 70%)', top: '15%', left: '10%', pointerEvents: 'none' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8342A', flexShrink: 0 }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7A7268' }}>The story behind the work</span>
          </div>

          <h1 style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.03em', color: '#F0EDE8', marginBottom: 20, position: 'relative', zIndex: 2, whiteSpace: 'nowrap' }}>
            两个世界
          </h1>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(11px, 1.5vw, 14px)', fontWeight: 300, color: '#7A7268', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 40 }}>
            Between Two Worlds
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 1, background: '#E8342A' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#7A7268', letterSpacing: '0.1em' }}>Sydney, Australia · 悉尼</span>
          </div>
        </div>

        {/* Right — Photo */}
        <div style={{ position: 'relative', overflow: 'hidden', borderLeft: '1px solid #2C2825', minHeight: 600 }} className="hero-right">
          <Image
            src="/jeremy-north-head.jpg"
            alt="Jeremy Tan at North Head, Sydney"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, rgba(17,16,16,0.6), transparent)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: 'rgba(240,237,232,0.5)', letterSpacing: '0.08em' }}>North Head, Sydney · 北岬</span>
          </div>
        </div>
      </section>

      {/* ESSAY */}
      <section style={{ background: '#FAFAF7', padding: '72px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
            <Link href="/" style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#E8342A', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>← Home</Link>
          </div>

          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#9A9898', letterSpacing: '0.08em', marginBottom: 16 }}>About · 2 min read</p>

          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#111010', lineHeight: 1.1, marginBottom: 48, letterSpacing: '-0.02em' }}>
            两个世界 — Between Two Worlds
          </h2>

          <hr style={{ border: 'none', borderTop: '1px solid #DCDAD6', marginBottom: 48 }} />

          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 300, color: '#1A1A1A', lineHeight: 1.85 }}>

            <p>For most of my teenage years, I rejected being Asian. I wanted to assimilate — to blend in, to belong. If I&apos;m being honest, I wished I was white. But wanting to fit in with the other kids wasn&apos;t about race — it was about finding belonging somewhere, anywhere.</p>

            <p>Growing up as an ethnic minority, surrounded almost entirely by white Australians, I didn&apos;t feel proud of being Asian. I felt the opposite. There&apos;s a phrase for it I only found later — cultural repulsion. I was ashamed of something I hadn&apos;t chosen, and I wasn&apos;t even aware of it.</p>

            <p>My mum was ten when she left Vietnam after the war. New country. New language. New life. That history lived in her. I wanted nothing to do with it.</p>

            <p>That started to change once I started University. I joined VSA — the Vietnamese Students Association — not fully understanding why I was drawn there. But for the first time, I was surrounded by people who looked like me, who carried similar stories. Something shifted inside of me.</p>

            <p>At 24, I started learning Mandarin properly. Not for a job. Not for travel. To find my way back to something I&apos;d abandoned. Language does that — it doesn&apos;t just teach you words, it hands you a new lens. I started to see my family differently. My history differently. Myself differently.</p>

            <hr style={{ border: 'none', borderTop: '1px solid #DCDAD6', margin: '48px 0' }} />

            <p style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 500, color: '#111010', lineHeight: 1.6 }}>
              <span style={{ fontFamily: 'Noto Sans SC, sans-serif', color: '#E8342A', fontWeight: 400 }}>两个世界</span> means <em>between two worlds</em>. It&apos;s how I&apos;ve always lived — East and West, Australian and Chinese, the person I was told to be and the one I chose to become.
            </p>

            <p>For a long time, the in-between was a constant identity struggle. Not Asian enough for the Asian kids. Not white enough for the white kids. Never fully either.</p>

            <p>Now I&apos;ve finally started to accept it — and realise how lucky I am. I can watch Netflix in English and switch to a Chinese podcast without missing a beat. It&apos;s the best feeling ever — and I wouldn&apos;t change it for the world.</p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid #2C2825', background: '#181614' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#F0EDE8', marginBottom: 8 }}>Let&apos;s build something.</h3>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#7A7268', letterSpacing: '0.08em' }}>Designer. Founder. Misfit. Open to collabs.</p>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="mailto:jeremy.tan1@outlook.com" style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F0EDE8', background: '#E8342A', padding: '12px 20px', textDecoration: 'none' }}>Get in touch →</a>
            <Link href="/#work" style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A7268', border: '1px solid #2C2825', padding: '12px 20px', textDecoration: 'none' }}>View work →</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#111010', borderTop: '1px solid #2C2825', padding: '40px 24px', display: 'flex', justifyContent: 'center', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="https://www.linkedin.com/in/jeremytan42/" target="_blank" rel="noopener noreferrer" style={{ color: '#7A7268' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        </a>
        <a href="https://github.com/jeremytaan" target="_blank" rel="noopener noreferrer" style={{ color: '#7A7268' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        </a>
        <a href="https://www.instagram.com/jeremytaan" target="_blank" rel="noopener noreferrer" style={{ color: '#7A7268' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
        </a>
        <a href="https://x.com/jeremytaan" target="_blank" rel="noopener noreferrer" style={{ color: '#7A7268' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
        </a>
        <a href="https://substack.com/@jeremytaan" target="_blank" rel="noopener noreferrer" style={{ color: '#7A7268' }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>
        </a>
        <a href="mailto:jeremy.tan1@outlook.com" style={{ color: '#7A7268' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
        </a>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=DM+Mono:wght@300;400&display=swap');

        @media (min-width: 768px) {
          nav { padding: 24px 56px !important; }
          .hero-left { padding-left: 56px !important; padding-right: 56px !important; }
          section:not(.hero-section) { padding-left: 56px !important; padding-right: 56px !important; }
          footer { padding-left: 56px !important; padding-right: 56px !important; }
        }

        @media (max-width: 767px) {
          .nav-link-item { display: none; }
          .hero-section { grid-template-columns: 1fr !important; }
          .hero-right { min-height: 400px !important; border-left: none !important; border-top: 1px solid #2C2825; }
          .hero-left { padding: 40px 24px !important; }
        }
      `}</style>

    </main>
  )
}