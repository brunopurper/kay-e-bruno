export default function MainBanner() {
  return (
    <section className="w-full bg-[#f4eee0] flex items-center justify-center h-[83vh]">
      <div className="relative w-full h-full">
        {/* Folha canto superior esquerdo */}
        <img
          src="/assets/planta.png"
          className="absolute top-4 left-4 w-24 md:w-32"
          alt="Folhas topo esquerdo"
        />

        {/* Folha canto inferior direito */}
        <img
          src="/assets/planta 02.png"
          className="absolute -bottom-11 right-4 w-24 md:w-32"
          alt="Folhas canto inferior direito"
        />

        {/* Fundo principal (aquarela do lago) */}
        <div className="flex flex-col items-center justify-center h-full px-4 text-center mt-16">
          <img
            src="/assets/lago.png"
            className="w-64 md:w-96"
            alt="Fundo lago"
          />

          {/* Texto convite */}
          <p className="text-[#515b30] uppercase text-sm md:text-base">
          Nós escolhemos o para sempre!
          </p>
      <img
            src="/assets/Kayane e Bruno (1).png"
            alt="Kayane e Bruno"
            className="w-64 md:w-96"
          />

          <p className="text-[#515b30] uppercase text-xs md:text-sm mt-4 mb-16">
          Convidam para a cerimônia do seu casamento
          </p>
        </div>
      </div>
    </section>
  );
}
