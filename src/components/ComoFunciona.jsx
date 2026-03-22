import { ShieldCheck, Clock, Target } from 'lucide-react'

const WA_LINK = 'https://wa.me/5511999999999?text=Olá Deborah, vi seu site e quero agendar minha sessão de reprogramação'

const items = [
  {
    icon: ShieldCheck,
    title: 'Primeiro contato',
    body: 'Você entra em contato pelo botão abaixo. Responderei com as informações sobre agenda e valores para você decidir com calma.',
    emphasis: 'Sem formulários longos. Sem compromisso antes de conversar.',
  },
  {
    icon: Clock,
    title: 'Sessão inicial',
    body: 'Na primeira sessão, mapeamos juntas onde está o travamento e qual é o destino que você quer alcançar. É o seu GPS sendo calibrado.',
    emphasis: 'O ponto de partida e o destino, com clareza.',
  },
  {
    icon: Target,
    title: 'Reprogramação e acompanhamento',
    body: 'A partir daí, trabalhamos sessão a sessão na reconfiguração dos padrões identificados. A maioria sente diferença já nas primeiras sessões. O processo se aprofunda em 2 a 4 meses.',
    emphasis: 'Sem lista de espera interminável.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-ivory py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-5">
          <p className="font-body text-sm font-medium text-amber-warm uppercase tracking-widest mb-3">
            O processo
          </p>
          <h2 className="font-display text-h2 text-teal-deep">
            Como é o processo na prática
          </h2>
        </div>

        {/* Intro */}
        <div data-aos="fade-up" data-aos-delay="80" className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-body text-charcoal/70 text-lead leading-relaxed">
            Três passos. Sem burocracia. Sem compromisso antes de você decidir.
          </p>
          <p className="font-body text-charcoal/70 text-base mt-3 leading-relaxed">
          </p>
        </div>

        {/* Lista de itens — DECISÃO CRIATIVA: ícone Lucide em container âmbar, layout assimétrico com emphasis em teal */}
        <div className="flex flex-col gap-6">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="bg-white rounded-lg px-6 py-6 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start"
              >
                {/* Ícone */}
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-amber-warm/10 flex items-center justify-center">
                  <Icon size={22} className="text-amber-warm" strokeWidth={1.5} />
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="font-display text-teal-deep text-lg font-bold mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-charcoal/70 text-base leading-relaxed mb-2">
                    {item.body}
                  </p>
                  {/* TEXT EMPHASIS */}
                  <p className="font-body text-amber-warm font-semibold text-sm">
                    {item.emphasis}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA intermediário */}
        <div data-aos="fade-up" className="mt-12 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-amber-warm text-offwhite font-body font-semibold text-base px-10 py-4 rounded-btn hover:bg-amber-warm/90 transition-colors shadow-lg"
          >
            Quero dar o primeiro passo
          </a>
        </div>

      </div>
    </section>
  )
}
