import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IProduct } from "../../types/types";
import Tabs from "../Tabs/Tabs";
import { createImgUrl } from "../../helpers/helpers";
import Price from "../Price/Price";
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
		slug,
	} = product;

	return (
		<>
			<Container maxWidth="xl">
				<Grid container>
					<Grid item xs={12} md={6}>
						<Image
							width={250}
							height={250}
							src={`/images/products/${createImgUrl(slug, colors)}.png`}
							alt={`Photo of ${name}`}
							priority
						/>
					</Grid>

					<Grid item xs={12} md={6}>
						<Typography variant="h3">{name}</Typography>
						<Typography>Rating: {rating}</Typography>
						<br />
						<Typography></Typography>
						<Price price={price} previousPrice={previousPrice} />

						{colors.map(c => (
							<Typography key={c}>{c}</Typography>
						))}
						<Typography>{shortDescription}</Typography>
						<Button variant="outlined">Add to Cart</Button>
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
