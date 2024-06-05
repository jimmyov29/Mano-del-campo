"use client";
import React, { useState } from "react";
import { Products } from "./../../../utils/data";
import Image from "next/image";
import ProductDialog from "../ProductDialog/ProductDialog";
import { Product } from "@/app/interfaces/Products.types";

function ProductList() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  function openDialog() {
    setShowDialog(true);
  }

  function closeDialog() {
    setShowDialog(false);
  }

  function onProductSeleted(product: Product) {
    setSelectedProduct(product);
    openDialog();
  }


  return (
    <section className=" w-full py-6">
      <article className=" py-4">
        <h2 className=" text-2xl md:text-3xl  font-extrabold">Productos</h2>
        <h3 className=" text-sm text-gray-400">
          ¡Descubre un mundo de sabores y productos frescos!
        </h3>
      </article>
      <article className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Products.map((product, i) => (
          <figure
            onClick={() => {
              onProductSeleted(product);
            }}
            key={i}
            className="grid place-content-center gap-2 cursor-pointer hover:scale-105 transition ease-linear "
          >
            <div className=" shadow-md relative w-60 h-32 rounded-xl overflow-hidden  ">
              <Image 
              src={product.imagePath} 
              alt={product.name} 
              fill
              objectFit="contain" 
              />
            </div>
            <div className="py-2">
              <h3 className=" font-bold text-sm">{product.name}</h3>
              <h3 className=" text-sm text-gray-500">{product.companyName}</h3>
              <h3 className=" font-bold text-sm">
                {"L. " + product.price.toFixed(2)}
              </h3>
            </div>
          </figure>
        ))}
      </article>
      <ProductDialog 
      isOpen={showDialog} 
      onClose={closeDialog}
      product={selectedProduct} />
    </section>
  );
}

export default ProductList;
