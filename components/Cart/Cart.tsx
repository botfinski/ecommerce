import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartContext } from "../../context/CartContext";

interface Props {}

const Cart: React.FC<Props> = () => {
	const { items, totalPrice } = useContext(CartContext);

	return (
		<IconButton
			sx={{
				color: "custom.white",
			}}
		>
			<ShoppingCartOutlinedIcon />
			{items.length}
			{"/"}
			{totalPrice}
		</IconButton>
	);
};

export default Cart;
