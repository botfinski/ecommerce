import React from "react";
import { styled, css } from "@mui/system";
import { Box, Typography } from "@mui/material";

interface Props {
	previousPrice: number;
	price: number;
	justify?: string;
}

interface WrapperProps {
	justify?: string;
}

const PriceWrapper = styled(Box)<WrapperProps>`
	display: flex;
	justify-content: ${props => (props.justify ? props.justify : "start")};
	gap: 10px;
`;

const Price: React.FC<Props> = ({ previousPrice, price, justify }) => {
	return previousPrice > 0 ? (
		<PriceWrapper justify={justify}>
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
	);
};

export default Price;
