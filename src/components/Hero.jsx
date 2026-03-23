const WA_LINK = 'https://wa.me/558198760387?text=Ol%C3%A1%20Deborah%2C%20vim%20pelo%20seu%20site%20e%20quero%20agendar%20minha%20sess%C3%A3o%20de%20reprograma%C3%A7%C3%A3o'

const css = `
@keyframes aurora-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(4%, 5%) scale(1.06); }
  66% { transform: translate(-3%, 2%) scale(0.96); }
}
@keyframes aurora-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-5%, -4%) scale(1.09); }
  66% { transform: translate(4%, -2%) scale(0.94); }
}
@keyframes aurora-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(3%, -5%) scale(1.07); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
`

export default function Hero() {
  return (
    <>
      <style>{css}</style>

      {/* Desktop sticky header */}
      <header className="md-header" style={{ display: 'none' }}>
        <style>{`@media(min-width:768px){.md-header{display:flex!important;position:fixed;top:0;left:0;right:0;z-index:50;align-items:center;justify-content:space-between;padding:1rem 2.5rem;background:rgba(10,28,35,0.88);backdrop-filter:blur(12px);border-bottom:1px solid rgba(122,158,159,0.15)}}`}</style>
        <span style={{ fontFamily: 'var(--font-display, serif)', color: '#C8883A', fontSize: '1.1rem', fontStyle: 'italic' }}>
          Deborah Costa
        </span>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"#C8883A",color:"#FAFAF8",fontFamily:"Inter,sans-serif",fontWeight:600,fontSize:"14px",letterSpacing:"0.08em",textTransform:"uppercase",padding:"16px 36px",borderRadius:"4px",textDecoration:"none",cursor:"pointer",boxShadow:"0 4px 20px rgba(200,136,58,0.3)",transition:"all 0.3s ease"}} style={{ fontSize: '0.8rem' }}>
          Agendar sessão
        </a>
      </header>

      <section
        id="hero"
        aria-label="Hero Deborah Costa"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0A1C23 0%, #0D2530 50%, #081820 100%)',
        }}
      >
        {/* Aurora blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', left: '-10%', width: '55vw', height: '55vw', maxWidth: '580px', maxHeight: '580px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(122,158,159,0.28) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'aurora-1 16s ease-in-out infinite', opacity: 0.4 }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-15%', right: '-8%', width: '45vw', height: '45vw', maxWidth: '500px', maxHeight: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,136,58,0.22) 0%, transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none', animation: 'aurora-2 20s ease-in-out infinite', opacity: 0.35 }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '40%', right: '25%', width: '35vw', height: '35vw', maxWidth: '400px', maxHeight: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(122,158,159,0.15) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none', animation: 'aurora-3 14s ease-in-out infinite', opacity: 0.3 }} />

        {/* Content */}
        <div
          style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '72rem', margin: '0 auto', padding: '6rem 1.5rem 4rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
          className="hero-grid"
        >
          <style>{`@media(min-width:768px){.hero-grid{grid-template-columns:1fr 1fr!important;padding-top:5rem!important}.hero-photo{order:2}.hero-text{order:1}}`}</style>

          {/* Text — first in DOM = first on mobile */}
          <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Callout */}
            <p
              style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8883A', margin: 0, opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0s' }}
            >
              MODO SOBREVIVÊNCIA
            </p>

            {/* H1 */}
            <h1
              style={{ fontFamily: 'var(--font-display, serif)', fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1, color: '#F5F0EA', margin: 0, opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.15s' }}
            >
              Você cansa de ser forte.{' '}
              <span style={{ color: '#C8883A', display: 'block', marginTop: '0.2rem' }}>Eu também cansei.</span>
            </h1>

            {/* Sub-headline */}
            <p
              style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.65, color: 'rgba(245,240,234,0.72)', maxWidth: '30rem', margin: 0, opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.30s' }}
            >
              Reprogramação Mental para sair do modo sobrevivência de verdade.
            </p>

            {/* CTA */}
            <div style={{ opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.45s' }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"#C8883A",color:"#FAFAF8",fontFamily:"Inter,sans-serif",fontWeight:600,fontSize:"14px",letterSpacing:"0.08em",textTransform:"uppercase",padding:"16px 36px",borderRadius:"4px",textDecoration:"none",cursor:"pointer",boxShadow:"0 4px 20px rgba(200,136,58,0.3)",transition:"all 0.3s ease"}}>
                Quero agendar minha sessão
              </a>
            </div>
          </div>

          {/* Photo — Treatment A: rotated frame */}
          <div className="hero-photo" style={{ display: 'flex', justifyContent: 'center', opacity: 0, animation: 'fadeUp 1s ease forwards', animationDelay: '0.2s' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
              {/* Rotated back frame */}
              <div
                aria-hidden="true"
                style={{ position: 'absolute', inset: 0, transform: 'rotate(-3deg)', background: 'rgba(122,158,159,0.12)', border: '1px solid rgba(122,158,159,0.3)', borderRadius: '4px', translate: '8px 8px' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A1C23 0%, transparent 45%)', zIndex: 1, pointerEvents: 'none', borderRadius: '4px' }} aria-hidden="true" />
              <img
                src="/images/hero.jpg"
                alt="Deborah Costa — Reprogramação Mental"
                style={{ position: 'relative', width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', display: 'block', boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
