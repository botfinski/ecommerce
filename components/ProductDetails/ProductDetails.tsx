import { Box, Button, Container } from "@mui/material";
import React from "react";
import { IProduct } from "../../types/types";
import Tabs from "../Tabs/Tabs";

interface Props {
	product: IProduct;
}

const ProcuctDetails: React.FC<Props> = ({ product }) => {
	// console.log(product);
	const {
		name,
		rating,
		price,
		previousPrice,
		colors,
		shortDescription,
		longDescription,
		reviews,
		details,
	} = product;

	return (
		<>
			<Container maxWidth="xl">
				<Box>
					{name}
					{rating}
					{price}
					{previousPrice}
					{colors.map(c => (
						<span key={c}>{c}</span>
					))}
					{shortDescription}
					<Button>Add to Cart</Button>

					<Tabs
						longDescription={longDescription}
						reviews={reviews}
						details={details}
					/>
				</Box>
			</Container>
		</>
	);
};

export default ProcuctDetails;
