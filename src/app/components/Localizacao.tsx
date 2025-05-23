import { IconMapPin, IconMap } from "@tabler/icons-react";


export default function Localizacao() {
  return (
    <div className="flex flex-col justify-center gap-6 md:gap-0 py-10 px-12 md:px-24 items-center text-center">
      <h1
        className="text-[#515b30] font-bold text-4xl"
        style={{ fontFamily: "brittany" }}
      >
        Local
      </h1>
      <div className="w-2/3 mt-5 text-black">
        <div className="mb-3">
          <span>
            Escolhemos um lugar com a nossa cara para celebrarmos juntos!
          </span>
        </div>
        <div className="mb-3">
          <span>
            Queremos compartilhar com vocês o local especial que escolhemos para
            o nosso casamento. 
            <p>Optamos por um ambiente aberto, cercado pela
            natureza e cheio de encanto, com um lago incrível.</p>
            <p>Queremos que esse seja um dia
            inesquecível para todos, repleto de amor e alegria.</p>
          </span>
        </div>
        <div className="flex justify-center items-center gap-4 w-full">
          <IconMapPin className="text-black" />
          <a
            href="https://waze.com/ul?ll=-30.19376,-51.43064&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-[#3e4724] transition-colors font-bold"
          >
            BR 116, KM 309 - Estrada do Petim, 4099 - Guaíba / RS - 92739-899
          </a>
        </div>
      </div>

      <iframe
        className="mt-6"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.4854086592427!2d-51.430522100000005!3d-30.1946904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a2bba3831152b%3A0xca124f5ef519dd17!2sSitio%20do%20Petim!5e0!3m2!1spt-BR!2sbr!4v1747879757851!5m2!1spt-BR!2sbr"
        width="100%"
        height="230"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
           <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
            <a
              href="https://waze.com/ul?ll=-30.19376,-51.43064&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#515b30] hover:bg-[#3e4724] text-white px-6 py-2 rounded-full transition-colors"
            >
              <IconMap size={20} />
              Abrir no Waze
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=-30.1936904,-51.4305221"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#515b30] hover:bg-[#3e4724] text-white px-6 py-2 rounded-full transition-colors"
            >
              <IconMap size={20} />
              Abrir no Google Maps
            </a>
          </div>
    </div>

    
  );
}
