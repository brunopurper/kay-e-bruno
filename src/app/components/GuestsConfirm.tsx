"use client";

import { Modal, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import saveData from "../services/firebase";

export default function GuestsConfirm() {

  return (
    <div
      className="flex flex-col justify-center md:gap-0 py-10 px-12 md:px-24 items-center text-center mb-4"
      id="confirm-div"
    >
      <h1
        className="text-[#515b30] font-bold text-4xl mb-4"
        style={{ fontFamily: "brittany" }}
      >
        Confirme sua presença
      </h1>


      <div className="w-full bg-[#f4eee0] py-10 flex justify-center">
        <a
          href="/pages/gifts"
          className="bg-[#515b30] hover:bg-[#3e4724] text-white px-8 py-4 rounded-full text-lg shadow-md transition"
        >
          ✅ Confirme sua presença!
        </a>
      </div>
      <div className="w-full bg-[#f4eee0]  flex justify-center">
        <a
          href="/pages/gifts"
          className="bg-[#515b30] hover:bg-[#3e4724] text-white px-8 py-4 rounded-full text-lg shadow-md transition"
        >
          🎁 Ver Lista de Presentes
        </a>
      </div>

    </div>

  );
}
