export default function VSLBlock() {
  return (
    <section id="vsl" className="bg-teal-deep py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">

        {/* Texto pré-vídeo */}
        <div data-aos="fade-up" className="text-center mb-10">
          <p className="font-body text-sm font-medium text-amber-warm uppercase tracking-widest mb-4">
            Antes de continuar lendo
          </p>
          <h2 className="font-display text-h2 text-offwhite mb-5">
            Em 7 minutos, entenda por que você ainda está travada.
          </h2>
          <p className="font-body text-offwhite/70 text-lead max-w-2xl mx-auto leading-relaxed">
            Assista ao vídeo abaixo. Nele eu explico o que é o modo sobrevivência, por que terapia convencional não desfaz isso e como a Reprogramação Mental funciona de forma diferente.
          </p>
        </div>

        {/* Placeholder do Vídeo — DECISÃO CRIATIVA: borda âmbar ao redor do player como moldura de destaque */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-amber-warm/40"
          style={{ paddingBottom: '56.25%' }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/LZOtQpRUe04"
            title="Deborah Costa — Reprogramação Mental"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Âncora pós-vídeo */}
        <div data-aos="fade-up" data-aos-delay="300" className="text-center mt-10">
          <p className="font-display text-offwhite/80 text-lg italic">
            Se você se viu no vídeo, o próximo passo é simples: conheça o Método GPS e veja se faz sentido para onde você está agora.
          </p>
          <p className="font-body text-offwhite/50 text-base mt-2">
          </p>
        </div>

      </div>
    </section>
  )
}
