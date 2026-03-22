import { ChevronDown } from 'lucide-react'

const WA_LINK = 'https://wa.me/5511999999999?text=Olá Deborah, vi seu site e quero agendar minha sessão de reprogramação'

export default function Hero() {
  const handleScrollToMetodo = () => {
    const el = document.getElementById('metodo')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-teal-deep flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Ornamentos de blur — metáfora da névoa */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7A9E9F 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(-30%, -30%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7A9E9F 0%, transparent 70%)',
          filter: 'blur(50px)',
          transform: 'translate(30%, 30%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C8883A 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        aria-hidden="true"
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Hero photo */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/hero.jpg"
            alt="Deborah Costa"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-2 border-amber-warm/30"
          />
        </div>

        {/* Callout Badge — DECISÃO CRIATIVA: badge com borda âmbar, não pill genérico */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="inline-flex items-center gap-2 border border-amber-warm/60 text-amber-warm/90 text-sm font-body font-medium px-4 py-2 rounded-full mb-8 tracking-wide uppercase"
        >
          VOCÊ ESTÁ NO LIMITE
        </div>

        {/* H1 — 3 linhas com pesos distintos — DECISÃO CRIATIVA: quebratura intencional de linha por peso */}
        <h1 className="font-display text-hero text-offwhite mb-6">
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="block"
          >
            Você cansa de ser forte.
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="block text-amber-warm"
          >
            Eu também cansei.
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="300"
            className="block font-normal italic"
          >
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="400"
            className="block text-offwhite/70 text-3xl md:text-4xl font-normal not-italic"
          >
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="font-body text-lead text-offwhite/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Reprogramação Mental para sair do modo sobrevivência de verdade.
        </p>

        {/* CTAs */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center bg-amber-warm text-offwhite font-body font-semibold text-base px-8 py-4 rounded-btn hover:bg-amber-warm/90 transition-colors shadow-lg"
          >
            Quero agendar minha sessão
          </a>
          <button
            onClick={handleScrollToMetodo}
            className="w-full sm:w-auto inline-flex justify-center items-center border border-offwhite/40 text-offwhite/80 font-body font-medium text-base px-8 py-4 rounded-btn hover:border-offwhite hover:text-offwhite transition-colors"
          >
            Quero conhecer o método
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          data-aos="fade-in"
          data-aos-delay="900"
          className="mt-16 flex flex-col items-center gap-2 text-offwhite/40"
        >
          <span className="font-body text-xs uppercase tracking-widest">Conheça o método</span>
          <ChevronDown size={20} className="animate-bounce-slow" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
