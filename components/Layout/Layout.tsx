import React, { useState } from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { Josefin_Sans } from "@next/font/google";

interface Props {
	children: React.ReactNode;
}

// export const josefinSans = Josefin_Sans({
// 	weight: ["400", "700"],
// 	subsets: ["latin"],
// });

const Layout: React.FC<Props> = ({ children }) => {
	// const [cartOpened, setCartOpened] = useState(false);

	return (
		<>
			<Head>
				<title>Ecommerce</title>
			</Head>
			<Box
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Header />
				<main>{children}</main>
				<Footer />
			</Box>
		</>
	);
};

export default Layout;
