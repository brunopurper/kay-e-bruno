"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

const gifts = [
  {
    id: "1",
    title: "Air Fryer",
    image: "/assets/Air.png",
    price: 300,
    link: "https://mercadopago.com.br/apple-tv",
    badge: "Mais escolhido",
  },
  {
    id: "2",
    title: "Geladeira",
    image: "/assets/geladeira.png",
    price: 3500,
    link: "https://mercadopago.com.br/baixela",
  },
  {
    id: "3",
    title: "Jogo de Panelas",
    image: "/assets/jogo de panela.png",
    price: 400,
    link: "https://mercadopago.com.br/balde-gelo",
    badge: "Novo",
  },
  {
    id: "4",
    title: "Conjunto de Frigideiras",
    image: "/assets/frigideiras.png",
    price: 150,
    link: "https://mercadopago.com.br/travessa",
  },
  {
    id: "5",
    title: "Jogo de toalhas",
    image: "/assets/toalhas.png",
    price: 120,
    link: "https://loja.infinitepay.io/technique6210/pim8087-jogo-de-toalhas",
  },
  {
    id: "6",
    title: "Fogão",
    image: "/assets/fogao.png",
    price: 1200,
    link: "https://mercadopago.com.br/bowl",
    badge: "Favorito",
  },
  {
    id: "7",
    title: "Consultoria de como negociar tempo de videogame no casamento",
    image: "/assets/video game.png",
    price: 250,
    link: "https://mercadopago.com.br/toalhas",
  },
  {
    id: "8",
    title: "Dar palpite sobre o casamento",
    image: "/assets/dar palpite.png",
    price: 880,
    link: "https://mercadopago.com.br/aspirador",
  },
  {
    id: "9",
    title: "Primeiro almoço na casa dos noivos",
    image: "/assets/almoco.png",
    price: 250,
    link: "https://mercadopago.com.br/aspirador",
  },
  {
    id: "10",
    title: "Levar alguém que não foi convidado",
    image: "/assets/nconvidado.png",
    price: 20000,
    link: "https://mercadopago.com.br/aspirador",
    badge: "Presente VIP",
  },
  {
    id: "11",
    title: "Não jogar o buque para sua mulher",
    image: "/assets/noiva e buque.png",
    price: 300,
    link: "https://mercadopago.com.br/aspirador",
  },
  {
    id: "12",
    title: "Jogar o buque na sua direção",
    image: "/assets/noiva sua direcao.png",
    price: 196,
    link: "https://mercadopago.com.br/aspirador",
  },
  {
    id: "13",
    title: "Se você se sentir tocado em ajudar os noivos",
    image: "/assets/sentir tocado.png",
    price: 3000,
    link: "https://mercadopago.com.br/aspirador",
  },
  {
    id: "14",
    title: "Teste",
    image: "/assets/sentir tocado.png",
    price: 1,
    link: "https://loja.infinitepay.io/technique6210/nie9464-teste",
  },
];

export default function Gifts() {
  const [sortType, setSortType] = useState<"price" | "title">("price");
  const [showModal, setShowModal] = useState(false);
  const [selectedGift, setSelectedGift] = useState<any>(null);

  const sortedGifts = [...gifts].sort((a, b) => {
    if (sortType === "price") return a.price - b.price;
    return a.title.localeCompare(b.title);
  });

  const handlePresent = (gift: any) => {
    setSelectedGift(gift);
    setShowModal(true);
  };

  const confirmPresent = () => {
    window.open(selectedGift.link, "_blank");
    setShowModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex flex-col items-center text-center px-6 md:px-24 py-14 gap-10">
        <h1
          className="font-bold text-4xl text-[#515b30]"
          style={{ fontFamily: "brittany" }}
        >
          Lista de presentes
        </h1>

        <p className="text-center md:max-w-2xl text-black">
          <span className="block text-lg mb-2">✨ Nos ajude a construir nosso lar!</span>
          Mais do que coisas, queremos viver experiências, criar memórias e construir nossa casa cheia de amor.
          <br />
          <br />
          Por isso, criamos essa lista de presentes totalmente online, onde você pode contribuir
          de forma simples e segura — usando <strong>Pix, cartão, boleto</strong> ou a forma que for mais fácil pra você.
          <br />
          <br />
          Cada contribuição faz parte da realização dos nossos sonhos como casal: seja para mobiliar nosso lar,
          planejar nossa lua de mel ou viver momentos incríveis nessa nova fase.
          <br />
          <br />
          <span className="text-pink-500">❤️ Seu carinho, sua presença e sua ajuda significam o mundo pra nós!</span>
        </p>

        {/* Ordenação */}
        <div className="flex gap-4 items-center">
          <span className="text-[#515b30]">Ordenar por:</span>
          <button
            onClick={() => setSortType("price")}
            className={`px-4 py-1 rounded-full border ${
              sortType === "price"
                ? "bg-[#515b30] text-white"
                : "border-[#515b30] text-[#515b30]"
            }`}
          >
            Preço
          </button>
          <button
            onClick={() => setSortType("title")}
            className={`px-4 py-1 rounded-full border ${
              sortType === "title"
                ? "bg-[#515b30] text-white"
                : "border-[#515b30] text-[#515b30]"
            }`}
          >
            Nome
          </button>
        </div>

        {/* Lista */}
        <div
          className="w-full max-w-7xl mx-auto grid gap-6 justify-center 
        lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1"
        >
          {sortedGifts.map((gift) => (
            <motion.div
              key={gift.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Number(gift.id) * 0.1 }}
            >
              <div className="p-4">
                <a href={gift.link} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-52 object-contain mb-4"
                  />
                </a>

                {gift.badge && (
                  <div className="absolute top-4 right-4 bg-[#515b30] text-white text-xs px-3 py-1 rounded-full shadow">
                    {gift.badge}
                  </div>
                )}

                <h3 className="text-[#515b30] font-semibold text-lg">
                  {gift.title}
                </h3>
                <p className="text-black font-bold mt-2">
                  R$ {gift.price.toLocaleString("pt-BR")},00
                </p>
              </div>
              <div className="px-4 pb-4">
                <button
                  onClick={() => handlePresent(gift)}
                  className="w-full block text-center bg-[#515b30] hover:bg-[#3e4724] text-white px-4 py-2 rounded-full transition-colors"
                >
                  Presentear
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </section>
      <footer className="w-full bg-[#515b30] text-white text-center py-6">
        <p className="text-sm">
          Site desenvolvido 100% pelos noivos, sem uso de plataformas prontas.
          <br />
          Feito com muito amor, isso vale um presente, né? 💚👀
        </p>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-sm w-full">
            <h2 className="text-2xl text-[#515b30] mb-4 font-bold">
              Confirmar presente
            </h2>
            <p className="text-black mb-6">
              Você será redirecionado para o Mercado Pago para contribuir com{" "}
              <strong>{selectedGift.title}</strong> no valor de{" "}
              <strong>
                R$ {selectedGift.price.toLocaleString("pt-BR")},00
              </strong>
              .
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-[#515b30] text-[#515b30] px-4 py-2 rounded-full hover:bg-[#f4eee0] transition"
              >
                Cancelar
              </button>
              <button
                onClick={confirmPresent}
                className="flex-1 bg-[#515b30] text-white px-4 py-2 rounded-full hover:bg-[#3e4724] transition"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
        
      )}
    </div>
    
  );
}
