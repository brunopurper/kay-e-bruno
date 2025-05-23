"use client";
import { Image } from "@mantine/core";

export default function Padrinhos() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-10 lg:gap-0 py-10 px-8 lg:px-24 items-center">
      <div className="flex md:flex-col text-center gap-6 order-2 lg:order-1">
        <Image
          mx="auto"
          radius="md"
          width={450}
          height={300}
          src="/assets/padrinhos.png"
          alt="Imagem dos padrinhos"
        />
      </div>
      <div className="w-full md:w-2/5 flex flex-col text-center gap-6 order-1 lg:order-2">
        <h1
          className="text-[#515b30] font-bold text-4xl mb-4"
          style={{ fontFamily: "brittany" }}
        >
          Padrinhos
        </h1>
        <p className="text-black mt-4">
          Para que você fique ainda mais elegante, neste dia gostaríamos que
          usasse uma camisa branca, pode ser social ou não, calça preta, tênis branco ou sapato. E para deixar todos mais confortáveis, não é necessário o uso de gravata!
        </p>
      </div>
    </div>
  );
}
