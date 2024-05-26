import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className=" w-full px-6 py-4 bg-[#aceca4] flex items-center justify-between shadow-lg fixed z-20">
      <article className=" flex gap-3 items-center ">
        <Image
          src={"/assets/logomdc.png"}
          alt={"logo"}
          width={80}
          height={80}
        ></Image>
        <h1 className=" text-center uppercase font-extrabold text-3xl">
          la mano del campo
        </h1>
      </article>

      <article className="flex gap-2">
        <input
          className=" rounded-2xl px-4 py-2 outline-none"
          type="text"
          placeholder="Busca tu producto aqui"
        />
        <button className=" bg-black px-4 py-2 text-white rounded-lg">
          Buscar
        </button>
      </article>

      <article className="flex gap-2">
        <button className="  px-4 py-2 rounded-lg">Inicio</button>
        <button className=" bg-black px-4 py-2 text-[#aceca4] rounded-lg">
          Perfil
        </button>
      </article>
    </div>
  );
};
