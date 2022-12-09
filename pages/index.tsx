import { Container } from "@mui/material"
import PageTitle from "../components/PageTitle/PageTitle"
import ProductsGrid from "../components/ProductsGrid/ProductsGrid"
import { content } from "../mockData/content"

export default function Home() {
  const {
    home: { title },
  } = content

  return (
    <>
      <PageTitle pageTitle={title} />
      <ProductsGrid />
    </>
  )
}
