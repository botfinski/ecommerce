import React from "react"
import { products } from "../../mockData/products"
import { IProduct } from "../../types/types"

interface Props {}

const ProductsGrid: React.FC<Props> = () => {
  return (
    <div>
      <h2>Product list grid</h2>
      <div>
        <label htmlFor="productsPerPage">Products per page:</label>
        <select name="productsPerPage" id="productsPerPage">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="100">100</option>
        </select>

        <label htmlFor="sortBy">Sort by:</label>

        <select name="sortBy" id="sortBy">
          <option value="name">name</option>
          <option value="price">price</option>
          <option value="rating">rating</option>
        </select>
      </div>

      {products.map((product: IProduct) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  )
}

export default ProductsGrid
