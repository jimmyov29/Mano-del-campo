import { Product } from "@/app/interfaces/Products.types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import { useCheckoutStore } from "@/app/store/useCheckoutStore";

interface ProductDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | undefined;
}

function ProductDialog({ isOpen, onClose, product }: ProductDialogProps) {
  const [quantity, setQuantity] = useState(1);
  const {
    addProductToCart,
    itemsCard,
    decrementProductQty,
    incrementProductQty,
  } = useCheckoutStore();

  function addItem() {
    setQuantity(quantity + 1);
  }

  function removeItem() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function resetCounter() {
    if (quantity > 1) {
      setQuantity(1);
    }
  }

  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50"> */}
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black opacity-60" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-end md:items-center justify-center md:p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-xl space-y-4 bg-white p-12 relative rounded-2xl">
            <button
              onClick={() => {
                onClose();
                setQuantity(1);
              }}
              className=" text-gray-400 font-extrabold text-2xl absolute right-3 top-1 p-3"
            >
              x
            </button>
            <section className=" grid grid-cols-1 md:grid-cols-2">
              <article>
                {product !== undefined && (
                  <picture className=" h-full flex justify-center items-center">
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      width={250}
                      height={250}
                    />
                  </picture>
                )}
              </article>
              <article className=" grid gap-3">
                <h2 className=" text-sm font-semibold text-gray-400">
                  {product?.companyName}
                </h2>
                <h2 className=" text-2xl font-semibold"> {product?.name}</h2>
                <h3 className=" text-lg font-medium">
                  L.{product?.price.toFixed(2)}
                </h3>
                <p className=" text-gray-600 text-sm">{product?.description}</p>
                <div>
                  <p className=" text-sm  text-gray-400">Cantidad</p>
                  <div className=" p-2 flex  gap-5 items-center ">
                    {product !== undefined && (
                      <button
                        onClick={() => {
                          removeItem();
                          decrementProductQty({ ...product, qty: quantity });
                        }}
                        className=" font-extrabold text-2xl border-2 rounded-2xl px-3 py-0.5 bg-gray-50"
                      >
                        -
                      </button>
                    )}
                    <p className=" text-xl">{quantity}</p>
                    {product !== undefined && (
                      <button
                        onClick={() => {
                          addItem();
                          incrementProductQty({ ...product, qty: quantity });
                        }}
                        className=" font-extrabold text-2xl border-2 rounded-2xl px-3 py-0.5 bg-gray-50"
                      >
                        +
                      </button>
                    )}
                  </div>
                </div>
                {product !== undefined && (
                  <button
                    onClick={() => {
                      setQuantity(1);
                      addProductToCart({ ...product, qty: quantity });
                      onClose();
                      resetCounter()
                    }}
                    className="py-3 px-4 font-semibold rounded-3xl bg-gray-400  hover:bg-gray-300 hover:font-bold transition ease-in-out duration-300"
                  >
                    Agregar al carrito
                  </button>
                )}
              </article>
            </section>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default ProductDialog;
