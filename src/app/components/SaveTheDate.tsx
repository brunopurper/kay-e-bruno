"use client";

import { IconCalendarEvent } from "@tabler/icons-react";

export default function SaveTheDate() {
  const handleDownloadICS = () => {
    const event = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "SUMMARY:Casamento - Kayane e Bruno",
      "DESCRIPTION:Casamento de Kayane e Bruno. Reserve essa data!",
      "LOCATION:Sítio do Petim, Estrada do Petim, 4099 - Guaíba / RS",
      "DTSTART;TZID=America/Sao_Paulo:20260124T163000",
      "DTEND;TZID=America/Sao_Paulo:20260124T220000",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([event], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "casamento-kayane-bruno.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    
    <section className="w-full py-12 flex flex-col gap-6 items-center mt-8">

      <h1
        className="text-[#515b30] font-bold text-4xl mt-16"
        style={{ fontFamily: "brittany" }}
      >
        Quando?
      </h1>

      <h2 className="text-black font-bold text-xl">
        24 de Janeiro de 2026, às 16:30
      </h2>

      <p className="text-black max-w-xl text-center">
        Reserve a data e venha fazer parte desse momento único e inesquecível
        em nossas vidas. 
        <p>Será uma honra celebrar junto com você!</p>
      </p>

      <button
        onClick={handleDownloadICS}
        className="flex items-center gap-2 bg-[#515b30] hover:bg-[#3e4724] text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105"
      >
        <IconCalendarEvent size={22} />
        Adicionar ao calendário
      </button>

      <p className="text-sm text-gray-500 max-w-xs text-center">
        📅 Ao clicar, um arquivo será baixado. Abra ele para adicionar o evento
        no seu calendário (Google, Apple, Outlook ou qualquer outro).
      </p>
    </section>
  );
}
