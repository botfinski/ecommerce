import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import { content } from "../../mockData/content";
import { productsData } from "../../mockData/products";
import { IProduct } from "../../types/types";

interface Props {
	products: IProduct[];
}

const Products: React.FC<Props> = ({ products }) => {
	const {
		products: { title },
	} = content;

	return (
		<>
			<PageTitle pageTitle={title} />
			<ProductsGrid products={products} />
		</>
	);
};

export default Products;

export const getStaticProps = async () => {
	return {
		props: {
			products: productsData,
		},
	};
};
