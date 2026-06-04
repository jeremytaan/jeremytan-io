import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      num: '01',
      slug: 'team-international',
      name: 'Team International Turns 1',
      zh: '周年庆典 · Anniversary Quiz',
      desc: 'A real-time multiplayer quiz game built from scratch for my friend group\'s 1 year anniversary. 11 players, 24 custom questions, zero app installs required.',
      tags: ['Web App', 'Firebase', 'Personal'],
      year: '2026',
      status: 'Live',
    },
  ]

  return (
    <main style={{background:'#111010', minHeight:'100vh', color:'#F0EDE8', fontFamily:'Space Grotesk, sans-serif', overflowX:'hidden'}}>

      {/* NAV */}
      <nav style={{position:'fixed', top:0, left:0, right:0, zIndex:100, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 24px', borderBottom:'1px solid rgba(240,237,232,0.08)', background:'rgba(17,16,16,0.85)', backdropFilter:'blur(12px)'}}>
        <Link href="/" style={{display:'flex', alignItems:'baseline', gap:8, textDecoration:'none', flexShrink:0}}>
          <span style={{fontSize:14, fontWeight:600, color:'#F0EDE8', letterSpacing:'-0.02em'}}>Jeremy Tan</span>
          <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:12, fontWeight:300, color:'#E8342A', letterSpacing:'0.08em'}}>陈勇流</span>
        </Link>
        <ul style={{display:'flex', gap:20, listStyle:'none', alignItems:'center'}}>
          <li><Link href="/#journal" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>Journal</Link></li>
          <li><Link href="/projects" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#F0EDE8', textDecoration:'none'}}>Projects</Link></li>
          <li><Link href="/#about" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>About</Link></li>
          <li><Link href="https://www.linkedin.com/in/jeremytan42/" style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#F0EDE8', background:'#E8342A', padding:'8px 14px', textDecoration:'none', whiteSpace:'nowrap'}}>Follow →</Link></li>
        </ul>
      </nav>

      {/* HEADER */}
      <section style={{padding:'140px 24px 60px', borderBottom:'1px solid #2C2825'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
          <div style={{width:24, height:1, background:'#E8342A'}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#E8342A'}}>Personal projects</span>
        </div>
        <h1 style={{fontSize:'clamp(40px, 8vw, 80px)', fontWeight:700, letterSpacing:'-0.03em', color:'#F0EDE8', lineHeight:1, marginBottom:16}}>
          Projects <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'0.4em', fontWeight:300, color:'#7A7268', marginLeft:12, letterSpacing:'0.1em', verticalAlign:'middle'}}>作品</span>
        </h1>
        <p style={{fontFamily:'DM Mono, monospace', fontSize:12, fontWeight:300, color:'#7A7268', maxWidth:480, lineHeight:1.7}}>
          Things I've built outside of client work — for fun, for friends, or because I couldn't stop thinking about the problem.
        </p>
      </section>

      {/* PROJECT LIST */}
      <section style={{padding:'0 24px 80px'}}>
        {projects.map((project, i) => (
          <Link key={i} href={`/projects/${project.slug}`} style={{textDecoration:'none', display:'grid', gridTemplateColumns:'40px 1fr', gap:24, padding:'40px 0', borderBottom:'1px solid #2C2825', alignItems:'start'}}>
            <span style={{fontFamily:'DM Mono, monospace', fontSize:11, color:'#4A4540', paddingTop:4}}>{project.num}</span>
            <div>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12, flexWrap:'wrap', gap:8}}>
                <div>
                  <h2 style={{fontSize:'clamp(20px, 4vw, 32px)', fontWeight:700, letterSpacing:'-0.02em', color:'#F0EDE8', lineHeight:1, marginBottom:4}}>{project.name}</h2>
                  <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:12, fontWeight:300, color:'#7A7268', letterSpacing:'0.08em'}}>{project.zh}</span>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:8, flexShrink:0}}>
                  <span style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.1em', textTransform:'uppercase', color:'#4ade80', border:'1px solid rgba(74,222,128,0.3)', padding:'2px 8px'}}>{project.status}</span>
                  <span style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#4A4540'}}>{project.year}</span>
                </div>
              </div>
              <p style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, color:'#7A7268', lineHeight:1.7, marginBottom:16, maxWidth:600}}>{project.desc}</p>
              <div style={{display:'flex', gap:8, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                  {project.tags.map((tag, j) => (
                    <span key={j} style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', border:'1px solid #2C2825', padding:'3px 10px'}}>{tag}</span>
                  ))}
                </div>
                <span style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', color:'#E8342A'}}>View case study →</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{background:'#181614', borderTop:'1px solid #2C2825', padding:'40px 24px', display:'flex', justifyContent:'center', gap:'24px', alignItems:'center', flexWrap:'wrap'}}>
        <Link href="/" style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>← Back home</Link>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=DM+Mono:wght@300;400&display=swap');
        @media (min-width: 768px) {
          nav { padding: 24px 56px !important; }
          section { padding-left: 56px !important; padding-right: 56px !important; }
          footer { padding-left: 56px !important; padding-right: 56px !important; }
        }
      `}</style>
    </main>
  )
}
