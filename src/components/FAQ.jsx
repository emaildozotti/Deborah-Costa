import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const WA_LINK = 'https://wa.me/5511999999999?text=Olá Deborah, vi seu site e quero agendar minha sessão de reprogramação'

const faqs = [
  {
    pergunta: 'Já tentei terapia antes e não funcionou. Por que seria diferente?',
    resposta: 'Porque terapia convencional ouve. Reprogramação Mental intervém. Na terapia tradicional, você fala, reflete e leva insights para casa. No Método GPS, trabalhamos diretamente na crença ou no padrão que mantém você travada. Você não sai com uma reflexão nova. Sai com uma configuração diferente. Se você saía aliviada das sessões mas voltava ao mesmo lugar na semana seguinte, isso não é falha sua. É limitação do método.',
  },
  {
    pergunta: 'Funciona online?',
    resposta: 'Sim, funciona. A Reprogramação Mental e a Hipnose Clínica operam no sistema interno da pessoa, não no ambiente físico. O resultado não depende do meio. Atendo clientes de todo o Brasil e o processo é idêntico ao presencial em termos de profundidade e resultado.',
  },
  {
    pergunta: 'Qual é o investimento?',
    resposta: 'Sei que é uma decisão financeira real e não vou fingir que não é. Mas existe outro cálculo que vale fazer: quanto está custando permanecer no modo sobrevivência? Sono prejudicado, relacionamentos desgastados, decisões travadas, saúde física respondendo ao estresse crônico. O investimento no processo é pontual e limitado no tempo. O custo de não fazer nada é contínuo e cumulativo. Entre em contato para receber os valores e condições com calma.',
  },
  {
    pergunta: 'Quanto tempo leva para ver resultado?',
    resposta: 'A maioria das pessoas sente diferença já nas primeiras sessões. O processo se aprofunda em 2 a 4 meses para questões mais enraizadas. Isso é muito diferente de um acompanhamento de anos. O Método GPS existe porque não há tempo a perder: você entra com o destino, eu forneço a rota mais curta.',
  },
  {
    pergunta: 'E se o problema for a outra pessoa, não eu?',
    resposta: 'Talvez seja, em parte. Mas o que você controla é a sua resposta interna ao que acontece ao redor. Quando você organiza o caos dentro de você, a forma como você se relaciona com o externo muda, mesmo que o externo não mude. Não se trata de culpar você pelo que outros fazem. Trata-se de te devolver o poder sobre você mesma. E isso ninguém pode tirar de você.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Seção FAQ */}
      <section id="faq" className="bg-ivory py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">

          {/* Header */}
          <div data-aos="fade-up" className="text-center mb-12">
            <p className="font-body text-sm font-medium text-amber-warm uppercase tracking-widest mb-3">
              Dúvidas frequentes
            </p>
            <h2 className="font-display text-h2 text-teal-deep">
              Perguntas frequentes
            </h2>
            <p className="font-body text-charcoal/60 text-base mt-3">
            </p>
          </div>

          {/* Accordion — useState */}
          <div data-aos="fade-up" data-aos-delay="80" className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg border transition-colors ${
                  openIndex === index
                    ? 'border-amber-warm/40 bg-white shadow-sm'
                    : 'border-charcoal/10 bg-white hover:border-amber-warm/20'
                }`}
              >
                {/* Pergunta — botão */}
                <button
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display text-teal-deep text-base md:text-lg font-semibold leading-snug">
                    {faq.pergunta}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-amber-warm flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Resposta */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-amber-warm/20 mb-4" />
                    <p className="font-body text-charcoal/70 text-base leading-relaxed">
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Seção CTA Final — Soft Close */}
      <section className="bg-teal-deep py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">

          {/* Ornamento blur */}
          <div
            className="absolute pointer-events-none opacity-10"
            style={{
              background: 'radial-gradient(circle, #C8883A 0%, transparent 60%)',
              filter: 'blur(80px)',
              width: '400px',
              height: '400px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />

          <div data-aos="fade-up" className="relative z-10">
            <p className="font-body text-sm font-medium text-amber-warm uppercase tracking-widest mb-4">
              O próximo passo é seu
            </p>

            {/* TEXT EMPHASIS */}
            <h2 className="font-display text-h2 text-offwhite mb-4 leading-tight">
              Se você chegou até aqui, já passou da hora de parar de carregar tudo sozinha.
            </h2>

            <p className="font-body text-offwhite/70 text-lead leading-relaxed mb-10 max-w-2xl mx-auto">
              Você cansa de ser forte. Eu também cansei. E encontrei uma saída. Quando você sentir que está pronta, estarei aqui.
            </p>

            {/* CTA Principal */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-amber-warm text-offwhite font-body font-semibold text-base px-10 py-4 rounded-btn hover:bg-amber-warm/90 transition-colors shadow-lg mb-4"
            >
              Quero cuidar de mim
            </a>

            {/* Micro-texto */}
            <p className="font-body text-offwhite/40 text-sm mt-4">
              Você responde quando quiser. Sem compromisso imediato. Primeiro a gente conversa.
            </p>
          </div>

        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="bg-charcoal py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-display text-offwhite text-lg font-bold mb-1">
            Deborah Costa
          </p>
          <p className="font-body text-offwhite/50 text-sm">
            Reprogramação Mental — PNL e Hipnose Clínica
          </p>
          <p className="font-body text-offwhite/30 text-xs mt-4">
            &copy; {new Date().getFullYear()} Deborah Costa. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}
