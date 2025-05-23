"use client";
import { Image } from "@mantine/core";

export default function Madrinhas() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-10 lg:gap-0 py-10 px-8 lg:px-24 items-center">
      <div className="w-full md:w-2/5 flex flex-col text-center gap-6 sm:mb-4">
        <h1
          className="text-[#515b30] 500 font-bold text-4xl mb-4"
          style={{ fontFamily: "brittany" }}
        >
          Madrinhas
        </h1>
        <p>
          <span className="text-black-500 mt-4">
            Queremos que use o vestido que lhe agrade! Conforto é fundamental,
            então escolha um vestido que você se sinta bem, na cor Terracota.
            Além disso, para calçado queremos te deixar mais confortavél ainda!
            Então, opte pelo calçado que desejar!
          </span>
        </p>
      </div>
      <div className="flex flex-col text-center gap-6">
        <Image
          mx="auto"
          radius="md"
          width={450}
          height={300}
          src="/assets/terracota.png"
        ></Image>
      </div>
    </div>
  );
}
