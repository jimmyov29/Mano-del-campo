import React from "react";
import Image from "next/image";
import ProductList from "../ProductList/ProductList";

export default function Hero(){
  return (
    <div className="w-full flex justify-center">
      <section className="p-10  max-w-screen-lg">
        <article className="space-y-4">
          <h1 className="text-center font-extrabold text-2xl md:text-5xl">
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
        <ProductList />
      </section>
    </div>
  );
};
