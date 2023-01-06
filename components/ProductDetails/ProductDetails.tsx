import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { IProduct } from "../../types/types";
import Tabs from "../Tabs/Tabs";
import Price from "../Price/Price";
import { Colors } from "./Colors";
interface Props {
	product: IProduct;
}

const ProcuctDetails: React.FC<Props> = ({ product }) => {
	const router = useRouter();

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
				<Grid container>
					<Grid container item xs={12} md={6} justifyContent="center">
						<Image
							width={350}
							height={350}
							src={`/images${router.asPath}.png`}
							alt={`Photo of ${name}`}
							priority
						/>
					</Grid>

					<Grid item xs={12} md={6}>
						<Typography variant="h3">{name}</Typography>
						<Typography>Rating: {rating}</Typography>
						<br />
						<Price price={price} previousPrice={previousPrice} />
						<Colors colors={colors} />
						<Typography sx={{ mt: 4, mb: 4 }}>{shortDescription}</Typography>
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
