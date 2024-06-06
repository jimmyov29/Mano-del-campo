'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { ProductsCart } from "@/app/interfaces";
import { useCheckoutStore } from "@/app/store/useCheckoutStore";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartItem({ product }: { product: ProductsCart }) {
  const { decrementProductQty, incrementProductQty, removeItem, itemsCard } = useCheckoutStore();
  const [count, setCount] = useState(product.qty);

  useEffect(() => {
    setCount(product.qty);
  }, [product.qty]);

  function addItem() {
    incrementProductQty(product);
  }

  function decrementItem() {
    if (count > 1) {
      decrementProductQty(product);
    }
  }

  return (
    <div className="w-full border p-3 rounded-xl bg-slate-50 gap-4 grid grid-cols-1 md:grid-cols-2">
      <section className="bg-white rounded-xl">
        <div className="relative w-full h-32 rounded-xl overflow-hidden">
          <Image 
            src={product.imagePath} 
            alt={product.name} 
            fill
            objectFit="contain" 
          />
        </div>
      </section>
      <section className="grid gap-4">
        <article className="grid gap-2">
          <span className="text-2xl font-semibold">{product.name}</span>
          <span className="text-sm font-base">Precio por unidad: L.{product.price.toFixed(2)}</span>
        </article>
        <article className="flex justify-between items-center">
          <div className="p-2 flex flex-wrap gap-3 items-center">
            <button
              onClick={decrementItem}
              className="font-extrabold text-2xl border-2 rounded-2xl px-[0.6rem] py-0.5 bg-gray-50"
            >
              -
            </button>
            <p className="text-xl">{count}</p>
            <button
              onClick={addItem}
              className="font-extrabold text-2xl border-2 rounded-2xl px-[0.6rem] py-0.5 bg-gray-50"
            >
              +
            </button>
          </div>
          <button
            onClick={() => { removeItem(product); }} 
            className="text-red-600 px-3 py-2 hover:scale-105 transition ease-out hover:border hover:border-red-400 rounded-2xl"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </article>
      </section>
    </div>
  );
}

export default CartItem;
