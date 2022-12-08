import React from "react"
import { Box, Typography } from "@mui/material"

interface Props {}

const PageTitle: React.FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">Page Title</Typography>
    </Box>
  )
}

export default PageTitle
