import React from "react";
import { Box, Button, Container } from "@mui/material";
import NavMenu from "../NavMenu/NavMenu";
import CartIcon from "../CartIcon/CartIcon";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface Props {}

const Header: React.FC<Props> = () => {
	return (
		<header>
			<Box
				sx={{
					height: 44,
					color: "custom.white",
					backgroundColor: "primary.main",
					display: "flex",
					alignItems: "center",
					address: {
						fontStyle: "normal",
						"> *:not(:last-child)": {
							marginRight: "50px",
						},
					},
				}}
			>
				<Container
					maxWidth="xl"
					sx={{
						display: "flex",
						flexWrap: "wrap",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<address>
						<a href="#">lorem@ipsum.com</a>
						<a href="#">123-456-7890</a>
					</address>
					<Button
						color="secondary"
						endIcon={<PersonOutlineOutlinedIcon />}
						sx={{
							color: "custom.white",
							textTransform: "capitalize",
							marginLeft: "auto",
						}}
					>
						Account
					</Button>
					<CartIcon />
				</Container>
			</Box>
			<Container maxWidth="xl">
				<NavMenu type="header" />
			</Container>
		</header>
	);
};

export default Header;
