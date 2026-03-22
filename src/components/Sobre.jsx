const chapters = [
  {
    label: 'Mãe Solo',
    text: 'Fui mãe solo de três filhos muito cedo. Trabalhei como camareira de navio em condições extremas. Jornadas que ensinaram que parar era fraqueza. Aprendi que ser forte era a única opção que existia.',
  },
  {
    label: 'O Colapso',
    text: 'Quando a pandemia chegou, o peso de anos acumulados veio de uma vez só. Pânico, ansiedade, desmoronamento. Não foi gradual. Foi a névoa mental que você conhece, tomando conta de tudo.',
  },
  {
    label: 'A Saída Real',
    text: 'Foi ali, como paciente, que encontrei a PNL e a Hipnose Clínica. Não como terapeuta curiosa. Como alguém que precisava de uma saída real.',
  },
  {
    label: 'Hoje',
    text: 'Hoje ajudo mulheres a saírem do modo sobrevivência porque sei exatamente o que é estar lá. Sei o peso de ser chamada de forte quando você está no limite. E sei que existe uma saída que não exige anos de processo nem reabrir feridas desnecessariamente.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="bg-teal-deep py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-14">
          <p className="font-body text-sm font-medium text-amber-warm uppercase tracking-widest mb-3">
            Sobre Deborah
          </p>
          <h2 className="font-display text-h2 text-offwhite">
            Eu não aprendi sobre esgotamento em livros.
          </h2>
          <p className="font-display text-offwhite/60 text-h3 italic font-normal mt-2">
          </p>
        </div>

        {/* Layout split — DECISÃO CRIATIVA: texto narrativo em 4 capítulos à esquerda, foto com moldura âmbar à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Coluna de texto — capítulos da história */}
          <div data-aos="fade-right" className="flex flex-col gap-8">
            {chapters.map((chapter, index) => (
              <div key={index} className="flex gap-4">
                {/* Label lateral */}
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-warm mt-1.5 flex-shrink-0" />
                  {index < chapters.length - 1 && (
                    <div className="w-px flex-1 bg-offwhite/10 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="font-body text-xs font-semibold text-amber-warm uppercase tracking-widest mb-2">
                    {chapter.label}
                  </p>
                  <p className="font-body text-offwhite/75 text-base leading-relaxed">
                    {chapter.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Frase síntese — TEXT EMPHASIS */}
            <div className="border-l-2 border-amber-warm pl-5 mt-2">
              <p className="font-display text-offwhite text-xl italic leading-relaxed">
                "Sei o peso de ser chamada de forte quando você está no limite. E sei que existe uma saída."
              </p>
            </div>
          </div>

          {/* Coluna da foto */}
          <div data-aos="fade-left" data-aos-delay="200" className="flex flex-col items-center lg:items-start lg:sticky lg:top-28">

            {/* Foto profissional */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div
                className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-amber-warm/30"
              >
                <img
                  src="/images/about.jpg"
                  alt="Deborah Costa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Ornamento de blur atrás da foto */}
              <div
                className="absolute -inset-4 rounded-xl opacity-20 -z-10 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, #C8883A 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Card de credenciais */}
            <div className="mt-6 w-full max-w-sm mx-auto lg:mx-0 bg-offwhite/[0.05] border border-offwhite/10 rounded-lg px-5 py-4">
              <p className="font-body text-amber-warm text-xs font-semibold uppercase tracking-widest mb-3">
                Especialidades
              </p>
              <ul className="flex flex-col gap-2">
                {['Especialista em Hipnose Clínica', 'Practitioner e Master em PNL', 'Reprogramação Mental'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-offwhite/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-warm flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
