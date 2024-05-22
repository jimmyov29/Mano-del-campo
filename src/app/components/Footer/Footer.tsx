import React from 'react'

export const Footer = () => {
  return <section className=" bg-[#e8e4e4] p-4 flex justify-evenly">
    <article>
        <p>La mano del campo</p>
        <figure>iconos de redes</figure>

    </article>

    <article>
        <h2 className=' font-semibold'>Servicio al cliente</h2>
        <div className=' flex flex-col items-start'>
        <button className=' text-gray-500'> Afiliados</button>
        <button className=' text-gray-500'> Como formar parte</button>

        </div>
    </article>
  </section>;
}
