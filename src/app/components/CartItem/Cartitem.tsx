'use client'
import { useState } from "react";
import Image from "next/image";
function CartItem(){
    const [count, setCount] = useState(1);

  function addItem() {
    setCount(count + 1);
  }

  function removeItem() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
    return(
        <div className=" w-full border p-3 rounded-xl bg-slate-50 gap-4 grid grid-cols-2">
            <section className="bg-white rounded-xl">
            <div className="relative w-full h-32 rounded-xl overflow-hidden">
              <Image 
              src={"/assets/products/papa.png"} 
              alt={"nombre"} 
              fill
              objectFit="contain" 
              />
            </div>

            </section>
            <section className=" grid gap-4">
                <article className="grid gap-2">
                    <span className=" text-2xl font-semibold">Papa 1 Lb</span>
                    <span className=" text-sm font-base" >Precio por unidad: L.25.00</span>
                </article>
                <article className=" p-2 flex flex-wrap  gap-3 items-center ">
                    <button
                      onClick={removeItem}
                      className=" font-extrabold text-2xl border-2 rounded-2xl px-[0.6rem] py-0.5 bg-gray-50"
                    >
                      -
                    </button>
                    <p className=" text-xl">{count}</p>
                    <button
                      onClick={addItem}
                      className=" font-extrabold text-2xl border-2 rounded-2xl px-[0.6rem] py-0.5 bg-gray-50"
                    >
                      +
                    </button>
                  </article>


            </section>
        </div>
    )
}

export default CartItem