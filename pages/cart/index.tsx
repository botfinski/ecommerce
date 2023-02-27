import {
	Container,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React, { useContext } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { CartContext } from "../../context/CartContext";
import { content } from "../../mockData/content";

interface Props {}

const Cart: React.FC<Props> = () => {
	const {
		cart: { title },
	} = content;

	const { items, totalPrice } = useContext(CartContext);

	return (
		<>
			<PageTitle pageTitle={title} />

			<Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
				{/* <Typography variant="h2">Cart</Typography> */}

				<TableContainer>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell align="right">Amount</TableCell>
								<TableCell align="right">Subtotal</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{items.map(item => (
								<TableRow key={item.selectedColorId}>
									<TableCell component="th" scope="row">
										{`${item.selectedColorName} ${item.name}`}
									</TableCell>
									<TableCell align="right">{item.amount}</TableCell>
									<TableCell align="right">{item.amount * item.price}</TableCell>
								</TableRow>
							))}
							<TableRow sx={{ background: "black" }}>
								<TableCell sx={{ color: "#fff" }}>Total</TableCell>
								<TableCell align="right"></TableCell>
								<TableCell align="right" sx={{ color: "#fff" }}>
									{totalPrice}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		</>
	);
};

export default Cart;
