import Link from 'next/link'

export default function Home() {
  return (
    <main style={{background:'#111010', minHeight:'100vh', color:'#F0EDE8', fontFamily:'Space Grotesk, sans-serif', overflowX:'hidden'}}>

      {/* NAV */}
      <nav style={{position:'fixed', top:0, left:0, right:0, zIndex:100, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'24px 56px', borderBottom:'1px solid rgba(240,237,232,0.08)', background:'rgba(17,16,16,0.85)', backdropFilter:'blur(12px)'}}>
        <Link href="/" style={{display:'flex', alignItems:'baseline', gap:10, textDecoration:'none'}}>
          <span style={{fontSize:14, fontWeight:600, color:'#F0EDE8', letterSpacing:'-0.02em'}}>Jeremy Tan</span>
          <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:12, fontWeight:300, color:'#E8342A', letterSpacing:'0.08em'}}>陈勇流</span>
        </Link>
        <ul style={{display:'flex', gap:36, listStyle:'none', alignItems:'center'}}>
          <li><Link href="#journal" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>Journal</Link></li>
          <li><Link href="#work" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>Work</Link></li>
          <li><Link href="#about" style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>About</Link></li>
          <li><Link href="#" style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.1em', textTransform:'uppercase', color:'#F0EDE8', background:'#E8342A', padding:'8px 18px', textDecoration:'none'}}>Follow along →</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section style={{minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'120px 56px 80px', position:'relative', overflow:'hidden'}}>
        {/* Red glow */}
        <div style={{position:'absolute', width:600, height:600, background:'radial-gradient(circle, rgba(232,52,42,0.12) 0%, transparent 70%)', top:'20%', right:'10%', pointerEvents:'none'}} />
        {/* Watermark */}
        <div style={{position:'absolute', right:-60, top:'50%', transform:'translateY(-50%)', fontFamily:'Noto Sans SC, sans-serif', fontSize:480, fontWeight:700, color:'transparent', WebkitTextStroke:'1px rgba(240,237,232,0.04)', lineHeight:1, pointerEvents:'none', userSelect:'none'}}>陈</div>

        <div style={{display:'flex', alignItems:'center', gap:16, marginBottom:28}}>
          <div style={{width:6, height:6, borderRadius:'50%', background:'#E8342A'}} />
          <span style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#7A7268'}}>Sydney, Australia · Building in public · 悉尼</span>
        </div>

        <h1 style={{fontSize:'clamp(64px, 11vw, 140px)', fontWeight:700, lineHeight:0.92, letterSpacing:'-0.03em', color:'#F0EDE8', marginBottom:16, position:'relative', zIndex:2}}>
          Jeremy<br/>Tan.
        </h1>
        <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'clamp(28px, 4vw, 52px)', fontWeight:300, color:'#E8342A', letterSpacing:'0', marginBottom:40, position:'relative', zIndex:2, display:'block'}}>
          陈勇流 · 两个世界
        </span>

        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', position:'relative', zIndex:2, borderTop:'1px solid rgba(240,237,232,0.08)', paddingTop:40}}>
          <p style={{fontSize:'clamp(16px, 2vw, 22px)', fontWeight:300, color:'rgba(240,237,232,0.5)', lineHeight:1.6, maxWidth:520}}>
            <strong style={{color:'#F0EDE8', fontWeight:500}}>Product Designer. FinTech Founder. Misfit.</strong><br/>
            Australian Born Chinese navigating <span style={{fontFamily:'Noto Sans SC, sans-serif', color:'#E8342A', fontWeight:300, fontSize:'0.85em'}}>两个世界</span> — between two worlds. Building a $1B app, solo, with AI as my co-founder. No CS degree. No conventional path. Figuring it out anyway.
          </p>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:12}}>
            {[
              {label:'Building', value:'Aureli', zh:'金融助手'},
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
          {['Product Designer · 产品设计师', 'FinTech Founder · 金融科技创始人', '两个世界 · Between Two Worlds', 'Building in Public · 公开建设', 'Chinatown Run Club · 唐人街跑步俱乐部', 'Sydney · 悉尼', 'Misfit · 异类',
            'Product Designer · 产品设计师', 'FinTech Founder · 金融科技创始人', '两个世界 · Between Two Worlds', 'Building in Public · 公开建设', 'Chinatown Run Club · 唐人街跑步俱乐部', 'Sydney · 悉尼', 'Misfit · 异类'
          ].map((item, i) => (
            <span key={i} style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, letterSpacing:'0.12em', color:'#7A7268', padding:'0 32px', flexShrink:0}}>{item}</span>
          ))}
        </div>
      </div>

      {/* JOURNAL */}
      <section style={{padding:'100px 56px', borderTop:'1px solid #2C2825'}} id="journal">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:64}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
              <div style={{width:24, height:1, background:'#E8342A'}} />
              <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#E8342A'}}>Latest writing</span>
            </div>
            <h2 style={{fontSize:'clamp(36px, 5vw, 56px)', fontWeight:700, letterSpacing:'-0.03em', color:'#F0EDE8', lineHeight:1}}>
              Journal <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'0.45em', fontWeight:300, color:'#7A7268', marginLeft:16, letterSpacing:'0.1em', verticalAlign:'middle'}}>日志</span>
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
            <Link href={`/journal/${post.num}`} key={i} style={{display:'grid', gridTemplateColumns:'56px 1fr 120px', gap:24, alignItems:'center', padding:'32px 0', borderBottom:'1px solid #2C2825', textDecoration:'none'}}>
              <span style={{fontFamily:'DM Mono, monospace', fontSize:11, color:'#4A4540'}}>{post.num}</span>
              <div>
                <p style={{fontSize:18, fontWeight:500, color:'#F0EDE8', lineHeight:1.3, marginBottom:8}}>{post.title}</p>
                <span style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.12em', textTransform:'uppercase', color:'#7A7268', border:'1px solid #2C2825', padding:'3px 10px'}}>
                  {post.tag} · <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:10, color:'#E8342A', textTransform:'none', letterSpacing:'0.05em'}}>{post.tagZh}</span>
                </span>
              </div>
              <div style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#7A7268', textAlign:'right'}}>{post.date}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section style={{padding:'100px 56px', borderTop:'1px solid #2C2825'}} id="work">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:64}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
              <div style={{width:24, height:1, background:'#E8342A'}} />
              <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#E8342A'}}>Selected projects</span>
            </div>
            <h2 style={{fontSize:'clamp(36px, 5vw, 56px)', fontWeight:700, letterSpacing:'-0.03em', color:'#F0EDE8', lineHeight:1}}>
              Work <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'0.45em', fontWeight:300, color:'#7A7268', marginLeft:16, letterSpacing:'0.1em', verticalAlign:'middle'}}>作品</span>
            </h2>
          </div>
          <Link href="/work" style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.15em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none', marginTop:8}}>All projects →</Link>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:1, background:'#2C2825'}}>
          {[
            {num:'01', status:'In progress', name:'Aureli', zh:'金融助手 · AI Finance Coach', desc:'AI-powered personal finance coach for young Australians who were never given a framework that worked for their brain.'},
            {num:'02', status:'Case study', name:'Patiently', zh:'医疗预约 · Medical Booking', desc:'Medical appointment booking platform designed for the Australian healthcare market.'},
            {num:'03', status:'Case study', name:'Rejection Tracker', zh:'拒绝追踪 · Resilience App', desc:'iOS resilience app that reframes rejection as progress — built for the general adult audience.'},
          ].map((project, i) => (
            <div key={i} style={{background:'#181614', padding:'40px 36px', cursor:'pointer', position:'relative'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:48}}>
                <span style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.12em', color:'#4A4540'}}>{project.num}</span>
                <span style={{fontFamily:'DM Mono, monospace', fontSize:9, letterSpacing:'0.1em', textTransform:'uppercase', color:'#E8342A', border:'1px solid #E8342A', padding:'2px 8px'}}>{project.status}</span>
              </div>
              <h3 style={{fontSize:32, fontWeight:700, letterSpacing:'-0.02em', color:'#F0EDE8', lineHeight:1, marginBottom:4}}>{project.name}</h3>
              <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:12, fontWeight:300, color:'#7A7268', letterSpacing:'0.08em', display:'block', marginBottom:20}}>{project.zh}</span>
              <p style={{fontFamily:'DM Mono, monospace', fontSize:11, fontWeight:300, color:'#7A7268', lineHeight:1.7, marginBottom:32}}>{project.desc}</p>
              <span style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', color:'#4A4540'}}>View case study →</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{padding:'100px 56px', borderTop:'1px solid #2C2825'}} id="about">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:64}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
              <div style={{width:24, height:1, background:'#E8342A'}} />
              <span style={{fontFamily:'DM Mono, monospace', fontSize:10, fontWeight:300, letterSpacing:'0.2em', textTransform:'uppercase', color:'#E8342A'}}>The person behind the work</span>
            </div>
            <h2 style={{fontSize:'clamp(36px, 5vw, 56px)', fontWeight:700, letterSpacing:'-0.03em', color:'#F0EDE8', lineHeight:1}}>
              About <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:'0.45em', fontWeight:300, color:'#7A7268', marginLeft:16, letterSpacing:'0.1em', verticalAlign:'middle'}}>关于我</span>
            </h2>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:80}}>
          <p style={{fontSize:'clamp(18px, 2.2vw, 24px)', fontWeight:300, lineHeight:1.7, color:'rgba(240,237,232,0.5)'}}>
            I&apos;m an <strong style={{color:'#F0EDE8', fontWeight:500}}>Australian Born Chinese</strong> — raised in Sydney, shaped by <span style={{fontFamily:'Noto Sans SC, sans-serif', color:'#E8342A', fontWeight:300}}>两个世界</span>.<br/><br/>
            My Chinese parents pushed the <strong style={{color:'#F0EDE8', fontWeight:500}}>traditional corporate path</strong>. I pushed back. I dropped out of university, started my first business at 14 photographing nightlife, co-founded a podcast about escaping the 9-5, and now I&apos;m building a <span style={{color:'#E8342A'}}>$1B FinTech app</span> — solo, with AI as my co-founder.<br/><br/>
            I&apos;m also slowly learning <strong style={{color:'#F0EDE8', fontWeight:500}}>Cantonese</strong> — because some things are best said in the language your grandparents used. <span style={{fontFamily:'Noto Sans SC, sans-serif', color:'#E8342A', fontWeight:300}}>慢慢来。</span>
          </p>
          <div style={{display:'flex', flexDirection:'column'}}>
            {[
              {emoji:'🏸', en:'Racquet Sports', sub:'Badminton · Tennis · Padel', zh:'运动'},
              {emoji:'🥩', en:'Cantonese Food', sub:'Perfecting crispy pork · Siu Yuk · Char Siew', zh:'烧肉'},
              {emoji:'🥊', en:'Muay Thai & BJJ', sub:'Ex-hobbyist · Still a UFC obsessive', zh:'武术'},
              {emoji:'🏃', en:'Chinatown Run Club', sub:'Where I met some of my best friends', zh:'跑步'},
              {emoji:'🎙', en:'Late Night Hotpot', sub:'Co-founder · Podcast', zh:'深夜火锅'},
            ].map((item, i) => (
              <div key={i} style={{display:'flex', alignItems:'center', gap:20, padding:'20px 0', borderBottom:'1px solid #2C2825'}}>
                <span style={{fontSize:22, width:36, flexShrink:0}}>{item.emoji}</span>
                <div style={{flex:1}}>
                  <p style={{fontSize:15, fontWeight:500, color:'#F0EDE8', marginBottom:2}}>{item.en}</p>
                  <p style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#7A7268', letterSpacing:'0.05em'}}>{item.sub}</p>
                </div>
                <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:16, fontWeight:300, color:'#E8342A', letterSpacing:'0.1em'}}>{item.zh}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:'#181614', borderTop:'1px solid #2C2825', padding:'48px 56px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <p style={{fontSize:15, fontWeight:600, color:'#F0EDE8', letterSpacing:'-0.01em'}}>
            Jeremy Tan <span style={{fontFamily:'Noto Sans SC, sans-serif', fontSize:12, fontWeight:300, color:'#E8342A', marginLeft:10, letterSpacing:'0.1em'}}>陈勇流</span>
          </p>
          <p style={{fontFamily:'DM Mono, monospace', fontSize:10, color:'#7A7268', letterSpacing:'0.08em', marginTop:4}}>jeremytan.io · Sydney, Australia · 悉尼 · © 2026</p>
        </div>
        <div style={{display:'flex', gap:28}}>
          {['LinkedIn','GitHub','Instagram','Email'].map(link => (
            <a key={link} href="#" style={{fontFamily:'DM Mono, monospace', fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:'#7A7268', textDecoration:'none'}}>{link}</a>
          ))}
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=DM+Mono:wght@300;400&display=swap');
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

    </main>
  )
}