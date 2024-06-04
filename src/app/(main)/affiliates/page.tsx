import Image from "next/image";
import Link from "next/link";
export default function Affiliates() {
  let steps = [
    {
      id: 1,
      label: "Unete",
      description:
        "Dile a tus clientes lo rapido que se pueden unir y convertirse en afiliados",
    },
    {
      id: 2,
      label: "Promueve",
      description: "Muestrales que tan facil pueden agregar afiliados",
    },
    {
      id: 3,
      label: "Gana dinero",
      description: "Al agregar afiliados estaras ganando dinero extra!",
    },
  ];
  return (
    // <div className="h-screen">
    <div>
      <section className=" w-full p-10 bg-slate-300">
        {/* <picture className=" "> */}
        <Image
        //   src={"/./public/assets/banner/banner1.webp"}
          src={"/public/assets/banner/afiliados.jpg"}
          alt="Banner"
          width={100}
          height={100}
        //   fill
        />
      {/* </picture> */}

        <article className=" grid gap-6">
          <h2 className=" text-3xl max-w-[30rem] font-bold">
            Unete a nuestro sistema de afiliados y obten beneficios!
          </h2>
          <h3 className="text-lg max-w-[30rem] font-normal text-gray-500">
            Al afiliar mas personas obtienes un bono de L.100.00 por cada
            afiliado nuevo
          </h3>
          <Link href={"/contact-us"}>
            <button className=" py-3 px-4 rounded-2xl bg-gray-400 shadow-xl">
              Convierte en un afiliado
            </button>
          </Link>
        </article>
      </section>
      <section className=" space-y-10 p-10">
        <article className=" w-full flex flex-col  gap-4 ">
          <h2 className=" text-center text-4xl font-bold">Como funciona?</h2>
          <h3 className=" text-center text-lg font-medium text-gray-500">
            Genera confinaza con tus clientes demostrandoles que el proceso es
            facil, rapido y lucrativo
          </h3>
        </article>
        <div  className=" w-full flex flex-col md:flex-row  items-center
         justify-center md:justify-around gap-4">
        {steps.map((step, i) => (
            <section key={i} className=" max-w-[15rem] grid place-items-center gap-4">
              <article className=" flex">
                <div className=" bg-gray-200 rounded-full p-8">
                  <p className=" text-gray-400 font-semibold text-3xl">
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
