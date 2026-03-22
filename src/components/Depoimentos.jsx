const depoimentos = [
  {
    id: 1,
    texto: 'Eu funcionava bem no trabalho, mas em casa eu simplesmente travava. Qualquer decisão pessoal virava uma crise. Achei que era assim mesmo. Depois de três sessões com a Deborah, tomei uma decisão que eu adiava há dois anos. Sem drama, sem paralisia. Simplesmente fiz.',
    nome: '[Nome, profissão, cidade]',
    descricao: '',
    placeholder: true,
  },
  {
    id: 2,
    texto: 'Passei dois anos na terapia convencional. Entendia tudo, mudava nada. Sentia que o problema era eu. Com a reprogramação mental entendi: não era eu o problema, era o método. A diferença foi sentida já na primeira sessão. Foi a primeira vez que saí de um atendimento sem o mesmo peso de antes.',
    nome: '[Nome, profissão, cidade]',
    descricao: '',
    placeholder: true,
  },
  {
    id: 3,
    texto: 'Não conseguia descansar sem culpa. Tirava um dia de folga e ficava ansiosa o dia todo pensando no que deveria estar fazendo. Aprendi a diferença entre descanso e fuga. Hoje consigo pausar de verdade. Parece simples, mas para mim foi uma viração de chave completa.',
    nome: '[Nome, profissão, cidade]',
    descricao: '',
    placeholder: true,
  },
]

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-teal-deep py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-14">
          <p className="font-body text-sm font-medium text-amber-warm uppercase tracking-widest mb-3">
            Resultados reais
          </p>
          <h2 className="font-display text-h2 text-offwhite">
            O que mudou para quem escolheu sair do modo sobrevivência
          </h2>
        </div>

        {/* Grid de depoimentos — DECISÃO CRIATIVA: aspas em Playfair Display gigantes como elemento gráfico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map((dep, index) => (
            <div
              key={dep.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="relative bg-offwhite/[0.05] border border-offwhite/10 rounded-lg px-7 py-8 hover:bg-offwhite/[0.08] transition-colors"
            >
              {/* Aspa ornamental — DECISÃO CRIATIVA */}
              <div
                className="font-display text-amber-warm text-8xl leading-none absolute top-2 left-4 opacity-30 select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </div>

              {/* Texto */}
              <p className="font-body text-offwhite/75 text-base leading-relaxed relative z-10 mt-8 mb-6 italic">
                {dep.texto}
              </p>

              {/* Linha divisória */}
              <div className="w-10 h-px bg-amber-warm/40 mb-4" />

              {/* Autor */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-amber-warm/20 border border-amber-warm/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-amber-warm text-sm font-bold">
                    {dep.nome.charAt(1)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-offwhite font-semibold text-sm">{dep.nome}</p>
                  <p className="font-body text-offwhite/50 text-xs">{dep.descricao}</p>
                </div>
              </div>

              {dep.placeholder && (
                <div className="mt-4 px-3 py-1.5 bg-amber-warm/10 border border-amber-warm/20 rounded text-center">
                  <p className="font-body text-amber-warm/70 text-xs">
                    Aguardando depoimento real
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
