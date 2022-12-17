import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import { content } from "../../mockData/content";

interface Props {}

const Products: React.FC<Props> = () => {
	const {
		products: { title },
	} = content;

	return (
		<>
			<PageTitle pageTitle={title} />
			<ProductsGrid />
		</>
	);
};

export default Products;
