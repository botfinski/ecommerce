import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Logo from "../Logo/Logo";

interface Props {}

const Footer: React.FC<Props> = () => {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "primary.100",
					marginTop: "auto",
					p: 12,
				}}
			>
				<Container maxWidth="xl">
					<Grid container>
						<Grid item>
							<Logo />
							<address>
								<span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
							</address>
						</Grid>
						<Grid item>
							<h2>Categories</h2>
							<ul>
								<li>Laptops & Computers</li>
								<li>Cameras & Photography</li>
								<li>Smart Phones & Tablets</li>
								<li>Video Games & Consoles</li>
								<li>Waterproof Headphones</li>
							</ul>
						</Grid>
						<Grid item>
							<h2>Customer</h2>
							<ul>
								<li>Laptops & Computers</li>
								<li>Cameras & Photography</li>
								<li>Smart Phones & Tablets</li>
								<li>Video Games & Consoles</li>
								<li>Waterproof Headphones</li>
							</ul>
						</Grid>
						<Grid>
							<h2>Pages</h2>
							<ul>
								<li>Laptops & Computers</li>
								<li>Cameras & Photography</li>
								<li>Smart Phones & Tablets</li>
								<li>Video Games & Consoles</li>
								<li>Waterproof Headphones</li>
							</ul>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box sx={{ backgroundColor: "primary.200" }}>
				<Container maxWidth="xl">
					<div>
						<span>©Webecy - All Rights Reserved</span>
					</div>
					<ul>
						<li>Fb</li>
						<li>insta</li>
						<li>twitter</li>
					</ul>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
