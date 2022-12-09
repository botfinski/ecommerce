import React from "react"
import { products } from "../../mockData/products"
import { IProduct } from "../../types/types"
import { Container, Typography, Grid } from "@mui/material"
import Product from "./Product"
import Link from "next/link"

interface Props {}

const ProductsGrid: React.FC<Props> = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Product list grid</Typography>
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

      <Grid
        container
        spacing={2}
        sx={{
          mt: 10,
          mb: 10,
        }}
      >
        {products.map((product: IProduct) => (
          <Grid item sm={3} key={product.id}>
            <Link href={product.slug}>
              <Product product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductsGrid
