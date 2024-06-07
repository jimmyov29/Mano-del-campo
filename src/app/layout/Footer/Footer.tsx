import { faFacebookF, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

export const Footer = () => {
  return <section className=" bg-[#e8e4e4] p-4 flex justify-evenly">
    <article className=' space-y-2'>
        <p className=' text-base md:text-lg'>La mano del campo</p>
        <figure className=' flex gap-3 items-center'>
        <FontAwesomeIcon className='w-5 h-5 text-gray-500' icon={faInstagram} />
        <FontAwesomeIcon className='w-5 h-5 text-gray-500' icon={faFacebookF} />
        <FontAwesomeIcon className='w-5 h-5 text-gray-500' icon={faYoutube} />
        <FontAwesomeIcon className='w-5 h-5 text-gray-500' icon={faLinkedin} />
        </figure>

    </article>

    <article >
        <h2 className=' text-lg md:text-xl font-semibold'>Servicio al cliente</h2>
        <div className=' gap-y-1 flex flex-col items-start'>
        <Link href={"/affiliates"}>
        <button className=' text-base md:text-lg text-gray-500 hover:underline'> Sistema de afiliados</button>
        </Link>
        <Link href={"/contact-us"}>
        <button className=' text-base md:text-lg text-gray-500 hover:underline'> Contáctanos</button>
        </Link>
        </div>
    </article>
  </section>;
}
