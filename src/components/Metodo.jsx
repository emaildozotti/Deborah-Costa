const steps = [
  {
    number: '01',
    title: 'Diagnóstico: onde está o travamento',
    body: 'Antes de qualquer intervenção, identifico exatamente onde está o padrão que mantém você travada. Não trabalhamos no sintoma. Trabalhamos na origem. É a diferença entre tirar a fumaça e apagar o fogo.',
    emphasis: 'A origem, não o sintoma.',
  },
  {
    number: '02',
    title: 'Reprogramação: a viração de chave',
    body: 'Com PNL e Hipnose Clínica, intervenho diretamente na crença ou no trauma que gera o padrão. Você não precisa reviver a dor em detalhes para resolvê-la. Você não precisa de meses de reflexão para sentir a diferença. A maioria das pessoas já sai da primeira sessão com o peso aliviado. Isso é o que chamo de sessão resolutiva: você não sai com uma reflexão nova. Sai com uma configuração diferente.',
    emphasis: 'Sessão resolutiva: você sai com uma configuração diferente.',
  },
  {
    number: '03',
    title: 'Rota: clareza para o próximo passo',
    body: 'Com o padrão reconfigurado, organizamos o caos interno e definimos o próximo movimento com clareza. Não existe plano genérico. Existe a sua rota, para o seu destino, a partir de onde você está.',
    emphasis: 'A sua rota. Para o seu destino.',
  },
]

export default function Metodo() {
  return (
    <section id="metodo" className="bg-ivory py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Título */}
        <div data-aos="fade-up" className="text-center mb-6">
          <p className="font-body text-sm font-medium text-amber-warm uppercase tracking-widest mb-3">
            A abordagem
          </p>
          <h2 className="font-display text-h2 text-teal-deep">
            Método GPS: a rota mais curta para sair do caos interno.
          </h2>
        </div>

        {/* Introdução */}
        <div data-aos="fade-up" data-aos-delay="100" className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-body text-charcoal/80 text-lead leading-relaxed mb-4">
            Depois de viver o esgotamento que você está vivendo agora, não criei o Método GPS do nada. Criei porque precisei sair da névoa mental do meu próprio colapso. E descobri que o caminho mais curto não é falar mais sobre o problema. É reprogramar a crença que mantém você presa nele.
          </p>
          <p className="font-body text-charcoal/70 text-base leading-relaxed">
          </p>
        </div>

        {/* Steps — DECISÃO CRIATIVA: número em background grande, opaco, como âncora visual editorial */}
        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-aos="fade-right"
              data-aos-delay={index * 120}
              className={`relative flex flex-col md:flex-row gap-6 items-start ${
                index < steps.length - 1
                  ? 'pb-0 border-l-2 border-sage/40 ml-6 md:ml-0 md:border-l-0 pl-8 md:pl-0'
                  : 'ml-6 md:ml-0 pl-8 md:pl-0'
              }`}
            >
              {/* Número grande — ornamental */}
              <div className="hidden md:block relative min-w-[120px] text-right">
                <span className="font-display text-8xl font-bold text-teal-deep/[0.08] leading-none select-none">
                  {step.number}
                </span>
              </div>

              {/* Conector de linha no mobile */}
              {index < steps.length - 1 && (
                <div
                  className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-sage/40"
                  aria-hidden="true"
                />
              )}
              <div className="md:hidden absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-amber-warm border-2 border-ivory" aria-hidden="true" />

              {/* Conteúdo */}
              <div className={`flex-1 ${index < steps.length - 1 ? 'pb-12' : ''}`}>
                <div className="md:hidden font-display text-amber-warm text-sm font-bold tracking-widest mb-1">
                  {step.number}
                </div>
                <h3 className="font-display text-h3 text-teal-deep mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-charcoal/75 text-base leading-relaxed mb-3">
                  {step.body}
                </p>
                {/* TEXT EMPHASIS */}
                <p className="font-display text-amber-warm italic text-lg">
                  {step.emphasis}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Diferencial explícito */}
        <div data-aos="fade-up" className="mt-14 bg-teal-deep rounded-lg px-8 py-8 text-center">
          <p className="font-display text-offwhite text-xl md:text-2xl italic leading-relaxed">
            O que não prometo
          </p>
          <p className="font-display text-amber-warm text-xl md:text-2xl font-bold mt-2">
          </p>
          <p className="font-body text-offwhite/70 text-base mt-4 max-w-2xl mx-auto">
            Não prometo cura mágica sem participação. Não aceito quem quer apenas reclamar sem mudar. O único pré-requisito para o Método GPS funcionar é autoresponsabilidade: a disposição de ser agente da própria mudança.
          </p>
        </div>

      </div>
    </section>
  )
}
