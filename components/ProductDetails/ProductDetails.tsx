import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { IProduct } from "../../types/types";
import Tabs from "../Tabs/Tabs";
import Price from "../Price/Price";
import { Colors } from "./Colors";
import { CartContext } from "../../context/CartContext";
interface Props {
	product: IProduct;
}

const ProcuctDetails: React.FC<Props> = ({ product }) => {
	const router = useRouter();
	const { addToCart } = useContext(CartContext);

	const {
		id,
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

	const selectedColor = colors.find(color => color.url === router.query.url);

	return (
		<>
			<Container maxWidth="xl">
				<Grid container>
					<Grid container item xs={12} md={6} justifyContent="center">
						<Image
							width={350}
							height={350}
							src={`/images${router.asPath}.png`}
							alt={`Photo of ${selectedColor?.name} ${name}`}
							priority
						/>
					</Grid>

					<Grid item xs={12} md={6}>
						<Typography variant="h3">
							{selectedColor?.name} {name}
						</Typography>
						<Typography>Rating: {rating}</Typography>
						<br />
						<Price price={price} previousPrice={previousPrice} />
						<Colors colors={colors} />
						<Typography sx={{ mt: 4, mb: 4 }}>{shortDescription}</Typography>
						<Button
							variant="outlined"
							onClick={() => addToCart(id, price, selectedColor!.id)}
						>
							Add to Cart
						</Button>
					</Grid>
				</Grid>
				<Box>
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
