import React from "react"
import { Box, Container } from "@mui/material"

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header>
      <Box
        sx={{
          color: "#fff",
          backgroundColor: "primary.main",
        }}
      >
        <Container maxWidth="xl">
          <address>
            <span>sdfsdf</span>
            <a href="tel:123-456-7890">123-456-7890</a>
          </address>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <nav>
          <ul>
            <li>
              <a href="#">Logo</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
