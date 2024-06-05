import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {

  const searchInput = (
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
  );
  return (
    <div className=" w-full px-6 py-4 bg-[#aceca4] gap-4 md:gap-0 flex-col  flex shadow-lg sticky z-20 top-0">
      <section className="flex items-center justify-between">
        <article className=" flex gap-3 items-center ">
          <Link href={"/"}>
          <Image
            src={"/assets/logomdc.png"}
            alt={"logo"}
            width={80}
            height={80}
          ></Image>
          </Link>
          <h1 className=" hidden lg:block text-center uppercase font-extrabold text-3xl">
            la mano del campo
          </h1>
        </article>

        <article className="hidden md:block">{searchInput}</article>

        <article className="flex gap-2 items-center">
        <Link href={"/"}> 
          <button className=" transition ease-in-out hover:scale-105 px-4 py-2 rounded-lg">Inicio</button>
        </Link>
          {/* <button className=" bg-black px-4 py-2 text-[#aceca4] rounded-lg">
            Perfil
          </button> */}
          <Link href={"/checkout"}>
          <FontAwesomeIcon className="hover:scale-105 transition ease-in-out w-6" icon={faCartShopping} />
          </Link>
        </article>
      </section>
      <article className="flex w-full md:hidden justify-center">{searchInput}</article>
    </div>
  );
};
