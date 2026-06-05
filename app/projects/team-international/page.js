import Link from 'next/link'
import Image from 'next/image'

export default function TeamInternationalPage() {
  return (
    <main style={{background:'#0d0f1a', minHeight:'100vh', color:'#ffffff', fontFamily:'Space Grotesk, sans-serif', overflowX:'hidden'}}>

      {/* NAV */}
      <nav style={{position:'fixed', top:0, left:0, right:0, zIndex:100, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 24px', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(13,15,26,0.85)', backdropFilter:'blur(12px)'}}>
        <Link href="/" style={{display:'flex', alignItems:'baseline', gap:8, textDecoration:'none', flexShrink:0}}>
          <span style={{fontSize:14, fontWeight:600, color:'#ffffff', letterSpacing:'-0.02em'}}>Jeremy Tan</span>
          <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:12, fontWeight:300, color:'#f5c842', letterSpacing:'0.08em'}}>陈勇流</span>
        </Link>
        <ul style={{display:'flex', gap:20, listStyle:'none', alignItems:'center'}}>
          <li><Link href="/projects" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#8888aa', textDecoration:'none'}}>← Projects</Link></li>
          <li><Link href="https://www.linkedin.com/in/jeremytan42/" style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0d0f1a', background:'#f5c842', padding:'8px 14px', textDecoration:'none', whiteSpace:'nowrap'}}>Follow →</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section style={{padding:'140px 24px 60px', borderBottom:'1px solid #1e2235'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
          <div style={{width:24, height:1, background:'#f5c842'}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#f5c842'}}>Personal Project · 2026</span>
        </div>
        <h1 style={{fontSize:'clamp(36px, 7vw, 72px)', fontWeight:700, letterSpacing:'-0.03em', color:'#ffffff', lineHeight:1, marginBottom:16}}>
          Team International<br/>
          <span style={{color:'#f5c842'}}>Turns 1</span> · Quiz Showdown
        </h1>
        <p style={{fontSize:'clamp(14px, 2vw, 18px)', fontWeight:300, color:'rgba(255,255,255,0.5)', maxWidth:560, lineHeight:1.7, marginBottom:32}}>
          A bespoke real-time multiplayer trivia game built from scratch to celebrate a friend group's one-year anniversary — playable on any device, no app install required.
        </p>
        <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:32}}>
          {['Web App', 'Firebase', 'Multiplayer', 'Mobile-first', 'Solo built', '11 players'].map((tag, i) => (
            <span key={i} style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.1em', textTransform:'uppercase', color:'#8888aa', border:'1px solid #1e2235', padding:'4px 12px'}}>{tag}</span>
          ))}
        </div>
        <a href="https://internationalquiz.netlify.app/" target="_blank" rel="noopener noreferrer" style={{fontFamily:'DM Mono, monospace', fontSize:11, letterSpacing:'0.08em', color:'#5bc4c0', textDecoration:'none', borderBottom:'1px solid rgba(91,196,192,0.4)', paddingBottom:2}}>
          internationalquiz.netlify.app ↗
        </a>
      </section>

      {/* STATS */}
      <section style={{padding:'60px 24px', borderBottom:'1px solid #1e2235'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'#1e2235'}}>
          {[
            {n:'11', l:'Players on the night'},
            {n:'24', l:'Custom questions'},
            {n:'3', l:'Play modes built'},
          ].map((s, i) => (
            <div key={i} style={{background:'#0d0f1a', padding:'32px 24px'}}>
              <div style={{fontSize:'clamp(40px, 6vw, 64px)', fontWeight:700, letterSpacing:'-0.03em', color:'#f5c842', lineHeight:1, marginBottom:8}}>{s.n}</div>
              <div style={{fontFamily:'DM Mono, monospace', fontSize:11, color:'#8888aa', letterSpacing:'0.05em'}}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTEXT */}
      <section style={{padding:'60px 24px', borderBottom:'1px solid #1e2235'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:24}}>
          <div style={{width:24, height:1, background:'#f5c842'}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#f5c842'}}>Context</span>
        </div>
        <p style={{fontSize:'clamp(15px, 2vw, 18px)', fontWeight:300, color:'rgba(255,255,255,0.6)', lineHeight:1.8, maxWidth:640}}>
          My close friend group Team International were celebrating our 1 year anniversary. I wanted to make the night feel special — so I designed and built a custom quiz game just for us.
        </p>
      </section>

      {/* SCREENS */}
      <section style={{padding:'60px 24px', borderBottom:'1px solid #1e2235'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:32}}>
          <div style={{width:24, height:1, background:'#f5c842'}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#f5c842'}}>Screens</span>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:24}}>
          {[
            {src:'/projects/team-international/home.png', cap:'01 — Home screen · Mode selection', w:1534, h:768},
            {src:'/projects/team-international/qr.png', cap:'02 — TV Display · QR code lobby with live player slots', w:1534, h:768},
            {src:'/projects/team-international/question.jpg', cap:'03 — In-game · Question screen with player photos', w:1534, h:790},
            {src:'/projects/team-international/results.png', cap:'04 — Final results · Podium with real scores', w:1534, h:768},
          ].map((img, i) => (
            <div key={i}>
              <p style={{fontFamily:'DM Mono, monospace', fontSize:12, color:'#8888aa', letterSpacing:'0.08em', marginBottom:12}}>{img.cap}</p>
              <div style={{position:'relative', width:'100%', overflow:'hidden'}}>
                <Image src={img.src} alt={img.cap} width={img.w} height={img.h} style={{width:'100%', height:'auto', display:'block', maxWidth:'95%', margin:'0 auto'}} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLAY MODES */}
      <section style={{padding:'60px 24px', borderBottom:'1px solid #1e2235'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:32}}>
          <div style={{width:24, height:1, background:'#f5c842'}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#f5c842'}}>Play Modes</span>
        </div>
        <div className="modes-grid" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'#1e2235'}}>
          {[
            {icon:'🎙️', name:'Host + Players', desc:'One person drives the game. Best for structured trivia nights with a confident host.'},
            {icon:'🤝', name:'Hostless — Auto', desc:'Timer-driven. The game runs itself with no one managing it.'},
            {icon:'📺', name:'TV Display ★', desc:'QR on the TV, everyone plays from their phone. The hit of the night.', featured:true},
          ].map((m, i) => (
            <div key={i} style={{background:'#0d0f1a', padding:'32px 24px', borderTop: m.featured ? '2px solid #5bc4c0' : '2px solid transparent'}}>
              <div style={{fontSize:24, marginBottom:16}}>{m.icon}</div>
              <h3 style={{fontSize:15, fontWeight:600, color: m.featured ? '#5bc4c0' : '#ffffff', marginBottom:8}}>{m.name}</h3>
              <p style={{fontFamily:'DM Mono, monospace', fontSize:11, color:'#8888aa', lineHeight:1.7}}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW I BUILT IT */}
      <section style={{padding:'60px 24px', borderBottom:'1px solid #1e2235'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:32}}>
          <div style={{width:24, height:1, background:'#f5c842'}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#f5c842'}}>How I Built It</span>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          {[
            {n:'01', title:'Designed the experience first', body:'Mapped the full game flow — lobby join → questions → answer reveal → leaderboard → final results — keeping the experience as smooth and enjoyable as possible for everyone playing.'},
            {n:'02', title:'Custom questions about real people', body:'Wrote 24 "most likely to…" questions across 4 rounds: Warm-Up, Inside Jokes, Fun & Playful, and Cheeky & Fun — each answer option featuring a real friend\'s name and photo.'},
            {n:'03', title:'Real-time sync with Firebase', body:'Firebase Realtime Database keeps all 11 players in sync — answer submissions, round transitions, and live score updates happen instantly across every device.'},
            {n:'04', title:'Deployed on Netlify, zero install', body:'Players join via QR code or URL. No app download, no account, no friction. The entire experience runs in the browser.'},
            {n:'05', title:'Branded to the occasion', body:'Custom dark UI with gold type and warm glow — designed to feel like a late-night game show, not a classroom tool.'},
          ].map((step, i) => (
            <div key={i} style={{display:'grid', gridTemplateColumns:'40px 1fr', gap:24, padding:'28px 0', borderBottom:'1px solid #1e2235'}}>
              <span style={{fontFamily:'DM Mono, monospace', fontSize:11, color:'#8888aa', paddingTop:3}}>{step.n}</span>
              <div>
                <h3 style={{fontSize:15, fontWeight:600, color:'#ffffff', marginBottom:8}}>{step.title}</h3>
                <p style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, color:'#8888aa', lineHeight:1.7}}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:32}}>
          {['Firebase', 'JavaScript', 'HTML / CSS', 'Netlify', 'Real-time DB', 'Mobile-first', 'No-login UX'].map((tag, i) => (
            <span key={i} style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.1em', textTransform:'uppercase', color:'#8888aa', border:'1px solid #1e2235', padding:'4px 12px'}}>{tag}</span>
          ))}
        </div>
      </section>

      {/* THE NIGHT */}
      <section style={{padding:'60px 24px', borderBottom:'1px solid #1e2235'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:24}}>
          <div style={{width:24, height:1, background:'#f5c842'}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#f5c842'}}>The Night</span>
        </div>
        <p style={{fontSize:'clamp(15px, 2vw, 18px)', fontWeight:300, color:'rgba(255,255,255,0.6)', lineHeight:1.8, maxWidth:640, marginBottom:32}}>
          11 players, 24 questions, 3 rounds. The room was loud and competitive from the gun. Everyone's faces on the answer cards, questions written specifically about them — it made the night feel like something no off-the-shelf tool could replicate.
        </p>
        <div style={{background:'#0d0f1a', border:'1px solid rgba(245,200,66,0.5)', padding:'32px 24px'}}>
          <p style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'#f5c842', marginBottom:24}}>Final standings</p>
          <div className="podium" style={{display:'grid', gridTemplateColumns:'1fr 1.15fr 1fr', gap:1, background:'#2a2f4a', marginBottom:1}}>
            {[
              {pos:'2', name:'Carol', pts:'27,404', numColor:'#b0b8c1'},
              {pos:'1', name:'Jarrod', pts:'29,048', numColor:'#f5c842'},
              {pos:'3', name:'Jeremy', pts:'27,339', numColor:'#b87333'},
            ].map((p, i) => (
              <div key={i} style={{background:'#0d0f1a', padding:'24px 16px', textAlign:'center'}}>
                <div style={{fontSize:'clamp(28px, 5vw, 48px)', fontWeight:700, color:p.numColor, letterSpacing:'-0.03em', lineHeight:1, marginBottom:8}}>{p.pos}</div>
                <div style={{fontSize:13, fontWeight:600, color:'#ffffff', marginBottom:4}}>{p.name}</div>
                <div style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#8888aa'}}>{p.pts} pts</div>
              </div>
            ))}
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, background:'#2a2f4a'}}>
            {[
              {r:'4', n:'John', p:'25,921'},
              {r:'5', n:'Mavis', p:'25,544'},
              {r:'6', n:'Zoe', p:'24,647'},
              {r:'7', n:'Zhi Zheng', p:'24,166'},
              {r:'8', n:'ATJ', p:'20,772'},
              {r:'9', n:'mon', p:'20,081'},
              {r:'10', n:'Chonny', p:'19,526'},
              {r:'11', n:'Steph', p:'17,603'},
            ].map((p, i) => (
              <div key={i} style={{background:'#0d0f1a', padding:'16px 12px'}}>
                <div style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#8888aa', marginBottom:4}}>{p.r}</div>
                <div style={{fontSize:12, fontWeight:500, color:'#ffffff', marginBottom:2}}>{p.n}</div>
                <div style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#f5c842'}}>{p.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTIONS */}
      <section style={{padding:'60px 24px 80px', borderBottom:'1px solid #1e2235'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:32}}>
          <div style={{width:24, height:1, background:'#f5c842'}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#f5c842'}}>Reflections</span>
        </div>
        <div className="ref-grid" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'#1e2235', marginBottom:32}}>
          {[
            {title:'What worked', body:'TV Display mode was the standout — projecting to a shared screen while everyone plays on their phone is the natural living room experience. The personalisation made it feel special, not just functional.'},
            {title:"What\'s next", body:'Custom question authoring so anyone can run their own quiz night. Shareable results cards. Persistent player profiles. The core mechanic is solid — the opportunity is making it reusable beyond one event.'},
          ].map((r, i) => (
            <div key={i} style={{background:'#0d0f1a', padding:'32px 24px'}}>
              <h3 style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'#f5c842', marginBottom:12}}>{r.title}</h3>
              <p style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, color:'#8888aa', lineHeight:1.7}}>{r.body}</p>
            </div>
          ))}
        </div>
        <div style={{borderLeft:'2px solid #5bc4c0', paddingLeft:20, paddingTop:4, paddingBottom:4}}>
          <p style={{fontSize:'clamp(15px, 2vw, 18px)', fontWeight:300, color:'rgba(255,255,255,0.5)', lineHeight:1.8, fontStyle:'italic'}}>
            "Building something meaningful for people I care about, launched in two days on a stack I was still learning — this showed me I could move from idea to product, end to end, solo."
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:'#1e2235', borderTop:'1px solid #2a2f4a', padding:'40px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16}}>
        <Link href="/projects" style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:'#8888aa', textDecoration:'none'}}>← All projects</Link>
        <a href="https://internationalquiz.netlify.app/" target="_blank" rel="noopener noreferrer" style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:'#f5c842', textDecoration:'none'}}>Live app ↗</a>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=DM+Mono:wght@300;400&display=swap');
        @media (min-width: 768px) {
          nav { padding: 24px 56px !important; }
          section { padding-left: 56px !important; padding-right: 56px !important; }
          footer { padding-left: 56px !important; padding-right: 56px !important; }
        }
        @media (max-width: 600px) {
          .modes-grid { grid-template-columns: 1fr !important; }
          .podium { grid-template-columns: 1fr 1fr 1fr !important; }
          .ref-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
