const painItems = [
  {
    id: 1,
    quote: '"Todo mundo me chama de forte: por dentro eu estou me despedaçando."',
    label: 'O peso de ser forte',
  },
  {
    id: 2,
    quote: '"Sou eficiente no trabalho. Na minha vida emocional, estou completamente parada."',
    label: 'Travamento funcional',
  },
  {
    id: 3,
    quote: '"Quando sento para descansar, a culpa aparece. Como se eu não tivesse direito a pausar."',
    label: 'Culpa por descansar',
  },
  {
    id: 4,
    quote: '"Passei anos na terapia. Falo, choro, entendo. Na semana seguinte estou igual."',
    label: 'Frustração terapêutica',
  },
]

export default function PainPoints() {
  return (
    <section id="painpoints" className="bg-ivory py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título da seção */}
        <div data-aos="fade-up" className="text-center mb-14">
          <p className="font-body text-sm font-medium text-amber-warm uppercase tracking-widest mb-3">
            Você se reconhece?
          </p>
          <h2 className="font-display text-h2 text-teal-deep">
            Se você se reconhece em alguma dessas frases, você está no lugar certo.
          </h2>
        </div>

        {/* Grid de cards — DECISÃO CRIATIVA: borda esquerda âmbar como marca d'água de identificação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {painItems.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="bg-white border-l-4 border-amber-warm rounded-r-lg px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Label */}
              <p className="font-body text-xs font-semibold text-amber-warm uppercase tracking-widest mb-2">
                {item.label}
              </p>
              {/* Frase — voz do avatar */}
              <p className="font-display text-charcoal text-lg leading-relaxed italic">
                {item.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Cliffhanger — DECISÃO CRIATIVA: tipografia display italic, peso editorial */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
          <p className="font-display text-teal-deep text-xl md:text-2xl italic leading-relaxed">
            Isso não é fraqueza. É o custo de carregar tudo sozinha por tempo demais. E existe uma saída.
          </p>
          <p className="font-body text-charcoal/70 text-base md:text-lg mt-4 leading-relaxed">

          </p>
        </div>

      </div>
    </section>
  )
}
