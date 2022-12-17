import React from "react";
import { products } from "../../mockData/products";
import { IProduct } from "../../types/types";
import { Container, Typography, Grid } from "@mui/material";
import Product from "./Product";
import Link from "next/link";
import Sorting from "./Sorting";

interface Props {}

const ProductsGrid: React.FC<Props> = () => {
	return (
		<Container maxWidth="xl">
			<Typography variant="h2">Product list grid</Typography>
			<Sorting />

			<Grid
				container
				spacing={2}
				sx={{
					mt: 10,
					mb: 10,
				}}
			>
				{products.map((product: IProduct) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
						<Link href={`/products/${product.slug}`}>
							<Product product={product} />
						</Link>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default ProductsGrid;
