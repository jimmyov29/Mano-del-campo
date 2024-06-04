export default function () {
  return (
    <section className="flex justify-center py-10">
      <form action="" className=" w-full max-w-[40rem] grid gap-6 rounded-2xl bg-gray-100 p-10">
        <h2 className=" text-center uppercase font-bold text-4xl">
          ¡Contactanos!
        </h2>
        <article className=" px-10 grid gap-4">
          <fieldset className="grid gap-1 ">
            <label htmlFor="" className=" text-xl font-medium">
              Nombre <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Escribre tu nombre"
              className=" text-gray-700 focus:translate-x-1 border-b border-gray-300 pb-1 outline-none bg-transparent hover:border-gray-200 transition ease-in"
            />
          </fieldset>
          <fieldset className="grid gap-1">
            <label htmlFor="" className=" text-xl font-medium">
              Apellido <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Escribre tu apellido "
              className=" text-gray-700 focus:translate-x-1 border-b border-gray-300 pb-1 outline-none bg-transparent hover:border-gray-200 transition ease-in"
            />
          </fieldset>
          <fieldset className="grid gap-1">
            <label htmlFor="" className=" text-xl font-medium">
              Correo electronico<span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Escribre tu correo "
              className=" text-gray-700 focus:translate-x-1 border-b border-gray-300 pb-1 outline-none bg-transparent hover:border-gray-200 transition ease-in"
            />
          </fieldset>
          <fieldset className="grid gap-1">
            <label htmlFor="" className=" text-xl font-medium">
              Telefono <span className=" text-red-600">*</span>
            </label>
            <input
              type="numeric"
              required
              placeholder="Escribre tu telefono "
              className=" text-gray-700 focus:translate-x-1 border-b border-gray-300 pb-1 outline-none bg-transparent hover:border-gray-200 transition ease-in"
            />
          </fieldset>
        </article>
        <article className=" flex justify-center">
        <button type="submit" className="border rounded-lg px-8 py-3 bg-gray-300  hover:bg-gray-400 hover:text-white transition ease-in-out">Enviar</button>
        </article>
      </form>
    </section>
  );
}
