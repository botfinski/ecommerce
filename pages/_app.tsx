import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
import { CartProvider } from "../context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CartProvider>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CartProvider>
	);
}
