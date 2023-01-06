import React from "react";
import { Box, Typography } from "@mui/material";
import { IProduct } from "../../types/types";
import Image from "next/image";
import { styled, css } from "@mui/system";
import Price from "../Price/Price";

interface Props {
	product: IProduct;
}

const ProductName = styled(Typography)`
	font-size: 1.5rem;
	font-weight: 700;
	${props =>
		css`
			color: ${props.theme.palette.custom.pink};
		`};
`;

const ProductGridItem: React.FC<Props> = ({ product }) => {
	const { name, price, previousPrice } = product;

	return (
		<Box
			height={300}
			sx={{
				minHeight: 400,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				boxShadow: "1px 1px 10px 2px rgb(0 0 0 / 11%)",
				"&:hover": {
					background: "#dcdcdc",
				},
			}}
		>
			<Image
				width={250}
				height={250}
				src={`/images/products/${product.colors[0].url}.png`}
				alt={`Photo of ${product.colors[0].name} ${name}`}
			/>

			<Box
				sx={{
					width: "100%",
					mt: "auto",
					minHeight: 100,
				}}
			>
				<ProductName align="center">{name}</ProductName>
				<Price price={price} previousPrice={previousPrice} justify="center" />
			</Box>
		</Box>
	);
};

export default ProductGridItem;
