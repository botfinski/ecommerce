import { createTheme } from "@mui/material/styles"
import { josefinSans } from "../components/Layout/Layout"

export const theme = createTheme({
  typography: {
    fontFamily: `${josefinSans.style.fontFamily}, sans-serif`,
    h1: {
      fontSize: 36,
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: "#7E33E0",
    },
  },
})
