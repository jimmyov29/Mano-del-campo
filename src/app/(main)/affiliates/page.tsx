import Image from "next/image";
import Link from "next/link";
export default function Affiliates() {
  let steps = [
    {
      id: 1,
      label: "Únete",
      description:
        "Dile a tus clientes lo rápido que se pueden unir y convertirse en afiliados.",
    },
    {
      id: 2,
      label: "Promueve",
      description: "Muestrales que tan fácil pueden agregar afiliados.",
    },
    {
      id: 3,
      label: "Gana dinero",
      description: "Al agregar afiliados estarás ganando dinero extra!",
    },
  ];
  return (
    // <div className="h-screen">
    <div>
      <section className="  relative w-full h-auto p-10 ">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/assets/banner/banner2.webp"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover blur-sm bg-black opacity-90 mix-blend-multiply "
          />
        </div>
        
        <article className=" relative z-10 grid gap-6 ">
          <h2 className="text-3xl max-w-[30rem] font-bold text-[#fff]">
            Únete a nuestro sistema de afiliados y obtén beneficios!
          </h2>
          <h3 className="text-lg max-w-[30rem] font-normal text-[#fff]">
            Al afiliar más personas obtienes un bono de L.100.00 por cada afiliado nuevo.
          </h3>
          <Link href="/contact-us" className=" inline-block">
            <button className="py-3 px-4 font-semibold rounded-2xl text-white hover:text-gray-600 bg-gray-400 shadow-xl hover:bg-gray-300 hover:font-bold transition ease-in-out duration-300">
              Conviértete en un afiliado
            </button>
          </Link>
        </article>
      </section>
      <section className=" space-y-10 p-10">
        <article className=" w-full flex flex-col  gap-4 ">
          <h2 className=" text-center text-4xl font-bold">Como funciona?</h2>
          <h3 className=" text-center text-lg font-medium text-gray-500">
            Genera confianza con tus clientes demostrandoles que el proceso es
            fácil, rápido y lucrativo
          </h3>
        </article>
        <div  className=" w-full flex flex-col md:flex-row  items-center
         justify-center md:justify-around gap-4">
        {steps.map((step, i) => (
            <section key={i} className=" max-w-[15rem] grid place-items-center gap-4">
              <article className=" flex">
                <div className=" bg-gray-200 rounded-full p-8 hover:shadow-lg transition ease-in-out">
                  <p className=" text-gray-400 font-semibold text-3xl ">
                    0{step.id}
                  </p>
                </div>
              </article>
              <article className=" flex">
                <h3 className=" text-center font-bold">{step.label}</h3>
              </article>
              <article className=" flex">
                <h3 className=" text-center font-medium text-gray-400">
                  {step.description}
                </h3>
              </article>
            </section>
        ))}
        </div>
      </section>
    </div>
  );
}
