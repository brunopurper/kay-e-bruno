"use client";

export default function ManualConvidados() {
  return (
    <section className="w-full py-12">
      <div className="flex flex-col items-center justify-center px-6 md:px-24">
        <h1
          className="text-[#515b30] font-bold text-4xl mb-8"
          style={{ fontFamily: "brittany" }}
        >
          Manual dos Convidados
        </h1>

        <ul className="space-y-5 max-w-3xl">
          {[
            "Confirme sua presença. E caso não possa comparecer, <span class='font-bold'>por favor, nos avise!</span>.",
            "Não levem acompanhantes que não foram convidados.",
            "A entrada será permitida apenas para quem estiver na lista.",
            "Se programe para não se atrasar.",
            "O traje deve ser social.",
            "Lembre-se: branco é uma cor exclusiva da noiva.",
            "<span class='font-bold'>Terracota</span> é a cor escolhida para as madrinhas.",
            "<span class='font-bold'>Marsala</span> é a cor escolhida para as mães dos noivos.",
            "Registre muitos momentos, mas tenha cuidado para não atrapalhar o trabalho dos fotógrafos.",
            "Durante a cerimônia, evite fotos. Teremos profissionais cuidando disso com muito carinho!",
            "E o mais importante: divirta-se muito e celebre conosco esse dia tão especial!",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                <svg
                  className="w-5 h-5 text-[#515b30]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span
                className="text-black text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item }}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
