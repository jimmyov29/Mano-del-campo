import React from "react";
import Image from "next/image";

export const Feed = () => {
  return (
    <section className=" p-6">
      <article className=" space-y-4">
        <h1 className=" text-center font-extrabold text-5xl">
          Unete a la comunidad de consumidores que valoran la agricultura
          sostenible y responsable.
        </h1>
        <figure className="relative w-auto h-96 rounded-2xl overflow-hidden">
          <Image
            src={"/assets/banner/banner1.webp"}
            alt={"banner"}
            fill
          ></Image>
        </figure>
      </article>
    </section>
  );
};
