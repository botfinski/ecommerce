import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartContext } from "../../context/CartContext";
import Link from "next/link";

interface Props {}

const CartIcon: React.FC<Props> = () => {
	const { items, totalPrice } = useContext(CartContext);

	const itemsTotal = items.reduce((acc, current) => acc + current.amount, 0);

	return (
		<Link href="/cart">
			<IconButton
				sx={{
					color: "custom.white",
				}}
			>
				<ShoppingCartOutlinedIcon />
				{itemsTotal}
				{"/"}
				{totalPrice}
			</IconButton>
		</Link>
	);
};

export default CartIcon;
