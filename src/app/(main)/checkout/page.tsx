"use client";
import CartItem from "@/app/components/CartItem/Cartitem";
import { ProductsCart } from "@/app/interfaces";
import { useCheckoutStore } from "@/app/store/useCheckoutStore";

function Checkout() {
  const {
    itemsAdded,
    itemsCard,
    calculateTotal,
    calculateSubTotal,
    calculateISV,
    actualQuantityOfProducts
  } = useCheckoutStore();

  return (
    <div className=" w-full flex justify-center items-start">
      <div className="md:p-4 w-full max-w-[70rem]">
        <h2 className=" text-2xl font-bold pl-4 pt-6">Cart ({actualQuantityOfProducts()})</h2>
        <div className="gap-6 md:grid-flow-col grid-flow-row grid grid-cols-1 md:grid-cols-12 p-3">
          <section className=" md:col-span-8 col-span-1">
            <article className=" flex flex-col gap-4 p-6 border-2 border-gray-300 rounded-2xl ">
              {itemsCard.length > 0 ? (
                itemsCard.map((item: ProductsCart, i) => (
                  <div key={i}>
                    <CartItem product={item} />
                  </div>
                ))
              ) : (
                <div className=" px-4 py-10 md:py-20">
                  <p className=" text-center text-2xl font-bold text-gray-300">Oops, el carrito esta vacio</p>
                </div>
              )}
            </article>
          </section>
          <section className=" md:col-span-4 col-span-1 ">
            <div className="sticky top-32 border-2 border-gray-300 rounded-2xl">
              <p className=" text-xl font-bold text-center p-3 border-b">
                Checkout
              </p>
              <div className="p-3 space-y-3">
                <article className=" flex justify-between">
                  <h3 className=" text-lg font-semibold">Subtotal:</h3>
                  <h3 className=" text-base font-medium">
                    L.{calculateSubTotal()}
                  </h3>
                </article>
                <article className=" flex justify-between">
                  <h3 className=" text-lg font-semibold">ISV:</h3>
                  <h3 className=" text-base font-medium">L.{calculateISV()}</h3>
                </article>
                <article className=" flex justify-between">
                  <h3 className=" text-lg font-semibold">Total:</h3>
                  <h3 className=" text-base font-medium">
                    L.{calculateTotal()}
                  </h3>
                </article>
                <button className=" w-full  bg-black px-4 py-2 text-white rounded-lg hover:scale-105 transition ease-in">
                  Pagar
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
