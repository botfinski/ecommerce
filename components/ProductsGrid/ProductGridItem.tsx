import React from "react";
import { Box, Typography } from "@mui/material";
import { IProduct } from "../../types/types";
import Image from "next/image";
import { styled, css } from "@mui/system";

interface Props {
	product: IProduct;
}

// const Img = styled("img")`
// 	display: block;
// 	max-height: 200px;
// `;

const ProductName = styled(Typography)`
	font-size: 18px;
	font-weight: 700;
	${props =>
		css`
			color: ${props.theme.palette.custom.pink};
		`};
`;

const PriceWrapper = styled("div")`
	display: flex;
	justify-content: center;
	gap: 10px;
`;

const ProductGridItem: React.FC<Props> = ({ product }) => {
	const { name, price, previousPrice, colors, slug } = product;

	const createImgUrl = (slug: string, colors: string[]) => {
		return `${slug}-${colors[0].toLowerCase()}`;
	};

	return (
		<Box
			height={300}
			sx={{
				minHeight: 400,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				boxShadow: "1px 1px 10px 2px rgb(0 0 0 / 11%)",
				// "&:hover": {
				// 	background: "#dcdcdc",
				// },
			}}
		>
			<Image
				width={250}
				height={250}
				src={`/images/products/${createImgUrl(slug, colors)}.png`}
				alt={`Photo of ${name}`}
			/>

			<Box
				sx={{
					width: "100%",
					mt: "auto",
					minHeight: 100,
				}}
			>
				<ProductName align="center">{name}</ProductName>
				{/* {colors.map(color => color)} */}
				{previousPrice > 0 ? (
					<PriceWrapper>
						<Typography
							align="center"
							sx={{ color: "custom.pink", textDecoration: "line-through" }}
						>
							{`$ ${previousPrice}`}
						</Typography>{" "}
						<Typography align="center">{`$ ${price}`}</Typography>
					</PriceWrapper>
				) : (
					<Typography align="center">{`$ ${price}`}</Typography>
				)}
			</Box>
		</Box>
	);
};

export default ProductGridItem;
