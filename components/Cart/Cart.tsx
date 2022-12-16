import React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface Props {}

const Cart: React.FC<Props> = () => {
	return (
		<IconButton
			sx={{
				color: "custom.white",
			}}
		>
			<ShoppingCartOutlinedIcon />
		</IconButton>
	);
};

export default Cart;
