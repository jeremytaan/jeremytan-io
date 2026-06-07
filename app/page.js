import Link from 'next/link'

export default function Home() {
  return (
    <main style={{background:'#111010', minHeight:'100vh', color:'#F0EDE8', fontFamily:'Space Grotesk, sans-serif', overflowX:'hidden'}}>

      {/* NAV */}
      <nav style={{position:'fixed', top:0, left:0, right:0, zIndex:100, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 24px', borderBottom:'1px solid rgba(240,237,232,0.08)', background:'rgba(17,16,16,0.85)', backdropFilter:'blur(12px)'}}>
        <Link href="/" style={{display:'flex', alignItems:'baseline', gap:8, textDecoration:'none', flexShrink:0}}>
          <span style={{fontSize:14, fontWeight:600, color:'#F0EDE8', letterSpacing:'-0.02em'}}>Jeremy Tan</span>
          <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:12, fontWeight:300, color:'#E8342A', letterSpacing:'0.08em'}}>陈勇流</span>
        </Link>
        <ul style={{display:'flex', gap:20, listStyle:'none', alignItems:'center', flexWrap:'wrap', justifyContent:'flex-end'}}>
          <li className="nav-link-item"><Link href="#journal" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>Journal</Link></li>
          <li className="nav-link-item"><Link href="#projects" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>Projects</Link></li>
          <li className="nav-link-item"><Link href="#work" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>Work</Link></li>
          <li className="nav-link-item"><Link href="/about" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>About</Link></li>
          <li><Link href="https://www.linkedin.com/in/jeremytan42/" style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#F0EDE8', background:'#E8342A', padding:'8px 14px', textDecoration:'none', whiteSpace:'nowrap'}}>Follow →</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section style={{minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'100px 24px 60px', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', width:400, height:400, background:'radial-gradient(circle, rgba(232,52,42,0.12) 0%, transparent 70%)', top:'20%', right:'5%', pointerEvents:'none'}} />
        <div style={{position:'absolute', right:-80, top:'50%', transform:'translateY(-50%)', fontFamily:'Noto Sans SC, sans-serif', fontSize:'clamp(160px, 40vw, 480px)', fontWeight:700, color:'transparent', WebkitTextStroke:'1px rgba(240,237,232,0.04)', lineHeight:1, pointerEvents:'none', userSelect:'none'}}>陈</div>

        <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:24}}>
          <div style={{width:6, height:6, borderRadius:'50%', background:'#E8342A', flexShrink:0}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.15em', textTransform:'uppercase', color:'#7A7268', whiteSpace:'nowrap'}}>Sydney, Australia · Building in public · 悉尼</span>
        </div>

        <h1 style={{fontSize:'clamp(52px, 14vw, 140px)', fontWeight:700, lineHeight:0.92, letterSpacing:'-0.03em', color:'#F0EDE8', marginBottom:16, position:'relative', zIndex:2}}>
          Jeremy<br/>Tan.
        </h1>
        <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'clamp(22px, 6vw, 52px)', fontWeight:300, color:'#E8342A', letterSpacing:'0', marginBottom:40, position:'relative', zIndex:2, display:'block'}}>
          陈勇流 · 两个世界
        </span>

        <div className="hero-bottom" style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', position:'relative', zIndex:2, borderTop:'1px solid rgba(240,237,232,0.08)', paddingTop:32, gap:32, flexWrap:'wrap'}}>
          <p style={{fontSize:'clamp(14px, 2.5vw, 22px)', fontWeight:300, color:'rgba(240,237,232,0.5)', lineHeight:1.6, maxWidth:520, flex:'1 1 280px'}}>
            <strong style={{color:'#F0EDE8', fontWeight:500}}>Product Designer. FinTech Founder. Misfit.</strong><br/>
            Australian Born Chinese navigating <span style={{fontFamily:'Noto Sans SC, sans-serif', color:'#E8342A', fontWeight:300, fontSize:'0.85em'}}>两个世界</span> — between two worlds. Building a $1B app, solo, with AI as my co-founder. No CS degree. Figuring it out anyway.
          </p>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:12, flexShrink:0}}>
            {[
              {label:'Building', value:'Kron', zh:'金融助手'},
              {label:'Languages', value:'English · ', zh:'普通话'},
              {label:'Mission', value:'$1B ARR', zh:'千亿目标'},
            ].map((item, i) => (
              <div key={i} style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:2}}>
                <span style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase', color:'#7A7268'}}>{item.label}</span>
                <span style={{fontSize:13, fontWeight:500, color:'#F0EDE8'}}>{item.value}<span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:11, color:'#E8342A', marginLeft:6, fontWeight:300}}>{item.zh}</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{overflow:'hidden', borderTop:'1px solid #2C2825', borderBottom:'1px solid #2C2825', background:'#181614'}}>
        <div style={{display:'flex', whiteSpace:'nowrap', animation:'ticker 28s linear infinite', padding:'14px 0'}}>
          {['Product Designer · 产品设计师', 'FinTech Founder · 金融科技创始人', '两个世界 · Between Two Worlds', 'Building in Public · 公开建设', 'Chinatown Run Club · 唐人街跑步俱乐部', 'Sydney\u00A0·\u00A0悉尼', 'Misfit · 异类',
            'Product Designer · 产品设计师', 'FinTech Founder · 金融科技创始人', '两个世界 · Between Two Worlds', 'Building in Public · 公开建设', 'Chinatown Run Club · 唐人街跑步俱乐部', 'Sydney\u00A0·\u00A0悉尼', 'Misfit · 异类'
          ].map((item, i) => (
            <span key={i} style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.12em', color:'#7A7268', padding:'0 32px', flexShrink:0}}>{item}</span>
          ))}
        </div>
      </div>

      {/* JOURNAL */}
      <section style={{padding:'80px 24px', borderTop:'1px solid #2C2825'}} id="journal">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:48, flexWrap:'wrap', gap:16}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
              <div style={{width:24, height:1, background:'#E8342A'}} />
              <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#E8342A'}}>Latest writing</span>
            </div>
            <h2 style={{fontSize:'clamp(32px, 6vw, 56px)', fontWeight:700, letterSpacing:'-0.03em', color:'#F0EDE8', lineHeight:1}}>
              Journal <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'0.45em', fontWeight:300, color:'#7A7268', marginLeft:12, letterSpacing:'0.1em', verticalAlign:'middle'}}>日志</span>
            </h2>
          </div>
          <Link href="/journal" style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.15em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none', marginTop:8}}>All entries →</Link>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          {[
            {num:'001', title:'The things that made me a misfit are my biggest advantage', tag:'Origin story', tagZh:'起源', date:'Jun 2026'},
            {num:'002', title:'Why a designer is learning to code in 2026', tag:'Learning', tagZh:'学习', date:'Coming soon'},
            {num:'003', title:"I generated a full app UI in 20 minutes — here's what happened next", tag:'AI + Design', tagZh:'设计', date:'Coming soon'},
          ].map((post, i) => (
            <Link href={`/journal/${post.num}`} key={i} style={{display:'grid', gridTemplateColumns:'40px 1fr', gap:16, alignItems:'start', padding:'28px 0', borderBottom:'1px solid #2C2825', textDecoration:'none'}}>
              <span style={{fontFamily:'DM Mono, monospace', fontSize:11, color:'#4A4540', paddingTop:3}}>{post.num}</span>
              <div>
                <p style={{fontSize:'clamp(15px, 2.5vw, 18px)', fontWeight:500, color:'#F0EDE8', lineHeight:1.3, marginBottom:8}}>{post.title}</p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8}}>
                  <span style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.12em', textTransform:'uppercase', color:'#7A7268', border:'1px solid #2C2825', padding:'3px 10px'}}>
                    {post.tag} · <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:10, color:'#E8342A', textTransform:'none', letterSpacing:'0.05em'}}>{post.tagZh}</span>
                  </span>
                  <span style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#7A7268'}}>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{padding:'80px 24px', borderTop:'1px solid #2C2825'}} id="projects">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:48, flexWrap:'wrap', gap:16}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
              <div style={{width:24, height:1, background:'#E8342A'}} />
              <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#E8342A'}}>Personal projects</span>
            </div>
            <h2 style={{fontSize:'clamp(32px, 6vw, 56px)', fontWeight:700, letterSpacing:'-0.03em', color:'#F0EDE8', lineHeight:1}}>
              Projects <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'0.45em', fontWeight:300, color:'#7A7268', marginLeft:12, letterSpacing:'0.1em', verticalAlign:'middle'}}>项目</span>
            </h2>
          </div>
          <Link href="/projects" style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.15em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none', marginTop:8}}>All projects →</Link>
        </div>
        <Link href="/projects/team-international" style={{textDecoration:'none', display:'grid', gridTemplateColumns:'40px 1fr', gap:16, padding:'28px 0', borderBottom:'1px solid #2C2825'}}>
          <span style={{fontFamily:'DM Mono, monospace', fontSize:11, color:'#4A4540', paddingTop:3}}>01</span>
          <div>
            <p style={{fontSize:'clamp(15px, 2.5vw, 18px)', fontWeight:500, color:'#F0EDE8', lineHeight:1.3, marginBottom:8}}>Team International Turns 1 · Quiz Showdown</p>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8}}>
              <span style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.12em', textTransform:'uppercase', color:'#7A7268', border:'1px solid #2C2825', padding:'3px 10px'}}>Web App · Firebase · Personal</span>
              <span style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#7A7268'}}>2026</span>
            </div>
          </div>
        </Link>
      </section>

      {/* WORK */}
      <section style={{padding:'80px 24px', borderTop:'1px solid #2C2825'}} id="work">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:48, flexWrap:'wrap', gap:16}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
              <div style={{width:24, height:1, background:'#E8342A'}} />
              <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#E8342A'}}>Selected projects</span>
            </div>
            <h2 style={{fontSize:'clamp(32px, 6vw, 56px)', fontWeight:700, letterSpacing:'-0.03em', color:'#F0EDE8', lineHeight:1}}>
              Work <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'0.45em', fontWeight:300, color:'#7A7268', marginLeft:12, letterSpacing:'0.1em', verticalAlign:'middle'}}>作品</span>
            </h2>
          </div>
          <Link href="/work" style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.15em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none', marginTop:8}}>All projects →</Link>
        </div>
        <div className="work-grid" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:1, background:'#2C2825'}}>
          {[
            {num:'01', status:'In progress', name:'Kron', zh:'金融助手 · AI Finance Coach', desc:'Built for young Australians who never had a financial framework that clicked.'},
            {num:'02', status:'In progress', name:'Patiently', zh:'医疗预约 · Booking Platform', desc:'A smarter way to book medical appointments — designed for the Australian healthcare system.'},
            {num:'03', status:'In progress', name:'Atria', zh:'放手一搏 · Resilience App', desc:'A personal resilience tracker for ambitious people who keep putting themselves in the arena.'},
          ].map((project, i) => (
            <div key={i} style={{background:'#181614', padding:'32px 24px', cursor:'pointer', position:'relative'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:40}}>
                <span style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.12em', color:'#4A4540'}}>{project.num}</span>
                <span style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.1em', textTransform:'uppercase', color:'#E8342A', border:'1px solid #E8342A', padding:'2px 8px'}}>{project.status}</span>
              </div>
              <h3 style={{fontSize:'clamp(22px, 4vw, 32px)', fontWeight:700, letterSpacing:'-0.02em', color:'#F0EDE8', lineHeight:1, marginBottom:4}}>{project.name}</h3>
              <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:12, fontWeight:300, color:'#7A7268', letterSpacing:'0.08em', display:'block', marginBottom:16}}>{project.zh}</span>
              <p style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, color:'#7A7268', lineHeight:1.7, marginBottom:24}}>{project.desc}</p>
              <span style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', color:'#4A4540'}}>View case study →</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{padding:'80px 24px', borderTop:'1px solid #2C2825'}} id="about">
        <div style={{marginBottom:48}}>
          <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
            <div style={{width:24, height:1, background:'#E8342A'}} />
            <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#E8342A'}}>The person behind the work</span>
          </div>
          <div style={{display:'flex', alignItems:'flex-end', gap:24, flexWrap:'wrap'}}>
            <h2 style={{fontSize:'clamp(32px, 6vw, 56px)', fontWeight:700, letterSpacing:'-0.03em', color:'#F0EDE8', lineHeight:1, margin:0}}>
              About <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'0.45em', fontWeight:300, color:'#7A7268', marginLeft:12, letterSpacing:'0.1em', verticalAlign:'middle'}}>关于我</span>
            </h2>
          </div>
        </div>

        <div className="about-grid" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:48}}>
          <p style={{fontSize:'clamp(14px, 2vw, 20px)', fontWeight:300, lineHeight:1.8, color:'rgba(240,237,232,0.5)'}}>
            I&apos;m an <strong style={{color:'#F0EDE8', fontWeight:500}}>Australian Born Chinese</strong> — raised in Sydney, shaped by <span style={{fontFamily:'Noto Sans SC, sans-serif', color:'#E8342A', fontWeight:300}}>两个世界</span>.<br/><br/>
            My Chinese parents pushed the <strong style={{color:'#F0EDE8', fontWeight:500}}>traditional corporate path</strong>. I pushed back. I dropped out of university, started my first business at 14 photographing nightlife, co-founded a podcast about escaping the 9-5, and now I&apos;m building a <span style={{color:'#E8342A'}}>$1B FinTech app</span> — solo, with AI as my co-founder.<br/><br/>
            I&apos;m also slowly learning <strong style={{color:'#F0EDE8', fontWeight:500}}>Cantonese</strong> — because some things are best said in the language your grandparents spoke. <span style={{fontFamily:'Noto Sans SC, sans-serif', color:'#E8342A', fontWeight:300}}>慢慢来。</span>
          </p>
          <div style={{display:'flex', flexDirection:'column'}}>
            {[
              {emoji:'🏸', en:'Racquet Sports', sub:'Badminton · Tennis · Padel', zh:'运动'},
              {emoji:'🥩', en:'Cantonese Food', sub:'Perfecting Crispy Pork · Siu Yuk · Char Siu', zh:'烧肉'},
              {emoji:'🥊', en:'Muay Thai & BJJ', sub:'Ex-hobbyist · Still a UFC obsessive', zh:'武术'},
              {emoji:'🏃', en:'Chinatown Run Club', sub:'Where I met some of my best friends', zh:'跑步'},
              {emoji:'🎙', en:'Late Night Hotpot', sub:'Co-Founder & Host · Podcast', zh:'深夜火锅'},
            ].map((item, i) => (
              <div key={i} style={{display:'flex', alignItems:'center', gap:16, padding:'16px 0', borderBottom:'1px solid #2C2825'}}>
                <span style={{fontSize:20, width:32, flexShrink:0}}>{item.emoji}</span>
                <div style={{flex:1, minWidth:0}}>
                  <p style={{fontSize:14, fontWeight:500, color:'#F0EDE8', marginBottom:2}}>{item.en}</p>
                  <p style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#7A7268', letterSpacing:'0.05em'}}>{item.sub}</p>
                </div>
                <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:15, fontWeight:300, color:'#E8342A', letterSpacing:'0.1em', flexShrink:0}}>{item.zh}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

        <Link href="/about" style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.15em', textTransform:'uppercase', color:'#E8342A', textDecoration:'none', display:'inline-block', marginTop:40}}>Read my story →</Link>
      </section>

      {/* FOOTER */}
      <footer style={{background:'#181614', borderTop:'1px solid #2C2825', padding:'40px 24px', display:'flex', justifyContent:'center', gap:'24px', alignItems:'center', flexWrap:'wrap'}}>
        <a href="https://www.linkedin.com/in/jeremytan42/" target="_blank" rel="noopener noreferrer" style={{color:'#7A7268'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://github.com/jeremytaan" target="_blank" rel="noopener noreferrer" style={{color:'#7A7268'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a href="https://www.instagram.com/jeremytaan" target="_blank" rel="noopener noreferrer" style={{color:'#7A7268'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
        <a href="https://x.com/jeremytaan" target="_blank" rel="noopener noreferrer" style={{color:'#7A7268'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://substack.com/@jeremytaan" target="_blank" rel="noopener noreferrer" style={{color:'#7A7268'}}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
        </a>
        <a href="mailto:jeremy.tan1@outlook.com" style={{color:'#7A7268'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=DM+Mono:wght@300;400&display=swap');
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        @media (min-width: 768px) {
          nav { padding: 24px 56px !important; }
          section { padding-left: 56px !important; padding-right: 56px !important; }
          footer { padding-left: 56px !important; padding-right: 56px !important; }
          .work-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }

        @media (max-width: 767px) {
          .nav-link-item { display: none; }
          .work-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .hero-bottom { flex-direction: column !important; }
          .hero-bottom > div:last-child { align-items: flex-start !important; flex-direction: row !important; gap: 24px !important; flex-wrap: wrap; }
        }
      `}</style>

    </main>
  )
}