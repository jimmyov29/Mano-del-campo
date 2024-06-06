export interface Product{
    id_product: number
    name: string,
    companyName: string,
    imagePath: string,
    price: number,
    description: string,
}

export interface ProductsCart extends Product{
    qty: number
}
