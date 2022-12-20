import { Box, Container } from "@mui/material";
import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProcuctDetails from "../../components/ProductDetails/ProductDetails";
import { productsData } from "../../mockData/products";
import { IProduct } from "../../types/types";

interface Props {
	product: IProduct;
}

const Product: React.FC<Props> = ({ product }) => {
	return (
		<>
			<PageTitle pageTitle={product.name} />
			<Box sx={{ mt: 10, mb: 10 }}>
				<ProcuctDetails key={product.slug} product={product} />
			</Box>
		</>
	);
};

export default Product;

export const getStaticPaths = async () => {
	const paths = productsData.map(product => ({
		params: { slug: product.slug },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: any) => {
	const product = productsData.filter(
		product => product.slug === params.slug
	)[0];

	return {
		props: {
			product,
		},
	};
};
