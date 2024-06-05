import { faFacebookF, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

export const Footer = () => {
  return <section className=" bg-[#e8e4e4] p-4 flex justify-evenly">
    <article className=' space-y-2'>
        <p>La mano del campo</p>
        <figure className=' flex gap-3 items-center'>
        <FontAwesomeIcon className='w-5 h-5 text-gray-500' icon={faInstagram} />
        <FontAwesomeIcon className='w-5 h-5 text-gray-500' icon={faFacebookF} />
        <FontAwesomeIcon className='w-5 h-5 text-gray-500' icon={faYoutube} />
        <FontAwesomeIcon className='w-5 h-5 text-gray-500' icon={faLinkedin} />
        </figure>

    </article>

    <article>
        <h2 className=' font-semibold'>Servicio al cliente</h2>
        <div className=' flex flex-col items-start'>
        <Link href={"/affiliates"}>
        <button className=' text-gray-500'> Sistema de afiliados</button>
        </Link>
        <Link href={"/contact-us"}>
        <button className=' text-gray-500'> Contáctanos</button>
        </Link>
        </div>
    </article>
  </section>;
}
