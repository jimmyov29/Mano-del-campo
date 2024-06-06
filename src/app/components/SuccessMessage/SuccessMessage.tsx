import { Dialog, DialogPanel } from "@headlessui/react";
import { useCheckoutStore } from "@/app/store/useCheckoutStore";
import Link from "next/link";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SuccessMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

function SuccessMessage({ isOpen, onClose}: SuccessMessageProps) {
  const {
    cleanCart
  } = useCheckoutStore();


  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50"> */}
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* <Dialog open={isOpen} onClose={onClose} className="relative z-50"> */}
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black opacity-60" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center md:p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-xl space-y-4 bg-white p-12 relative rounded-2xl">
            <section className=" grid grid-cols-1 place-items-center gap-8">
                <h2 className=" text-3xl font-extrabold"> Compra realizada</h2>
                <article className=" w-full flex justify-center">
                <FontAwesomeIcon className=" w-20 h-20 text-green-600" icon={faCircleCheck} />

                </article>
                <Link href={"/"}>
                <button
                    onClick={() => {
                      cleanCart()
                    }}
                    className="py-3 px-4 font-semibold rounded-3xl bg-gray-400  hover:bg-gray-300 hover:font-bold transition ease-in-out duration-300"
                  >
                    Ir a home
                  </button>
                </Link>
            </section>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default SuccessMessage;
