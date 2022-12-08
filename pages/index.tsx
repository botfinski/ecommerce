import { Container } from "@mui/material"
import PageTitle from "../components/PageTitle/PageTitle"
import ProductsGrid from "../components/ProductsGrid/ProductsGrid"

export default function Home() {
  return (
    <Container maxWidth="xl">
      <PageTitle />
      <ProductsGrid />
    </Container>
  )
}
