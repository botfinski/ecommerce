import React from "react"
import { Box, Typography } from "@mui/material"
import { IProduct } from "../../types/types"
// import Image from "next/image"
import { styled } from "@mui/system"

interface Props {
  product: IProduct
}

const Img = styled("img")`
  display: block;
  max-height: 200px;
`

const Product: React.FC<Props> = ({ product }) => {
  const { name, price, previousPrice, colors, photos } = product
  return (
    <Box
      height={300}
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "darkviolet",
        // "& > img": {
        //   maxWidth: "fit-content",

        // https://www.youtube.com/watch?v=AA0epqPigJQ
        // },
      }}
    >
      <Img src={photos[0]} alt="" />
      <Typography align="center">{name}</Typography>
      {colors.map(color => color)}
      {previousPrice > 0 && (
        <Typography align="center">{previousPrice}</Typography>
      )}

      <Typography align="center">{price}</Typography>
    </Box>
  )
}

export default Product
