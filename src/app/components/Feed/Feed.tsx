import React from "react";
import Image from "next/image";

export const Feed = () => {
  return (
    <section className="p-6">
      <article className="space-y-4">
        <h1 className="text-center font-extrabold text-5xl">
          Únete a la comunidad de consumidores que valoran la agricultura
          sostenible y responsable.
        </h1>
        <div className="w-full flex justify-center">
          <figure className="relative w-full h-96 rounded-2xl overflow-hidden max-w-[1200px]">
            <Image
              src={"/assets/banner/banner1.webp"}
              alt={"banner"}
              fill
              style={{ objectFit: "cover" }}
            />
          </figure>
        </div>
      </article>
    </section>
  );
};
